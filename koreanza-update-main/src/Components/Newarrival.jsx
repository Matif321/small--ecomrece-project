import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useShop } from "../context/ShopContext";
import "./TrendingItems.css";
import "./Newarrival.css";
import PriceWithDiscount from "./PriceWithDiscount";

const ProductGrid = ({ products }) => {
  const { addToCart, addToWishlist, isInWishlist } = useShop();

  if (!products || products.length === 0) {
    return <p className="no-products">No products available</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container-premium">
            <Link to={`/product/${product.id}`} className="product-card-link-premium">
              <img
                src={product.image}
                alt={product.name}
                className="product-image-premium"
                onError={(e) => {
                  e.target.src = '/placeholder-image.png';
                }}
              />
            </Link>

            {/* Wishlist Overlay */}
            <button
              className="wishlist-btn-premium"
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
              style={{ color: isInWishlist(product.id) ? 'red' : 'inherit' }}
            >
              <Heart size={20} fill={isInWishlist(product.id) ? "red" : "none"} />
            </button>

            {/* New Badge */}
            <span className="badge-new">New</span>
          </div>

          <div className="product-details-premium">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 className="product-name-premium">{product.name}</h3>
              <p className="product-desc-premium">{product.benefits || 'Hydrating & Glowing'}</p>
            </Link>

            <div className="price-row-premium">
              <PriceWithDiscount
                price={product.price}
                originalPrice={product.original_price}
                size="small"
              />
              <div className="stars-premium">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            <button
              className="add-to-cart-btn-premium"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Newarrival = () => {
  const { products, productsLoading } = useShop();

  // Target IDs for "All Products" section in New Arrival
  const targetIds = [21, 26, 8, 10];
  let topBeautyProducts = products.filter(p => targetIds.includes(p.id) || targetIds.includes(Number(p.id)));
  if (topBeautyProducts.length === 0) topBeautyProducts = products.slice(0, 8);

  if (productsLoading) {
    return (
      <section className="trending-container">
        <p className="loading">Loading products...</p>
      </section>
    );
  }

  return (
    <section className="trending-container">
      <h2 className="section-title second heading-line">All Products</h2>
      <ProductGrid products={topBeautyProducts} />
    </section>
  );
};

export default Newarrival;
