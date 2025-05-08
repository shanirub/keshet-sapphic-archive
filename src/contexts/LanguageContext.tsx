
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'he';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.movies': 'Movies',
    'nav.tv': 'TV Shows',
    'nav.books': 'Books',
    'nav.music': 'Music',
    'nav.theatre': 'Theatre',
    'nav.design': 'Design',
    'nav.events': 'Events',
    
    // Filters
    'filter.newest': 'Newest',
    'filter.topRated': 'Top Rated',
    'filter.genre': 'Genre',
    'filter.israeli': 'Israeli',
    'filter.action': 'Action',
    'filter.crime': 'Crime',
    'filter.documentary': 'Documentary',
    'filter.drama': 'Drama',
    'filter.comedy': 'Comedy',
    'filter.romance': 'Romance',
    
    // UI Elements
    'ui.search': 'Search',
    'ui.languageToggle': 'עברית',
    'ui.featuredContent': 'Featured Content',
    'ui.popularNow': 'Popular Now',
    'ui.recentlyAdded': 'Recently Added',
    'ui.seeAll': 'See All',
    
    // Homepage
    'home.hero.title': 'Yesh Lesbiyot',
    'home.hero.subtitle': 'A curated archive of lesbian and sapphic content',
    'home.featured': 'Featured',
    
    // Footer
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.rights': 'All Rights Reserved',
  },
  he: {
    // Navigation
    'nav.home': 'בית',
    'nav.movies': 'סרטים',
    'nav.tv': 'סדרות',
    'nav.books': 'ספרים',
    'nav.music': 'מוזיקה',
    'nav.theatre': 'תאטרון',
    'nav.design': 'עיצוב',
    'nav.events': 'אירועים',
    
    // Filters
    'filter.newest': 'חדש ביותר',
    'filter.topRated': 'מדורגים גבוה',
    'filter.genre': 'ז׳אנר',
    'filter.israeli': 'ישראלי',
    'filter.action': 'אקשן',
    'filter.crime': 'פשע',
    'filter.documentary': 'תיעודי',
    'filter.drama': 'דרמה',
    'filter.comedy': 'קומדיה',
    'filter.romance': 'רומנטי',
    
    // UI Elements
    'ui.search': 'חיפוש',
    'ui.languageToggle': 'English',
    'ui.featuredContent': 'תוכן מומלץ',
    'ui.popularNow': 'פופולרי עכשיו',
    'ui.recentlyAdded': 'נוסף לאחרונה',
    'ui.seeAll': 'לצפייה בהכל',
    
    // Homepage
    'home.hero.title': 'יש לסביות',
    'home.hero.subtitle': 'ארכיון מאוצר של תוכן לסבי וספיק',
    'home.featured': 'מומלצים',
    
    // Footer
    'footer.about': 'אודות',
    'footer.contact': 'צור קשר',
    'footer.rights': 'כל הזכויות שמורות',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const direction = language === 'he' ? 'rtl' : 'ltr';

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'he' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    document.documentElement.dir = newLanguage === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('preferred-language') as Language;
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'he')) {
      setLanguage(storedLanguage);
    }
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
