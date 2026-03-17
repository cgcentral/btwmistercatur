import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "04084eac-f8b9-4504-bb20-fa4545f220f0");

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
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-brand-dark">
      {/* Header Section */}
      <section className="bg-white dark:bg-brand-darker border-b border-gray-200 dark:border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Media <span className="text-brand-blue">Partnership</span> & Contact
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi, mensponsori acara, atau sekadar menyapa? Kami selalu terbuka untuk peluang baru.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mari Berkolaborasi</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  BTW Mister Catur adalah platform yang tepat untuk menjangkau audiens yang cerdas, strategis, dan antusias. Kami menawarkan berbagai paket sponsorship, product placement, dan kolaborasi konten eksklusif.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a href="mailto:mistercatur88@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors">
                      mistercatur88@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">WhatsApp / Telepon</h3>
                    <a 
                      href="https://wa.me/6285121249997" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
                    >
                      +62 851 2124 9997
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Kantor</h3>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Jl.+Ciputat+Raya+No.1b,+RT.1/RW.8,+Pd.+Pinang,+Kec.+Kebayoran+Lama,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12310"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors block"
                    >
                      Jl. Ciputat Raya No.1b, RT.1/RW.8, Pd. Pinang, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Kirim Pesan</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-blue font-bold hover:underline"
                  >
                    Kirim pesan lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-gray-900 dark:text-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Perusahaan / Instansi</label>
                      <input 
                        type="text" 
                        name="company"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-gray-900 dark:text-white transition-all"
                        placeholder="PT Catur Nusantara"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-gray-900 dark:text-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Topik</label>
                    <select name="subject" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-gray-900 dark:text-white transition-all appearance-none">
                      <option>Sponsorship</option>
                      <option>Media Partnership</option>
                      <option>Undangan Event</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-gray-900 dark:text-white transition-all resize-none"
                      placeholder="Ceritakan detail penawaran atau pertanyaan Anda..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-xl transition-transform transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
