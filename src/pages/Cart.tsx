import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Silakan lengkapi data penerima terlebih dahulu');
      return;
    }

    if (cart.length === 0) {
      alert('Keranjang Anda masih kosong');
      return;
    }

    let message = `Halo, saya ingin memesan:\n\n`;
    cart.forEach(item => {
      message += `- ${item.name}${item.size ? ` (Size: ${item.size})` : ''} x ${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\nTotal: ${formatPrice(totalPrice)}\n\n`;
    message += `Untuk pengiriman:\n`;
    message += `Nama: ${formData.name}\n`;
    message += `Nomor: ${formData.phone}\n`;
    message += `Alamat: ${formData.address}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285121249997?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen bg-brand-darker text-white flex flex-col items-center justify-center">
        <div className="bg-brand-dark p-12 rounded-3xl border border-gray-800 text-center max-w-md w-full">
          <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Keranjang Kosong</h2>
          <p className="text-gray-400 mb-8">Anda belum menambahkan produk apapun ke keranjang.</p>
          <Link 
            to="/merchandise" 
            className="inline-flex items-center gap-2 bg-brand-yellow text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Belanja Sekarang
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-brand-darker text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/merchandise" className="p-2 bg-gray-800 rounded-full hover:bg-brand-yellow hover:text-black transition-all">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-4xl font-black">Keranjang <span className="text-brand-yellow">Belanja</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="bg-brand-dark p-6 rounded-3xl border border-gray-800 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  {item.size && <p className="text-sm text-brand-yellow mb-2">Size: {item.size}</p>}
                  <p className="text-gray-400 font-medium">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-800 p-2 rounded-2xl">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                    className="p-2 hover:text-brand-yellow transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                    className="p-2 hover:text-brand-yellow transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-right min-w-[120px]">
                  <p className="text-xl font-black text-brand-yellow">{formatPrice(item.price * item.quantity)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="p-3 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </div>
            ))}
            
            <button 
              onClick={clearCart}
              className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Trash2 className="w-4 h-4" />
              Kosongkan Keranjang
            </button>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <div className="bg-brand-dark p-8 rounded-3xl border border-gray-800 sticky top-32">
              <h2 className="text-2xl font-bold mb-8">Detail Pesanan</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-400 border-b border-gray-800 pb-4">
                  <span>Pengiriman</span>
                  <span className="text-green-500">Dihitung saat chat</span>
                </div>
                <div className="flex justify-between text-2xl font-black">
                  <span>Total</span>
                  <span className="text-brand-yellow">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-gray-300">Data Penerima</h3>
                <div>
                  <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-3 focus:outline-none focus:border-brand-yellow transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Contoh: 08123456789"
                    className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-3 focus:outline-none focus:border-brand-yellow transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase font-bold mb-2 ml-1">Alamat Lengkap</label>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Masukkan alamat pengiriman"
                    rows={3}
                    className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-3 focus:outline-none focus:border-brand-yellow transition-all resize-none"
                  />
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-brand-yellow text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02] shadow-xl"
              >
                <Send className="w-5 h-5" />
                Pesan via WhatsApp
              </button>
              
              <p className="text-center text-gray-500 text-xs mt-6">
                Pesanan akan diteruskan ke WhatsApp admin untuk proses pembayaran dan pengiriman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
