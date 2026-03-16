import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import "./TrendingItems.css";
import { useShop } from "../context/ShopContext";
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
              <p className="product-desc-premium">{product.benefits || 'Premium Quality'}</p>
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

const TrendingItems = () => {
  const { products, productsLoading } = useShop();

  /* FIRST ROW - Trending Items (IDs from original) */
  const trendingIds = [9, 7, 24, 12];
  let trendingProducts = products.filter(p => trendingIds.includes(p.id) || trendingIds.includes(Number(p.id)));
  if (trendingProducts.length === 0) trendingProducts = products.slice(0, 4);

  /* SECOND ROW - Top Beauty Products (IDs from original) */
  const topBeautyIds = [30, 23, 8, 5];
  let topBeautyProducts = products.filter(p => topBeautyIds.includes(p.id) || topBeautyIds.includes(Number(p.id)));
  if (topBeautyProducts.length === 0) topBeautyProducts = products.slice(4, 8).length > 0 ? products.slice(4, 8) : products.slice(0, 4);

  if (productsLoading) {
    return (
      <section className="trending-container">
        <p className="loading">Loading products...</p>
      </section>
    );
  }

  return (
    <section className="trending-container">
      {/* ROW 1 */}
      <h2 className="section-title heading-line">Trending Items</h2>
      <ProductGrid products={trendingProducts} />

      {/* ROW 2 */}
      <h2 className="section-title second heading-line">Top Beauty Products</h2>
      <ProductGrid products={topBeautyProducts} />
    </section>
  );
};

export default TrendingItems;
