/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { OrderCtaSection } from './components/OrderCtaSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { MenuItem } from './data/menuData';
import { CartItem } from './utils/whatsapp';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kedaipikul_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedModalItem, setSelectedModalItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('kedaipikul_cart', JSON.stringify(cartItems));
    } catch {
      // ignore storage error
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Quick add without modal for items with no mandatory variants
  const handleQuickAdd = (item: MenuItem) => {
    const existingIndex = cartItems.findIndex(
      (ci) => ci.menuId === item.id && !ci.variantText
    );

    if (existingIndex > -1) {
      setCartItems((prev) =>
        prev.map((ci, idx) =>
          idx === existingIndex ? { ...ci, quantity: ci.quantity + 1 } : ci
        )
      );
    } else {
      const newCartItem: CartItem = {
        id: `${item.id}-${Date.now()}`,
        menuId: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        quantity: 1,
      };
      setCartItems((prev) => [...prev, newCartItem]);
    }

    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1200);
  };

  // Add customized item from modal
  const handleAddCustomizedItem = (
    item: MenuItem,
    variant: {
      temp?: 'Es' | 'Hot';
      spicyLevel?: number;
      milkType?: string;
      qty: number;
      price: number;
      note?: string;
    }
  ) => {
    const variantParts: string[] = [];
    if (variant.temp) variantParts.push(variant.temp);
    if (variant.milkType) variantParts.push(variant.milkType);
    if (typeof variant.spicyLevel === 'number') {
      variantParts.push(`Level ${variant.spicyLevel}`);
    }
    const variantText = variantParts.join(' • ');

    const newCartItem: CartItem = {
      id: `${item.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      menuId: item.id,
      name: item.name,
      category: item.category,
      price: variant.price,
      quantity: variant.qty,
      variantText: variantText || undefined,
      temp: variant.temp,
      spicyLevel: variant.spicyLevel,
      milkType: variant.milkType,
      note: variant.note,
    };

    setCartItems((prev) => [...prev, newCartItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (cartId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveCartItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-stone-800 font-sans selection:bg-[#FFD400] selection:text-[#A90000]">
      {/* Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCart={() => setIsCartOpen(true)} />

        {/* Menu Section */}
        <MenuSection
          onSelectItem={(item) => setSelectedModalItem(item)}
          onQuickAdd={handleQuickAdd}
          addedItemId={addedItemId}
        />

        {/* About Section */}
        <AboutSection />

        {/* 4 Keunggulan Section */}
        <FeaturesSection />

        {/* Pemesanan / CTA Section */}
        <OrderCtaSection />

        {/* Lokasi & Jam Operasional Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Item Variant Customization Modal */}
      <ItemModal
        item={selectedModalItem}
        onClose={() => setSelectedModalItem(null)}
        onAddToCart={handleAddCustomizedItem}
      />

      {/* Cart & WhatsApp Checkout Slide-over */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
