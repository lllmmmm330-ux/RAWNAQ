import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ExternalLink, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { Language, UiTranslations } from '../types';

interface ContactDeskProps {
  language: Language;
  t: UiTranslations;
  compact?: boolean;
}

export const ContactDesk: React.FC<ContactDeskProps> = ({ language, t, compact = false }) => {
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isRtl = language === 'ar';

  const whatsappNumber = '05359726667';
  const whatsappInternational = '+905359726667';
  const whatsappDisplay = '0535 972 66 67';
  const emailAddress = 'lllmmmm330@gmail.com';

  const whatsappGreeting = isRtl
    ? 'السلام عليكم ورحمة الله، أود التواصل معكم بخصوص مكتبة ومدونة رَوْنَق.'
    : language === 'tr'
    ? 'Merhaba, Revnak Kütüphanesi ve yazmaları hakkında sizinle iletişime geçmek istiyorum.'
    : 'Hello, I would like to connect regarding the RAWNAQ classical library.';

  const emailSubject = isRtl
    ? 'رسالة تواصل ومراسلة - خزانة رَوْنَق للمخطوطات'
    : language === 'tr'
    ? 'İletişim Talebi - Revnak Kütüphanesi'
    : 'Correspondence - RAWNAQ Classical Library';

  const handleCopyWhatsapp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(whatsappNumber);
    setCopiedWhatsapp(true);
    setTimeout(() => setCopiedWhatsapp(false), 2200);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const whatsappUrl = `https://wa.me/905359726667?text=${encodeURIComponent(whatsappGreeting)}`;
  const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;

  if (compact) {
    return (
      <div className={`p-3 space-y-2.5 font-ui text-xs ${isRtl ? 'text-right' : 'text-left'}`}>
        {/* WhatsApp Compact Item */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#142318] to-[#1e130c] border border-[#25d366]/40 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#25d366]/20 border border-[#25d366]/60 flex items-center justify-center shrink-0 text-[#25d366]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-[#86efac] font-semibold block uppercase tracking-wider">
                {t.whatsappLabel}
              </span>
              <span className="text-xs font-bold text-[#f7df94] tracking-wider block font-mono" dir="ltr">
                {whatsappDisplay}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handleCopyWhatsapp}
              className="p-1.5 rounded-lg bg-[#1a2d1f] hover:bg-[#233d2a] border border-[#25d366]/40 text-[#86efac] transition-all cursor-pointer"
              title={t.copyContact}
            >
              {copiedWhatsapp ? <Check className="w-3.5 h-3.5 text-[#25d366]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#25d366] hover:bg-[#20ba5a] text-[#0d1d12] font-bold text-[11px] flex items-center gap-1 transition-all shadow-sm cursor-pointer"
            >
              <span>{t.chatOnWhatsapp}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Email Compact Item */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#131c2e] to-[#1e130c] border border-[#38bdf8]/40 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#38bdf8]/20 border border-[#38bdf8]/60 flex items-center justify-center shrink-0 text-[#38bdf8]">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-[#7dd3fc] font-semibold block uppercase tracking-wider">
                {t.emailLabel}
              </span>
              <span className="text-xs font-bold text-[#f7df94] truncate block font-mono" dir="ltr">
                {emailAddress}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg bg-[#19273f] hover:bg-[#223555] border border-[#38bdf8]/40 text-[#7dd3fc] transition-all cursor-pointer"
              title={t.copyContact}
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#38bdf8]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <a
              href={emailUrl}
              className="px-2.5 py-1 rounded-lg bg-[#38bdf8] hover:bg-[#0284c7] text-[#081528] font-bold text-[11px] flex items-center gap-1 transition-all shadow-sm cursor-pointer"
            >
              <span>{t.sendEmail}</span>
              <Send className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="contact-desk"
      className={`relative w-full rounded-2xl bg-gradient-to-b from-[#21140c] via-[#190e08] to-[#120a05] border-2 border-[#d4af37]/60 p-5 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden scroll-mt-28 ${
        isRtl ? 'text-right' : 'text-left'
      }`}
    >
      {/* Gilded Corner Filigree Accents */}
      <div className="ornate-corner-tl" />
      <div className="ornate-corner-tr" />
      <div className="ornate-corner-bl" />
      <div className="ornate-corner-br" />

      {/* Top Banner Tag */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c1a10] border border-[#d4af37]/50 text-[#f7df94] text-xs font-ui font-semibold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{t.contactMe}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse" />
        </div>

        <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#fcf8ee] leading-tight mb-3 ${
          isRtl ? 'font-amiri' : 'font-cinzel'
        }`}>
          {t.contactTitle}
        </h3>

        <p className={`text-xs sm:text-sm md:text-base text-[#d9c7af] leading-relaxed ${
          isRtl ? 'font-amiri' : 'font-cormorant text-lg'
        }`}>
          {t.contactSubtitle}
        </p>
      </div>

      {/* The Two Main Contact Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
        {/* 1. WhatsApp Card */}
        <div className="relative rounded-xl bg-gradient-to-br from-[#122317] via-[#1a120b] to-[#120a05] border border-[#25d366]/40 p-5 sm:p-6 transition-all duration-300 hover:border-[#25d366] hover:shadow-[0_10px_30px_rgba(37,211,102,0.2)] group flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/20 border border-[#25d366]/60 flex items-center justify-center text-[#25d366] shadow-[0_0_15px_rgba(37,211,102,0.3)] group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-ui text-[#86efac] font-bold uppercase tracking-wider block">
                  {t.whatsappLabel}
                </span>
                <span className="text-xs text-[#a3876e] font-ui flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
                  <span>{language === 'ar' ? 'متاح للمراسلة الفورية' : language === 'tr' ? 'Hızlı Mesajlaşma' : 'Instant Messaging'}</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyWhatsapp}
              className="px-2.5 py-1.5 rounded-lg bg-[#192b1e] hover:bg-[#223d2b] border border-[#25d366]/40 text-xs font-ui text-[#86efac] hover:text-[#fff] transition-all cursor-pointer flex items-center gap-1"
              title={t.copyContact}
            >
              {copiedWhatsapp ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25d366]" />
                  <span className="text-[11px]">{t.contactCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">{t.copyContact}</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Display Numbers */}
          <div className="my-4 p-3 rounded-lg bg-[#0c160e] border border-[#25d366]/30">
            <div className="text-lg sm:text-xl font-bold text-[#f7df94] tracking-widest font-mono" dir="ltr">
              {whatsappDisplay}
            </div>
            <div className="text-xs text-[#86efac] font-mono mt-0.5" dir="ltr">
              {whatsappInternational}
            </div>
          </div>

          {/* Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#2ef076] hover:to-[#16a090] text-[#091b10] font-bold font-ui text-sm flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(37,211,102,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.chatOnWhatsapp}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 2. Email Card */}
        <div className="relative rounded-xl bg-gradient-to-br from-[#121c2e] via-[#1a120b] to-[#120a05] border border-[#38bdf8]/40 p-5 sm:p-6 transition-all duration-300 hover:border-[#38bdf8] hover:shadow-[0_10px_30px_rgba(56,189,248,0.2)] group flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/20 border border-[#38bdf8]/60 flex items-center justify-center text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-ui text-[#7dd3fc] font-bold uppercase tracking-wider block">
                  {t.emailLabel}
                </span>
                <span className="text-xs text-[#a3876e] font-ui flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>{language === 'ar' ? 'البريد المعتمد للمراسلات' : language === 'tr' ? 'Resmi İletişim E-postası' : 'Official Electronic Desk'}</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-2.5 py-1.5 rounded-lg bg-[#182740] hover:bg-[#23385c] border border-[#38bdf8]/40 text-xs font-ui text-[#7dd3fc] hover:text-[#fff] transition-all cursor-pointer flex items-center gap-1"
              title={t.copyContact}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span className="text-[11px]">{t.contactCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">{t.copyContact}</span>
                </>
              )}
            </button>
          </div>

          {/* Email Address Display */}
          <div className="my-4 p-3 rounded-lg bg-[#0c1320] border border-[#38bdf8]/30">
            <div className="text-base sm:text-lg font-bold text-[#f7df94] tracking-wide font-mono truncate" dir="ltr">
              {emailAddress}
            </div>
            <div className="text-xs text-[#7dd3fc] font-ui mt-0.5">
              {language === 'ar' ? 'انقر للنسخ أو الإرسال الفوري' : language === 'tr' ? 'Kopyalamak veya göndermek için tıklayın' : 'Click to send or copy instantly'}
            </div>
          </div>

          {/* Action Button */}
          <a
            href={emailUrl}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#075985] hover:from-[#0ea5e9] hover:to-[#0284c7] text-[#f8fafc] font-bold font-ui text-sm flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(2,132,199,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{t.sendEmail}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
