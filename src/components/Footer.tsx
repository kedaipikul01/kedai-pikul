import React from 'react';
import { Utensils, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { WA_PHONE_NUMBER, DISPLAY_PHONE_NUMBER, SOCIAL_HANDLE } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t-4 border-[#FFD400]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFD400] flex items-center justify-center text-[#A90000] shadow-md">
                <Utensils className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-heading font-black tracking-wide text-white">
                KEDAI <span className="text-[#FFD400]">PIKUL</span>
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              KedaissssPikul hadir menyajikan mie ayam gurih otentik, renyahnya cemilan tahu walik, seduhan kopi tubruk, dan minuman segar penuntas dahaga dengan harga ramah di kantong.
            </p>

            <div className="pt-2 text-xs text-stone-400">
              <p className="font-semibold text-stone-200">Jam Buka:</p>
              <p>Setiap Hari: 10.00 – 22.00 WIB</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#beranda" className="hover:text-[#FFD400] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FFD400] transition-colors">
                  Katalog Menu & Harga
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#FFD400] transition-colors">
                  Tentang Kedai Pikul
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-[#FFD400] transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-[#FFD400] transition-colors">
                  Lokasi & Jam Operasional
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white">
              Hubungi & Ikuti Kami
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WA_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-stone-300 hover:text-[#FFD400] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                  <span>WhatsApp: {DISPLAY_PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${DISPLAY_PHONE_NUMBER}`}
                  className="flex items-center gap-2.5 text-stone-300 hover:text-[#FFD400] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFD400]" />
                  <span>Telepon: {DISPLAY_PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-stone-300 hover:text-[#FFD400] transition-colors"
                >
                  <span className="w-4 h-4 text-pink-400 font-bold text-center">IG</span>
                  <span>Instagram: {SOCIAL_HANDLE}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-stone-300 hover:text-[#FFD400] transition-colors"
                >
                  <span className="w-4 h-4 text-cyan-400 font-bold text-center">TT</span>
                  <span>TikTok: {SOCIAL_HANDLE}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${WA_PHONE_NUMBER}?text=Halo%20Kedai%20Pikul,%20saya%20mau%20pesan!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#A90000] hover:bg-[#c00000] text-white text-xs font-bold rounded-xl shadow-md transition-colors"
              >
                <span>Pesan Cepat Sekarang</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>Copyright © 2026 KEDAI PIKUL. Hak Cipta Dilindungi.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
