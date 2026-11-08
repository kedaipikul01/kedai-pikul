import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-5 z-40 p-3 bg-white/90 hover:bg-white text-stone-700 hover:text-[#A90000] border border-stone-200 rounded-2xl shadow-lg hover:shadow-xl backdrop-blur-sm transition-all transform hover:-translate-y-1 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500]"
      aria-label="Kembali ke atas halaman"
      title="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
