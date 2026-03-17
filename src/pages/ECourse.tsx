import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Play, Star, CheckCircle, Lock } from 'lucide-react';

const COURSES = [
  { 
    title: "Beginner", 
    level: "Pemula", 
    price: "Rp 149.000", 
    desc: "buat kamu yang pemula mau belajar bisnis",
    lessons: "12 Lessons"
  },
  { 
    title: "Intermediate", 
    level: "Menengah", 
    price: "Rp 299.000", 
    desc: "buat kamu yang udah paham kelas beginner",
    lessons: "15 Lessons"
  },
  { 
    title: "Advanced", 
    level: "Lanjutan", 
    price: "Rp 499.000", 
    desc: "buat kamu yang udah siap scale up",
    lessons: "20 Lessons"
  },
];

export default function ECourse() {
  return (
    <div className="pt-20 min-h-screen bg-brand-darker text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <section className="py-20 px-4 max-w-7xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-6"
        >
          E-Course <span className="text-brand-blue-bright">Mister Catur</span>
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
          Tingkatkan level strategi bisnis dan permainan Anda dengan kurikulum terstruktur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, i) => (
            <div key={i} className="bg-gray-900/50 p-8 rounded-[32px] border border-gray-800 hover:border-brand-yellow/50 transition-all group relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Lock className="w-5 h-5 text-brand-blue" />
              </div>
              
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-brand-blue w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-brand-yellow text-sm font-semibold mb-4 uppercase tracking-wider">{course.level}</p>
              <p className="text-gray-400 mb-8 min-h-[3rem]">{course.desc}</p>
              
              <div className="space-y-3 mb-8 text-left text-gray-400">
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-blue" /> {course.lessons}</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-blue" /> Kuis Interaktif</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-blue" /> Sertifikat Kelulusan</div>
              </div>
              
              <div className="text-3xl font-black mb-8 text-white">{course.price}</div>
              
              <button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-black py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,74,173,0.3)]">
                Daftar Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
