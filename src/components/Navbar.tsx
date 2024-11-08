import React from 'react';
import { ShoppingCart, Smartphone, Monitor, Menu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  setCategory: (category: string) => void;
}

export default function Navbar({ cartCount, setCategory }: NavbarProps) {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">TechAccessories</h1>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => setCategory('all')}
                className="hover:bg-indigo-700 px-3 py-2 rounded-md"
              >
                All Products
              </button>
              <button
                onClick={() => setCategory('mobile')}
                className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile
              </button>
              <button
                onClick={() => setCategory('pc')}
                className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center"
              >
                <Monitor className="w-4 h-4 mr-2" />
                PC
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="md:hidden ml-4">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}