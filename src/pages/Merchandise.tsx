import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Merchandise() {
  const { addToCart, totalItems } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const products = [
    { 
      id: "tshirt-1",
      name: "T-Shirt BTW Ed. 1", 
      oldPrice: "Rp 179.000", 
      price: 149000, 
      priceDisplay: "Rp 149.000",
      sizes: ["M", "L", "XL"],
      img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.13-1.jpeg",
      imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.13.jpeg"
    },
    { 
      id: "buku-1",
      name: "Buku Pulang Sebelum Berlari", 
      oldPrice: "Rp 199.000", 
      price: 169000, 
      priceDisplay: "Rp 169.000",
      img: "http://btwmistercatur.com/wp-content/uploads/2026/02/images_8834891768483526954.jpg" 
    },
    { 
      id: "tshirt-2",
      name: "T-Shirt BTW Ed. 2", 
      oldPrice: "Rp 179.000", 
      price: 149000, 
      priceDisplay: "Rp 149.000",
      sizes: ["M", "L", "XL"],
      img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15-3.jpeg",
      imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15-2.jpeg"
    },
    { 
      id: "tshirt-3",
      name: "T-Shirt BTW Ed. 3", 
      oldPrice: "Rp 179.000", 
      price: 149000, 
      priceDisplay: "Rp 149.000",
      sizes: ["M", "L", "XL"],
      img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15-1.jpeg",
      imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.15.jpeg"
    },
    { 
      id: "tshirt-4",
      name: "T-Shirt BTW Ed. 4", 
      oldPrice: "Rp 179.000", 
      price: 149000, 
      priceDisplay: "Rp 149.000",
      sizes: ["M", "L", "XL"],
      img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.14-2.jpeg",
      imgHover: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.07.14-1.jpeg"
    },
    { 
      id: "headwear-1",
      name: "Headwear", 
      oldPrice: "Rp 129.000", 
      price: 99000, 
      priceDisplay: "Rp 99.000",
      img: "http://btwmistercatur.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-26-at-15.09.32.jpeg" 
    },
  ];

  const handleAddToCart = (product: any) => {
    if (product.sizes && !selectedSizes[product.id]) {
      alert('Silakan pilih ukuran terlebih dahulu');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSizes[product.id],
      img: product.img
    });

    // GTM AddToCart Event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'add_to_cart',
        ecommerce: {
          items: [{
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            item_variant: selectedSizes[product.id],
            quantity: 1
          }]
        }
      });
    }

    setAddedItems({ ...addedItems, [product.id]: true });
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-darker text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black mb-6"
            >
              Official <span className="text-brand-yellow">Merchandise</span>
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Tampil keren dengan koleksi eksklusif dari BTW Mister Catur.
            </p>
          </div>
          
          <Link 
            to="/cart"
            className="flex items-center gap-3 bg-brand-yellow text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-xl"
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-yellow">
                  {totalItems}
                </span>
              )}
            </div>
            Lihat Keranjang
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-brand-dark rounded-3xl overflow-hidden border border-gray-800 hover:border-brand-yellow transition-all group flex flex-col">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className={`w-full h-full object-cover transition-all duration-500 ${item.imgHover ? 'group-hover:opacity-0' : 'group-hover:scale-110'}`} 
                  referrerPolicy="no-referrer" 
                />
                {item.imgHover && (
                  <img 
                    src={item.imgHover} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100" 
                    referrerPolicy="no-referrer" 
                  />
                )}
                {item.oldPrice && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                
                {item.id === "buku-1" && (
                  <Link 
                    to="/psb" 
                    className="text-xs text-brand-yellow hover:underline mb-4 flex items-center gap-1"
                  >
                    Lihat detail buku <ArrowRight className="w-3 h-3" />
                  </Link>
                )}

                {item.sizes && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Pilih Ukuran:</p>
                    <div className="flex gap-2">
                      {item.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(item.id, size)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all ${
                            selectedSizes[item.id] === size 
                              ? 'bg-brand-yellow text-black' 
                              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto flex justify-between items-center">
                  <div className="flex flex-col">
                    {item.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">{item.oldPrice}</span>
                    )}
                    <span className="text-brand-yellow text-2xl font-black">{item.priceDisplay}</span>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className={`p-4 rounded-full transition-all transform hover:scale-110 flex items-center gap-2 ${
                      addedItems[item.id] 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-800 text-white hover:bg-brand-yellow hover:text-black'
                    }`}
                  >
                    {addedItems[item.id] ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <ShoppingBag className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
