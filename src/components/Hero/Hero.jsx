import React from 'react';
import { Cpu, Smartphone } from 'lucide-react';

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tech Accessories for Modern Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Enhance your digital experience with premium accessories
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-3">
                <Cpu className="w-8 h-8" />
              </div>
              <span>PC Gear</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-3">
                <Smartphone className="w-8 h-8" />
              </div>
              <span>Mobile Accessories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;