import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductGrid.css';

function ProductGrid({ category, products, addToCart }) {
  return (
    <div className="products-container">
      <div className="section-header">
        <h2 className="section-title">
          {category === 'all' ? 'Featured Products' : 
           category === 'mobile' ? 'Mobile Accessories' : 'PC Accessories'}
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;