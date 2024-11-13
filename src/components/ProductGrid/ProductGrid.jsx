import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductGrid.css';

function ProductGrid({ products, addToCart }) {
  return (
    <section className="product-grid">
      <div className="section-header">
        <h2 className="section-title">Featured Products</h2>
        <div className="section-divider"></div>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;