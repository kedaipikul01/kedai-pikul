import React from 'react';
import { ArrowDown, Flame, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';
import { WA_PHONE_NUMBER } from '../data/menuData';

interface HeroProps {
  onOpenCart?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-[#A90000] via-[#E52B0B] to-[#FF6500] text-white pt-8 pb-16 sm:pb-24 lg:pb-32"
    >
      {/* Decorative background sunburst / radial pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #FFD400 2px, transparent 2px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative curved organic shapes in background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFD400]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#FF6500]/25 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Strip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/25 backdrop-blur-sm border border-[#FFD400]/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold text-[#FFD400] tracking-wide shadow-inner">
            <span>MIE AYAM</span>
            <span className="text-white/40">•</span>
            <span>CEMILAN</span>
            <span className="text-white/40">•</span>
            <span>KOPI</span>
            <span className="text-white/40">•</span>
            <span>MINUMAN</span>
          </div>
        </div>

        {/* Main Grid: Left copy, Right appetizing food focal point */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            {/* Massive "BUKA!" Badge with playful shadow */}
            <div className="inline-flex items-center gap-2.5 bg-[#FFD400] text-[#A90000] px-4 py-1.5 rounded-2xl shadow-lg border-2 border-white/20 transform -rotate-1 hover:rotate-0 transition-transform">
              <Flame className="w-5 h-5 fill-current animate-pulse" />
              <span className="text-2xl sm:text-3xl font-heading font-black tracking-wider uppercase">
                BUKA!
              </span>
              <span className="text-xs sm:text-sm font-bold bg-[#A90000] text-white px-2.5 py-0.5 rounded-lg">
                Setiap Hari
              </span>
            </div>

            {/* Subheadline & Main Display Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.08] tracking-tight drop-shadow-md text-balance">
              Laper? Yuk, Mampir ke <span className="text-[#FFD400]">Kedai Pikul!</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/95 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Mie Ayam, Cemilan, Kopi, dan Minuman Favorit dengan{' '}
              <span className="font-bold text-[#FFD400] underline decoration-[#FFD400]/40 underline-offset-4">
                Harga Ramah di Kantong
              </span>
              . Nikmati kelezatan street food otentik dengan racikan bumbu khas yang bikin nagih!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FFD400] hover:bg-[#FFE04D] text-[#A90000] font-heading font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 transition-all transform hover:-translate-y-0.5"
              >
                <Utensils className="w-5 h-5 stroke-[2.5]" />
                <span>Lihat Menu Lengkap</span>
                <ArrowDown className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href={`https://wa.me/${WA_PHONE_NUMBER}?text=Halo%20Kedai%20Pikul,%20saya%20ingin%20pesan%20sekarang!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-stone-100 text-[#A90000] font-heading font-bold text-base rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all border-2 border-[#FFD400]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping mr-0.5" />
                <span>Pesan Sekarang via WA</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-white/90">
              <span className="inline-flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                Harga Mulai Rp 3.000
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                100% Halal & Bersih
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                Bisa Dine-in & Ojol
              </span>
            </div>
          </div>

          {/* Right Column: Hero Food Visual & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
              {/* Outer Glow & Background Ring */}
              <div className="absolute inset-0 bg-[#FFD400] rounded-full blur-2xl opacity-30 transform scale-95 animate-pulse-subtle" />
              <div className="absolute inset-2 rounded-full border-4 border-dashed border-[#FFD400]/40 pointer-events-none" />

              {/* Central Bowl Container with curved mask */}
              <div className="relative w-full h-full rounded-full overflow-hidden p-3 bg-gradient-to-tr from-[#FFD400] via-[#FF6500] to-white shadow-2xl">
                <img
                  src="/src/assets/images/hero_mie_ayam_bowl_1794120888502.jpg"
                  alt="Semangkuk Mie Ayam Spesial Kedai Pikul yang lezat dan menggugah selera"
                  className="w-full h-full object-cover rounded-full shadow-inner transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Floating Sticker 1: Special Dish Tag */}
              <div className="absolute -top-2 -left-2 sm:top-4 sm:-left-4 bg-[#FFD400] text-[#A90000] p-3 rounded-2xl shadow-xl border-2 border-white transform -rotate-6 hover:rotate-0 transition-transform flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E52B0B]" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider leading-none text-[#A90000]/80">
                    Spesial Andalan
                  </p>
                  <p className="text-sm font-heading font-black leading-tight">Mie Ayam Komplit</p>
                </div>
              </div>

              {/* Floating Sticker 2: Price Callout */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-4 bg-white text-[#A90000] px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-[#FFD400] transform rotate-3 hover:rotate-0 transition-transform">
                <p className="text-[10px] uppercase font-bold text-stone-500">Mulai Dari</p>
                <p className="text-xl sm:text-2xl font-heading font-black text-[#E52B0B]">
                  Rp 3.000<span className="text-xs text-stone-600 font-sans font-normal">/porsi</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="absolute bottom-0 inset-x-0 leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 text-[#FFFDF9] preserve-3d"
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,96L1380,96C1320,96,1200,96,1080,96C960,96,840,96,720,96C600,96,480,96,360,96C240,96,120,96,60,96L0,96Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
