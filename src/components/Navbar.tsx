import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PlaySquare, ChevronDown, BookOpen, Handshake, Play, ShoppingBag, Briefcase } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Media Partnership', path: '/contact' },
    { name: 'Career', path: '/career' },
  ];

  const dropdownItems = [
    { name: 'Video Content', path: '/content', icon: <Play className="w-4 h-4" />, desc: 'Tonton episode terbaru' },
    { name: 'E-Course', path: '/e-course', icon: <BookOpen className="w-4 h-4" />, desc: 'Belajar strategi catur' },
    { name: 'Merchandise', path: '/merchandise', icon: <ShoppingBag className="w-4 h-4" />, desc: 'Koleksi eksklusif' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-brand-darker/80 backdrop-blur-md border-b border-brand-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(0,74,173,0.4)]">
                <PlaySquare className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                BTW
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand-yellow",
                  location.pathname === link.path ? "text-brand-yellow" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown Content */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-yellow",
                  isDropdownOpen || dropdownItems.some(i => location.pathname === i.path) ? "text-brand-yellow" : "text-gray-300"
                )}
              >
                Products <ChevronDown className={cn("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180")} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-brand-dark border border-gray-800 rounded-2xl shadow-2xl p-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-800 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand-yellow",
                  location.pathname === link.path ? "text-brand-yellow" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/contact" className="bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-brand-blue/20">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-brand-yellow focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-darker border-b border-gray-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 rounded-md text-base font-semibold",
                  location.pathname === link.path ? "text-brand-yellow" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="py-2 px-3 space-y-2">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Products</div>
              {dropdownItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-3 text-gray-300 hover:text-brand-yellow"
                >
                  {item.icon} {item.name}
                </Link>
              ))}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 rounded-md text-base font-semibold",
                  location.pathname === link.path ? "text-brand-yellow" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 px-3">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-brand-yellow text-center text-black font-bold py-3 rounded-xl">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
