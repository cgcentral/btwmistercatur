import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Play, Star, CheckCircle } from 'lucide-react';

export default function ECourse() {
  return (
    <div className="pt-20 min-h-screen bg-brand-darker text-white">
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-6"
        >
          E-Course <span className="text-brand-yellow">Mister Catur</span>
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Tingkatkan level permainan Anda dengan kurikulum terstruktur dari para ahli.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Dasar Catur", level: "Pemula", price: "Rp 149.000" },
            { title: "Strategi Menengah", level: "Menengah", price: "Rp 299.000" },
            { title: "Masterclass Endgame", level: "Lanjutan", price: "Rp 499.000" },
          ].map((course, i) => (
            <div key={i} className="bg-brand-dark p-8 rounded-3xl border border-gray-800 hover:border-brand-yellow transition-all group">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-brand-yellow w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-brand-yellow text-sm font-semibold mb-4">{course.level}</p>
              <div className="space-y-3 mb-8 text-left text-gray-400">
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 20+ Video HD</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Kuis Interaktif</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Sertifikat Kelulusan</div>
              </div>
              <div className="text-3xl font-black mb-6">{course.price}</div>
              <button className="w-full bg-brand-yellow text-black font-bold py-3 rounded-xl hover:bg-brand-yellow-hover transition-colors">
                Daftar Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
