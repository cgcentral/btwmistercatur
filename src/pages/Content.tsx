import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, Zap, Users, MessageSquare, Lock, Clock, Eye, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const CATEGORIES = [
  "Rubrik Bisnis", 
  "Rubrik Motivasi", 
  "Rubrik Spiritual", 
  "Podcast", 
  "E-course"
];

const VIDEO_DATA: Record<string, any[]> = {
  "Rubrik Bisnis": [
    { id: "4l5BeOwRiG0", title: "Bingung Fokus Bisnis? Ini 10 Prinsip Orang Terkaya Dunia Biar Usaha Nggak Muter di Tempat", duration: "15:20", views: "25K" },
    { id: "QVvrAhNt8Hk", title: "JANGAN SALAH ARAH! 6 Langkah Krusial Bangun Bisnis Dari NOL | Part 1", duration: "12:45", views: "18K" },
    { id: "TAr2lndT-qM", title: "99% GAGAL DI SINI: 6 Langkah Terakhir Bangun Bisnis Dari NOL | Part 2", duration: "14:10", views: "12K" },
    { id: "a81ReGVepN0", title: "Kenapa Bisnis Padel Bisa Hancur Total di 2026?", duration: "10:30", views: "30K" },
    { id: "QTEr-v_N9sc", title: "Bisnis Franchise Cuma FOMO?! Katanya Untung Gede Tapi...", duration: "11:50", views: "22K" },
  ],
  "Rubrik Motivasi": [
    { id: "dVFAaIH-SkI", title: "Hidup Tanpa Privilege Gak Akan Sukses? Ini yang Harus Lo Lakuin!", duration: "13:15", views: "45K" },
    { id: "d8MK3swIuJk", title: "Surat untuk Diri Saya 20 Tahun Lalu: Tonton Sampai Habis!", duration: "09:40", views: "50K" },
    { id: "_Fvr7BiMdPc", title: "“Penyakit” Mental No. 1 Penyebab Hidupmu Gagal Bahagia, Kamu kah Salah Satunya?", duration: "16:20", views: "38K" },
  ],
  "Rubrik Spiritual": [
    { id: "TuLnL5D5loQ", title: "Jebakan 'Standar Dunia' yang Bikin Melarat, Apakah Kamu Termasuk?", duration: "14:30", views: "28K" },
    { id: "JyujEihA31M", title: "2 Kesalahan Fatal yang Bikin Pertolongan Allah Tertahan!", duration: "12:10", views: "35K" },
    { id: "NVezVnpSm2Y", title: "Merasa Sulit Istiqomah? Ini Penyebabnya..", duration: "11:05", views: "20K" },
  ],
  "Podcast": [
    { id: "EzLNXDxN-Ro", title: "Mudik: Antara Panggilan Surga, Tuntutan Keluarga, dan Rekening yang Menangis #BTWPODCAST67", duration: "45:00", views: "100K" },
  ],
  "E-course": [
    { title: "Beginner: buat kamu yang pemula mau belajar bisnis", locked: true, duration: "2h 30m" },
    { title: "Intermediate: buat kamu yang udah paham kelas beginner", locked: true, duration: "3h 15m" },
    { title: "Advanced: buat kamu yang udah siap scale up", locked: true, duration: "4h 00m" },
  ]
};

const CHANNEL_LINK = "https://www.youtube.com/channel/UCkTtWkZY0dL9NOl3Q3vXfSQ/";

const POLL_OPTIONS = [
  { name: "Deddy Corbuzier", percentage: 25 },
  { name: "Ferry Irwandi", percentage: 21 },
  { name: "Maudy Ayunda", percentage: 30 },
  { name: "Jerome Polin", percentage: 24 },
];

export default function Content() {
  const [activeCategory, setActiveCategory] = useState("Rubrik Bisnis");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleVote = (optionName: string) => {
    if (!hasVoted) {
      setHasVoted(true);
      setSelectedOption(optionName);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-darker relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 -right-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Header Section */}
      <section className="bg-brand-darker border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Content <span className="text-brand-blue-bright">Hub</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-12">
            Temukan video eksklusif, analisis mendalam, dan artikel menarik seputar dunia bisnis, motivasi, dan spiritualitas.
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Cari video atau topik..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-900 border border-gray-800 focus:border-brand-yellow text-white transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300",
                    activeCategory === cat 
                      ? "bg-brand-blue text-white shadow-[0_0_15px_rgba(0,74,173,0.4)]" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  )}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {VIDEO_DATA[activeCategory]
                .filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((video, idx) => (
                <div 
                  key={idx} 
                  className="group bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800 hover:border-brand-yellow/50 transition-all cursor-pointer"
                  onClick={() => video.id && window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {/* Blue gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    {video.locked ? (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-brand-blue-bright/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-brand-blue-bright" />
                          </div>
                          <span className="text-brand-blue-bright font-bold">Konten Terkunci</span>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                    )}
                    
                    {!video.locked && (
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all">
                          <Play className="w-6 h-6 text-black fill-black ml-1" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute top-3 left-3 bg-brand-yellow text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {activeCategory}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 group-hover:text-brand-blue-bright transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {video.duration}
                      </span>
                      {!video.locked && (
                        <span className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" /> {video.views} Views
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Watch More Button */}
          <div className="mt-16 text-center">
            <a 
              href={CHANNEL_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 px-10 rounded-full transition-all group shadow-[0_0_20px_rgba(0,74,173,0.3)]"
            >
              Watch More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Community Hub Section */}
      <section className="py-24 bg-brand-darker border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-brand-yellow" />
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Community <span className="text-brand-yellow">Hub</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              Suaramu penting! Pilih tamu selanjutnya atau kirim saran episode.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Poll Card */}
            <div className="bg-gray-900/50 p-8 rounded-[32px] border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-brand-yellow">👍</span> Siapa tamu selanjutnya?
              </h3>
              <div className="space-y-4">
                {POLL_OPTIONS.map((option) => (
                  <div 
                    key={option.name}
                    onClick={() => handleVote(option.name)}
                    className={cn(
                      "relative p-5 rounded-2xl border transition-all cursor-pointer group overflow-hidden",
                      selectedOption === option.name 
                        ? "bg-brand-yellow/5 border-brand-yellow" 
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                    )}
                  >
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="font-bold text-white">{option.name}</span>
                      {hasVoted && (
                        <motion.span 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="font-black text-brand-yellow"
                        >
                          {option.percentage}%
                        </motion.span>
                      )}
                    </div>
                    {hasVoted && (
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${option.percentage}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={cn(
                          "absolute inset-y-0 left-0 transition-all",
                          selectedOption === option.name ? "bg-brand-yellow/20" : "bg-gray-700/30"
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-500">Total votes: 13,598</p>
            </div>

            {/* Suggestion Form Card */}
            <div className="bg-gray-900/50 p-8 rounded-[32px] border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-brand-blue-bright">🚀</span> Saran Episode
              </h3>
              <p className="text-gray-400 mb-8">
                Punya ide tamu atau topik menarik? Kirim saranmu di sini!
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nama kamu" 
                  className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                />
                <textarea 
                  placeholder="Tulis saran tamu atau topik episode..." 
                  rows={4}
                  className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                />
                <button 
                  type="button"
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black font-black py-4 rounded-2xl transition-all transform hover:scale-[1.02]"
                >
                  Kirim Saran
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
