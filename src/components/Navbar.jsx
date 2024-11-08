import React from 'react';
import { ShoppingCart, Smartphone, Monitor, Menu } from 'lucide-react';

function Navbar({ cartCount, setCategory }) {
  return (
    <nav className="bg-white/90 backdrop-blur-md text-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-indigo-600">TechAccessories</h1>
            <div className="hidden md:flex space-x-1">
              <button
                onClick={() => setCategory('all')}
                className="px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-50 transition-colors"
              >
                All Products
              </button>
              <button
                onClick={() => setCategory('mobile')}
                className="px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-50 transition-colors flex items-center"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile
              </button>
              <button
                onClick={() => setCategory('pc')}
                className="px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-50 transition-colors flex items-center"
              >
                <Monitor className="w-4 h-4 mr-2" />
                PC
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;