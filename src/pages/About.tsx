import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Zap, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=1987&auto=format&fit=crop" 
            alt="Chess background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Tentang <span className="text-brand-yellow">Kami</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Break Time With (BTW) Mister Catur
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Skakmat Kebosanan, Nyalakan Strategi.
              </h2>
              <div className="w-20 h-2 bg-brand-yellow rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Di balik setiap langkah bidak, ada cerita, strategi, dan filosofi. BTW (Break Time With) Mister Catur lahir dari sebuah visi sederhana: menjadikan catur bukan sekadar permainan papan yang kaku, melainkan teman setia di waktu istirahat Anda.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Dipandu oleh Mister Catur, kami hadir sebagai wadah bagi para pecinta catur di Indonesia—mulai dari mereka yang baru mengenal cara melangkah, hingga para pemain strategis yang ingin mengasah ketajaman analisis.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop" 
                  alt="Chess Board" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-yellow p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <p className="text-black font-bold text-xl leading-tight">
                  "Catur adalah bahasa universal untuk melatih logika dan kesabaran."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-gray-50 dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Mengapa BTW Mister Catur?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Kami percaya bahwa catur adalah bahasa universal untuk melatih logika dan kesabaran. Melalui konten yang edukatif namun tetap menghibur, kami meruntuhkan batasan bahwa catur itu "berat".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-yellow" />,
                title: "Edutainment yang Seru",
                desc: "Kami mengemas teori dan taktik catur dengan cara yang ringan, sehingga Anda bisa belajar sambil menikmati waktu 'break' Anda."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-yellow" />,
                title: "Komunitas Inklusif",
                desc: "Di sini, tidak ada langkah yang salah untuk belajar. Kami merangkul setiap pion yang ingin bertransformasi menjadi menteri."
              },
              {
                icon: <Target className="w-8 h-8 text-brand-yellow" />,
                title: "Analisis Tajam, Gaya Santai",
                desc: "Mister Catur membawa pengalaman dan perspektif unik dalam membedah setiap pertandingan, menjadikannya mudah dipahami tanpa menghilangkan kedalaman strategi."
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

      {/* Mission Section */}
      <section className="py-24 bg-white dark:bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Misi Kami</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            Misi kami adalah memasyarakatkan catur di era digital. Melalui platform ini, kami ingin membangun ekosistem di mana setiap orang bisa meningkatkan kapasitas berpikir mereka, satu langkah Langkah Kuda di satu waktu.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-brand-yellow text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
            Mari beristirahat sejenak, siapkan kopi Anda, dan mari susun strategi bersama Mister Catur.
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
