import React from 'react';
import { Menu, ShoppingCart, Home, Smartphone, Laptop } from 'lucide-react';
import './Navbar.css';

function Navbar({ cartCount, setCategory }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <a href="/" className="navbar-brand">TechStore</a>
            
            <div className="nav-links">
              <button className="nav-button">
                <Home className="nav-button-icon" />
                Home
              </button>
              <button className="nav-button">
                <Smartphone className="nav-button-icon" />
                Mobile
              </button>
              <button className="nav-button">
                <Laptop className="nav-button-icon" />
                Computers
              </button>
            </div>
          </div>

          <div className="cart-container">
            <ShoppingCart className="cart-icon" />
            <span className="cart-badge">{cartCount}</span>
          </div>

          <button className="menu-button">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;