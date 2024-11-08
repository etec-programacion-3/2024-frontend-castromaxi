import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Wireless Gaming Mouse",
      price: 49.99,
      category: "pc",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
      description: "RGB gaming mouse with 7 programmable buttons"
    },
    {
      id: 2,
      name: "Premium Phone Case",
      price: 24.99,
      category: "mobile",
      image: "https://images.unsplash.com/photo-1541877590-a1885a0c5df0?w=500",
      description: "Shock-proof protective case with elegant design"
    }
  ];

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar cartCount={cart.length} setCategory={setCategory} />
      <Hero />
      <ProductGrid products={filteredProducts} addToCart={addToCart} category={category} />
      <Footer />
    </div>
  );
}

export default App;