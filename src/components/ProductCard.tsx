import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  unit: string;
  image: string;
  seller: string;
}

export default function ProductCard({ name, price, unit, image, seller }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">by {seller}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-amber-600">${price}</span>
            <span className="text-gray-500 text-sm">/{unit}</span>
          </div>
          <button className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}