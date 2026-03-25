import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, Zap, Users, MessageSquare, Lock, Clock, Eye } from 'lucide-react';
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

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Rubrik Bisnis");
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleVote = (optionName: string) => {
    if (!hasVoted) {
      setHasVoted(true);
      setSelectedOption(optionName);
    }
  };

  const handleSuggestionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ab490da2-84ae-4a33-80b2-a58133b848dc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      alert("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-12 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="http://btwmistercatur.com/wp-content/uploads/2026/03/AD-1-scaled.jpg" 
            alt="Studio background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/80 to-transparent" />
          {/* Blue glow accent */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-brand-blue-bright/30 bg-brand-blue-bright/5 text-brand-blue-bright font-bold text-xs mt-4 md:mt-0 mb-6 uppercase tracking-[0.2em]">
                Monolog . Podcast . E-course
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 text-white">
                Break Time <br className="hidden md:block" />
                <span className="text-brand-yellow">With Mister Catur</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-10 leading-relaxed font-medium">
                Jeda Reflektif: Bisnis Jujur, Motivasi Membumi, & Spiritualitas Menenangkan.
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-[16/10] group bg-black">
                <iframe
                  src="https://www.youtube.com/embed/0Ouxl_9hccM?autoplay=0&rel=0"
                  title="Siapa Mister Catur?"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pointer-events-none">
                  <div className="bg-brand-yellow text-black text-[10px] font-black px-3 py-1 rounded-full w-fit mb-2 uppercase tracking-wider">
                    Eksklusif
                  </div>
                  <h3 className="text-white text-xl font-bold">Siapa Mister Catur?</h3>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 lg:-bottom-24 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Subscribers</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">12K+</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section (Moved Up and Updated) */}
      <section className="py-12 md:py-24 bg-brand-darker relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-white">
              Episode <span className="text-brand-yellow">Terbaru</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Jelajahi koleksi episode kami. Temukan cerita inspiratif dari berbagai bidang.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-brand-yellow text-black shadow-[0_0_15px_rgba(255,215,0,0.4)]" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Content Grid with Animation */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {VIDEO_DATA[activeCategory].map((video, idx) => (
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
          </div>
          
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
      <section className="py-12 md:py-24 bg-brand-darker border-t border-white/5">
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
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Saran Terkirim!</h4>
                  <p className="text-gray-400 mb-6">Terima kasih atas idemu. Kami akan mempertimbangkannya untuk episode mendatang.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-yellow font-bold hover:underline"
                  >
                    Kirim saran lain
                  </button>
                </motion.div>
              ) : (
                <>
                  <p className="text-gray-400 mb-8">
                    Punya ide tamu atau topik menarik? Kirim saranmu di sini!
                  </p>
                  <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Nama kamu" 
                      className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                    <textarea 
                      name="suggestion"
                      required
                      placeholder="Tulis saran tamu atau topik episode..." 
                      rows={4}
                      className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black font-black py-4 rounded-2xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Kirim Saran"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
