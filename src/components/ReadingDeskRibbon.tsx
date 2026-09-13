import React, { useEffect, useState } from 'react';
import { Bookmark, ChevronUp } from 'lucide-react';
import { Language, UiTranslations } from '../types';

interface ReadingDeskRibbonProps {
  language?: Language;
  t?: UiTranslations;
}

export const ReadingDeskRibbon: React.FC<ReadingDeskRibbonProps> = ({ language = 'ar', t }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  const isRtl = language === 'ar';
  const label = t ? t.backToTop : (isRtl ? 'العودة إلى أعلى المكتبة' : 'Back to top');

  return (
    <aside 
      aria-label={label} 
      className={`fixed bottom-6 z-40 flex flex-col items-center group ${
        isRtl ? 'left-6' : 'right-6'
      }`}
    >
      {/* Bookmark Ribbon */}
      <button
        type="button"
        onClick={scrollToTop}
        className="relative px-3 py-4 rounded-t-lg bg-gradient-to-b from-[#8f1d1d] via-[#b32424] to-[#701313] text-[#f7df94] border-t-2 border-x-2 border-[#d4af37] shadow-[0_8px_25px_rgba(0,0,0,0.85)] flex flex-col items-center gap-1 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        title={label}
      >
        <ChevronUp className="w-4 h-4 text-[#f7df94] group-hover:-translate-y-0.5 transition-transform" />
        <span className="text-[10px] font-ui font-bold tracking-tighter">
          {Math.round(scrollProgress)}%
        </span>
        <Bookmark className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />

        {/* Ribbon Tail Notch */}
        <div className="absolute -bottom-2.5 left-0 right-0 h-3 overflow-hidden pointer-events-none">
          <div className="w-full h-full bg-[#701313] transform rotate-45 origin-top-left -translate-y-1"></div>
        </div>
      </button>
    </aside>
  );
};
