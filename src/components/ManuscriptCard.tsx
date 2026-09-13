import React, { useState } from 'react';
import { 
  Bookmark, 
  BookOpen, 
  Share2, 
  Copy, 
  Check, 
  Clock, 
  Calendar, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Maximize2
} from 'lucide-react';
import { Article, Language, UiTranslations } from '../types';

interface ManuscriptCardProps {
  article: Article;
  index: number;
  fontSizeDelta: number;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenDeepReader: (article: Article) => void;
  language: Language;
  t: UiTranslations;
}

export const ManuscriptCard: React.FC<ManuscriptCardProps> = ({
  article,
  index,
  fontSizeDelta,
  isBookmarked,
  onToggleBookmark,
  onOpenDeepReader,
  language,
  t,
}) => {
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const isRtl = language === 'ar';

  const handleCopyQuote = () => {
    const textToCopy = `«${article.goldFoilVerse.verse}» — ${article.goldFoilVerse.poet}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2200);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  return (
    <article
      id={article.id}
      className="relative w-full max-w-4xl mx-auto mb-20 scroll-mt-24 group transition-all duration-500"
    >
      {/* Top Wood Shelf Plate Shadow */}
      <div className="w-[98%] mx-auto h-2 bg-gradient-to-b from-black/80 to-transparent" />

      {/* The Illuminated Manuscript / Framed Royal Tome */}
      <div className="relative rounded-2xl bg-[#170e08] manuscript-border-gilded p-4 sm:p-7 md:p-10 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)] hover:-translate-y-1">
        
        {/* Ornate Gilded Arabesque Corners */}
        <div className="ornate-corner-tl" />
        <div className="ornate-corner-tr" />
        <div className="ornate-corner-bl" />
        <div className="ornate-corner-br" />

        {/* Outer Spine Accent on Book Edge (RTL: right, LTR: left) */}
        <div className={`absolute top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-b from-[#361e12] via-[#20120a] to-[#140b07] flex flex-col justify-around items-center py-6 pointer-events-none ${
          isRtl 
            ? 'right-0 rounded-r-2xl border-l border-[#d4af37]/30' 
            : 'left-0 rounded-l-2xl border-r border-[#d4af37]/30'
        }`}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50" />
        </div>

        {/* Manuscript Header Banner */}
        <div className={`relative z-10 border-b border-[#4d3221] pb-6 mb-7 ${
          isRtl ? 'pr-3 sm:pr-4' : 'pl-3 sm:pl-4'
        }`}>
          
          {/* Top Registration Line & Shelf Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-ui font-semibold bg-[#2a180e] text-[#f7df94] border border-[#d4af37]/50 shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                {article.manuscriptNumber}
              </span>
              <span className="hidden sm:inline-block text-xs font-ui text-[#9e8369]">
                {article.shelfLocation}
              </span>
            </div>

            {/* Shelf Actions: Bookmark, Share, Deep Read */}
            <div className="flex items-center gap-1.5 sm:gap-2 font-ui text-xs">
              <button
                type="button"
                onClick={() => onToggleBookmark(article.id)}
                className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                  isBookmarked
                    ? 'bg-[#d4af37] text-[#120c08] border-[#d4af37] font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#24150d] text-[#c9b49a] border-[#4d3221] hover:text-[#f3e5ab] hover:border-[#d4af37]'
                }`}
                title={isBookmarked ? t.saved : t.save}
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span className="hidden md:inline">{isBookmarked ? t.saved : t.save}</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="p-2 rounded-lg bg-[#24150d] text-[#c9b49a] border border-[#4d3221] hover:text-[#f3e5ab] hover:border-[#d4af37] transition-all cursor-pointer flex items-center gap-1"
                title={t.share}
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-[#2ed573]" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="hidden md:inline">{copiedLink ? t.copied : t.share}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDeepReader(article)}
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#8f6217] to-[#d4af37] text-[#120c08] font-bold border border-[#f3e5ab] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all cursor-pointer flex items-center gap-1.5"
                title={t.readingDesk}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.readingDesk}</span>
              </button>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#fcf8ee] leading-tight mb-3 ${
            isRtl ? 'font-amiri' : 'font-cinzel tracking-normal'
          }`}>
            {article.title}
          </h2>
          <p className={`text-sm sm:text-base text-[#c7af93] leading-relaxed max-w-3xl ${
            isRtl ? 'font-amiri' : 'font-cormorant text-lg'
          }`}>
            {article.subtitle}
          </p>

          {/* Manuscript Metadata Pill Bar */}
          <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-[#a3876e] font-ui pt-4 border-t border-[#3b2314]">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-6 h-6 rounded-full border border-[#d4af37]/60 object-cover"
              />
              <span className="text-[#f3e5ab] font-semibold">{article.author.name}</span>
              <span className="text-[#806550] hidden sm:inline">({article.author.role})</span>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{article.dateArabic}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{article.readTime}</span>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-[#2a170d] text-[#e0a845] border border-[#d4af37]/30">
              {article.category}
            </span>
          </div>
        </div>

        {/* Framed Royal Illustration Plate (Ronaldo on the pitch for Football) */}
        <div className="relative mb-8 rounded-xl overflow-hidden border-2 border-[#5c3a24] bg-[#0c0704] p-1.5 sm:p-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140b07] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* Gilded Plaque Caption */}
          <div className="py-2.5 px-4 bg-gradient-to-r from-[#1c100a] via-[#2d1b11] to-[#1c100a] border-t border-[#4d3221] text-center">
            <p className={`text-xs sm:text-sm text-[#d9c7af] italic ${
              isRtl ? 'font-amiri' : 'font-cormorant text-base'
            }`}>
              {t.manuscriptPlate}: {article.imageCaption}
            </p>
          </div>
        </div>

        {/* Inscribed Gold Foil Poetic Plaque */}
        <div className="relative my-7 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#2a190f] via-[#3a2214] to-[#2a190f] border border-[#d4af37]/60 shadow-[0_4px_20px_rgba(0,0,0,0.7)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={`flex items-center gap-3 flex-1 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="w-10 h-10 rounded-full bg-[#170e08] border border-[#d4af37] flex items-center justify-center shrink-0 shadow-inner">
              <Sparkles className="w-5 h-5 text-[#f7df94]" />
            </div>
            <div>
              <p className={`text-base sm:text-lg font-bold gold-foil-text leading-relaxed ${
                isRtl ? 'font-amiri' : 'font-serif'
              }`}>
                « {article.goldFoilVerse.verse} »
              </p>
              <span className="text-xs font-ui text-[#bfa07d]">
                — {article.goldFoilVerse.poet}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyQuote}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#1a100a] hover:bg-[#2e1c12] border border-[#d4af37]/50 text-xs font-ui text-[#f3e5ab] hover:text-[#fff] transition-all cursor-pointer flex items-center gap-1.5"
            title={t.copyVerse}
          >
            {copiedQuote ? <Check className="w-3.5 h-3.5 text-[#2ed573]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedQuote ? t.verseCopied : t.copyVerse}</span>
          </button>
        </div>

        {/* Illuminated Lead Paragraph with Drop Cap */}
        <div className={`relative mb-8 ${isRtl ? 'pr-2 sm:pr-4' : 'pl-2 sm:pr-4'}`}>
          <p
            className={`text-base sm:text-lg md:text-xl text-[#f5ebd7] leading-relaxed text-justify manuscript-drop-cap ${
              isRtl ? 'font-amiri' : 'font-cormorant text-xl'
            }`}
            style={{ fontSize: `${18 + fontSizeDelta}px` }}
          >
            {article.leadParagraph}
          </p>
        </div>

        {/* Expandable/Collapsible Full Article Body */}
        {isExpanded && (
          <div className={`space-y-8 border-t border-[#3b2314] pt-8 ${isRtl ? 'pr-2 sm:pr-4' : 'pl-2 sm:pr-4'}`}>
            {article.sections.map((sec, secIdx) => (
              <section key={secIdx} className="space-y-4">
                <h3 className={`text-xl sm:text-2xl font-bold text-[#f7df94] flex items-center gap-2 ${
                  isRtl ? 'font-amiri' : 'font-cinzel text-lg'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  {sec.title}
                </h3>

                <div className="space-y-4 text-justify">
                  {sec.content.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={`text-base sm:text-lg text-[#e6d8c3] leading-relaxed ${
                        isRtl ? 'font-amiri' : 'font-cormorant text-xl'
                      }`}
                      style={{ fontSize: `${17 + fontSizeDelta}px` }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* Ornate Sub-Quote Box */}
                {sec.subQuote && (
                  <div className={`my-6 p-5 rounded-xl bg-[#140b07] border-y border-[#3a2416] shadow-inner ${
                    isRtl ? 'border-r-4 border-r-[#d4af37] border-l' : 'border-l-4 border-l-[#d4af37] border-r'
                  }`}>
                    <p className={`text-base sm:text-lg text-[#f7df94] italic leading-relaxed mb-2 ${
                      isRtl ? 'font-amiri' : 'font-cormorant text-xl'
                    }`}>
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
            <div className="my-8 p-5 sm:p-6 rounded-xl bg-[#1c110a] border border-[#d4af37]/40 shadow-inner">
              <h4 className={`text-base sm:text-lg font-bold text-[#f3e5ab] mb-3 flex items-center gap-2 ${
                isRtl ? 'font-amiri' : 'font-cinzel text-base'
              }`}>
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                {t.summaryTitle}
              </h4>
              <ul className="space-y-2.5">
                {article.keyInsights.map((insight, inIdx) => (
                  <li key={inIdx} className={`flex items-start gap-2.5 text-sm sm:text-base text-[#d9c7af] ${
                    isRtl ? 'font-amiri' : 'font-cormorant text-lg'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concluding Thoughts */}
            <div className="p-5 rounded-xl bg-gradient-to-l from-[#24150d] via-[#1a0f09] to-[#24150d] border border-[#4d3221]">
              <p className={`text-base sm:text-lg text-[#ebdcc6] italic leading-relaxed text-justify ${
                isRtl ? 'font-amiri' : 'font-cormorant text-xl'
              }`}>
                <strong className="text-[#f7df94] font-semibold block not-italic mb-1 font-ui text-sm">
                  {t.conclusionTitle}
                </strong>
                {article.concludingThoughts}
              </p>
            </div>

            {/* Manuscript Tags Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#3b2314]">
              <span className="text-xs font-ui text-[#8f7560]">{t.tagsLabel}</span>
              {article.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md bg-[#24150d] hover:bg-[#341d11] text-xs font-ui text-[#c5a059] border border-[#4a2f1d] transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Bar of the Manuscript */}
        <div className="mt-8 pt-4 border-t border-[#4d3221] flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 rounded-lg bg-[#22130b] hover:bg-[#321c10] border border-[#4d3221] text-xs font-ui text-[#f3e5ab] flex items-center gap-2 transition-all cursor-pointer"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 text-[#d4af37]" />
                <span>{t.collapseDetails}</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-[#d4af37]" />
                <span>{t.expandDetails}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => onOpenDeepReader(article)}
            className="text-xs font-ui text-[#d4af37] hover:text-[#f7df94] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{t.fullScreenRead}</span>
            <BookOpen className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Heavy Classical Carved Mahogany Reading Table Shelf Board */}
      <div className="relative mt-2 h-7 w-full rounded-b-xl bookshelf-tier flex items-center justify-between px-6 shadow-2xl">
        <div className="flex items-center gap-2 text-[11px] font-ui text-[#c5a059]/80">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]/60" />
          <span>RAWNAQ • {article.shelfLocation.split('•')[0] || t.siteTitle}</span>
        </div>
        <div className="text-[10px] font-ui text-[#8f7560] tracking-wider">
          {t.archivedCode} RAW-0{index + 1}84-{language.toUpperCase()}
        </div>
      </div>
    </article>
  );
};
