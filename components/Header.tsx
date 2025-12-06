import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onSearch: (query: string) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo variant="dark" />
        </a>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white border focus:border-indigo-500 rounded-full text-sm transition-all outline-none"
          />
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
        </div>

        {/* Navigation & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#categories" className="hover:text-indigo-600 transition-colors">Categories</a>
            <a href="#featured" className="hover:text-indigo-600 transition-colors">Shop</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          
          <div className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">
             <ShoppingCart size={24} />
             {cartCount > 0 && (
               <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-in zoom-in">
                 {cartCount}
               </span>
             )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="relative p-2 text-slate-600">
             <ShoppingCart size={24} />
             {cartCount > 0 && (
               <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-in zoom-in">
                 {cartCount}
               </span>
             )}
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="p-4 space-y-4">
             <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm outline-none"
              />
              <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
            </div>
            <nav className="flex flex-col gap-3 font-medium text-slate-600">
              <a href="#" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#categories" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Categories</a>
              <a href="#featured" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Shop</a>
              <a href="#contact" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};