import React from 'react';
import { Plus, Star } from 'lucide-react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-3 py-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">4.8</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-xl font-bold text-indigo-600">
            ${product.price}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;