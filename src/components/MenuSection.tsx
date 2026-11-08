import React, { useState, useMemo } from 'react';
import {
  Search,
  MessageCircle,
  Plus,
  Sparkles,
  UtensilsCrossed,
  Soup,
  Cookie,
  CupSoda,
  Coffee,
  Check,
} from 'lucide-react';
import {
  MenuItem,
  MENU_CATEGORIES,
  MENU_ITEMS,
  FORMAT_RUPIAH,
} from '../data/menuData';
import { generateSingleItemOrderUrl } from '../utils/whatsapp';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  addedItemId?: string | null;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onQuickAdd,
  addedItemId,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter items based on active category and search keyword
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group filtered items by category if "all" is active, or show flat
  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'mie-ayam':
        return <Soup className="w-4 h-4" />;
      case 'cemilan':
        return <Cookie className="w-4 h-4" />;
      case 'minuman':
        return <CupSoda className="w-4 h-4" />;
      case 'kopi':
        return <Coffee className="w-4 h-4" />;
      default:
        return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FFFDF9] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF6500]/10 text-[#FF6500] font-heading font-bold text-xs uppercase tracking-wider rounded-xl mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Menu Kedai Pikul</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-stone-900 tracking-tight">
            Pilihan Menu Lezat & <span className="text-[#A90000]">Harga Merakyat</span>
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Dari semangkuk mie ayam kenyal gurih, renyahnya aneka cemilan, hingga segarnya es dan kopi tubruk otentik. Pilih favoritmu dan pesan langsung!
          </p>
        </div>

        {/* Filter Controls: Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Category Filter Buttons */}
          <div className="w-full md:w-auto flex items-center gap-1.5 p-1.5 bg-stone-100/90 rounded-2xl overflow-x-auto max-w-full">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-heading font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#A90000] text-white shadow-md'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari mie, cemilan, es..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 bg-stone-100 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-200 p-8">
            <Soup className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-heading font-bold text-stone-700">Menu tidak ditemukan</h3>
            <p className="text-sm text-stone-500 mt-1">
              Coba kata kunci lain atau pilih kategori "Semua Menu".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold bg-[#A90000] text-white rounded-xl shadow"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isSpecial = item.isSpecial;
              const hasVariantOptions =
                item.hasTempOptions || item.hasSpicyOptions || item.hasMilkOptions;

              return (
                <div
                  key={item.id}
                  className={`group relative flex flex-col justify-between bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isSpecial
                      ? 'border-2 border-[#FFD400] shadow-md ring-1 ring-[#FFD400]/40'
                      : 'border border-stone-200/80 shadow-sm hover:border-stone-300'
                  }`}
                >
                  {/* Top Special Banner if Special */}
                  {isSpecial && (
                    <div className="bg-[#FFD400] text-[#A90000] px-4 py-1.5 text-xs font-heading font-black tracking-wide flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-current" />
                      <span>{item.specialBadgeText || 'MENU SPESIAL KEDAI PIKUL'}</span>
                    </div>
                  )}

                  {/* Card Image Slot (with styled CSS fallback container) */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-tr from-[#FFF5EE] to-[#FFE8D6] flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-stone-400 p-4 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center mb-2 shadow-inner">
                          {item.category === 'mie-ayam' ? (
                            <Soup className="w-7 h-7 stroke-[2.2]" />
                          ) : item.category === 'cemilan' ? (
                            <Cookie className="w-7 h-7 stroke-[2.2]" />
                          ) : item.category === 'kopi' ? (
                            <Coffee className="w-7 h-7 stroke-[2.2]" />
                          ) : (
                            <CupSoda className="w-7 h-7 stroke-[2.2]" />
                          )}
                        </div>
                        <span className="text-xs font-semibold text-stone-500">
                          Kedai Pikul Favorit
                        </span>
                      </div>
                    )}

                    {/* Category Label Overlay */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {item.category === 'mie-ayam'
                        ? 'Mie Ayam'
                        : item.category === 'cemilan'
                        ? 'Cemilan'
                        : item.category === 'kopi'
                        ? 'Kopi Tubruk'
                        : 'Minuman'}
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#A90000] font-heading font-black text-sm sm:text-base px-3 py-1 rounded-xl shadow-md border border-stone-100 tabular-nums">
                      {FORMAT_RUPIAH(item.price)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-lg font-heading font-black text-stone-900 group-hover:text-[#A90000] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Variant Notes (e.g. Es Rp3.000 / Hot Rp3.000 or Level 0-5) */}
                      {item.priceNote && (
                        <div className="mt-2.5 inline-block text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                          {item.priceNote}
                        </div>
                      )}
                      {item.hasSpicyOptions && (
                        <div className="mt-2.5 inline-block text-[11px] font-medium text-[#E52B0B] bg-red-50 px-2 py-0.5 rounded-md">
                          Pilihan Level Pedas 0 s/d 5
                        </div>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-2">
                      {/* Direct WhatsApp Order */}
                      <a
                        href={
                          hasVariantOptions
                            ? undefined
                            : generateSingleItemOrderUrl(item)
                        }
                        onClick={(e) => {
                          if (hasVariantOptions) {
                            e.preventDefault();
                            onSelectItem(item);
                          }
                        }}
                        target={hasVariantOptions ? undefined : '_blank'}
                        rel={hasVariantOptions ? undefined : 'noopener noreferrer'}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all active:scale-95"
                        title={`Pesan ${item.name} via WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                        <span className="truncate">Pesan via WA</span>
                      </a>

                      {/* Add to Cart / Customize Button */}
                      <button
                        onClick={() => {
                          if (hasVariantOptions) {
                            onSelectItem(item);
                          } else {
                            onQuickAdd(item);
                          }
                        }}
                        className={`p-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center active:scale-95 shrink-0 ${
                          addedItemId === item.id
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'bg-stone-100 hover:bg-[#FFD400] hover:text-[#A90000] border-stone-200 text-stone-700'
                        }`}
                        aria-label={`Tambah ${item.name} ke pesanan`}
                        title={
                          hasVariantOptions
                            ? 'Pilih varian menu ini'
                            : 'Tambah ke pesanan'
                        }
                      >
                        {addedItemId === item.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner inside Menu Section */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#FF6500] to-[#E52B0B] rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
              Mau Pesan Banyak untuk Rombongan atau Acara?
            </h3>
            <p className="text-xs sm:text-sm text-white/90">
              Kedai Pikul siap melayani pesanan katering mie ayam dan cemilan untuk arisan, rapat, atau acara santai.
            </p>
          </div>
          <a
            href="https://wa.me/6281331611961?text=Halo%20Kedai%20Pikul,%20saya%20mau%20tanya%20pesanan%20katering%20/%20rombongan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#FFD400] hover:bg-[#FFE04D] text-[#A90000] font-heading font-bold text-sm rounded-xl shadow-lg whitespace-nowrap active:scale-95 transition-all"
          >
            Hubungi Katering WA
          </a>
        </div>
      </div>
    </section>
  );
};
