import React from 'react';
import { MessageCircle, PhoneCall, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { WA_PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '../data/menuData';

export const OrderCtaSection: React.FC = () => {
  return (
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

        {/* Big Bold Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-tight">
          LAPER? <span className="text-[#FFD400]">LANGSUNG PESAN!</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
          Jangan sampai kelaparan! Pesan menu favoritmu sekarang melalui WhatsApp. Siap saji hangat, lezat, dan cepat sampai ke tempatmu.
        </p>

        {/* Contact Display & Big WhatsApp Action */}
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
            href={`tel:${DISPLAY_PHONE_NUMBER}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-base rounded-2xl backdrop-blur-sm border border-white/30 transition-all active:scale-95"
          >
            <PhoneCall className="w-5 h-5 text-[#FFD400]" />
            <span>Panggilan Langsung</span>
          </a>
        </div>

        {/* Delivery Partners Section */}
        <div className="mt-12 pt-10 border-t border-white/20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 mb-6">
            Tersedia Juga di Layanan Pesan Antar Online Favorit:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* ShopeeFood Badge */}
            <div className="flex items-center gap-2.5 bg-white text-stone-900 px-5 py-3 rounded-2xl shadow-md border border-stone-100 hover:scale-105 transition-transform cursor-pointer">
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
            </div>

            {/* GoFood Badge */}
            <div className="flex items-center gap-2.5 bg-white text-stone-900 px-5 py-3 rounded-2xl shadow-md border border-stone-100 hover:scale-105 transition-transform cursor-pointer">
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
            </div>

            {/* GrabFood Badge */}
            <div className="flex items-center gap-2.5 bg-white text-stone-900 px-5 py-3 rounded-2xl shadow-md border border-stone-100 hover:scale-105 transition-transform cursor-pointer">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
