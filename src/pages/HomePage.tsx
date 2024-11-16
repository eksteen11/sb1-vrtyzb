import React from 'react';
import { ArrowRight, Wheat, Leaf, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Marketplace for Quality Feed & Grains
            </h1>
            <p className="text-lg mb-8 text-amber-100">
              Connect directly with farmers and suppliers. Get the best prices on premium agricultural products.
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors inline-flex items-center">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Wheat className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Verified suppliers ensuring top-grade agricultural products.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Sourcing</h3>
            <p className="text-gray-600">Supporting eco-friendly farming practices and local producers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable Delivery</h3>
            <p className="text-gray-600">Fast and secure shipping to your farm or facility.</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <button className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center">
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}