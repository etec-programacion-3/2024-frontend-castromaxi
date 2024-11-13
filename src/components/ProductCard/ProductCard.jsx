import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <div className="rating-badge">
          <Star className="rating-star" />
          <span className="rating-text">{product.rating}</span>
        </div>
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-title">{product.name}</h3>
          <span className="product-price">${product.price}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          <ShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;