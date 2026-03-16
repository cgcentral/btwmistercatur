import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

export default function Merchandise() {
  return (
    <div className="pt-20 min-h-screen bg-brand-darker text-white">
      <section className="py-20 px-4 max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Kaos 'Skakmat'", price: "Rp 150.000", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop" },
            { name: "Hoodie Strategi", price: "Rp 350.000", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop" },
            { name: "Topi Mister Catur", price: "Rp 95.000", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop" },
            { name: "Papan Catur Kayu", price: "Rp 750.000", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop" },
          ].map((item, i) => (
            <div key={i} className="bg-brand-dark rounded-3xl overflow-hidden border border-gray-800 hover:border-brand-yellow transition-all group">
              <div className="aspect-square overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-brand-yellow font-black">{item.price}</span>
                  <button className="p-2 bg-gray-800 rounded-full hover:bg-brand-yellow hover:text-black transition-colors">
                    <ShoppingBag className="w-5 h-5" />
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
