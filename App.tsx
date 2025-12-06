import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { AIChat } from './components/AIChat';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, Category } from './types';
import { ArrowRight, Star, Truck, ShieldCheck, Clock, Search } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header onSearch={setSearchQuery} cartCount={cartCount} />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
             alt="Shopping Background" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="text-indigo-400 font-bold tracking-wider uppercase mb-4 block">New Season Arrivals</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Quality <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Lifestyle</span> Products
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg">
              Shop the latest trends in electronics, fashion, and home essentials. Delivered directly to your doorstep.
            </p>
            <a href="#featured" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-indigo-600/30">
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-white border-b border-slate-200 py-8">
         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-4">
             <div className="bg-indigo-50 p-3 rounded-full text-indigo-600"><Truck size={24} /></div>
             <div><h4 className="font-bold text-slate-900">Fast Delivery</h4><p className="text-sm text-slate-500">Nationwide shipping available</p></div>
           </div>
           <div className="flex items-center justify-center md:justify-start gap-4">
             <div className="bg-indigo-50 p-3 rounded-full text-indigo-600"><ShieldCheck size={24} /></div>
             <div><h4 className="font-bold text-slate-900">Secure Payment</h4><p className="text-sm text-slate-500">100% secure checkout via WhatsApp</p></div>
           </div>
           <div className="flex items-center justify-center md:justify-start gap-4">
             <div className="bg-indigo-50 p-3 rounded-full text-indigo-600"><Clock size={24} /></div>
             <div><h4 className="font-bold text-slate-900">24/7 Support</h4><p className="text-sm text-slate-500">We are here to help anytime</p></div>
           </div>
         </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Browse Categories</h2>
        <div className="flex flex-wrap gap-3 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section id="featured" className="flex-1 container mx-auto px-4 md:px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-3xl font-bold text-slate-900">
             {selectedCategory === 'All' ? 'Featured Products' : `${selectedCategory}`}
           </h2>
           <span className="text-slate-500 text-sm">{filteredProducts.length} items found</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => setSelectedProduct(product)} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
               <Search size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-indigo-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help? Contact Us!</h2>
          <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
            Have questions about a product or need assistance with your order? Our team is available on WhatsApp to assist you.
          </p>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={handleAddToCart}
      />

      {/* AI Assistant */}
      <AIChat />
    </div>
  );
}