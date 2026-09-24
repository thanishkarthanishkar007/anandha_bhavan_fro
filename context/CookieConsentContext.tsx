'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt?: string;
}

interface CookieConsentContextType {
  preferences: CookiePreferences;
  hasSetPreferences: boolean;
  bannerOpen: boolean;
  modalOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: { analytics: boolean; marketing: boolean }) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const STORAGE_KEY = 'anandabavan_cookie_consent_v1';

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasSetPreferences, setHasSetPreferences] = useState<boolean>(true); // default true to avoid SSR layout shift
  const [bannerOpen, setBannerOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({
          essential: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
          updatedAt: parsed.updatedAt,
        });
        setHasSetPreferences(true);
        setBannerOpen(false);
      } else {
        setHasSetPreferences(false);
        setBannerOpen(true);
      }
    } catch {
      setHasSetPreferences(false);
      setBannerOpen(true);
    }
  }, []);

  const saveToStorage = (newPrefs: CookiePreferences) => {
    const payload = {
      ...newPrefs,
      essential: true,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      console.warn('Could not save cookie preferences to localStorage:', err);
    }
    setPreferences(payload);
    setHasSetPreferences(true);
    setBannerOpen(false);
    setModalOpen(false);
  };

  const acceptAll = () => {
    saveToStorage({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    saveToStorage({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = (prefs: { analytics: boolean; marketing: boolean }) => {
    saveToStorage({
      essential: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
    });
  };

  const openPreferences = () => {
    setModalOpen(true);
  };

  const closePreferences = () => {
    setModalOpen(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasSetPreferences,
        bannerOpen,
        modalOpen,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
