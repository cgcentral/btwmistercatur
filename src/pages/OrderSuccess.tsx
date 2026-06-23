import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Copy, MessageCircle, ArrowRight, Download } from 'lucide-react';
import { useLocation, Link, Navigate } from 'react-router-dom';

export default function OrderSuccess() {
  const location = useLocation();
  const orderData = location.state?.orderData;

  useEffect(() => {
    if (orderData && typeof window !== 'undefined') {
      const shippingCost = orderData.shippingMethod === 'regular' ? 15000 : 35000;
      const totalAmount = orderData.totalPrice + shippingCost;

      // Track Meta Pixel Purchase event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          value: totalAmount,
          currency: 'IDR',
          content_type: 'product',
          contents: orderData.cartItems ? orderData.cartItems.map((item: any) => ({
            id: item.id || 'book-psb',
            quantity: item.quantity || 1,
            item_price: item.price || orderData.totalPrice
          })) : [{
            id: 'book-psb',
            quantity: 1,
            item_price: orderData.totalPrice
          }]
        });
      }

      // Track GTM Conversion event
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'purchase_success',
          ecommerce: {
            transaction_id: `ORDER_${Date.now()}`,
            value: totalAmount,
            currency: 'IDR',
            shipping: shippingCost,
            items: orderData.cartItems ? orderData.cartItems.map((item: any) => ({
              item_id: item.id || 'book-psb',
              item_name: item.title || 'Buku Pulang Sebelum Berlari',
              price: item.price || orderData.totalPrice,
              quantity: item.quantity || 1
            })) : [{
              item_id: 'book-psb',
              item_name: 'Buku Pulang Sebelum Berlari',
              price: orderData.totalPrice,
              quantity: 1
            }]
          }
        });
      }

      // Track GA4 conversion
      if ((window as any).gtag) {
        (window as any).gtag('event', 'purchase', {
          transaction_id: `ORDER_${Date.now()}`,
          value: totalAmount,
          currency: 'IDR',
          shipping: shippingCost,
          items: orderData.cartItems ? orderData.cartItems.map((item: any) => ({
            item_id: item.id || 'book-psb',
            item_name: item.title || 'Buku Pulang Sebelum Berlari',
            price: item.price || orderData.totalPrice,
            quantity: item.quantity || 1
          })) : [{
            item_id: 'book-psb',
            item_name: 'Buku Pulang Sebelum Berlari',
            price: orderData.totalPrice,
            quantity: 1
          }]
        });
      }
    }
  }, [orderData]);

  if (!orderData) {
    return <Navigate to="/merchandise" replace />;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Nomor rekening berhasil disalin');
  };

  const handleConfirmWhatsApp = () => {
    const message = `Halo Admin BTW, saya ingin konfirmasi pembayaran untuk pesanan:\n\n` +
      `Nama: ${orderData.name}\n` +
      `Total Bayar: ${formatPrice(orderData.totalPrice + (orderData.shippingMethod === 'regular' ? 15000 : 35000))}\n` +
      `Alamat: ${orderData.address}\n\n` +
      `Saya akan segera mengirimkan bukti transfernya. Terima kasih!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285121249997?text=${encodedMessage}`, '_blank');
  };

  const totalToPay = orderData.totalPrice + (orderData.shippingMethod === 'regular' ? 15000 : 35000);

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-brand-darker text-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-4xl font-black mb-4">Pesanan Berhasil!</h1>
        <p className="text-gray-400 mb-12 text-lg">Terima kasih <span className="text-white font-bold">{orderData.name}</span>! Pesanan Anda telah kami terima dan sedang menunggu pembayaran.</p>

        <div className="bg-brand-dark p-8 rounded-3xl border border-gray-800 text-left mb-8">
          <h2 className="text-xl font-bold mb-6 flex justify-between items-center">
            Instruksi Pembayaran
            <span className="text-xs bg-brand-yellow/10 text-brand-yellow px-3 py-1 rounded-full">Menunggu Transfer</span>
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <p className="text-sm text-gray-400 mb-2">Total yang harus dibayar:</p>
              <div className="text-3xl font-black text-brand-yellow">{formatPrice(totalToPay)}</div>
              <p className="text-[10px] text-gray-500 mt-2">*Mohon transfer sesuai nominal di atas untuk mempermudah verifikasi.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Bank BCA</p>
                  <p className="font-mono text-lg font-bold">1234567890</p>
                  <p className="text-xs text-gray-400">A/N Mister Catur Corporation</p>
                </div>
                <button onClick={() => copyToClipboard('1234567890')} className="p-2 hover:text-brand-yellow transition-colors">
                  <Copy className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Dana / OVO</p>
                  <p className="font-mono text-lg font-bold">085121249997</p>
                  <p className="text-xs text-gray-400">A/N Mister Catur</p>
                </div>
                <button onClick={() => copyToClipboard('085121249997')} className="p-2 hover:text-brand-yellow transition-colors">
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={handleConfirmWhatsApp}
            className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-500 transition-all shadow-xl shadow-green-600/20"
          >
            <MessageCircle className="w-6 h-6" />
            Konfirmasi Via WhatsApp
          </button>
          <Link 
            to="/merchandise"
            className="w-full bg-gray-800 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-700 transition-all"
          >
            Kembali ke Toko <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Pesanan akan diproses maksimal 1x24 jam setelah bukti transfer dikonfirmasi oleh admin.
        </p>
      </div>
    </div>
  );
}
