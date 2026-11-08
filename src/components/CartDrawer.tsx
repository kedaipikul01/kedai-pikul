import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { CartItem, generateCartOrderUrl } from '../utils/whatsapp';
import { FORMAT_RUPIAH } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (cartId: string, newQty: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<
    'Dine In' | 'Bungkus / Take Away' | 'Delivery'
  >('Dine In');
  const [tableOrAddress, setTableOrAddress] = useState('');
  const [orderNote, setOrderNote] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;
    const url = generateCartOrderUrl(items, {
      name: customerName,
      orderType,
      tableOrAddress,
      note: orderNote,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 bg-gradient-to-r from-[#A90000] to-[#E52B0B] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 text-[#FFD400]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white">Pesanan Kamu</h3>
              <p className="text-xs text-white/80">
                {totalQty} menu dipilih • KEDAI PIKUL
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white bg-black/20 hover:bg-black/30 transition-colors"
            aria-label="Tutup Keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-lg text-stone-800">
                Pesanan Masih Kosong
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Pilih mie ayam favorit, cemilan renyah, kopi, atau minuman segar di katalog menu.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2.5 bg-[#A90000] text-white text-xs font-bold rounded-xl shadow"
              >
                Lihat Menu Sekarang
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 font-semibold uppercase">
                  <span>Daftar Menu</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-600 hover:underline capitalize"
                  >
                    Kosongkan
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <div className="font-heading font-bold text-stone-900 text-sm">
                        {item.name}
                      </div>

                      {item.variantText && (
                        <div className="text-xs text-[#E52B0B] font-medium mt-0.5">
                          {item.variantText}
                        </div>
                      )}

                      {item.note && (
                        <div className="text-[11px] text-stone-500 italic mt-0.5">
                          "{item.note}"
                        </div>
                      )}

                      <div className="text-xs font-semibold text-[#A90000] mt-1 tabular-nums">
                        {FORMAT_RUPIAH(item.price)} × {item.quantity} ={' '}
                        <strong className="text-stone-900">
                          {FORMAT_RUPIAH(item.price * item.quantity)}
                        </strong>
                      </div>
                    </div>

                    {/* Steppers & Delete */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors p-1"
                        aria-label={`Hapus ${item.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-1.5 bg-white border border-stone-300 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 rounded"
                          aria-label="Kurangi"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-900 hover:bg-stone-100 rounded"
                          aria-label="Tambah"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Information Form */}
              <div className="pt-3 border-t border-stone-200 space-y-3.5 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Informasi Pemesan:
                </span>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nama Kamu:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Budi / Siti"
                    className="w-full px-3.5 py-2 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#FF6500] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Pilihan Pemesanan:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['Dine In', 'Bungkus / Take Away', 'Delivery'] as const).map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setOrderType(type)}
                          className={`py-1.5 px-2 rounded-xl text-[11px] font-bold border transition-all text-center leading-tight ${
                            orderType === type
                              ? 'border-[#A90000] bg-[#A90000] text-white shadow-sm'
                              : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                          }`}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {orderType === 'Dine In'
                      ? 'Nomor Meja (Jika ada):'
                      : 'Alamat Pengantaran / Catatan Lokasi:'}
                  </label>
                  <input
                    type="text"
                    value={tableOrAddress}
                    onChange={(e) => setTableOrAddress(e.target.value)}
                    placeholder={
                      orderType === 'Dine In'
                        ? 'Contoh: Meja 04 di lantai 1'
                        : 'Contoh: Jl. Mawar No. 12 (depan minimarket)'
                    }
                    className="w-full px-3.5 py-2 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#FF6500] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Catatan Tambahan untuk Dapur:
                  </label>
                  <input
                    type="text"
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Contoh: jangan terlalu manis, sambal dipisah"
                    className="w-full px-3.5 py-2 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#FF6500] focus:bg-white"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Subtotal & WA Checkout */}
        {items.length > 0 && (
          <div className="p-5 bg-stone-50 border-t border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-stone-500">
                Total Pembayaran:
              </span>
              <span className="text-2xl font-heading font-black text-[#A90000] tabular-nums">
                {FORMAT_RUPIAH(totalAmount)}
              </span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-black text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Kirim Pesanan ke WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <p className="text-[11px] text-center text-stone-500">
              Format rincian pesanan otomatis dibuat & dikirimkan ke WhatsApp resmi Kedai Pikul.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
