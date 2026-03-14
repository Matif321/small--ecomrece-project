import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import './ProductDetailsPage.css';

import PriceWithDiscount from '../Components/PriceWithDiscount';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const [isHowExpanded, setIsHowExpanded] = useState(false);
    const [product, setProduct] = useState(null);
    const { addToCart, addToWishlist, isInWishlist, products, productsLoading, getProductById } = useShop();

    // Fetch product details
    useEffect(() => {
        const loadProduct = async () => {
            const data = await getProductById(productId);
            if (data) {
                setProduct(data);
            }
        };
        loadProduct();
    }, [productId]);

    // Get related products (excluding current)
    const perfectPairings = products
        .filter(p => p.id !== parseInt(productId))
        .slice(0, 4);

    if (productsLoading || !product) {
        return (
            <div className="product-not-found">
                {productsLoading ? 'Loading product...' : 'Product not found.'}
                <button onClick={() => navigate('/')}>Go Home</button>
            </div>
        );
    }

    const handleQuantityChange = (type) => {
        if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === 'increase') {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="product-details-container">
            {/* Main Product Section */}
            <div className="product-main-content">
                {/* Image Section */}
                <div className="product-image-container">
                    <button
                        className={`wishlist-btn-large ${isInWishlist(product.id) ? 'active' : ''}`}
                        onClick={() => addToWishlist(product)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', position: 'absolute', right: '10px', top: '10px', zIndex: 10 }}
                    >
                        <Heart
                            size={24}
                            fill={isInWishlist(product.id) ? "red" : "none"}
                            color={isInWishlist(product.id) ? "red" : "#333"}
                        />
                    </button>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="main-product-image"
                        onError={(e) => {
                            e.target.src = '/placeholder-image.png';
                        }}
                    />
                </div>

                {/* Info Section */}
                <div className="product-info-container">
                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-price-row">
                        <span className="price-label">Price</span>
                        <PriceWithDiscount
                            price={product.price}
                            originalPrice={product.original_price}
                            size="large"
                            align="left"
                        />
                    </div>

                    <div className="product-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={20} fill="#FDC040" color="#FDC040" />
                        ))}
                    </div>

                    {/* Stock Status */}
                    <div className="stock-status">
                        {product.stock > 0 ? (
                            <span className="in-stock">In stock: {product.stock} items available</span>
                        ) : (
                            <span className="out-of-stock">Out of stock</span>
                        )}
                    </div>

                    {/* Product Meta Section */}
                    <div className="product-meta-details">
                        {product.finish && <div className="meta-item"><span className="meta-label">Finish:</span> <span className="meta-value">{product.finish}</span></div>}
                        {product.skin_type && <div className="meta-item"><span className="meta-label">Skin Type:</span> <span className="meta-value">{product.skin_type}</span></div>}
                        {product.benefits && <div className="meta-item"><span className="meta-label">Benefits:</span> <span className="meta-value">{product.benefits}</span></div>}
                    </div>

                    <div className="product-quantity-section">
                        <span className="quantity-label">Quantity:</span>
                        <div className="quantity-selector">
                            <button onClick={() => handleQuantityChange('decrease')} disabled={product.stock === 0}><Minus size={16} /></button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange('increase')} disabled={product.stock === 0 || quantity >= product.stock}><Plus size={16} /></button>
                        </div>
                    </div>

                    <div className="product-actions">
                        <button
                            className="buy-now-btn"
                            onClick={() => navigate("/checkout", { state: { product: { ...product, quantity } } })}
                            disabled={product.stock === 0}
                            style={product.stock === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                        >
                            Buy Now
                        </button>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart({ ...product, quantity })}
                            disabled={product.stock === 0}
                            style={product.stock === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div className="product-description-section">
                        <h3>Details :</h3>
                        <p
                            style={{ whiteSpace: 'pre-wrap' }}
                            className={!isDescExpanded ? 'truncated-text' : ''}
                        >
                            {product.description}
                        </p>
                        {product.description && product.description.length > 100 && (
                            <button
                                className="read-more-btn"
                                onClick={() => setIsDescExpanded(!isDescExpanded)}
                            >
                                {isDescExpanded ? 'Read less' : 'Read more'}
                            </button>
                        )}
                    </div>

                    {product.how_to_use && (
                        <div className="product-description-section">
                            <h3>How to use :</h3>
                            <p
                                style={{ whiteSpace: 'pre-wrap' }}
                                className={!isHowExpanded ? 'truncated-text' : ''}
                            >
                                {product.how_to_use}
                            </p>
                            {product.how_to_use.length > 100 && (
                                <button
                                    className="read-more-btn"
                                    onClick={() => setIsHowExpanded(!isHowExpanded)}
                                >
                                    {isHowExpanded ? 'Read less' : 'Read more'}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Perfect Pairings Section */}
            {perfectPairings.length > 0 && (
                <div className="perfect-pairings-section">
                    <h2 className="section-title">Perfect Pairings</h2>

                    <div className="pairings-grid">
                        {perfectPairings.map((item) => (
                            <div key={item.id} className="pairing-card" onClick={() => navigate(`/product/${item.id}`)}>
                                <div className="pairing-image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        onError={(e) => {
                                            e.target.src = '/placeholder-image.png';
                                        }}
                                    />
                                    <div className="pairing-actions">
                                        <button
                                            className="icon-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToWishlist(item);
                                            }}
                                        >
                                            <Heart
                                                size={18}
                                                fill={isInWishlist(item.id) ? "red" : "none"}
                                                color={isInWishlist(item.id) ? "red" : "#333"}
                                            />
                                        </button>
                                        <button
                                            className="icon-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(item);
                                            }}
                                        >
                                            <ShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="pairing-info">
                                    <h3>{item.name}</h3>
                                    <div className="pairing-price-row">
                                        <PriceWithDiscount
                                            price={item.price}
                                            originalPrice={item.original_price}
                                            size="small"
                                        />
                                    </div>
                                    <div className="pairing-rating">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={14} fill="#FDC040" color="#FDC040" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailsPage;
