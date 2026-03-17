import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

export default function Merchandise() {
  return (
    <div className="pt-20 min-h-screen bg-brand-darker text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-6"
          >
            Official <span className="text-brand-yellow">Merchandise</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tampil keren dengan koleksi eksklusif dari BTW Mister Catur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              name: "T-Shirt BTW Ed. 1", 
              oldPrice: "Rp 179.000", 
              price: "Rp 149.000", 
              size: "M, L, XL",
              img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.13-1.jpeg",
              imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.13.jpeg"
            },
            { 
              name: "Buku Pulang Sebelum Berlari", 
              oldPrice: "Rp 199.000", 
              price: "Rp 169.000", 
              img: "http://btwmistercatur.com/wp-content/uploads/2026/02/images_8834891768483526954.jpg" 
            },
            { 
              name: "T-Shirt BTW Ed. 2", 
              oldPrice: "Rp 179.000", 
              price: "Rp 149.000", 
              size: "M, L, XL",
              img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15-3.jpeg",
              imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15-2.jpeg"
            },
            { 
              name: "T-Shirt BTW Ed. 3", 
              oldPrice: "Rp 179.000", 
              price: "Rp 149.000", 
              size: "M, L, XL",
              img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15-1.jpeg",
              imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15.jpeg"
            },
            { 
              name: "T-Shirt BTW Ed. 4", 
              oldPrice: "Rp 179.000", 
              price: "Rp 149.000", 
              size: "M, L, XL",
              img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.14-2.jpeg",
              imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.14-1.jpeg"
            },
            { 
              name: "Headwear", 
              oldPrice: "Rp 129.000", 
              price: "Rp 99.000", 
              img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.09.32.jpeg" 
            },
          ].map((item, i) => (
            <div key={i} className="bg-brand-dark rounded-3xl overflow-hidden border border-gray-800 hover:border-brand-yellow transition-all group flex flex-col">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className={`w-full h-full object-cover transition-all duration-500 ${item.imgHover ? 'group-hover:opacity-0' : 'group-hover:scale-110'}`} 
                  referrerPolicy="no-referrer" 
                />
                {item.imgHover && (
                  <img 
                    src={item.imgHover} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100" 
                    referrerPolicy="no-referrer" 
                  />
                )}
                {item.oldPrice && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                {item.size && (
                  <p className="text-sm text-gray-400 mb-4">Size: {item.size}</p>
                )}
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex flex-col">
                    {item.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">{item.oldPrice}</span>
                    )}
                    <span className="text-brand-yellow text-2xl font-black">{item.price}</span>
                  </div>
                  <button className="p-3 bg-gray-800 rounded-full hover:bg-brand-yellow hover:text-black transition-all transform hover:scale-110">
                    <ShoppingBag className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
