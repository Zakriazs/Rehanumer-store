import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50 p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
           <span className="bg-indigo-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center">
             <ShoppingCart size={18} />
           </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-indigo-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-slate-900">
            ${product.price}
          </span>
          <span className="text-xs text-slate-400">View Details</span>
        </div>
      </div>
    </div>
  );
};
