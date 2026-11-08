import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, ShoppingBag, Flame, Sparkles } from 'lucide-react';
import { MenuItem, FORMAT_RUPIAH } from '../data/menuData';
import { generateSingleItemOrderUrl } from '../utils/whatsapp';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    variant: {
      temp?: 'Es' | 'Hot';
      spicyLevel?: number;
      milkType?: string;
      qty: number;
      price: number;
      note?: string;
    }
  ) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedTemp, setSelectedTemp] = useState<'Es' | 'Hot'>(
    item.hasTempOptions ? 'Es' : 'Es'
  );
  const [selectedMilk, setSelectedMilk] = useState<'Coklat' | 'Putih'>('Coklat');
  const [spicyLevel, setSpicyLevel] = useState<number>(1);
  const [note, setNote] = useState('');

  // Calculate unit price based on temperature if different (e.g. Goodday Cappuccino Es 5k / Hot 4k)
  const unitPrice =
    item.tempPrices && item.hasTempOptions
      ? selectedTemp === 'Es'
        ? item.tempPrices.es
        : item.tempPrices.hot
      : item.price;

  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    onAddToCart(item, {
      temp: item.hasTempOptions ? selectedTemp : undefined,
      spicyLevel: item.hasSpicyOptions ? spicyLevel : undefined,
      milkType: item.hasMilkOptions ? selectedMilk : undefined,
      qty: quantity,
      price: unitPrice,
      note,
    });
    onClose();
  };

  const handleDirectOrder = () => {
    const url = generateSingleItemOrderUrl(item, {
      temp: item.hasTempOptions ? selectedTemp : undefined,
      spicyLevel: item.hasSpicyOptions ? spicyLevel : undefined,
      milkType: item.hasMilkOptions ? selectedMilk : undefined,
      qty: quantity,
      note,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header with image or badge */}
        <div className="relative bg-gradient-to-r from-[#A90000] to-[#E52B0B] text-white p-6 pb-5">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {item.isSpecial && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFD400] text-[#A90000] text-xs font-bold rounded-lg mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.specialBadgeText || 'MENU SPESIAL KEDAI PIKUL'}</span>
            </div>
          )}

          <h3 className="text-2xl font-heading font-black text-white">{item.name}</h3>
          <p className="text-sm text-white/85 mt-1 line-clamp-2">{item.description}</p>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Temperature Options (Es vs Hot) */}
          {item.hasTempOptions && (
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-2">
                Pilih Varian Suhu:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTemp('Es')}
                  className={`p-3 rounded-2xl border-2 text-sm font-semibold transition-all flex items-center justify-between ${
                    selectedTemp === 'Es'
                      ? 'border-[#FF6500] bg-[#FF6500]/10 text-[#A90000]'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🧊</span>
                    <span>Dingin / Es</span>
                  </span>
                  {item.tempPrices && (
                    <span className="text-xs font-bold text-stone-600">
                      {FORMAT_RUPIAH(item.tempPrices.es)}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTemp('Hot')}
                  className={`p-3 rounded-2xl border-2 text-sm font-semibold transition-all flex items-center justify-between ${
                    selectedTemp === 'Hot'
                      ? 'border-[#E52B0B] bg-[#E52B0B]/10 text-[#A90000]'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">☕</span>
                    <span>Hangat / Panas</span>
                  </span>
                  {item.tempPrices && (
                    <span className="text-xs font-bold text-stone-600">
                      {FORMAT_RUPIAH(item.tempPrices.hot)}
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Milk Options (Coklat vs Putih) */}
          {item.hasMilkOptions && (
            <div>
              <label className="block text-sm font-bold text-stone-800 mb-2">
                Rasa Susu:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMilk('Coklat')}
                  className={`p-3 rounded-2xl border-2 text-sm font-semibold transition-all text-center ${
                    selectedMilk === 'Coklat'
                      ? 'border-[#A90000] bg-[#A90000]/10 text-[#A90000]'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  Susu Coklat
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMilk('Putih')}
                  className={`p-3 rounded-2xl border-2 text-sm font-semibold transition-all text-center ${
                    selectedMilk === 'Putih'
                      ? 'border-[#A90000] bg-[#A90000]/10 text-[#A90000]'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  Susu Putih
                </button>
              </div>
            </div>
          )}

          {/* Spicy Level for Tahu Kocek */}
          {item.hasSpicyOptions && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-stone-800 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#E52B0B]" />
                  <span>Pilih Level Pedas (0 - 5):</span>
                </label>
                <span className="text-xs font-semibold text-[#E52B0B] bg-red-50 px-2 py-0.5 rounded-md">
                  {spicyLevel === 0 ? 'Tidak Pedas' : `Level ${spicyLevel}`}
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[0, 1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSpicyLevel(lvl)}
                    className={`py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${
                      spicyLevel === lvl
                        ? 'border-[#E52B0B] bg-[#E52B0B] text-white shadow-md'
                        : 'border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-bold text-stone-800 mb-2">Jumlah Porsi:</label>
            <div className="flex items-center justify-between bg-stone-50 p-2 rounded-2xl border border-stone-200">
              <span className="text-sm text-stone-600 font-medium px-2">Jumlah</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="w-9 h-9 rounded-xl bg-white border border-stone-300 flex items-center justify-center text-stone-700 disabled:opacity-40 hover:bg-stone-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-heading font-black text-lg text-stone-900 w-8 text-center tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-xl bg-[#A90000] text-white flex items-center justify-center hover:bg-[#880000] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-bold text-stone-800 mb-1.5">
              Catatan Khusus (Opsional):
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Contoh: jangan pakai daun bawang, kuah banyak, dsb."
              className="w-full px-4 py-2.5 text-sm bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#FF6500] focus:bg-white"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="w-full sm:w-auto text-left">
            <span className="text-xs text-stone-500 uppercase font-semibold">Total Harga</span>
            <div className="text-2xl font-heading font-black text-[#A90000] tabular-nums">
              {FORMAT_RUPIAH(totalPrice)}
            </div>
          </div>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-stone-900 hover:bg-black text-white text-sm font-bold rounded-2xl shadow-md transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>+ Keranjang</span>
            </button>

            <button
              type="button"
              onClick={handleDirectOrder}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold rounded-2xl shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pesan WA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
