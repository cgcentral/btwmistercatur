import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, ArrowRight, Star, Quote, HelpCircle, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrderOnlineEmbed from '../components/OrderOnlineEmbed';
import { getOptimizedImageUrl } from '../utils/image';

export default function PSB_FB() {
  const [activeSlide, setActiveSlide] = useState(0);

  const graphicTestimonials = [
    "http://btwmistercatur.com/wp-content/uploads/2026/06/Bosen-baca-buku-pengembangan-diri-yang-isinya-cuma-nyuruh-gas-pol-🛑Saatnya-baca-buku-yang-ber-1-1024x1024-1.webp",
    "http://btwmistercatur.com/wp-content/uploads/2026/06/Bosen-baca-buku-pengembangan-diri-yang-isinya-cuma-nyuruh-gas-pol-🛑Saatnya-baca-buku-yang-ber-2-1024x1024-1.webp",
    "http://btwmistercatur.com/wp-content/uploads/2026/06/Bosen-baca-buku-pengembangan-diri-yang-isinya-cuma-nyuruh-gas-pol-🛑Saatnya-baca-buku-yang-ber-1024x1024-1.webp",
    "http://btwmistercatur.com/wp-content/uploads/2026/06/Bukan-sekadar-motivasi-tapi-panduan-jujur-untuk-menemukan-peran-yang-Allah-titipkan-pada-kita.-1024x1024-1.webp",
    "http://btwmistercatur.com/wp-content/uploads/2026/06/Bukan-sekadar-motivasi-tapi-panduan-jujur-untuk-menemukan-peran-yang-Allah-titipkan-pada-kita.-1-1024x1024-1.webp",
    "http://btwmistercatur.com/wp-content/uploads/2026/06/Buku-Pulang-Sebelum-Berlari-mengajak-kita-menata-hati-meluruskan-tujuan-dan-mengundang-rezeki-1024x1024-1.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % graphicTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [graphicTestimonials.length]);

  const features = [
    {
      title: "Panggung Peran (Jati Diri dari Langit)",
      desc: "Menemukan peran sejati Anda sebagai 'Wayang' di bawah skenario Sang Dalang. Memisahkan antara 'kostum' profesi sementara dengan misi abadi yang sesungguhnya Allah titipkan."
    },
    {
      title: "Resiliensi Tingkat Tinggi",
      desc: "Belajar mengurai hikmah di balik krisis keuangan ratusan miliar hingga bangkit tegak kembali. Strategi tulus menghadapi kegagalan sebagai bentuk didikan cinta dari Allah SWT."
    },
    {
      title: "Marketing & Branding Langit",
      desc: "Rahasia masuk dalam daftar prioritas (Top of Mind) di hadapan Pencipta. Memasarkan niat tulus Anda melalui bakti orang tua (tiru kisah mulia Qais Al-Qarni) & sedekah tanpa tapi."
    },
    {
      title: "Bahasa Tuhan Adalah Bahasa Rasa",
      desc: "Aspek ilmiah di balik doa di dunia kuantum. Mengatur gelombang otak Epsilon (0.1 Hz) & Gamma agar perasaan dan keyakinan selaras demi menghindari do'a yang ter-cancel."
    },
    {
      title: "Seni Istiqomah (Gradual Increment)",
      desc: "Mempelajari esensi Istiqomah sebagai 'Gradually Increment' (tumbuh naik bertahap 1% setiap hari). Bukan sekadar konsisten stagnan, melainkan ikhtiar dinamis melahirkan versi terbaik diri."
    },
    {
      title: "Support System & Energi Berkah",
      desc: "Mengapa Anda butuh lingkaran terdekat untuk bertawakal dengan benar? Meneladani keteguhan batin orang tua Putri Ariani dan ketegasan guru spiritual Sultan Muhammad Al-Fatih."
    }
  ];

  const testimonials = [
    {
      name: "Laras",
      text: "Gak nyesel check out buku ini, materinya gampang nempel di kepala. Beneran sesuai judulnya, buku ini bikin kita napas bentar, 'pulang' buat benerin niat, terus lanjut 'berlari' lagi ngejar target. Vibes nya energizing banget!"
    },
    {
      name: "Andiana",
      text: "Rasanya kayak ditampar bolak-balik. selama ini sibuk ngejar karir dan validasi, tapi lupa peran sejati di mata Allah itu apa. Habis baca ini, mindset berangkat kerja langsung beda, lebih tenang dan less pressure."
    },
    {
      name: "Ikhsan",
      text: "Buku bener-bener ngebuka pikiran saya. Ternyata selama ini aku terlalu sibuk caper narik perhatian manusia, tapi lupa 'caper' sama Sang Pemberi Rezeki."
    },
    {
      name: "Fajar Susilo",
      text: "Sambil baca langsung sadar, iya apa peran saya ya selama ini. Langsung lebih terarah sekarang mencari dan berdoa agar peran untuk saya segera saya dapatkan. Buku yang sangat rekomen untuk dibaca dan dipraktekan."
    }
  ];

  const faqs = [
    {
      q: "Kapan pesanan saya dikirim?",
      a: "Pesanan Anda akan dikirim langsung di hari yang sama jika order sebelum jam 3 sore di hari senin-jumat."
    },
    {
      q: "Apa saja yang saya dapatkan?",
      a: "Anda akan mendapatkan Buku Pulang Sebelum Berlari yang siap membantu perjalanan pencarian jati diri Anda."
    },
    {
      q: "Apakah bisa daftar reseller?",
      a: "Tentu bisa, silakan tanyakan admin dengan klik tombol WhatsApp di samping untuk informasi pendaftaran."
    }
  ];

  return (
    <div className="bg-brand-darker text-white min-h-screen font-sans selection:bg-brand-yellow selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-sm font-bold mb-8"
          >
            Buku Best Seller oleh Mister Catur
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight mb-8"
          >
            Berhenti Sejenak Sebelum Anda <span className="text-brand-yellow">Kehabisan Waktu.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 font-medium"
          >
            Menemukan Ketenangan, Makna Hidup, dan Keberlimpahan Melalui Prinsip "Hidup Taat, Sehat, & Manfaat".
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#order"
              className="px-10 py-5 bg-brand-yellow text-black rounded-2xl font-black text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-brand-yellow/20 flex items-center gap-3"
            >
              Mau Bukunya Sekarang <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-brand-dark/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black mb-8">Hidup Terasa Lelah Meski Bisnis Berjalan?</h2>
              <div className="space-y-6">
                {[
                  "Terjebak dalam rutinitas mengejar angka tanpa makna",
                  "Bertanya dalam hati, \"Apa ini benar jalan yang Allah inginkan?\"",
                  "Sukses materi sudah di tangan, tapi jiwa terasa kosong",
                  "Ingin belajar bagaimana menjadi 'Wayang' yang dicintai sang Dalang"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 p-1 bg-red-500/20 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-lg text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-yellow/20 blur-[100px] rounded-full" />
              <img
                src={getOptimizedImageUrl("http://btwmistercatur.com/wp-content/uploads/2026/02/images_8834891768483526954.jpg", { width: 400 })}
                alt="Buku Pulang Sebelum Berlari"
                className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
                width={400}
                height={550}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Apa yang Akan Anda Pelajari?</h2>
            <p className="text-gray-400 text-lg">Buku ini bukan sekadar teori, tapi panduan praktis untuk hidup lebih bermakna.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-brand-dark rounded-3xl border border-gray-800 hover:border-brand-yellow/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6">
                  {/* Default State */}
                  <div className="absolute inset-0 bg-brand-yellow/10 flex items-center justify-center text-brand-yellow transition-opacity duration-300 group-hover:opacity-0">
                    <Star className="w-7 h-7" />
                  </div>
                  {/* Hover State - Composited Opacity */}
                  <div className="absolute inset-0 bg-brand-yellow flex items-center justify-center text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Star className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-gradient-to-br from-brand-blue/20 to-brand-dark border border-brand-blue/30 rounded-[40px] text-center">
            <Quote className="w-12 h-12 text-brand-yellow mx-auto mb-8 opacity-50" />
            <h3 className="text-2xl md:text-4xl font-black italic leading-tight max-w-4xl mx-auto">
              "Hidup bukan tentang seberapa cepat kamu berlari, tapi tentang apakah kamu sadar peran apa yang sedang kamu mainkan."
            </h3>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-20 px-4 bg-brand-dark/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <img
                src={getOptimizedImageUrl("http://btwmistercatur.com/wp-content/uploads/2026/06/images_2722491769586762089-1.webp", { width: 400 })}
                alt="Logo Mister Catur"
                className="w-full hover:scale-105 transition-all duration-500 rounded-3xl shadow-2xl border border-gray-800/80 bg-brand-dark/40"
                referrerPolicy="no-referrer"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-black mb-6">Mengenal Mister Catur</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                "Bakti pada orang tua, sedekah tanpa tapi, dan menjaga amanah adalah mesin utama pertumbuhan bisnis yang barokah. Saya tuangkan formula jatuh-bangun saya di sini." — <strong>Muhamad Catur Gunandi</strong>
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Sebelum membangun gurita bisnis di bawah naungan <strong>CGLINK</strong> dengan rekam jejak omzet ratusan miliar, <strong>Muhamad Catur Gunandi (Mister Catur)</strong> meniti karir profesional langka di raksasa korporasi dunia seperti <strong>Astra (DHTSU), Garuda Indonesia, Pertamina, Medco Energy</strong>, hingga menembus posisi berharga sebagai <strong>secondie di McKinsey</strong>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-bold text-brand-yellow">
                Ayah dari tiga putri shalihah ini merangkum seluruh esensi perjuangan hidupnya dalam tiga pilar penuntun: "Hidup Taat, Hidup Sehat, Hidup Manfaat."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-400 text-lg">Buku ini telah menemani perjalanan banyak pembaca menemukan kembali langkah mereka. Baca pengalaman jujur mereka di bawah ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-brand-dark rounded-3xl border border-gray-800 relative"
              >
                <div className="flex gap-1 text-brand-yellow mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 text-lg italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full" />
                  <span className="font-bold text-brand-yellow">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Testimonial Slides Section */}
      <section className="py-24 px-4 bg-brand-dark/40 border-t border-b border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-brand-yellow">Review & Rekomendasi</h2>
            <p className="text-gray-400">Geser atau tunggu untuk melihat testimoni penuh makna tentang esensi isi buku.</p>
          </div>

          <div className="relative group">
            {/* Main Visual Slider Container */}
            <div className="overflow-hidden rounded-3xl border border-gray-800 bg-brand-dark/80 shadow-2xl relative aspect-square flex items-center justify-center">
              {graphicTestimonials.map((imgUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeSlide === index ? 1 : 0,
                    scale: activeSlide === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center ${activeSlide === index ? 'z-10' : 'z-0 pointer-events-none'}`}
                >
                  <img
                    src={getOptimizedImageUrl(imgUrl, { width: 1024 })}
                    alt={`Testimoni Alumnus ${index + 1}`}
                    className="w-full h-full object-contain rounded-3xl"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </motion.div>
              ))}

              {/* Prev Button */}
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + graphicTestimonials.length) % graphicTestimonials.length)}
                className="absolute left-4 z-20 p-3 rounded-full bg-brand-dark/90 border border-gray-800 hover:bg-brand-yellow hover:text-brand-dark hover:scale-110 active:scale-95 transition-all text-white shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % graphicTestimonials.length)}
                className="absolute right-4 z-20 p-3 rounded-full bg-brand-dark/90 border border-gray-800 hover:bg-brand-yellow hover:text-brand-dark hover:scale-110 active:scale-95 transition-all text-white shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {graphicTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-10 bg-brand-yellow' : 'w-3 bg-gray-700 hover:bg-gray-600'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-brand-dark/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
            <h2 className="text-4xl font-black mb-4">FAQ</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-brand-dark rounded-2xl border border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-brand-yellow">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="order" className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Siap Melangkah Menuju Peran Sejati Anda?</h2>
          
          <div className="bg-brand-dark p-12 rounded-[40px] border border-gray-800 mb-12">
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 opacity-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center rotate-12">
                  <span className="text-red-500 font-black text-2xl border-4 border-red-500 px-4 py-2">SOLD OUT</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">SLOT RP 99RB MEMBER</p>
                <p className="text-2xl font-black line-through">Rp 99.000</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 opacity-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center rotate-12">
                  <span className="text-red-500 font-black text-2xl border-4 border-red-500 px-4 py-2">SOLD OUT</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">SLOT SPESIAL RP 119RB</p>
                <p className="text-2xl font-black line-through">Rp 119.000</p>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-400 mb-4">Harga Normal</p>
              <p className="text-5xl font-black text-brand-yellow mb-12">Rp 169.000</p>
              
              <div className="max-w-xl mx-auto">
                <OrderOnlineEmbed />
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 items-center">
              <a
                href="https://wa.me/628131583298?text=Halo%20kak%20Saya%20mau%20tanya%20harga%20grosir%20Buku%20Pulang%20Sebelum%20Berlari%20nya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-yellow hover:underline flex items-center gap-2 font-bold"
              >
                📦 Spesial Harga Reseller! (Min. 5 Buku) <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 items-center text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Stok Terbatas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Pengiriman Cepat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6285121249997"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
          Tanya Admin
        </span>
      </a>
    </div>
  );
}
