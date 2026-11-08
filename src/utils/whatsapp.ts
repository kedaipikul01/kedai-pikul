import { MenuItem, FORMAT_RUPIAH, WA_PHONE_NUMBER } from '../data/menuData';

export interface CartItem {
  id: string; // unique cart entry ID
  menuId: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  variantText?: string;
  temp?: 'Es' | 'Hot';
  spicyLevel?: number;
  milkType?: string;
  note?: string;
}

export function generateSingleItemOrderUrl(
  item: MenuItem,
  variant?: {
    temp?: 'Es' | 'Hot';
    spicyLevel?: number;
    milkType?: string;
    qty?: number;
    note?: string;
  }
): string {
  const qty = variant?.qty ?? 1;
  let variantDesc = '';

  if (variant?.temp) {
    variantDesc += ` (${variant.temp})`;
  }
  if (variant?.milkType) {
    variantDesc += ` (${variant.milkType})`;
  }
  if (typeof variant?.spicyLevel === 'number') {
    variantDesc += ` (Level ${variant.spicyLevel})`;
  }

  let text = `Halo Kedai Pikul, saya ingin pesan ${qty > 1 ? `${qty}x ` : ''}${item.name}${variantDesc}.`;
  if (variant?.note && variant.note.trim()) {
    text += `\nCatatan: ${variant.note.trim()}`;
  }

  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function generateCartOrderUrl(
  items: CartItem[],
  customer: {
    name: string;
    orderType: 'Dine In' | 'Bungkus / Take Away' | 'Delivery';
    tableOrAddress?: string;
    note?: string;
  }
): string {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let message = `*PESANAN BARU KEDAI PIKUL*\n`;
  message += `-----------------------------------------\n`;
  message += `*Nama:* ${customer.name || '-'}\n`;
  message += `*Jenis Pemesanan:* ${customer.orderType}\n`;
  if (customer.tableOrAddress && customer.tableOrAddress.trim()) {
    message += `*No Meja / Alamat:* ${customer.tableOrAddress.trim()}\n`;
  }
  message += `-----------------------------------------\n`;
  message += `*Daftar Menu:*\n`;

  items.forEach((item, index) => {
    let itemDetail = `${index + 1}. ${item.quantity}x ${item.name}`;
    if (item.variantText) {
      itemDetail += ` [${item.variantText}]`;
    }
    itemDetail += ` = ${FORMAT_RUPIAH(item.price * item.quantity)}`;
    message += `${itemDetail}\n`;
    if (item.note && item.note.trim()) {
      message += `   _Catatan: ${item.note.trim()}_\n`;
    }
  });

  message += `-----------------------------------------\n`;
  message += `*TOTAL PEMBAYARAN: ${FORMAT_RUPIAH(totalPrice)}*\n`;

  if (customer.note && customer.note.trim()) {
    message += `\n*Catatan Tambahan:*\n${customer.note.trim()}\n`;
  }

  message += `\nMohon konfirmasi ketersediaan pesanan dan totalnya ya. Terima kasih!`;

  return `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
