import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { productAPI } from '../services/api.js';

const ShopContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    // Products state from API
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [productsError, setProductsError] = useState(null);

    // Cart state
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });

    // Wishlist state
    const [wishlistItems, setWishlistItems] = useState(() => {
        const localData = localStorage.getItem('wishlistItems');
        return localData ? JSON.parse(localData) : [];
    });

    // Categories state
    const [categories, setCategories] = useState([]);

    // Fetch products from API
    const fetchProducts = async (filters = {}) => {
        setProductsLoading(true);
        setProductsError(null);
        try {
            const response = await productAPI.getAll(filters);
            if (response.success) {
                setProducts(response.data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            setProductsError('Failed to load products');
            toast.error('Failed to load products');
        } finally {
            setProductsLoading(false);
        }
    };

    // Fetch categories from API
    const fetchCategories = async () => {
        try {
            const response = await productAPI.getCategories();
            if (response.success) {
                setCategories(response.data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    // Get product by ID
    const getProductById = async (id) => {
        try {
            const response = await productAPI.getById(id);
            return response.success ? response.data : null;
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    };

    // Get products by category
    const getProductsByCategory = async (category) => {
        try {
            const response = await productAPI.getByCategory(category);
            return response.success ? response.data : [];
        } catch (error) {
            console.error('Error fetching products by category:', error);
            return [];
        }
    };

    // Search products
    const searchProducts = async (query) => {
        try {
            const response = await productAPI.search(query);
            return response.success ? response.data : [];
        } catch (error) {
            console.error('Error searching products:', error);
            return [];
        }
    };

    // Load products on mount
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    // Persist cart to localStorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Persist wishlist to localStorage
    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    // Cart functions
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                toast.info(`${product.name} quantity updated`);
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                );
            }
            toast.success(`${product.name} added to cart!`);
            return [...prev, { ...product, quantity: product.quantity || 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
        toast.error("Item removed from cart");
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        toast.info("Cart cleared");
    };

    // Wishlist functions
    const addToWishlist = (product) => {
        setWishlistItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                toast.info("Item removed from Wishlist");
                return prev.filter((item) => item.id !== product.id);
            }
            toast.success("Added to Wishlist!");
            return [...prev, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
        toast.error("Item removed from wishlist");
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some(item => item.id === productId);
    };

    // Helper to parse price
    const parsePrice = (price) => {
        if (typeof price === 'number') return price;
        if (!price) return 0;
        const cleanPrice = String(price).replace(/[^0-9.]/g, '');
        return Number(cleanPrice) || 0;
    };

    const value = {
        // Products
        products,
        productsLoading,
        productsError,
        fetchProducts,
        getProductById,
        getProductsByCategory,
        searchProducts,
        categories,

        // Cart
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,

        // Wishlist
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,

        // Helpers
        parsePrice
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
