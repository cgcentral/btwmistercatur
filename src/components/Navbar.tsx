import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, PlaySquare } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Default to dark mode for entertainment vibe
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Content', path: '/content' },
    { name: 'Media Partnership', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 dark:bg-brand-darker/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <PlaySquare className="text-black w-6 h-6" />
              </div>
              <span className="font-display font-black text-xl tracking-tight">
                BTW <span className="text-brand-yellow">Mister Catur</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand-yellow",
                  location.pathname === link.path 
                    ? "text-brand-yellow" 
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleDark}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className="bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-brand-yellow focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-brand-darker border-b border-gray-200 dark:border-gray-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 rounded-md text-base font-semibold",
                  location.pathname === link.path
                    ? "bg-gray-50 dark:bg-gray-900 text-brand-yellow"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <button className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold py-3 rounded-xl transition-colors">
                Login dengan Google
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
