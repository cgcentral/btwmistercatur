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

      {/* Story Section - Who is Mister Catur? */}
      <section className="py-16 md:py-24 bg-white dark:bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm uppercase tracking-wider">
                The Founder
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                Muhamad Catur Gunandi: <br/>
                <span className="text-brand-blue">Sang Arsitek Bisnis</span>
              </h2>
              <div className="w-20 h-1.5 bg-brand-blue rounded-full shadow-[0_0_10px_rgba(0,74,173,0.5)]"></div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                <span className="text-gray-900 dark:text-white font-bold">Muhamad Catur Gunandi</span>, atau Mister Catur, adalah pengusaha bertangan dingin lulusan Teknik Penerbangan ITB yang dikenal sebagai strategis ulung dalam mengelola berbagai lini bisnis dengan pertumbuhan eksponensial.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="text-brand-blue font-bold">Break Time With (BTW) Mister Catur</span> adalah platform media profesional yang didedikasikan untuk menyajikan konten mendalam seputar dunia Bisnis, Motivasi, dan nilai-nilai Spiritual/Agama. Kami hadir sebagai oase bagi para profesional dan individu yang mencari keseimbangan antara kesuksesan karir dan ketenangan batin.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Melalui pendekatan yang edukatif dan inspiratif, kami mengintegrasikan strategi bisnis yang jujur dengan motivasi yang membumi, serta landasan spiritual yang menenangkan. Kami percaya bahwa pertumbuhan sejati terjadi ketika aspek intelektual dan spiritual berjalan beriringan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <p className="text-3xl font-black text-brand-blue mb-1">ITB</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Alumni Teknik Penerbangan</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <p className="text-3xl font-black text-brand-blue mb-1">10+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Tahun Pengalaman Bisnis</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 relative z-10">
                <img 
                  src="http://btwmistercatur.com/wp-content/uploads/2026/02/images_2722491769586762089.png" 
                  alt="Mister Catur Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl -z-0"></div>
              
              <div className="absolute -bottom-8 -right-8 bg-brand-dark p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block border border-brand-blue/30 z-20">
                <p className="text-white font-bold text-lg leading-tight italic">
                  "Bisnis adalah permainan strategi. Setiap langkah harus presisi, setiap risiko harus terukur."
                </p>
                <p className="text-brand-yellow font-black mt-4 text-sm uppercase tracking-widest">— Mister Catur</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Journey Section */}
      <section className="py-24 bg-gray-50 dark:bg-brand-dark overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Mastering <span className="text-brand-blue">Multi-Business</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Dari inovasi kuliner hingga infrastruktur pertambangan, inilah jejak langkah strategis Mister Catur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                sector: "Kuliner & Inovasi",
                title: "Cireng Salju Bonju (2014)",
                desc: "Bukan sekadar camilan. Inovasi 'Cireng Hitam' dengan karbon aktif berhasil mendisrupsi pasar. Dari bisnis rumahan, kini menembus pasar Jepang, Australia, hingga Belanda dengan omzet miliaran rupiah setiap bulan.",
                stat: "Global Reach",
                icon: "🥟"
              },
              {
                sector: "Industri & Pertambangan",
                title: "Scale-up Eksponensial",
                desc: "Mengelola mining contractor services hingga logistik pertambangan. Sukses mengembangkan bisnis material komposit dan pipa industri (RFP) dengan lonjakan omzet dari Rp4 Miliar menjadi proyeksi Rp100 Miliar dalam waktu singkat.",
                stat: "Rp100M Projection",
                icon: "🏗️"
              },
              {
                sector: "Penerbangan",
                title: "PT HM Aviation (2021)",
                desc: "Kembali ke akar pendidikan Teknik Penerbangan. Mendirikan konsultan spesialis aviasi yang menangani lessor, pelatihan, hingga suku cadang pesawat, membuktikan keahlian teknis di industri global.",
                stat: "Aviation Expert",
                icon: "✈️"
              },
              {
                sector: "Properti & Konsultasi",
                title: "Membangun Negeri (2022)",
                desc: "Merambah konstruksi perumahan subsidi di Banten dan berperan aktif sebagai konsultan pembangunan daerah. Karena bisnis bukan hanya soal profit, tapi juga kontribusi nyata bagi masyarakat.",
                stat: "Social Impact",
                icon: "🏠"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-900 p-10 rounded-[40px] border border-gray-100 dark:border-gray-800 hover:border-brand-blue/50 hover:shadow-2xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="bg-brand-blue/10 text-brand-blue text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.sector}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-yellow" />
                  <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">{item.stat}</span>
                </div>
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
      <section className="py-24 bg-brand-blue text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white blur-[100px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-yellow blur-[100px] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            "Bisnis bukan hanya soal angka, tapi soal strategi, integritas, dan keberkahan."
          </h2>
          <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full mb-8"></div>
          <p className="text-white/80 text-xl font-medium">
            Mari melangkah bersama dalam perjalanan menuju kesuksesan yang bermakna.
          </p>
        </div>
      </section>
    </div>
  );
}
