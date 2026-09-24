'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ShieldCheck, Check, Lock } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CookiePreferencesModal() {
  const { modalOpen, closePreferences, preferences, savePreferences } = useCookieConsent();
  const { t } = useLanguage();

  const [analytics, setAnalytics] = useState(preferences.analytics);
  const [marketing, setMarketing] = useState(preferences.marketing);

  useEffect(() => {
    if (modalOpen) {
      setAnalytics(preferences.analytics);
      setMarketing(preferences.marketing);
    }
  }, [modalOpen, preferences]);

  if (!modalOpen) return null;

  const handleSave = () => {
    savePreferences({
      analytics,
      marketing,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-deep-green/60 backdrop-blur-sm animate-fade-in"
      onClick={closePreferences}
    >
      <div
        className="relative w-full max-w-lg bg-warm-white rounded-3xl shadow-2xl border border-deep-green/15 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-deep-green/10 flex items-center justify-between bg-cream/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-restaurant-green/10 border border-restaurant-green/20 flex items-center justify-center text-restaurant-green shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cookie-preferences-title" className="text-lg font-bold text-deep-green">
                {t('cookies.modalTitle')}
              </h3>
              <p className="text-xs text-deep-green/70">
                {t('cookies.modalSubtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={closePreferences}
            className="w-9 h-9 rounded-xl hover:bg-deep-green/5 text-deep-green/70 hover:text-deep-green flex items-center justify-center transition-colors"
            aria-label="Close Cookie Preferences"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Essential Cookies (Always Active) */}
          <div className="p-4 rounded-2xl bg-cream/50 border border-deep-green/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-deep-green flex items-center gap-2">
                <span>{t('cookies.essentialTitle')}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-restaurant-green/15 text-restaurant-green font-bold text-xs">
                <Lock className="w-3 h-3" />
                <span>{t('cookies.alwaysActive')}</span>
              </span>
            </div>
            <p className="text-xs text-deep-green/75 leading-relaxed">
              {t('cookies.essentialDesc')}
            </p>
          </div>

          {/* Analytics Cookies (Toggle ON/OFF) */}
          <div className="p-4 rounded-2xl bg-cream/50 border border-deep-green/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-deep-green">
                {t('cookies.analyticsTitle')}
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                onClick={() => setAnalytics(!analytics)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-restaurant-green ${
                  analytics ? 'bg-restaurant-green' : 'bg-deep-green/20'
                }`}
              >
                <span className="sr-only">Toggle Analytics Cookies</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    analytics ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-deep-green/75 leading-relaxed">
              {t('cookies.analyticsDesc')}
            </p>
          </div>

          {/* Marketing Cookies (Toggle ON/OFF) */}
          <div className="p-4 rounded-2xl bg-cream/50 border border-deep-green/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-deep-green">
                {t('cookies.marketingTitle')}
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={marketing}
                onClick={() => setMarketing(!marketing)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-restaurant-green ${
                  marketing ? 'bg-restaurant-green' : 'bg-deep-green/20'
                }`}
              >
                <span className="sr-only">Toggle Marketing Cookies</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    marketing ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-deep-green/75 leading-relaxed">
              {t('cookies.marketingDesc')}
            </p>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/privacy-notice"
              onClick={closePreferences}
              className="text-xs text-restaurant-green hover:underline font-semibold"
            >
              {t('footer.privacyNotice')} & DPDP Act Compliance Details →
            </Link>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-deep-green/10 bg-cream/30 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={closePreferences}
            className="px-4 py-2.5 rounded-xl border border-deep-green/20 text-deep-green hover:bg-cream text-xs sm:text-sm font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white text-xs sm:text-sm font-bold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>{t('cookies.savePreferences')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
