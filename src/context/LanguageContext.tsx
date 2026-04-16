import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Language } from '../i18n/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  lang: Language;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');

  useEffect(() => {
    // Check local storage first
    const savedLang = localStorage.getItem('efeso_lang') as Language;
    if (savedLang === 'de' || savedLang === 'en') {
      setLanguageState(savedLang);
    } else {
      // Auto-detect based on browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('de')) {
        setLanguageState('de');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('efeso_lang', lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations;
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) {
        return path; // Fallback to path string if missing
      }
      current = current[key];
    }
    return current[language] || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, lang: language, t }}>
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
