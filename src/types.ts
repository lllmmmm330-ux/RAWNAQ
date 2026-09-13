export interface ArticleSection {
  title: string;
  content: string[];
  subQuote?: {
    text: string;
    source: string;
  };
}

export interface Article {
  id: string;
  manuscriptNumber: string; // e.g. "المخطوطة رقم ٠١"
  shelfLocation: string; // e.g. "جناح الفنون والرياضة - الرف الذهبي"
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  dateArabic: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  imageCaption: string;
  leadParagraph: string;
  sections: ArticleSection[];
  concludingThoughts: string;
  keyInsights: string[];
  goldFoilVerse: {
    verse: string;
    poet: string;
  };
  tags: string[];
}

export type Language = 'ar' | 'en' | 'tr';

export interface UiTranslations {
  siteTitle: string;
  siteSubtitle: string;
  siteTagline: string;
  searchPlaceholder: string;
  libraryAmbiance: string;
  studyAtmosphere: string;
  silent: string;
  fireplace: string;
  libraryRain: string;
  volume: string;
  decreaseFont: string;
  increaseFont: string;
  personalShelf: string;
  savedManuscripts: string;
  noSavedYet: string;
  ambientLamp: string;
  royalGold: string;
  candlelight: string;
  emeraldStudy: string;
  diwanHeader: string;
  heroTitle: string;
  heroDescription: string;
  heroQuote: string;
  heroQuoteAuthor: string;
  shelfIndexLabel: string;
  volumePrefix: string;
  fourManuscriptsTitle: string;
  verticalOrderLabel: string;
  readingDesk: string;
  save: string;
  saved: string;
  share: string;
  copied: string;
  copyVerse: string;
  verseCopied: string;
  manuscriptPlate: string;
  summaryTitle: string;
  conclusionTitle: string;
  tagsLabel: string;
  collapseDetails: string;
  expandDetails: string;
  fullScreenRead: string;
  archivedCode: string;
  backToShelves: string;
  readingDeskModal: string;
  darkParchment: string;
  ivoryParchment: string;
  printManuscript: string;
  allRightsReserved: string;
  closeTip: string;
  noResults: string;
  trySearchingOther: string;
  clearFilter: string;
  searchResultsFor: string;
  proverbsTitle: string;
  fourWingsTitle: string;
  footerBio: string;
  madeWithLove: string;
  contactMe: string;
  contactTitle: string;
  contactSubtitle: string;
  whatsappLabel: string;
  emailLabel: string;
  chatOnWhatsapp: string;
  sendEmail: string;
  copyContact: string;
  contactCopied: string;
}

export type AmbientLightingMode = 'warm-gold' | 'candlelight' | 'emerald-study';

export type AmbientSoundMode = 'silent' | 'fireplace' | 'library-rain';
