import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, Utensils, Clock } from 'lucide-react';
import { WA_PHONE_NUMBER } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Menu', href: '#menu' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-[#A90000] text-[#FFD400] text-xs font-medium py-1.5 px-4 text-center border-b border-[#E52B0B]/30 flex items-center justify-center gap-3">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
          Buka Setiap Hari: 10.00 – 22.00 WIB
        </span>
        <span className="hidden sm:inline text-white/50">|</span>
        <span className="hidden sm:inline text-white">
          Pesan Cepat via WhatsApp:{' '}
          <a
            href={`https://wa.me/${WA_PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD400] font-semibold underline hover:text-white transition-colors"
          >
            081331611961
          </a>
        </span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#A90000]/95 backdrop-blur-md shadow-lg shadow-black/10 py-2.5'
            : 'bg-[#A90000] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#beranda"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400] rounded-lg"
              aria-label="Kedai Pikul Beranda"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFD400] flex items-center justify-center text-[#A90000] shadow-md border-2 border-white/20 group-hover:scale-105 transition-transform">
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-heading font-black tracking-wide text-white leading-tight">
                  KEDAI <span className="text-[#FFD400]">PIKUL</span>
                </span>
                <span className="text-[10px] sm:text-xs text-[#FFD400] font-medium tracking-wider uppercase">
                  Mie Ayam • Cemilan • Kopi
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/90">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#FFD400] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#FFD400]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (Cart & Pesan Sekarang) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 text-white hover:text-[#FFD400] bg-black/15 hover:bg-black/25 active:scale-95 rounded-xl transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
                aria-label={`Keranjang Pesanan (${cartCount} item)`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FFD400] text-[#A90000] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary CTA */}
              <a
                href={`https://wa.me/${WA_PHONE_NUMBER}?text=Halo%20Kedai%20Pikul,%20saya%20ingin%20pesan%20menu%20favorit!`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#A90000] bg-[#FFD400] hover:bg-[#FFE04D] active:scale-95 rounded-xl shadow-md transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Pesan Sekarang</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[#FFD400] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
                aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#A90000] border-t border-[#E52B0B] px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-black/20 hover:text-[#FFD400] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={`https://wa.me/${WA_PHONE_NUMBER}?text=Halo%20Kedai%20Pikul,%20saya%20ingin%20pesan%20menu%20favorit!`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#A90000] bg-[#FFD400] hover:bg-[#FFE04D] rounded-xl shadow-md transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Pesan via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
