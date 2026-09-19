'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TRANSLATIONS, MENU_ITEM_TRANSLATIONS } from '@/data/translations';
import { MenuItem } from '@/data/menu';

const STORAGE_KEY = 'anandha_bhavan_language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultText?: string) => string;
  tItem: (item: MenuItem) => {
    name: string;
    tagline: string;
    description: string;
  };
  tCategory: (cat: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // CRITICAL REQUIREMENT: English must ALWAYS be the default language on first load
  const [language, setLanguageState] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === 'en' || savedLang === 'ta') {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        // Explicit default
        setLanguageState('en');
        document.documentElement.lang = 'en';
      }
    } catch {
      // In case localStorage is disabled or throws
    }
    setIsHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'ta' : 'en';
    setLanguage(nextLang);
  };

  const t = (key: string, defaultText?: string): string => {
    const entry = TRANSLATIONS[key];
    if (entry) {
      return entry[language] || entry.en || defaultText || key;
    }
    return defaultText || key;
  };

  const tItem = (item: MenuItem) => {
    if (language === 'ta') {
      const itemTr = MENU_ITEM_TRANSLATIONS[item.id];
      if (itemTr) {
        return {
          name: itemTr.name || item.name,
          tagline: itemTr.tagline || item.tagline,
          description: itemTr.description || item.description,
        };
      }
    }
    return {
      name: item.name,
      tagline: item.tagline,
      description: item.description,
    };
  };

  const tCategory = (cat: string): string => {
    return t(`cat.${cat}`, cat);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        tItem,
        tCategory,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
