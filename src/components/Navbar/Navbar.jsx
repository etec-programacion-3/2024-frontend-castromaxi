import React, { useState } from 'react';
import { ShoppingCart, Smartphone, Monitor, Menu, User } from 'lucide-react';
import MobileMenu from '../MobileMenu/MobileMenu';
import UserMenu from '../UserMenu/UserMenu';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ cartCount, setCategory, openCart, isAuthenticated }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="left-section">
            <a href="/" className="logo">TechStore</a>
            <div className="nav-links">
              <button onClick={() => setCategory('all')} className="nav-button">
                All Products
              </button>
              <button onClick={() => setCategory('mobile')} className="nav-button">
                <Smartphone className="icon" />
                Mobile Accessories
              </button>
              <button onClick={() => setCategory('pc')} className="nav-button">
                <Monitor className="icon" />
                PC Accessories
              </button>
            </div>
          </div>

          <div className="right-section">
            <button 
              onClick={() => setIsUserMenuOpen(true)} 
              className="user-button"
            >
              <User className="user-icon" />
            </button>
            <div className="cart-container">
              <button onClick={openCart} className="cart-button">
                <ShoppingCart className="cart-icon" />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>
            </div>
            <button 
              className="menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="menu-icon" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        setCategory={setCategory}
      />
      
      <UserMenu
        isOpen={isUserMenuOpen}
        onClose={() => setIsUserMenuOpen(false)}
      />

      <div className="nav-auth">
        {isAuthenticated ? (
          <button onClick={() => setIsAuthenticated(false)} className="auth-button">
            Logout
          </button>
        ) : (
          <Link to="/login" className="auth-button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;