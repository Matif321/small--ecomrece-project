import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Newsletter and Socials Column */}
        <div className="footer-section brand-col">
          <p className="subscribe-text">Subscribe to get special offers and updates</p>
          <div className="input-container">
            <input type="email" placeholder="Enter Your Email Address" />
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/koreanzaa?igsh=MWltNGowZmQ4b2JyZg==" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/share/1bwxwVyPYn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" />
            </a>
            <a href="https://www.tiktok.com/@koreanza_official?_r=1&_t=ZS-93RvTLPR9fN" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
            </a>
          </div>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          </div>
        </div>

        {/* Links Columns */}
        <div className="footer-links-grid">
          <div className="footer-section">
            <h4 className="column-title">shop</h4>
            <ul>
              <li><Link to="/category/all">All Products</Link></li>
              <li><Link to="/category/all">New Arrivals</Link></li>
              <li><Link to="/">Shop By Categories</Link></li>
              <li><Link to="/category/all">Trending items</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="column-title">Customer Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/cart">Order Tracking</Link></li>
              <li><Link to="/contact">Returns & Refunds</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="column-title">Account</h4>
            <ul>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">Shipping Policy</Link></li>
              <li><Link to="/">Return Policy</Link></li>
              <li><Link to="/">Cancellation Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="column-title">Contact Information</h4>
            <ul>
              <li>+92 310 5608442</li>
              <li>koreanzaa@gmail.com</li>
              <li>Peshawar , Pakistan</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Koreanza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;