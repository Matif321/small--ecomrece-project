import React from 'react';
import { Heart } from 'lucide-react';
import './Wishlist.css';
import '../Components/TrendingItems.css'; // Import premium styles
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

import PriceWithDiscount from '../Components/PriceWithDiscount';

const Wishlist = () => {
  const { wishlistItems, addToWishlist, addToCart } = useShop();
  const navigate = useNavigate();

  // "addToWishlist" toggles presence, so calling it on an item in wishlist will remove it.
  const handleRemove = (product) => {
    addToWishlist(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  }

  return (
    <div className="wishlist-container">
      <header className="wishlist-header">
        <h2 className="wishlist-title">My wishlist</h2>
        <p className="wishlist-subtitle">Your favorite beauty products all in one place</p>
      </header>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist" style={{ textAlign: 'center', padding: '50px' }}>
          <h3>Your wishlist is empty</h3>
          <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#FDC040', border: 'none', cursor: 'pointer' }}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container-premium">
                <div className="product-card-link-premium">
                  <img src={product.img || product.image} alt={product.name} className="product-image-premium" />
                </div>

                {/* Remove Button (Overlay) */}
                <button
                  className="wishlist-btn-premium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(product);
                  }}
                  title="Remove from Wishlist"
                  style={{ color: 'red' }}
                >
                  <Heart size={20} fill="red" color="red" />
                </button>
              </div>

              <div className="product-details-premium">
                <div style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className="product-name-premium">{product.name}</h3>
                </div>

                <div className="price-row-premium">
                  <PriceWithDiscount
                    price={product.price}
                    originalPrice={product.originalPrice}
                    size="small"
                  />
                </div>

                <button
                  className="add-to-cart-btn-premium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;