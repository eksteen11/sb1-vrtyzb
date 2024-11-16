import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wheat, ShoppingCart, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Wheat className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Farm Feed</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <nav className="flex space-x-8">
              <Link 
                to="/products" 
                className={`text-gray-600 hover:text-amber-600 ${location.pathname === '/products' ? 'text-amber-600' : ''}`}
              >
                Products
              </Link>
              <a href="#" className="text-gray-600 hover:text-amber-600">Categories</a>
              <a href="#" className="text-gray-600 hover:text-amber-600">Sellers</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}