import React from 'react';
import { Scroll, Compass, Globe, Sparkles, Building2 } from 'lucide-react';
import { Article, Language, UiTranslations } from '../types';

interface LibraryPedimentProps {
  articles: Article[];
  onScrollToArticle: (id: string) => void;
  language: Language;
  t: UiTranslations;
}

export const LibraryPediment: React.FC<LibraryPedimentProps> = ({
  articles,
  onScrollToArticle,
  language,
  t,
}) => {
  const isRtl = language === 'ar';

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-10">
      {/* Classical Wood Carved Pediment Arch */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#2b190f] via-[#1c100a] to-[#140b07] border-2 border-[#5c3a24] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Subtle Ornamental Gilded Arabesque Header Banner */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#4a2f1d] via-[#d4af37] to-[#4a2f1d]" />
        
        {/* Decorative Arabesque Corner Accents */}
        <div className="ornate-corner-tl" />
        <div className="ornate-corner-tr" />
        <div className="ornate-corner-bl" />
        <div className="ornate-corner-br" />

        {/* Central Seal & Heading */}
        <div className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto">
          {/* Ornate Flourish Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-xs font-ui text-[#d4af37] tracking-widest flex items-center gap-1.5 uppercase font-semibold">
              <Scroll className="w-3.5 h-3.5" />
              {t.diwanHeader}
            </span>
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf7ee] leading-tight mb-4 ${
            isRtl ? 'font-amiri' : 'font-cinzel'
          }`}>
            {t.heroTitle}
          </h1>

          <p className={`text-sm sm:text-base md:text-lg text-[#d9c7af] leading-relaxed mb-6 max-w-2xl ${
            isRtl ? 'font-amiri' : 'font-cormorant text-lg'
          }`}>
            {t.heroDescription}
          </p>

          {/* Calligraphic Quote Plaque */}
          <div className="w-full max-w-2xl py-3.5 px-6 rounded-xl bg-[#140b06]/80 border border-[#d4af37]/40 relative mb-8 shadow-inner">
            <p className={`text-sm sm:text-base text-[#f7df94] italic leading-relaxed ${
              isRtl ? 'font-amiri' : 'font-serif'
            }`}>
              {t.heroQuote}
            </p>
            <span className="text-[11px] font-ui text-[#a8896a] block mt-1.5">
              — {t.heroQuoteAuthor}
            </span>
          </div>

          {/* Quick Shelf Catalog Jump Buttons */}
          <div className="w-full border-t border-[#3e2617] pt-6">
            <p className="text-xs font-ui text-[#c5a059] mb-4 font-semibold">
              {t.shelfIndexLabel}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {articles.map((art, idx) => {
                const icons = [
                  <Sparkles key="1" className="w-4 h-4 text-[#d4af37]" />,
                  <Globe key="2" className="w-4 h-4 text-[#54a0ff]" />,
                  <Compass key="3" className="w-4 h-4 text-[#a55eea]" />,
                  <Building2 key="4" className="w-4 h-4 text-[#2ed573]" />,
                ];
                return (
                  <button
                    key={art.id}
                    type="button"
                    onClick={() => onScrollToArticle(art.id)}
                    className={`p-2.5 rounded-lg bg-[#22130b] hover:bg-[#341d11] border border-[#4a2f1d] hover:border-[#d4af37] transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-[0_4px_15px_rgba(212,175,55,0.25)] ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-ui text-[#8f7560] group-hover:text-[#d4af37]">
                        {t.volumePrefix} 0{idx + 1}
                      </span>
                      {icons[idx % icons.length]}
                    </div>
                    <p className={`text-xs font-bold text-[#f3e5ab] truncate group-hover:text-[#ffd166] ${
                      isRtl ? 'font-amiri' : 'font-serif'
                    }`}>
                      {art.title.split(':')[0]}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
