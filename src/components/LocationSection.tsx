import React from 'react';
import {
  MapPin,
  Clock,
  Navigation,
  Wifi,
  Car,
  Zap,
  Coffee,
  CheckCircle2,
} from 'lucide-react';
import { DISPLAY_PHONE_NUMBER } from '../data/menuData';

export const LocationSection: React.FC = () => {
  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-white relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#A90000]/10 text-[#A90000] font-heading font-bold text-xs uppercase tracking-wider rounded-xl mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kunjungi Kedai Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-stone-900 tracking-tight">
            Lokasi & <span className="text-[#A90000]">Jam Buka</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Mampir langsung untuk menikmati mie ayam panas fresh dari dandang dan nongkrong santai bersama teman atau keluarga.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Info, Hours, Amenities */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Opening Hours Card */}
            <div className="p-6 rounded-3xl bg-[#FFFDF9] border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-[#A90000]">
                <div className="p-2.5 rounded-2xl bg-[#A90000]/10">
                  <Clock className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-stone-900">Jam Operasional</h3>
                  <p className="text-xs text-stone-500">Siap melayani setiap saat lapar melanda</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-stone-100 text-sm">
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-semibold text-stone-800">Senin – Minggu</span>
                  <span className="font-bold text-[#A90000] bg-red-50 px-3 py-1 rounded-full text-xs">
                    10.00 – 22.00 WIB
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Buka setiap hari termasuk hari libur dan tanggal merah.</span>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-[#FFFDF9] border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-[#FF6500]">
                <div className="p-2.5 rounded-2xl bg-[#FF6500]/10">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-stone-900">Alamat Kedai</h3>
                  <p className="text-xs text-stone-500">KEDAI PIKUL</p>
                </div>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed pt-1">
                KEDAI PIKUL — Pusat Kuliner Mie Ayam, Cemilan Tahu Walik & Kopi Tubruk Nusantara.
              </p>
              <p className="text-xs text-stone-500">
                Pemesanan & Reservasi Meja: <strong className="text-stone-800">{DISPLAY_PHONE_NUMBER}</strong>
              </p>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=Kedai+Pikul+Mie+Ayam`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A90000] hover:bg-[#8e0000] text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Buka di Google Maps</span>
                </a>
              </div>
            </div>

            {/* Facilities */}
            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Fasilitas Pengunjung:
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-700 font-medium">
                <span className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-stone-500" /> Free Wi-Fi
                </span>
                <span className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-stone-500" /> Parkir Motor & Mobil
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-stone-500" /> Colokan Listrik
                </span>
                <span className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-stone-500" /> Ruang Duduk Nyaman
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Simulation */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200 shadow-xl relative min-h-[360px] bg-stone-100 flex flex-col">
            {/* Top Bar of Map preview */}
            <div className="bg-stone-900 text-white px-5 py-3 flex items-center justify-between text-xs font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                Peta Lokasi KEDAI PIKUL
              </span>
              <span className="text-stone-400">Navigasi Langsung</span>
            </div>

            {/* Map Canvas Visual */}
            <div className="relative flex-1 bg-[#F5F2EB] flex items-center justify-center p-8 overflow-hidden">
              {/* Map grid pattern roads */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #E2DDD5 2px, transparent 2px),
                    linear-gradient(to bottom, #E2DDD5 2px, transparent 2px)
                  `,
                  backgroundSize: '48px 48px',
                }}
              />

              {/* Decorative road overlays */}
              <div className="absolute w-full h-8 bg-white/80 top-1/3 -rotate-6 border-y border-stone-300 pointer-events-none" />
              <div className="absolute w-8 h-full bg-white/80 left-1/2 rotate-12 border-x border-stone-300 pointer-events-none" />

              {/* Map Pin Card */}
              <div className="relative z-10 bg-white p-5 rounded-2xl shadow-2xl border-2 border-[#FFD400] max-w-sm text-center transform hover:scale-105 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#A90000] text-[#FFD400] flex items-center justify-center mx-auto mb-3 shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="font-heading font-black text-lg text-stone-900">KEDAI PIKUL</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Tempat makan mie ayam, cemilan, dan kopi favorit.
                </p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    Buka Sekarang
                  </span>
                  <span className="text-[11px] text-stone-500">10.00 - 22.00</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=Kedai+Pikul+Mie+Ayam`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2 bg-[#FF6500] hover:bg-[#e05800] text-white text-xs font-bold rounded-xl shadow transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka Petunjuk Arah</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
