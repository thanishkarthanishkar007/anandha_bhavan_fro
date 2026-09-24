'use client';

import React from 'react';
import { Cookie, ArrowRight, X } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CookieBanner() {
  const { bannerOpen, acceptAll, openPreferences, rejectNonEssential } = useCookieConsent();
  const { t } = useLanguage();

  if (!bannerOpen) return null;

  return (
    <aside
      aria-label="Cookie Consent Banner"
      className="fixed bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-6 md:inset-x-8 max-w-7xl mx-auto z-50 animate-slide-up"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-deep-green/15 shadow-2xl ring-1 ring-black/5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        {/* Left Side: Icon + Title + DPDP Badge + Description */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
          {/* Circular Cookie Icon */}
          <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 border border-red-200/80 flex items-center justify-center shrink-0 shadow-2xs">
            <Cookie className="w-4 h-4" />
          </div>

          {/* Title & DPDP Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-extrabold text-xs sm:text-sm text-deep-green tracking-wider uppercase">
              YOUR PRIVACY
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-300 text-red-600 bg-red-50/60 uppercase tracking-wide">
              DPDP 2023
            </span>
          </div>

          {/* Descriptive text */}
          <p className="text-xs text-deep-green/75 leading-snug line-clamp-2 md:line-clamp-1">
            We use cookies and similar technologies for dining reservations, traffic telemetry, and performance. You can manage your granular preferences at any time.
          </p>
        </div>

        {/* Right Side: Action Buttons & Close Icon */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-end md:self-center">
          <button
            type="button"
            onClick={openPreferences}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-full bg-slate-100 hover:bg-slate-200/80 text-deep-green text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-200 shadow-2xs"
          >
            MANAGE PREFERENCES
          </button>

          <button
            type="button"
            onClick={acceptAll}
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl sm:rounded-full bg-red-600 hover:bg-red-700 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1.5"
          >
            <span>ACCEPT ALL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Close Dismiss Button */}
          <button
            type="button"
            onClick={rejectNonEssential}
            className="p-1 sm:p-1.5 rounded-full text-deep-green/60 hover:text-deep-green hover:bg-black/5 transition-colors duration-200 ml-1"
            aria-label="Close Cookie Banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
