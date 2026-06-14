import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CreditCard, Truck, User, MapPin, CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    province: '',
    city: '',
    district: '',
    address: '',
    shippingMethod: 'regular',
    paymentMethod: 'bank_transfer'
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.phone || !formData.address) {
        alert('Silakan lengkapi data pengiriman Anda');
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // GTM Purchase Event (Trigger on final submission)
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'order_completed',
        ecommerce: {
          transaction_id: `ORD-${Date.now()}`,
          value: totalPrice,
          currency: 'IDR',
          items: cart.map(item => ({
            item_id: item.id,
            item_name: item.name,
            price: item.price,
            quantity: item.quantity
          }))
        }
      });
    }

    // Success redirect
    // In a real app, you'd save this to a database (e.g. Firebase)
    navigate('/order-success', { state: { orderData: { ...formData, cart, totalPrice } } });
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen bg-brand-darker text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Keranjang Anda Kosong</h2>
        <Link to="/merchandise" className="text-brand-yellow hover:underline">Kembali Belanja</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-brand-darker text-white">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-lg mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-brand-yellow text-black' : 'bg-gray-800 text-gray-500'}`}>
                {s < step ? <CheckCircle2 className="w-6 h-6" /> : s}
              </div>
              {s < 3 && (
                <div className={`h-1 w-12 md:w-24 ${step > s ? 'bg-brand-yellow' : 'bg-gray-800'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-brand-dark p-8 rounded-3xl border border-gray-800"
            >
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="text-brand-yellow" />
                    <h2 className="text-2xl font-bold">Informasi Pengiriman</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-500 uppercase font-bold mb-2">Nama Lengkap</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleInputChange}
                        placeholder="Nama Lengkap"
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 uppercase font-bold mb-2">WhatsApp / No. Telp</label>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                        placeholder="Contoh: 0812345678"
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 uppercase font-bold mb-2">Email (Opsional)</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      placeholder="email@anda.com"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 uppercase font-bold mb-2">Alamat Lengkap</label>
                    <textarea 
                      name="address" value={formData.address} onChange={handleInputChange}
                      placeholder="Nama Jalan, No. Rumah, Blok, RT/RW"
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" name="city" value={formData.city} onChange={handleInputChange}
                      placeholder="Kota/Kabupaten"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none"
                    />
                    <input 
                      type="text" name="district" value={formData.district} onChange={handleInputChange}
                      placeholder="Kecamatan"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none"
                    />
                  </div>

                  <button 
                    onClick={nextStep}
                    className="w-full bg-brand-yellow text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all"
                  >
                    Lanjut ke Pengiriman <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="text-brand-yellow" />
                    <h2 className="text-2xl font-bold">Metode Pengiriman</h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      { id: 'regular', name: 'Reguler (JNE/J&T)', time: '2-4 Hari Kerja', price: 15000 },
                      { id: 'express', name: 'Express', time: '1-2 Hari Kerja', price: 35000 },
                    ].map((m) => (
                      <label key={m.id} className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.shippingMethod === m.id ? 'border-brand-yellow bg-brand-yellow/5' : 'border-gray-800 hover:border-gray-700'}`}>
                        <div className="flex items-center gap-4">
                          <input 
                            type="radio" name="shippingMethod" value={m.id} 
                            checked={formData.shippingMethod === m.id}
                            onChange={handleInputChange}
                            className="w-5 h-5 accent-brand-yellow"
                          />
                          <div>
                            <p className="font-bold">{m.name}</p>
                            <p className="text-xs text-gray-500">{m.time}</p>
                          </div>
                        </div>
                        <p className="font-black">{formatPrice(m.price)}</p>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button onClick={prevStep} className="flex-1 border border-gray-700 py-4 rounded-xl font-bold hover:bg-gray-800">Kembali</button>
                    <button onClick={nextStep} className="flex-1 bg-brand-yellow text-black py-4 rounded-xl font-bold hover:bg-white transition-all">Metode Pembayaran</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="text-brand-yellow" />
                    <h2 className="text-2xl font-bold">Metode Pembayaran</h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      { id: 'bank_transfer', name: 'Transfer Bank Manual', desc: 'BCA, Mandiri, BNI' },
                      { id: 'ewallet', name: 'E-Wallet', desc: 'OVO, GoPay, Dana, ShopeePay' },
                    ].map((p) => (
                      <label key={p.id} className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.paymentMethod === p.id ? 'border-brand-yellow bg-brand-yellow/5' : 'border-gray-800 hover:border-gray-700'}`}>
                        <input 
                          type="radio" name="paymentMethod" value={p.id} 
                          checked={formData.paymentMethod === p.id}
                          onChange={handleInputChange}
                          className="w-5 h-5 accent-brand-yellow"
                        />
                        <div>
                          <p className="font-bold">{p.name}</p>
                          <p className="text-xs text-gray-500">{p.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700 flex gap-3 text-sm text-gray-400">
                    <Lock className="w-5 h-5 flex-shrink-0 text-brand-yellow" />
                    <p>Pembayaran akan dikonfirmasi secara manual setelah Anda mengirimkan bukti transfer di halaman berikutnya.</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={prevStep} className="flex-1 border border-gray-700 py-4 rounded-xl font-bold hover:bg-gray-800">Kembali</button>
                    <button type="submit" className="flex-1 bg-brand-yellow text-black py-4 rounded-xl font-bold hover:bg-white transition-all">Selesaikan Pesanan</button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-dark p-8 rounded-3xl border border-gray-800 sticky top-32">
              <h2 className="text-xl font-bold mb-6">Ringkasan Order</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.name} {item.size && `(${item.size})`} x {item.quantity}</span>
                    <span className="font-bold">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 pt-6 border-t border-gray-800">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Ongkos Kirim</span>
                  <span>{formData.shippingMethod === 'regular' ? formatPrice(15000) : formatPrice(35000)}</span>
                </div>
                <div className="flex justify-between text-xl font-black pt-2">
                  <span>Total</span>
                  <span className="text-brand-yellow">{formatPrice(totalPrice + (formData.shippingMethod === 'regular' ? 15000 : 35000))}</span>
                </div>
              </div>

              {step > 1 && (
                <div className="mt-8 pt-6 border-t border-gray-800 text-xs">
                  <p className="text-gray-500 uppercase font-bold mb-2">Dikirim ke:</p>
                  <p className="font-bold text-gray-300">{formData.name}</p>
                  <p className="text-gray-400">{formData.address}, {formData.city}</p>
                  <p className="text-gray-400">{formData.phone}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
