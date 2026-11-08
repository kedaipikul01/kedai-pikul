import React from 'react';
import { Wallet, Utensils, Smile, Smartphone, Sparkles, Check } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Harga Ramah di Kantong',
      description:
        'Makan enak dan kenyang mulai dari Rp3.000 saja! Pilihan tepat buat pelajar, mahasiswa, pekerja, hingga santap keluarga.',
      icon: Wallet,
      color: 'bg-[#FF6500]',
      badge: 'Mulai Rp 3.000',
    },
    {
      title: 'Menu Beragam',
      description:
        'Banyak pilihan varian: dari mie ayam komplit, 9 pilihan cemilan gurih, kopi tubruk mantap, hingga minuman segar dingin & hangat.',
      icon: Utensils,
      color: 'bg-[#A90000]',
      badge: '20+ Pilihan Menu',
    },
    {
      title: 'Rasa Nikmat',
      description:
        'Dibuat dengan racikan bumbu khas otentik dan bahan pilihan segar setiap hari untuk memastikan kenikmatan tiada duanya.',
      icon: Smile,
      color: 'bg-[#E52B0B]',
      badge: 'Bumbu Khas Asli',
    },
    {
      title: 'Mudah Dipesan',
      description:
        'Pesan mudah langsung lewat WhatsApp, nikmati langsung di kedai, take-away, atau order lewat aplikasi ojek online favoritmu.',
      icon: Smartphone,
      color: 'bg-emerald-600',
      badge: 'Dine In & Online',
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#FFF5EE] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFD400]/40 text-[#A90000] font-heading font-bold text-xs uppercase tracking-wider rounded-xl mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenapa Pilih Kami?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-stone-900 tracking-tight">
            Keunggulan <span className="text-[#A90000]">Kedai Pikul</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Alasan kenapa Kedai Pikul selalu jadi destinasi favorit saat perut keroncongan dan butuh tempat santai.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative bg-white p-7 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${feat.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-black text-stone-900 group-hover:text-[#A90000] transition-colors mb-2.5">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>{feat.badge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
