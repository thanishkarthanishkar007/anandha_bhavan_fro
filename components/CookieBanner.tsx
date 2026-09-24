'use client';

import React from 'react';
import { ShieldCheck, Cookie } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CookieBanner() {
  const { bannerOpen, acceptAll, openPreferences } = useCookieConsent();
  const { t } = useLanguage();

  if (!bannerOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Consent Banner"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 md:left-auto md:max-w-xl z-50 animate-slide-up"
    >
      <div className="bg-warm-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-restaurant-green/30 shadow-2xl ring-1 ring-deep-green/10">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-restaurant-green/10 border border-restaurant-green/20 flex items-center justify-center shrink-0 text-restaurant-green">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="text-base font-bold text-deep-green tracking-tight">
                {t('cookies.bannerTitle')}
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-restaurant-green/15 text-restaurant-green">
                DPDP 2023
              </span>
            </div>

            <p className="text-xs sm:text-sm text-deep-green/80 leading-relaxed">
              {t('cookies.bannerDesc')}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={openPreferences}
                className="px-4 py-2 rounded-xl border border-deep-green/25 hover:border-restaurant-green text-deep-green hover:bg-cream text-xs sm:text-sm font-semibold transition-all duration-200"
              >
                {t('cookies.managePreferences')}
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-2 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200"
              >
                {t('cookies.accept')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
