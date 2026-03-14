import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import "./Navbar.css";

import { useShop } from "../context/ShopContext";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, wishlistItems } = useShop();
  const menuRef = useRef(null);

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const toggleMobileMenu = () => {
    setSearchOpen(false);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        const hamburger = document.querySelector('.hamburger-menu');
        if (hamburger && !hamburger.contains(event.target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="Koreanza Logo" className="logo-img" />
      </Link>

      {/* Custom Animated Hamburger Icon */}
      <div
        className={`hamburger-menu ${mobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>

      {/* Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      <ul
        ref={menuRef}
        className={`nav-links ${mobileMenuOpen ? "active" : ""}`}
      >
        <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>

        <li className="search-link">
          <div className={`search-wrapper ${searchOpen ? "active" : ""}`}>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <Search
              size={20}
              className="search-icon"
              onClick={toggleSearch}
            />
          </div>
        </li>
      </ul>

      <div className="nav-icons">
        {/* LOGIN ICON */}
        <Link to="/auth" className="icon-wrapper">
          <User size={22} />
        </Link>

        {/* WISHLIST */}
        <Link to="/heart" className="icon-wrapper badge">
          <Heart size={22} />
          {wishlistItems.length > 0 && <span className="dot"></span>}
        </Link>

        {/* CART */}
        <Link to="/cart" className="icon-wrapper badge">
          <ShoppingCart size={22} />
          {cartItems.length > 0 && <span className="dot"></span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
