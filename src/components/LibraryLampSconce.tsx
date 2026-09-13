import React from 'react';
import { AmbientLightingMode, UiTranslations } from '../types';
import { Sparkles, Flame, Lamp } from 'lucide-react';

interface LibraryLampSconceProps {
  lightingMode: AmbientLightingMode;
  onLightingChange: (mode: AmbientLightingMode) => void;
  t: UiTranslations;
}

export const LibraryLampSconce: React.FC<LibraryLampSconceProps> = ({
  lightingMode,
  onLightingChange,
  t,
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center pt-2 pb-6 px-4">
      {/* Ornate Brass Lamp Fixture */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Upper Mount Chain */}
        <div className="w-1 h-6 bg-gradient-to-b from-[#4a2f1d] via-[#d4af37] to-[#8f6217] mx-auto shadow-md"></div>
      </div>

      {/* Brass Lamp Head */}
      <div className="relative z-10 flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#20130b] via-[#352013] to-[#20130b] border border-[#d4af37]/60 shadow-[0_8px_25px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 text-[#d4af37]">
          <Lamp className="w-4 h-4 animate-pulse text-[#f5d77f]" />
          <span className="text-xs font-ui tracking-wider font-semibold text-[#f3e5ab]">
            {t.ambientLamp}
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-ui text-xs">
          <button
            type="button"
            onClick={() => onLightingChange('warm-gold')}
            className={`px-3 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              lightingMode === 'warm-gold'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#120c08] font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                : 'text-[#d6c4a5] hover:text-[#f3e5ab] hover:bg-[#432918]/60'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>{t.royalGold}</span>
          </button>

          <button
            type="button"
            onClick={() => onLightingChange('candlelight')}
            className={`px-3 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              lightingMode === 'candlelight'
                ? 'bg-gradient-to-r from-[#e67e22] to-[#b33939] text-[#fff] font-bold shadow-[0_0_15px_rgba(230,126,34,0.5)]'
                : 'text-[#d6c4a5] hover:text-[#f3e5ab] hover:bg-[#432918]/60'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>{t.candlelight}</span>
          </button>

          <button
            type="button"
            onClick={() => onLightingChange('emerald-study')}
            className={`px-3 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              lightingMode === 'emerald-study'
                ? 'bg-gradient-to-r from-[#2e7d5a] to-[#1b4332] text-[#f3e5ab] font-bold shadow-[0_0_15px_rgba(46,125,90,0.5)]'
                : 'text-[#d6c4a5] hover:text-[#f3e5ab] hover:bg-[#432918]/60'
            }`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#38b000] border border-[#d4af37]"></div>
            <span>{t.emeraldStudy}</span>
          </button>
        </div>
      </div>

      {/* Atmospheric Conic Downlight Projected on the Bookshelf */}
      <div
        className={`pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-80 transition-all duration-700 blur-3xl opacity-35 ${
          lightingMode === 'warm-gold'
            ? 'bg-gradient-to-b from-[#ffd166]/40 via-[#d4af37]/20 to-transparent'
            : lightingMode === 'candlelight'
            ? 'bg-gradient-to-b from-[#ff7a00]/45 via-[#d35400]/25 to-transparent'
            : 'bg-gradient-to-b from-[#2d6a4f]/50 via-[#1b4332]/25 to-transparent'
        }`}
      />
    </div>
  );
};
