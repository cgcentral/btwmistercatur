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
            Tentang <span className="text-brand-blue-bright">Kami</span>
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
      <section className="py-16 md:py-24 bg-white dark:bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Skakmat Kebosanan, Nyalakan Strategi.
              </h2>
              <div className="w-20 h-1.5 bg-brand-blue rounded-full shadow-[0_0_10px_rgba(0,74,173,0.5)]"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                Break Time With (BTW) Mister Catur adalah platform media profesional yang didedikasikan untuk menyajikan konten mendalam seputar dunia Bisnis, Motivasi, dan nilai-nilai Spiritual/Agama. Kami hadir sebagai oase bagi para profesional dan individu yang mencari keseimbangan antara kesuksesan karir dan ketenangan batin.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Melalui pendekatan yang edukatif dan inspiratif, kami mengintegrasikan strategi bisnis yang jujur dengan motivasi yang membumi, serta landasan spiritual yang menenangkan. Kami percaya bahwa pertumbuhan sejati terjadi ketika aspek intelektual dan spiritual berjalan beriringan.
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
                  src="http://btwmistercatur.com/wp-content/uploads/2026/02/images_2722491769586762089.png" 
                  alt="Mister Catur Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-blue p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-white/10">
                <p className="text-white font-bold text-xl leading-tight">
                  "Strategi dalam bisnis, ketangguhan dalam motivasi, dan kedamaian dalam spiritualitas adalah pilar hidup yang seimbang."
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
              Kami menyajikan konten berkualitas yang dirancang untuk memperluas wawasan dan memperkuat karakter melalui tiga pilar utama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-blue" />,
                title: "Wawasan Bisnis Profesional",
                desc: "Kami membedah tren bisnis modern dengan fokus pada integritas, etika, dan strategi jangka panjang yang berkelanjutan."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-blue" />,
                title: "Motivasi yang Membumi",
                desc: "Konten motivasi kami dirancang secara praktis dan relevan dengan tantangan hidup nyata, mendorong pertumbuhan pribadi yang konsisten."
              },
              {
                icon: <Target className="w-8 h-8 text-brand-blue" />,
                title: "Kedalaman Spiritual",
                desc: "Kami menyediakan ruang untuk refleksi dan pertumbuhan spiritual, mengintegrasikan nilai-nilai agama ke dalam dinamika kehidupan sehari-hari."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-brand-blue/50 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
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
            Misi kami adalah memberdayakan individu melalui konten edutainment berkualitas tinggi yang menjembatani kesuksesan profesional dengan kesejahteraan spiritual, menciptakan dampak positif bagi masyarakat luas.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-brand-blue text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Mari melangkah bersama dalam perjalanan menuju kesuksesan yang bermakna dan kehidupan yang penuh berkah.
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
