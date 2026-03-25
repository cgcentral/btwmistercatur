import React from 'react';
import { Link } from 'react-router-dom';
import { PlaySquare, Instagram, Youtube, Twitter, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-brand-darker border-t border-brand-blue/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <img 
                  src="http://btwmistercatur.com/wp-content/uploads/2026/03/BTW-MISTER-CATUR-AND-FRIENDS-REV-2-1-scaled.png" 
                  alt="BTW Mister Catur Logo" 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-4 leading-relaxed">
                Skakmat Kebosanan, Nyalakan Strategi. Platform edutainment catur yang santai, modern, dan interaktif.
              </p>
              <a 
                href="https://www.google.com/maps/place/CGLINK+Indonesia/@-6.2774031,106.7724926,18z"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-brand-yellow transition-colors text-sm flex items-start gap-2 mb-6 leading-relaxed group"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-brand-blue group-hover:text-brand-yellow transition-colors" />
                <span>Jl. Ciputat Raya No.1b, RT.1/RW.8, Pd. Pinang, Kec. Kebayoran Lama, Kota Jakarta Selatan, DKI Jakarta 12310</span>
              </a>
              <div className="flex space-x-4">
                <a 
                  href="https://youtube.com/@btw_breaktimewith?si=X5O8NY3Agvsma_OP" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/btwmistercatur/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@btw_breaktimewith?_r=1&_t=ZS-94EapcAPEjH" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full h-48 lg:h-full min-h-[200px] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
              <iframe 
                src="https://maps.google.com/maps?q=-6.2774031,106.7724926&t=&z=18&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BTW Mister Catur Location"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-gray-900 dark:text-white">Eksplorasi</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Tentang Kami</Link></li>
                <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Media Partnership</Link></li>
                <li><Link to="/e-course" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">E-Course</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-gray-900 dark:text-white">Lainnya</h3>
              <ul className="space-y-4">
                <li><Link to="/merchandise" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Merchandise</Link></li>
                <li><Link to="/career" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors">Career</Link></li>
              </ul>
            </div>
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
