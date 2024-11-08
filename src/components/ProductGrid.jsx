import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ category, products, addToCart }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {category === 'all' ? 'Featured Products' : 
           category === 'mobile' ? 'Mobile Accessories' : 'PC Accessories'}
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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