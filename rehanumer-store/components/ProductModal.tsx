import React from 'react';
import { X, Check, MessageCircle, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const whatsappNumber = "1234567890"; // Placeholder number
  const message = `Hi, I'm interested in ordering the ${product.name} priced at $${product.price}.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X size={24} className="text-slate-800" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-slate-100 flex items-center justify-center p-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 md:h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
          <div className="mb-2">
             <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold tracking-wide uppercase">
               {product.category}
             </span>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h2>
          
          <div className="flex items-center gap-4 mb-6">
             <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
             <div className="flex items-center text-yellow-500 text-sm">
               {'★'.repeat(Math.round(product.rating))}
               <span className="text-slate-400 ml-1">({product.rating})</span>
             </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-slate-600 text-sm">
                  <Check size={16} className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-3">
             <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-green-500/30 active:scale-95"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </a>
             </div>
             
            <p className="text-center text-xs text-slate-400">
              Secure checkout via WhatsApp Business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};