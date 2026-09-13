import React from 'react';
import { Scroll, Sparkles, Heart, MessageCircle, Mail, Phone } from 'lucide-react';
import { Language, UiTranslations } from '../types';
import { ContactDesk } from './ContactDesk';

interface FooterProps {
  language: Language;
  t: UiTranslations;
}

export const Footer: React.FC<FooterProps> = ({ language, t }) => {
  const isRtl = language === 'ar';

  const wings = [
    {
      dot: 'bg-[#d4af37]',
      label: language === 'ar' ? 'جناح سحر وفنون كرة القدم (رونالدو)' : language === 'tr' ? 'Futbol Sanatı Revakı (Ronaldo)' : 'Wing of Athletic Glory & Football (Ronaldo)',
    },
    {
      dot: 'bg-[#54a0ff]',
      label: language === 'ar' ? 'جناح روائع الآثار والمدن (إسطنبول)' : language === 'tr' ? 'Kadim Şehirler Revakı (İstanbul)' : 'Wing of Historic Metropolises (Istanbul)',
    },
    {
      dot: 'bg-[#a55eea]',
      label: language === 'ar' ? 'جناح طموح الفضاء والكون (ناسا)' : language === 'tr' ? 'Uzay ve Kozmos Revakı (NASA)' : 'Wing of Deep Space & Cosmic Quest (NASA)',
    },
    {
      dot: 'bg-[#2ed573]',
      label: language === 'ar' ? 'جناح صروح المستقبل والهندسة (دبي)' : language === 'tr' ? 'Geleceğin Mimarisi Revakı (Dubai)' : 'Wing of Futuristic Architecture (Dubai)',
    },
  ];

  return (
    <footer className={`relative w-full bg-gradient-to-t from-[#0a0604] via-[#140b07] to-[#1a100a] border-t-2 border-[#5c3a24] pt-14 pb-10 px-4 sm:px-6 lg:px-8 mt-24 ${
      isRtl ? 'text-right' : 'text-left'
    }`}>
      {/* Top Gilded Ornamental Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-75" />

      <div className="max-w-6xl mx-auto">
        {/* Prominent Direct Contact & Correspondence Desk */}
        <div className="mb-14">
          <ContactDesk language={language} t={t} />
        </div>

        {/* Upper Colophon Plaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#3b2314]">
          {/* Col 1: Library Identity & Direct Contacts */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#8f6217] via-[#f7df94] to-[#4a2f1d]">
                <img
                  src="/src/assets/images/rawnaq_emblem_1789293802080.jpg"
                  alt={t.siteTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className={`text-xl font-bold gold-foil-text block ${
                  isRtl ? 'font-amiri' : 'font-cinzel'
                }`}>
                  {t.siteTitle}
                </span>
                <span className="text-[11px] font-ui text-[#a3876e]">
                  {t.siteTagline}
                </span>
              </div>
            </div>

            <p className={`text-xs sm:text-sm text-[#c7af93] leading-relaxed ${
              isRtl ? 'font-amiri' : 'font-cormorant text-base'
            }`}>
              {t.footerBio}
            </p>

            {/* Quick Contact Badges */}
            <div className="pt-2 flex flex-col gap-1.5 text-xs font-ui text-[#e6d8c3]">
              <a
                href="https://wa.me/905359726667"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25d366] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                <span className="font-mono text-[11px]" dir="ltr">0535 972 66 67 (WhatsApp)</span>
              </a>
              <a
                href="mailto:lllmmmm330@gmail.com"
                className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="font-mono text-[11px]" dir="ltr">lllmmmm330@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Literary Proverbs */}
          <div className="space-y-3">
            <h4 className="text-xs font-ui font-semibold text-[#f7df94] uppercase tracking-wider flex items-center gap-1.5">
              <Scroll className="w-3.5 h-3.5 text-[#d4af37]" />
              {t.proverbsTitle}
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 rounded-lg bg-[#20120a] border border-[#3b2314]">
                <p className={`text-xs text-[#e6d8c3] italic ${isRtl ? 'font-amiri' : 'font-serif'}`}>
                  «{t.heroQuote}»
                </p>
                <span className="text-[10px] font-ui text-[#9e8369] block mt-1">— {t.heroQuoteAuthor}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#20120a] border border-[#3b2314]">
                <p className={`text-xs text-[#e6d8c3] italic ${isRtl ? 'font-amiri' : 'font-serif'}`}>
                  «{language === 'ar' ? 'الكتاب هو النور الذي لا ينطفئ أبداً في ظلمات الجهل.' : language === 'en' ? 'A room without books is like a body without a soul.' : 'Kitapsız bir oda, ruhsuz bir beden gibidir.'}»
                </p>
                <span className="text-[10px] font-ui text-[#9e8369] block mt-1">
                  — {language === 'ar' ? 'ابن رشد' : language === 'en' ? 'Marcus Tullius Cicero' : 'Cicero'}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Sections & Shelves */}
          <div className="space-y-3">
            <h4 className="text-xs font-ui font-semibold text-[#f7df94] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              {t.fourWingsTitle}
            </h4>
            <ul className="space-y-2 text-xs font-ui text-[#c7af93]">
              {wings.map((wing, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${wing.dot}`} />
                  <span>{wing.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower Imprint Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-ui text-[#806550]">
          <p>
            {t.allRightsReserved} © {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-2">
            <span>{t.madeWithLove}</span>
            <Heart className="w-3.5 h-3.5 text-[#e74c3c] fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};

