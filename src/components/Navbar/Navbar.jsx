import React from 'react';
import { ShoppingCart, Smartphone, Monitor, Menu } from 'lucide-react';
import './Navbar.css';

function Navbar({ cartCount, setCategory }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="left-section">
            <h1 className="logo">TechAccessories</h1>
            <div className="nav-links">
              <button
                onClick={() => setCategory('all')}
                className="nav-button"
              >
                All Products
              </button>
              <button
                onClick={() => setCategory('mobile')}
                className="nav-button"
              >
                <Smartphone className="icon" />
                Mobile
              </button>
              <button
                onClick={() => setCategory('pc')}
                className="nav-button"
              >
                <Monitor className="icon" />
                PC
              </button>
            </div>
          </div>
          <div className="right-section">
            <div className="cart-container">
              <ShoppingCart className="cart-icon" />
              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="menu-button">
              <Menu className="menu-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;