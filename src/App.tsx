import React, { useState, useEffect } from 'react';
import { getArticlesByLanguage } from './data/articles';
import { UI_TRANSLATIONS } from './data/translations';
import { Article, AmbientLightingMode, AmbientSoundMode, Language } from './types';
import { Navbar } from './components/Navbar';
import { LibraryLampSconce } from './components/LibraryLampSconce';
import { LibraryPediment } from './components/LibraryPediment';
import { ManuscriptCard } from './components/ManuscriptCard';
import { ArticleModal } from './components/ArticleModal';
import { ReadingDeskRibbon } from './components/ReadingDeskRibbon';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('rawnaq_language');
      if (saved === 'ar' || saved === 'en' || saved === 'tr') {
        return saved as Language;
      }
    } catch {
      // ignore
    }
    return 'ar';
  });

  const [lightingMode, setLightingMode] = useState<AmbientLightingMode>('warm-gold');
  const [soundMode, setSoundMode] = useState<AmbientSoundMode>('silent');
  const [fontSizeDelta, setFontSizeDelta] = useState<number>(0);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rawnaq_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeModalArticleId, setActiveModalArticleId] = useState<string | null>(null);

  // Active language resources
  const t = UI_TRANSLATIONS[language];
  const currentArticles = getArticlesByLanguage(language);
  const isRtl = language === 'ar';

  // Synchronize HTML attributes (dir and lang)
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    try {
      localStorage.setItem('rawnaq_language', language);
    } catch {
      // ignore
    }
  }, [language, isRtl]);

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('rawnaq_bookmarks', JSON.stringify(bookmarks));
    } catch {
      // Ignore
    }
  }, [bookmarks]);

  const handleToggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((bId) => bId !== id) : [...prev, id]
    );
  };

  const handleScrollToArticle = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Find active modal article in the current language
  const activeModalArticle = activeModalArticleId
    ? currentArticles.find((a) => a.id === activeModalArticleId) || null
    : null;

  // Filter articles based on search query
  const filteredArticles = currentArticles.filter((article) => {
    if (!searchTerm.trim()) return true;
    const query = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.subtitle.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.leadParagraph.toLowerCase().includes(query) ||
      article.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen library-wood-bg relative transition-colors duration-700 ${
        lightingMode === 'warm-gold'
          ? 'ambient-glow-warm'
          : lightingMode === 'candlelight'
          ? 'ambient-glow-candle'
          : 'ambient-glow-emerald'
      }`}
    >
      {/* Background Library Bookshelf Texture Shadows */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:28px_28px] z-0" />

      {/* Main Top Navigation Header */}
      <Navbar
        fontSizeDelta={fontSizeDelta}
        setFontSizeDelta={setFontSizeDelta}
        soundMode={soundMode}
        setSoundMode={setSoundMode}
        bookmarks={bookmarks}
        articles={currentArticles}
        onSelectArticle={(art) => setActiveModalArticleId(art.id)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      {/* Main Reading Hall Column */}
      <main className="relative z-10 w-full pt-4 pb-12">
        {/* Overhead Brass Reading Lamp Sconce with Ambient Tone Controls */}
        <LibraryLampSconce
          lightingMode={lightingMode}
          onLightingChange={setLightingMode}
          t={t}
        />

        {/* Entrance Pediment with Seal, Quote, and Shelves Jump Index */}
        <LibraryPediment
          articles={currentArticles}
          onScrollToArticle={handleScrollToArticle}
          language={language}
          t={t}
        />

        {/* Strict Vertical Manuscript Shelves Layout */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-8">
          {/* Vertical Shelves Header Label */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#4a2f1d]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#d4af37]" />
              <h2 className={`text-lg sm:text-xl font-bold text-[#f7df94] ${isRtl ? 'font-amiri' : 'font-cinzel'}`}>
                {t.verticalShelvesTitle}
              </h2>
            </div>
            <span className="text-xs font-ui text-[#9e8369]">
              {t.verticalShelvesSubtitle}
            </span>
          </div>

          {/* Search feedback when filtering */}
          {searchTerm && (
            <div className="mb-8 p-4 rounded-xl bg-[#24150d] border border-[#5c3a24] flex items-center justify-between">
              <p className="text-xs font-ui text-[#f3e5ab]">
                {t.searchResultsFor}: <strong className="text-[#ffd166]">«{searchTerm}»</strong> ({filteredArticles.length})
              </p>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs font-ui text-[#d4af37] hover:underline cursor-pointer"
              >
                {t.clearFilter}
              </button>
            </div>
          )}

          {/* The Four Full Articles Presented Sequentially on the Vertical Axis */}
          <div className="space-y-16">
            {filteredArticles.map((article, index) => (
              <ManuscriptCard
                key={article.id}
                article={article}
                index={index}
                fontSizeDelta={fontSizeDelta}
                isBookmarked={bookmarks.includes(article.id)}
                onToggleBookmark={handleToggleBookmark}
                onOpenDeepReader={(art) => setActiveModalArticleId(art.id)}
                language={language}
                t={t}
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-16 text-center rounded-2xl bg-[#1c100a] border border-[#4a2f1d]">
              <p className={`text-base text-[#d4af37] mb-2 ${isRtl ? 'font-amiri' : 'font-cinzel'}`}>
                {t.noManuscriptsFound}
              </p>
              <p className="text-xs font-ui text-[#8f7560]">
                {t.searchHint}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Deep Manuscript Reading Modal */}
      <ArticleModal
        article={activeModalArticle}
        onClose={() => setActiveModalArticleId(null)}
        fontSizeDelta={fontSizeDelta}
        setFontSizeDelta={setFontSizeDelta}
        isBookmarked={activeModalArticle ? bookmarks.includes(activeModalArticle.id) : false}
        onToggleBookmark={handleToggleBookmark}
        language={language}
        t={t}
      />

      {/* Floating Velvet Bookmark Ribbon with Scroll Progress */}
      <ReadingDeskRibbon language={language} t={t} />

      {/* Colophon and Bibliographic Footer */}
      <Footer language={language} t={t} />
    </div>
  );
}
