import React, { useState } from 'react';
import { X, Sparkles, Bookmark, Share2, Copy, Check, Printer, Sun, Moon, ArrowRight, ArrowLeft } from 'lucide-react';
import { Article, Language, UiTranslations } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  fontSizeDelta: number;
  setFontSizeDelta: React.Dispatch<React.SetStateAction<number>>;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  language: Language;
  t: UiTranslations;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  fontSizeDelta,
  setFontSizeDelta,
  isBookmarked,
  onToggleBookmark,
  language,
  t,
}) => {
  const [parchmentTheme, setParchmentTheme] = useState<'dark' | 'ivory'>('dark');
  const [copiedQuote, setCopiedQuote] = useState(false);

  if (!article) return null;

  const isRtl = language === 'ar';

  const handleCopyQuote = () => {
    const textToCopy = `«${article.goldFoilVerse.verse}» — ${article.goldFoilVerse.poet}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border-2 border-[#d4af37]/60 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300 ${
        parchmentTheme === 'dark'
          ? 'bg-[#150d08] text-[#f2e7d5]'
          : 'bg-[#faf4e6] text-[#24160d]'
      }`}>
        
        {/* Top Reading Desk Control Toolbar */}
        <div className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b transition-colors ${
          parchmentTheme === 'dark'
            ? 'bg-[#1c110a] border-[#432918]'
            : 'bg-[#ebdcc6] border-[#cbb396]'
        }`}>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1 text-xs font-ui ${
                parchmentTheme === 'dark'
                  ? 'bg-[#29170d] border-[#4a2f1d] text-[#f3e5ab] hover:border-[#d4af37]'
                  : 'bg-[#dfcbb1] border-[#baa083] text-[#24160d] hover:bg-[#d4be9f]'
              }`}
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.backToShelves}</span>
            </button>

            <span className="text-xs font-ui text-[#9e8369] hidden sm:inline">
              {t.readingDeskModal}
            </span>
          </div>

          {/* Reading Customization Controls */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-ui">
            {/* Parchment Mode Toggle */}
            <div className={`flex items-center rounded-lg border p-0.5 ${
              parchmentTheme === 'dark' ? 'border-[#4a2f1d] bg-[#24150d]' : 'border-[#baa083] bg-[#e3cfb7]'
            }`}>
              <button
                type="button"
                onClick={() => setParchmentTheme('dark')}
                className={`p-1.5 rounded flex items-center gap-1 cursor-pointer ${
                  parchmentTheme === 'dark' ? 'bg-[#3e2416] text-[#f7df94] font-bold' : 'text-[#5c4028]'
                }`}
                title={t.darkParchment}
              >
                <Moon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.darkParchment}</span>
              </button>
              <button
                type="button"
                onClick={() => setParchmentTheme('ivory')}
                className={`p-1.5 rounded flex items-center gap-1 cursor-pointer ${
                  parchmentTheme === 'ivory' ? 'bg-[#f7edd8] text-[#120c08] font-bold shadow-sm' : 'text-[#8f7560]'
                }`}
                title={t.ivoryParchment}
              >
                <Sun className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.ivoryParchment}</span>
              </button>
            </div>

            {/* Font Adjust */}
            <div className={`flex items-center rounded-lg border p-0.5 ${
              parchmentTheme === 'dark' ? 'border-[#4a2f1d] bg-[#24150d]' : 'border-[#baa083] bg-[#e3cfb7]'
            }`}>
              <button
                type="button"
                onClick={() => setFontSizeDelta((prev) => Math.max(-2, prev - 1))}
                disabled={fontSizeDelta <= -2}
                className="px-2 py-1 disabled:opacity-40 font-bold cursor-pointer"
                title={t.decreaseFont}
              >
                {isRtl ? 'أ-' : 'A-'}
              </button>
              <button
                type="button"
                onClick={() => setFontSizeDelta((prev) => Math.min(3, prev + 1))}
                disabled={fontSizeDelta >= 3}
                className="px-2 py-1 disabled:opacity-40 font-bold cursor-pointer"
                title={t.increaseFont}
              >
                {isRtl ? 'أ+' : 'A+'}
              </button>
            </div>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                parchmentTheme === 'dark'
                  ? 'bg-[#29170d] border-[#4a2f1d] text-[#c9b49a] hover:text-[#f3e5ab]'
                  : 'bg-[#dfcbb1] border-[#baa083] text-[#24160d] hover:bg-[#d4be9f]'
              }`}
              title={t.printManuscript}
            >
              <Printer className="w-3.5 h-3.5" />
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                parchmentTheme === 'dark'
                  ? 'bg-[#29170d] border-[#4a2f1d] text-[#c9b49a] hover:text-[#f3e5ab] hover:border-[#d4af37]'
                  : 'bg-[#dfcbb1] border-[#baa083] text-[#24160d] hover:bg-[#d4be9f]'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Reading Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-8 print:p-0">
          {/* Header Metadata */}
          <div className="border-b border-[#4d3221]/50 pb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-ui font-semibold bg-[#2a180e] text-[#f7df94] border border-[#d4af37]/50 shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                {article.manuscriptNumber}
              </span>
              <span className="text-xs font-ui text-[#9e8369]">
                {article.shelfLocation}
              </span>
            </div>

            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 ${
              parchmentTheme === 'dark' ? 'text-[#fcf8ee]' : 'text-[#1a110a]'
            } ${isRtl ? 'font-amiri' : 'font-cinzel'}`}>
              {article.title}
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              parchmentTheme === 'dark' ? 'text-[#c7af93]' : 'text-[#543b27]'
            } ${isRtl ? 'font-amiri' : 'font-cormorant text-xl'}`}>
              {article.subtitle}
            </p>

            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full border border-[#d4af37] object-cover"
              />
              <div>
                <span className={`text-sm font-semibold block ${
                  parchmentTheme === 'dark' ? 'text-[#f3e5ab]' : 'text-[#2e1d11]'
                }`}>
                  {article.author.name}
                </span>
                <span className="text-xs text-[#8f7560] font-ui">
                  {article.author.role} • {article.dateArabic} • {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Manuscript Illustration Plate */}
          <div className="rounded-xl overflow-hidden border-2 border-[#5c3a24] bg-black/60 p-2 shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-96 object-cover rounded-lg"
            />
            <p className={`mt-2 text-center text-xs italic ${
              parchmentTheme === 'dark' ? 'text-[#d9c7af]' : 'text-[#694d34]'
            }`}>
              {t.manuscriptPlate}: {article.imageCaption}
            </p>
          </div>

          {/* Poetic Gold Verse */}
          <div className="p-5 rounded-xl bg-[#26150b] border border-[#d4af37]/60 flex items-center justify-between gap-4">
            <div>
              <p className={`text-lg sm:text-xl font-bold gold-foil-text leading-relaxed ${
                isRtl ? 'font-amiri' : 'font-serif'
              }`}>
                « {article.goldFoilVerse.verse} »
              </p>
              <span className="text-xs font-ui text-[#bfa07d]">
                — {article.goldFoilVerse.poet}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyQuote}
              className="shrink-0 p-2 rounded-lg bg-[#170e08] border border-[#d4af37]/40 text-xs font-ui text-[#f3e5ab] hover:border-[#d4af37] cursor-pointer transition-all flex items-center gap-1.5"
            >
              {copiedQuote ? <Check className="w-3.5 h-3.5 text-[#2ed573]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedQuote ? t.verseCopied : t.copyVerse}</span>
            </button>
          </div>

          {/* Lead Paragraph */}
          <p
            className={`text-lg sm:text-xl leading-relaxed text-justify manuscript-drop-cap ${
              parchmentTheme === 'dark' ? 'text-[#f5ebd7]' : 'text-[#1c1109]'
            } ${isRtl ? 'font-amiri' : 'font-cormorant text-2xl'}`}
            style={{ fontSize: `${19 + fontSizeDelta}px` }}
          >
            {article.leadParagraph}
          </p>

          {/* Sections */}
          <div className="space-y-8 pt-4">
            {article.sections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h3 className={`text-2xl font-bold flex items-center gap-2 ${
                  parchmentTheme === 'dark' ? 'text-[#f7df94]' : 'text-[#7a481c]'
                } ${isRtl ? 'font-amiri' : 'font-cinzel text-xl'}`}>
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  {sec.title}
                </h3>

                <div className="space-y-4 text-justify">
                  {sec.content.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={`text-lg leading-relaxed ${
                        parchmentTheme === 'dark' ? 'text-[#e6d8c3]' : 'text-[#2e1d11]'
                      } ${isRtl ? 'font-amiri' : 'font-cormorant text-xl'}`}
                      style={{ fontSize: `${18 + fontSizeDelta}px` }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {sec.subQuote && (
                  <div className={`p-5 rounded-xl border-y shadow-inner ${
                    isRtl ? 'border-r-4 border-r-[#d4af37] border-l' : 'border-l-4 border-l-[#d4af37] border-r'
                  } ${
                    parchmentTheme === 'dark'
                      ? 'bg-[#140b07] border-[#3a2416]'
                      : 'bg-[#ebd9be] border-[#c2aa8a]'
                  }`}>
                    <p className={`text-lg italic leading-relaxed mb-2 ${
                      parchmentTheme === 'dark' ? 'text-[#f7df94]' : 'text-[#613814]'
                    } ${isRtl ? 'font-amiri' : 'font-cormorant text-xl'}`}>
                      {sec.subQuote.text}
                    </p>
                    <span className="text-xs font-ui text-[#9e8369] block">
                      — {sec.subQuote.source}
                    </span>
                  </div>
                )}
              </section>
            ))}

            {/* Key Insights */}
            <div className={`p-6 rounded-xl border ${
              parchmentTheme === 'dark'
                ? 'bg-[#1c110a] border-[#d4af37]/40'
                : 'bg-[#ebdcc6] border-[#baa083]'
            }`}>
              <h4 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
                parchmentTheme === 'dark' ? 'text-[#f3e5ab]' : 'text-[#4d2d12]'
              } ${isRtl ? 'font-amiri' : 'font-cinzel text-base'}`}>
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                {t.summaryTitle}
              </h4>
              <ul className="space-y-2.5">
                {article.keyInsights.map((insight, inIdx) => (
                  <li key={inIdx} className={`flex items-start gap-2.5 text-base ${
                    parchmentTheme === 'dark' ? 'text-[#d9c7af]' : 'text-[#3d2717]'
                  } ${isRtl ? 'font-amiri' : 'font-cormorant text-lg'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2.5 shrink-0" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concluding Thoughts */}
            <div className={`p-5 rounded-xl border ${
              parchmentTheme === 'dark'
                ? 'bg-[#24150d] border-[#4d3221]'
                : 'bg-[#f0e4d0] border-[#d4c1a7]'
            }`}>
              <p className={`text-lg italic leading-relaxed text-justify ${
                parchmentTheme === 'dark' ? 'text-[#ebdcc6]' : 'text-[#2e1d11]'
              } ${isRtl ? 'font-amiri' : 'font-cormorant text-xl'}`}>
                <strong className={`font-semibold block not-italic mb-1 font-ui text-sm ${
                  parchmentTheme === 'dark' ? 'text-[#f7df94]' : 'text-[#875020]'
                }`}>
                  {t.conclusionTitle}
                </strong>
                {article.concludingThoughts}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className={`px-6 py-3 border-t flex items-center justify-between text-xs font-ui ${
          parchmentTheme === 'dark'
            ? 'bg-[#180e08] border-[#432918] text-[#8f7560]'
            : 'bg-[#e5d4bd] border-[#cbb396] text-[#6b4e36]'
        }`}>
          <span>{t.allRightsReserved} • RAWNAQ {new Date().getFullYear()}</span>
          <span>{t.closeTip}</span>
        </div>
      </div>
    </div>
  );
};
