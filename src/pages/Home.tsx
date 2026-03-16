import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Star, Users, Zap, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop" 
            alt="Chess background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-brand-darker dark:via-brand-darker/80 dark:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 text-brand-yellow font-semibold text-sm mb-6 border border-brand-yellow/20">
                <Zap className="w-4 h-4" />
                <span>Episode Baru Setiap Minggu</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-gray-900 dark:text-white">
                Skakmat <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-500">
                  Kebosanan,
                </span><br/>
                Nyalakan Strategi.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Di balik setiap langkah bidak, ada cerita, strategi, dan filosofi. Jadikan catur teman setia di waktu istirahat Anda bersama Mister Catur.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/content" className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                  <Play className="w-5 h-5 fill-black" />
                  Mulai Menonton
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-full border border-gray-200 dark:border-gray-700 transition-all">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </motion.div>

            {/* Hero Image / Video Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1987&auto=format&fit=crop" 
                  alt="Mister Catur" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-brand-yellow text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                    Eksklusif
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Grandmaster Talk: Strategi Hidup</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <Play className="w-4 h-4" /> Tonton Cuplikan
                  </p>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-brand-yellow/90 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer transform scale-90 group-hover:scale-100 transition-all">
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Komunitas</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">10K+ Member</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gray-50 dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Mengapa BTW Mister Catur?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Kami percaya bahwa catur adalah bahasa universal untuk melatih logika dan kesabaran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-brand-yellow" />,
                title: "Edutainment yang Seru",
                desc: "Kami mengemas teori dan taktik catur dengan cara yang ringan, sehingga Anda bisa belajar sambil menikmati waktu 'break' Anda."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-yellow" />,
                title: "Komunitas Inklusif",
                desc: "Di sini, tidak ada langkah yang salah untuk belajar. Kami merangkul setiap pion yang ingin bertransformasi menjadi menteri."
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-yellow" />,
                title: "Analisis Tajam, Gaya Santai",
                desc: "Mister Catur membawa pengalaman dan perspektif unik dalam membedah setiap pertandingan tanpa menghilangkan kedalaman strategi."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Episode Terbaru</h2>
              <p className="text-gray-600 dark:text-gray-400">Tonton obrolan santai dan strategi mendalam.</p>
            </div>
            <Link to="/content" className="hidden md:flex items-center gap-2 text-brand-yellow font-semibold hover:text-brand-yellow-hover transition-colors">
              Lihat Semua <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={`https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop&sig=${item}`} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all">
                      <Play className="w-5 h-5 text-black fill-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                    12:45
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-yellow transition-colors line-clamp-2">
                  Membongkar Taktik Magnus Carlsen bersama Grandmaster Susanto Megaranto
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 hari yang lalu • 15K ditonton
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/content" className="inline-flex items-center gap-2 text-brand-yellow font-semibold hover:text-brand-yellow-hover transition-colors">
              Lihat Semua <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Siap untuk Langkah Selanjutnya?
          </h2>
          <p className="text-xl text-black/80 mb-10 font-medium">
            Bergabunglah dengan komunitas kami, dapatkan akses ke konten eksklusif, dan tingkatkan permainan Anda.
          </p>
          <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto">
            <MessageSquare className="w-5 h-5" />
            Gabung Komunitas Sekarang
          </button>
        </div>
      </section>
    </div>
  );
}
