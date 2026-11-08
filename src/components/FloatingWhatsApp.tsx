import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WA_PHONE_NUMBER } from '../data/menuData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Friendly Chat Callout Bubble */}
      {showTooltip && (
        <div className="bg-white text-stone-800 p-3 rounded-2xl shadow-xl border border-stone-100 text-xs font-medium max-w-[210px] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 bg-stone-200 hover:bg-stone-300 text-stone-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
            aria-label="Tutup pesan"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-[#A90000] mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Kedai Pikul Online</span>
          </div>
          <p className="text-[11px] text-stone-600 leading-snug">
            Laper? Yuk langsung chat kami di WhatsApp untuk pesan!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${WA_PHONE_NUMBER}?text=Halo%20Kedai%20Pikul,%20saya%20mau%20tanya%20menu%20dan%20pesan!`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl hover:shadow-emerald-500/40 active:scale-95 transition-all transform hover:scale-110"
        aria-label="Chat WhatsApp Resmi Kedai Pikul"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
