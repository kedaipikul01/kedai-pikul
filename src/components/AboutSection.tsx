import React from 'react';
import { Heart, Sparkles, Coffee, ShieldCheck, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 sm:py-24 bg-white relative overflow-hidden scroll-mt-12">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Primary Image: Tahu Walik & Street Food Snack Platter */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-[4/3]">
                <img
                  src="/src/assets/images/tahu_walik_cemilan_1794120890349.jpg"
                  alt="Sajian Tahu Walik dan cemilan hangat khas Kedai Pikul"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Secondary Overlapping Image: Warm Drinks & Mie */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-[4/3]">
                <img
                  src="/src/assets/images/minuman_segar_kopi_1794120890050.jpg"
                  alt="Es teh manis segar dan Kopi Tubruk Kedai Pikul"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Fun Sticker Badge */}
              <div className="absolute -top-4 -left-4 bg-[#A90000] text-white p-3.5 rounded-2xl shadow-xl border-2 border-[#FFD400] flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#FFD400] fill-current" />
                <span className="text-xs sm:text-sm font-heading font-black">
                  Racikan Khas & Fresh
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-stone-800">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#A90000]/10 text-[#A90000] font-heading font-bold text-xs uppercase tracking-wider rounded-xl">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tentang Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-stone-900 tracking-tight leading-tight">
              KENALAN DULU SAMA <span className="text-[#A90000]">KEDAI PIKUL!</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Kedai Pikul hadir untuk menemani waktu santai kamu dengan sajian mie ayam, aneka cemilan, kopi, dan minuman favorit. Nikmati makanan enak dengan harga ramah di kantong. Cocok untuk menemani waktu nongkrong dan mengisi perut kapan saja.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Berangkat dari kecintaan pada kuliner jalanan Indonesia, kami menyajikan mie ayam dengan tekstur kenyal sempurna dipadukan bumbu semur ayam gurih meresap, kuah kaldu hangat yang gurih, serta camilan gorengan tahu walik yang renyah melegenda.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FF6500]/15 text-[#FF6500] shrink-0">
                  <Flame className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-stone-900">Bumbu Khas Asli</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Diracik dengan rempah alami pilihan tanpa bahan pengawet.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFD400]/25 text-[#A90000] shrink-0">
                  <Coffee className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-stone-900">Nongkrong Asik</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Suasana santai, nyaman, cocok buat ngobrol bareng teman.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#E52B0B]/15 text-[#E52B0B] shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-stone-900">100% Halal</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Bersih, higienis, dan menggunakan bahan bersertifikat halal.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 shrink-0">
                  <span className="text-lg font-bold">Rp</span>
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-stone-900">Paling Hemat</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Porsi kenyang dan mantap, harga pas di kantong pelajar & keluarga.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
