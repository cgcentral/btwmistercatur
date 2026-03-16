import React from 'react';
import { Link } from 'react-router-dom';
import { PlaySquare, Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-brand-darker border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center">
                <PlaySquare className="text-black w-6 h-6" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-gray-900 dark:text-white">
                BTW <span className="text-brand-yellow">Mister Catur</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6 leading-relaxed">
              Skakmat Kebosanan, Nyalakan Strategi. Platform edutainment catur yang santai, modern, dan interaktif.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-yellow hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-yellow hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-yellow hover:text-black transition-colors">
                <MessageCircle className="w-5 h-5" /> {/* TikTok/WA icon placeholder */}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-gray-900 dark:text-white">Eksplorasi</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Tentang Kami</Link></li>
              <li><Link to="/content" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Content Hub</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Media Partnership</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-gray-900 dark:text-white">Lainnya</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">E-Course</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Merchandise</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Career</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BTW Mister Catur. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
