import React, { useState } from 'react';
import { Volume2, VolumeX, Flame, CloudRain, Bookmark, BookOpen, Search, X, Languages, Check, MessageCircle } from 'lucide-react';
import { AmbientSoundMode, Article, Language, UiTranslations } from '../types';
import { libraryAudio } from '../utils/libraryAudio';
import { ContactDesk } from './ContactDesk';

interface NavbarProps {
  fontSizeDelta: number;
  setFontSizeDelta: React.Dispatch<React.SetStateAction<number>>;
  soundMode: AmbientSoundMode;
  setSoundMode: (mode: AmbientSoundMode) => void;
  bookmarks: string[];
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: UiTranslations;
}

export const Navbar: React.FC<NavbarProps> = ({
  fontSizeDelta,
  setFontSizeDelta,
  soundMode,
  setSoundMode,
  bookmarks,
  articles,
  onSelectArticle,
  searchTerm,
  setSearchTerm,
  language,
  setLanguage,
  t,
}) => {
  const [showBookmarksDrawer, setShowBookmarksDrawer] = useState(false);
  const [isAudioMenuOpen, setIsAudioMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.3);

  const bookmarkedArticles = articles.filter((a) => bookmarks.includes(a.id));

  const handleSoundChange = (mode: AmbientSoundMode) => {
    setSoundMode(mode);
    libraryAudio.setMode(mode, audioVolume);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setAudioVolume(vol);
    libraryAudio.setVolume(vol);
  };

  const isRtl = language === 'ar';

  const languagesList: Array<{ code: Language; label: string; flag: string; subLabel: string }> = [
    { code: 'ar', label: 'العربية', flag: '🇸🇦', subLabel: 'Arabic' },
    { code: 'en', label: 'English', flag: '🇬🇧', subLabel: 'الإنجليزية' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷', subLabel: 'التركية' },
  ];

  const currentLangObj = languagesList.find((l) => l.code === language) || languagesList[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#160e09]/95 backdrop-blur-md border-b border-[#5c3a24] shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
      {/* Top Gilded Filigree Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand & Emblem */}
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#8f6217] via-[#f7df94] to-[#4a2f1d] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <img
              src="/src/assets/images/rawnaq_emblem_1789293802080.jpg"
              alt={t.siteTitle}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full border border-[#f3e5ab]/30 pointer-events-none" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold tracking-wide gold-foil-text ${isRtl ? 'font-amiri' : 'font-cinzel'}`}>
                {t.siteTitle}
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-ui tracking-widest px-2 py-0.5 rounded border border-[#d4af37]/40 text-[#d4af37] bg-[#29170d]/70">
                {t.siteSubtitle}
              </span>
            </div>
            <p className="text-xs text-[#b89f82] font-ui hidden md:block">
              {t.siteTagline}
            </p>
          </div>
        </div>

        {/* Center Search for Manuscripts */}
        <div className="hidden lg:flex items-center flex-1 max-w-xs mx-4">
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`w-full py-1.5 text-xs bg-[#24160e] border border-[#5c3a24] focus:border-[#d4af37] rounded-full text-[#f3e5ab] placeholder-[#8f7560] font-ui outline-none transition-all ${
                isRtl ? 'pl-8 pr-9' : 'pr-8 pl-9'
              }`}
            />
            <Search className={`w-3.5 h-3.5 text-[#a8896a] absolute top-1/2 -translate-y-1/2 pointer-events-none ${
              isRtl ? 'right-3' : 'left-3'
            }`} />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className={`absolute top-1/2 -translate-y-1/2 text-[#a8896a] hover:text-[#f3e5ab] cursor-pointer ${
                  isRtl ? 'left-2.5' : 'right-2.5'
                }`}
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Action Controls: Language, Audio, Font Size, Bookmarks */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsLangMenuOpen(!isLangMenuOpen);
                setIsAudioMenuOpen(false);
                setShowBookmarksDrawer(false);
              }}
              className="px-2.5 py-1.5 rounded-lg border border-[#d4af37]/60 bg-gradient-to-r from-[#2a170d] to-[#1e1008] text-[#f7df94] hover:border-[#ffd166] text-xs font-ui flex items-center gap-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.6)] cursor-pointer transition-all"
              title="اختر لغة المطالعة / Select Language / Dil Seçin"
            >
              <Languages className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-semibold">{currentLangObj.flag} {currentLangObj.label}</span>
            </button>

            {isLangMenuOpen && (
              <div className={`absolute mt-2 w-44 p-2 rounded-xl bg-[#20140c] border border-[#d4af37]/70 shadow-[0_12px_35px_rgba(0,0,0,0.95)] z-50 text-xs font-ui ${
                isRtl ? 'left-0 sm:right-0' : 'right-0 sm:left-0'
              }`}>
                <div className="px-2 py-1 text-[11px] font-semibold text-[#f7df94] border-b border-[#3d2415] mb-1">
                  {language === 'ar' ? 'لغة القراءة:' : language === 'en' ? 'Reading Language:' : 'Okuma Dili:'}
                </div>
                <div className="space-y-1">
                  {languagesList.map((langItem) => {
                    const isSelected = language === langItem.code;
                    return (
                      <button
                        key={langItem.code}
                        type="button"
                        onClick={() => {
                          setLanguage(langItem.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full px-2.5 py-2 rounded flex items-center justify-between cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-[#4a2f1d] text-[#fbe8a6] font-bold border border-[#d4af37]/50'
                            : 'text-[#c9b49a] hover:bg-[#2c1a10] hover:text-[#f3e5ab]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-sm">{langItem.flag}</span>
                          <span>{langItem.label}</span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Ambient Study Sound Switch */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsAudioMenuOpen(!isAudioMenuOpen);
                setIsLangMenuOpen(false);
                setShowBookmarksDrawer(false);
              }}
              className={`p-2 rounded-lg border font-ui text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                soundMode !== 'silent'
                  ? 'bg-[#3b2314] border-[#d4af37] text-[#f7df94] shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                  : 'bg-[#20140c] border-[#4a2f1d] text-[#c9b49a] hover:border-[#8f6217]'
              }`}
              title={t.libraryAmbiance}
            >
              {soundMode === 'silent' && <VolumeX className="w-4 h-4" />}
              {soundMode === 'fireplace' && <Flame className="w-4 h-4 text-[#ff9f43] animate-pulse" />}
              {soundMode === 'library-rain' && <CloudRain className="w-4 h-4 text-[#54a0ff] animate-pulse" />}
              <span className="hidden sm:inline">{t.libraryAmbiance}</span>
            </button>

            {/* Audio Dropdown */}
            {isAudioMenuOpen && (
              <div className={`absolute mt-2 w-56 p-3 rounded-xl bg-[#20140c] border border-[#d4af37]/60 shadow-[0_12px_35px_rgba(0,0,0,0.9)] z-50 text-xs font-ui ${
                isRtl ? 'left-0 sm:right-0 text-right' : 'right-0 sm:left-0 text-left'
              }`}>
                <p className="text-[#f7df94] font-semibold mb-2">{t.studyAtmosphere}</p>
                <div className="space-y-1 mb-3">
                  <button
                    type="button"
                    onClick={() => handleSoundChange('silent')}
                    className={`w-full px-2.5 py-1.5 rounded flex items-center justify-between cursor-pointer ${
                      soundMode === 'silent' ? 'bg-[#4a2f1d] text-[#f3e5ab]' : 'text-[#c9b49a] hover:bg-[#2e1c11]'
                    }`}
                  >
                    <span>{t.silent}</span>
                    <VolumeX className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSoundChange('fireplace')}
                    className={`w-full px-2.5 py-1.5 rounded flex items-center justify-between cursor-pointer ${
                      soundMode === 'fireplace' ? 'bg-[#4a2f1d] text-[#ff9f43]' : 'text-[#c9b49a] hover:bg-[#2e1c11]'
                    }`}
                  >
                    <span>{t.fireplace}</span>
                    <Flame className="w-3.5 h-3.5 text-[#ff9f43]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSoundChange('library-rain')}
                    className={`w-full px-2.5 py-1.5 rounded flex items-center justify-between cursor-pointer ${
                      soundMode === 'library-rain' ? 'bg-[#4a2f1d] text-[#54a0ff]' : 'text-[#c9b49a] hover:bg-[#2e1c11]'
                    }`}
                  >
                    <span>{t.libraryRain}</span>
                    <CloudRain className="w-3.5 h-3.5 text-[#54a0ff]" />
                  </button>
                </div>

                {soundMode !== 'silent' && (
                  <div className="pt-2 border-t border-[#3d2415]">
                    <div className="flex justify-between items-center text-[11px] text-[#a8896a] mb-1">
                      <span>{t.volume}</span>
                      <Volume2 className="w-3 h-3 text-[#d4af37]" />
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.8"
                      step="0.05"
                      value={audioVolume}
                      onChange={handleVolumeChange}
                      className="w-full accent-[#d4af37] cursor-pointer"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Typography Scale Control */}
          <div className="flex items-center rounded-lg border border-[#4a2f1d] bg-[#20140c] p-0.5">
            <button
              type="button"
              onClick={() => setFontSizeDelta((prev) => Math.max(-2, prev - 1))}
              disabled={fontSizeDelta <= -2}
              className="px-2 py-1 text-xs text-[#c9b49a] hover:text-[#f3e5ab] disabled:opacity-40 font-bold cursor-pointer"
              title={t.decreaseFont}
            >
              {isRtl ? 'أ-' : 'A-'}
            </button>
            <div className="w-[1px] h-3 bg-[#4a2f1d]" />
            <button
              type="button"
              onClick={() => setFontSizeDelta((prev) => Math.min(3, prev + 1))}
              disabled={fontSizeDelta >= 3}
              className="px-2 py-1 text-xs text-[#c9b49a] hover:text-[#f3e5ab] disabled:opacity-40 font-bold cursor-pointer"
              title={t.increaseFont}
            >
              {isRtl ? 'أ+' : 'A+'}
            </button>
          </div>

          {/* Saved Bookmarks Drawer Toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowBookmarksDrawer(!showBookmarksDrawer);
                setIsLangMenuOpen(false);
                setIsAudioMenuOpen(false);
              }}
              className="relative p-2 rounded-lg border border-[#4a2f1d] bg-[#20140c] text-[#c9b49a] hover:text-[#f3e5ab] hover:border-[#8f6217] transition-all cursor-pointer flex items-center gap-1 font-ui text-xs"
              title={t.personalShelf}
            >
              <Bookmark className="w-4 h-4 text-[#d4af37]" />
              <span className="hidden sm:inline">{t.personalShelf}</span>
              {bookmarks.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#d4af37] text-[#120c08] text-[10px] font-bold flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </button>

            {/* Bookmarks Drawer Popup */}
            {showBookmarksDrawer && (
              <div className={`absolute mt-2 w-72 max-h-96 overflow-y-auto p-3 rounded-xl bg-[#20140c] border border-[#d4af37]/60 shadow-[0_12px_35px_rgba(0,0,0,0.9)] z-50 ${
                isRtl ? 'left-0 text-right' : 'right-0 text-left'
              }`}>
                <div className="flex items-center justify-between border-b border-[#432918] pb-2 mb-2">
                  <span className="font-ui text-xs font-bold text-[#f7df94] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                    {t.savedManuscripts}
                  </span>
                  <span className="text-[11px] text-[#8f7560] font-ui">({bookmarks.length})</span>
                </div>

                {bookmarkedArticles.length === 0 ? (
                  <p className="py-6 text-center text-xs text-[#8f7560] font-ui leading-relaxed">
                    {t.noSavedYet}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {bookmarkedArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => {
                          onSelectArticle(article);
                          setShowBookmarksDrawer(false);
                        }}
                        className="p-2 rounded-lg bg-[#2b1a10] border border-[#4a2f1d] hover:border-[#d4af37] cursor-pointer transition-all flex items-center gap-2 group"
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded object-cover border border-[#5c3a24]"
                        />
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs text-[#f3e5ab] truncate group-hover:text-[#ffd166] ${
                            isRtl ? 'font-amiri' : 'font-serif'
                          }`}>
                            {article.title}
                          </p>
                          <p className="text-[10px] text-[#a8896a] font-ui">{article.readTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Direct Contact Button & Popover */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsContactOpen(!isContactOpen);
                setShowBookmarksDrawer(false);
                setIsLangMenuOpen(false);
                setIsAudioMenuOpen(false);
              }}
              className="relative px-2.5 py-1.5 rounded-lg border border-[#25d366]/60 bg-gradient-to-r from-[#172b1d] to-[#120a05] text-[#86efac] hover:border-[#25d366] text-xs font-ui flex items-center gap-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.6)] cursor-pointer transition-all"
              title={t.contactMe}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
              <span className="font-semibold hidden sm:inline">{t.contactMe}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse" />
            </button>

            {/* Contact Popover */}
            {isContactOpen && (
              <div className={`absolute mt-2 w-80 p-3 rounded-xl bg-[#1e120a] border border-[#d4af37]/70 shadow-[0_16px_40px_rgba(0,0,0,0.95)] z-50 ${
                isRtl ? 'left-0 text-right' : 'right-0 text-left'
              }`}>
                <div className="flex items-center justify-between border-b border-[#3d2415] pb-2 mb-2">
                  <span className="font-ui text-xs font-bold text-[#f7df94] flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    {t.contactTitle}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(false)}
                    className="text-[#8f7560] hover:text-[#f7df94] cursor-pointer p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <ContactDesk language={language} t={t} compact={true} />

                <div className="pt-2 border-t border-[#3d2415] mt-2 text-center">
                  <a
                    href="#contact-desk"
                    onClick={() => setIsContactOpen(false)}
                    className="text-[11px] font-ui text-[#d4af37] hover:underline"
                  >
                    {language === 'ar' ? 'عرض ديوان المراسلات الكامل في أسفل الصفحة ↓' : language === 'tr' ? 'Sayfa altındaki tam iletişim divanını görüntüle ↓' : 'View full correspondence desk at footer ↓'}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
