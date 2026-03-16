import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Search, Filter, Clock, Heart, Share2 } from 'lucide-react';

const CATEGORIES = ["Semua", "Talkshow", "Analisis Pertandingan", "Behind the Scenes", "Artikel"];

export default function Content() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-brand-dark">
      {/* Header Section */}
      <section className="bg-white dark:bg-brand-darker border-b border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Content <span className="text-brand-yellow">Hub</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
            Temukan video eksklusif, analisis mendalam, dan artikel menarik seputar dunia catur.
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Cari video atau artikel..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 border-none focus:ring-2 focus:ring-brand-yellow text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                    activeCategory === cat 
                      ? "bg-brand-yellow text-black" 
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group"
              >
                <div className="relative aspect-video overflow-hidden cursor-pointer">
                  <img 
                    src={`https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop&sig=${item}`} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all">
                      <Play className="w-6 h-6 text-black fill-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-brand-yellow text-black text-xs font-bold px-3 py-1 rounded-full">
                    Talkshow
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                    12:45
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2 cursor-pointer">
                    Membongkar Taktik Magnus Carlsen bersama Grandmaster Susanto Megaranto
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                    Diskusi mendalam mengenai strategi pembukaan dan endgame yang sering digunakan oleh juara dunia.
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2 hari lalu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold py-4 px-10 rounded-full border border-gray-200 dark:border-gray-700 transition-all shadow-sm">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
