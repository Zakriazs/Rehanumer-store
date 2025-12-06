import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Your one-stop destination for quality products across electronics, fashion, and home essentials.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-indigo-400 transition-colors">Categories</a></li>
              <li><a href="#featured" className="hover:text-indigo-400 transition-colors">New Arrivals</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Home & Kitchen</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Beauty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-500 mt-0.5" />
                <span>123 Commerce St, Market City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-500" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-500" />
                <span>support@rehanumer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Rehanumer Store. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};