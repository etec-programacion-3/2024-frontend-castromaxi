import React from 'react';
import { Plus, Star } from 'lucide-react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <div className="rating-badge">
          <div className="rating">
            <Star className="star-icon" />
            <span className="rating-text">4.8</span>
          </div>
        </div>
      </div>
      <div className="product-content">
        <div className="product-header">
          <h3 className="product-title">{product.name}</h3>
          <span className="product-price">
            ${product.price}
          </span>
        </div>
        <p className="product-description">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="add-to-cart-button"
        >
          <Plus className="plus-icon" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;