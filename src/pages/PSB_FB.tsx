import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, ArrowRight, Star, Quote, HelpCircle, Gift, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PSB_FB() {
  const features = [
    {
      title: "Mindset Shift",
      desc: "Mengubah mindset lo dari sekadar 'Kerja Keras Mengejar Gaji' menjadi tahu persis apa Peran Sejati lo di dunia, yang bikin hidup lebih bermakna dan nggak gampang kosong."
    },
    {
      title: "Resilience Technique",
      desc: "Teknik menghancurkan rasa gagal dan putus asa saat karir mentok atau bisnis hancur, dan mengubah cara pandang lo bahwa itu adalah didikan langsung dari Sang Sutradara."
    },
    {
      title: "Marketing Langit",
      desc: "Memiliki strategi 'Marketing Langit' yang bikin lo jadi prioritas (Top of Mind) di hadapan Tuhan, bukan sekadar hamba biasa yang doanya sering tertunda."
    },
    {
      title: "Spiritual Psychology",
      desc: "Rahasia psikologi spiritual untuk berhenti 'meng-cancel' doa lo sendiri (Percaya Tanpa Tapi), menyelaraskan pikiran dan perasaan untuk menarik rezeki dan kemudahan."
    },
    {
      title: "Consistency (Istiqomah)",
      desc: "Cara elegan membangun konsistensi berprogres (Istiqomah): Bikin lo terus bertumbuh tanpa paksaan, bukan sekadar jalan di tempat atau rutinitas yang monoton."
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
      a: "Anda akan mendapatkan Buku Pulang Sebelum Berlari dan Voucher Umroh 1JT khusus untuk Anda. *satu nama hanya untuk satu voucher."
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
            Capek Gak Sih Hidup Lo <span className="text-brand-yellow">gini-gini Aja?</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 font-medium"
          >
            Hidup Terasa Flat Hambar dan Ga Punya Arah? Jawaban yang selama ini lo cari ada disini..!
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
              <h2 className="text-3xl font-black mb-8">Pulang Sebelum Berlari</h2>
              <div className="space-y-6">
                {[
                  "Wajar aja selalu lelah meski pekerjaan terlihat baik-baik saja",
                  "Wajar aja udah berusaha keras, tapi tetap merasa tidak ke mana-mana",
                  "Wajar aja hidup hanya terasa rutinitas",
                  "Sering bertanya dalam hati, \"Sebenarnya aku sedang mengejar apa?\""
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
                src="http://btwmistercatur.com/wp-content/uploads/2026/02/images_8834891768483526954.jpg"
                alt="Buku Pulang Sebelum Berlari"
                className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Apa yang Akan Lo Pelajari?</h2>
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
                <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                  <Star className="w-7 h-7" />
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
                src="http://btwmistercatur.com/wp-content/uploads/2026/03/BTW-MISTER-CATUR-AND-FRIENDS-REV-2-1-scaled.png"
                alt="Mister Catur"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-black mb-6">Siapa Mister Catur?</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Mister Catur adalah kreator di balik channel YouTube BTW (Breaktime With), yang aktif membagikan insight seputar bisnis, kehidupan, dan spiritualitas. Di masa pandemi, ia pernah menghadapi kebangkrutan dan kerugian bisnis yang besar.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Namun, proses jatuh dan bangkit itulah yang membentuk perspektif barunya dalam melihat makna hidup, peran kita, dan cara menemukan ketenangan di tengah kekacauan—yang semuanya ia tuangkan secara jujur dalam buku ini.
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

      {/* Gift Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-yellow to-yellow-600 rounded-[40px] p-12 text-black text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32" />
          <Gift className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">Hadiah Spesial Untukmu</h2>
          <p className="text-xl font-bold mb-8 opacity-90">FREE VOUCHER UMROH Rp 1 JUTA</p>
          <p className="text-lg max-w-2xl mx-auto font-medium">
            "Kenyamanan & ketenangan dalam setiap langkah menuju Baitullah"
          </p>
          <p className="text-xs mt-8 opacity-60">*Syarat dan ketentuan berlaku</p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-12">Ingin bacaan yang menemani perjalanan pencarian dirimu?</h2>
          
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
              <p className="text-5xl font-black text-brand-yellow">Rp 169.000</p>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <Link
                to="/merchandise"
                className="inline-flex items-center gap-3 px-12 py-6 bg-brand-yellow text-black rounded-2xl font-black text-xl hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-brand-yellow/30"
              >
                Beli Sekarang Melalui Merchandise <ShoppingBag className="w-6 h-6" />
              </Link>
              
              <a
                href="https://wa.me/628131583298?text=Halo%20kak%20Saya%20mau%20tanya%20harga%20grosir%20Buku%20Pulang%20Sebelum%20Berlari%20nya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-yellow hover:underline flex items-center gap-2 font-bold mt-4"
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
