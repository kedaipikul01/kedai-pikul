
import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  PhoneCall,
  Sparkles,
  ArrowRight,
  X,
  Smartphone,
} from 'lucide-react';
import {
  WA_PHONE_NUMBER,
  DISPLAY_PHONE_NUMBER,
} from '../data/menuData';

export const OrderCtaSection: React.FC = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const handleFoodOrder = (url: string, platform: string) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    setSelectedPlatform(platform);
    setShowOrderModal(true);
  };

  // Tutup modal menggunakan tombol Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowOrderModal(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#A90000] via-[#E52B0B] to-[#FF6500] text-white relative overflow-hidden">

        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-black/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">

          {/* Playful Pill Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFD400] text-[#A90000] font-heading font-black text-xs uppercase tracking-wider rounded-full mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Layanan Pemesanan Cepat & Praktis</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-tight">
            LAPER? <span className="text-[#FFD400]">LANGSUNG PESAN!</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
            Jangan sampai kelaparan! Pesan menu favoritmu sekarang melalui WhatsApp. Siap saji hangat, lezat, dan cepat sampai ke tempatmu.
          </p>

          {/* WhatsApp & Phone */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
              href={`https://wa.me/${WA_PHONE_NUMBER}?text=Halo%20Kedai%20Pikul,%20saya%20mau%20pesan%20menu%20sekarang!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-black text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-black/20 active:scale-95 transition-all transform hover:-translate-y-0.5 border-2 border-white/20"
            >
              <MessageCircle className="w-6 h-6 fill-current shrink-0" />
              <span>Chat WhatsApp: {DISPLAY_PHONE_NUMBER}</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>

            <a
              href={`tel:${WA_PHONE_NUMBER}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-base rounded-2xl backdrop-blur-sm border border-white/30 transition-all active:scale-95"
            >
              <PhoneCall className="w-5 h-5 text-[#FFD400]" />
              <span>Panggilan Langsung</span>
            </a>

          </div>

          {/* Delivery Partners */}
          <div className="mt-12 pt-10 border-t border-white/20">

            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 mb-6">
              Tersedia Juga di Layanan Pesan Antar Online Favorit:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

              {/* ShopeeFood */}
              <a
                href="https://spf.shopee.co.id/906ZvEBLBJ"
                onClick={(e) => {
                  e.preventDefault();
                  handleFoodOrder(
                    'https://spf.shopee.co.id/906ZvEBLBJ',
                    'ShopeeFood'
                  );
                }}
                className="flex items-center gap-2.5 bg-white text-stone-900 px-5 py-3 rounded-2xl shadow-md border border-stone-100 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-[#EE4D2D] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  SF
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-stone-500 font-semibold block uppercase leading-none">
                    Order on
                  </span>
                  <span className="text-sm font-heading font-black text-[#EE4D2D] leading-tight">
                    ShopeeFood
                  </span>
                </div>
              </a>

              {/* GoFood */}
              <a
                href="https://gofood.link/a/yAvck59"
                onClick={(e) => {
                  e.preventDefault();
                  handleFoodOrder(
                    'https://gofood.link/a/yAvck59',
                    'GoFood'
                  );
                }}
                className="flex items-center gap-2.5 bg-white text-stone-900 px-5 py-3 rounded-2xl shadow-md border border-stone-100 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-[#ED1C24] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  GF
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-stone-500 font-semibold block uppercase leading-none">
                    Order on
                  </span>
                  <span className="text-sm font-heading font-black text-[#ED1C24] leading-tight">
                    GoFood
                  </span>
                </div>
              </a>

              {/* GrabFood */}
              <a
                href="https://r.grab.com/o/v6reyANf"
                onClick={(e) => {
                  e.preventDefault();
                  handleFoodOrder(
                    'https://r.grab.com/o/v6reyANf',
                    'GrabFood'
                  );
                }}
                className="flex items-center gap-2.5 bg-white text-stone-900 px-5 py-3 rounded-2xl shadow-md border border-stone-100 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00B14F] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  GR
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-stone-500 font-semibold block uppercase leading-none">
                    Order on
                  </span>
                  <span className="text-sm font-heading font-black text-[#00B14F] leading-tight">
                    GrabFood
                  </span>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Desktop Order Modal */}
      {showOrderModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowOrderModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setShowOrderModal(false)}
              aria-label="Tutup popup"
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#A90000] to-[#FF6500] px-6 pt-9 pb-10 text-center overflow-hidden">

              <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-16 -right-10" />
              <div className="absolute w-32 h-32 bg-white/10 rounded-full -bottom-16 -left-10" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center shadow-lg mb-4">
                  <Smartphone className="w-9 h-9 text-[#A90000]" />
                </div>

                <h3
                  id="order-modal-title"
                  className="text-xl font-heading font-black text-white"
                >
                  Pesan Lewat HP Yuk!
                </h3>

                <p className="text-white/80 text-xs mt-2 font-medium">
                  {selectedPlatform} · KEDAI PIKUL
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 text-center">

              <h4 className="font-heading font-black text-lg text-stone-900">
                Gunakan Aplikasi di Smartphone
              </h4>

              <p className="text-sm text-stone-500 leading-relaxed mt-3">
                Link pemesanan <strong className="text-stone-800">{selectedPlatform}</strong> lebih optimal dibuka melalui smartphone.
                Silakan akses website KEDAI PIKUL dari HP Anda untuk melanjutkan pemesanan dengan mudah.
              </p>

              {/* Information Box */}
              <div className="mt-5 p-4 bg-[#FFF9F3] border border-orange-100 rounded-2xl text-left">
                <div className="flex gap-3 items-start">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="text-xs font-bold text-stone-800">
                      Tips pemesanan
                    </p>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      Buka halaman KEDAI PIKUL melalui HP, kemudian pilih {selectedPlatform} untuk memesan menu favorit Anda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setShowOrderModal(false)}
                className="w-full mt-6 py-3.5 bg-[#A90000] hover:bg-[#8e0000] text-white font-bold text-sm rounded-xl shadow-lg shadow-red-900/20 transition-all active:scale-95"
              >
                Mengerti, Terima Kasih
              </button>

              <button
                onClick={() => setShowOrderModal(false)}
                className="mt-3 text-xs font-semibold text-stone-400 hover:text-stone-700 transition-colors"
              >
                Tutup
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
