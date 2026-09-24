'use client';

import React from 'react';
import { Cookie } from 'lucide-react';
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
      className="fixed bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 max-w-7xl mx-auto z-50 animate-slide-up"
    >
      <div className="bg-warm-white/95 backdrop-blur-md rounded-2xl py-3 px-4 sm:px-6 border border-restaurant-green/30 shadow-2xl ring-1 ring-deep-green/10 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        {/* Left Side: Original Icon, Title, Badge, Description */}
        <div className="flex items-center gap-3.5 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-restaurant-green/10 border border-restaurant-green/20 flex items-center justify-center shrink-0 text-restaurant-green">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-sm sm:text-base font-bold text-deep-green tracking-tight">
                {t('cookies.bannerTitle')}
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-restaurant-green/15 text-restaurant-green">
                DPDP 2023
              </span>
            </div>

            <p className="text-xs text-deep-green/80 leading-relaxed line-clamp-2 md:line-clamp-1">
              {t('cookies.bannerDesc')}
            </p>
          </div>
        </div>

        {/* Right Side: Original Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-end md:self-center">
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
  );
}
