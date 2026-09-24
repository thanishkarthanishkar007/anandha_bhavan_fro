'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useRestaurant } from '@/context/RestaurantContext';
import { useCookieConsent } from '@/context/CookieConsentContext';

export default function Footer() {
  const { t } = useLanguage();
  const { restaurantInfo } = useRestaurant();
  const { openPreferences } = useCookieConsent();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.menu'), href: '/menu' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-deep-green text-warm-white/90 pt-20 pb-12 border-t border-fresh-green/20 relative overflow-hidden">
      {/* Subtle Ambient Golden Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-golden-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-warm-white/10">
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-restaurant-green rounded-lg shrink-0"
              aria-label={`${restaurantInfo.name} Home`}
            >
              {/* Hexagonal A&B Logo */}
              <div className="relative h-10 sm:h-11 md:h-12 shrink-0 flex items-center">
                <Image
                  src={restaurantInfo.logo || "/images/navbar-logo.png"}
                  alt={`${restaurantInfo.name} Logo`}
                  width={1014}
                  height={582}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Sre New Aananda Bavan Brand Name */}
              <div className="relative h-8 sm:h-9 md:h-10 shrink-0 flex items-center">
                <Image
                  src={restaurantInfo.brandImage || "/images/navbar-brand.png"}
                  alt={`${restaurantInfo.name} - Pure Veg A/C Restaurant`}
                  width={1024}
                  height={316}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-warm-white/75 leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-restaurant-yellow">
              <div className="w-2.5 h-2.5 rounded-full bg-fresh-green" />
              <span>{t('footer.pureVegBadge')}</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-golden-yellow">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/70 hover:text-golden-yellow transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-golden-yellow">
              {t('contact.hoursTitle')}
            </h4>
            <div className="space-y-2.5 text-xs text-warm-white/75 leading-relaxed">
              <p>
                <strong className="text-warm-white block">{t('contact.addressLabel')}:</strong>
                {restaurantInfo.address}
              </p>
              <p>
                <strong className="text-warm-white block">{t('contact.phoneLabel')}:</strong>
                <a href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-golden-yellow transition-colors">
                  {restaurantInfo.phone}
                </a>
              </p>
              <p>
                <strong className="text-warm-white block">Email:</strong>
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-golden-yellow transition-colors">
                  {restaurantInfo.email}
                </a>
              </p>
              <p>
                <strong className="text-warm-white block">{t('contact.operatingHoursLabel')}:</strong>
                {restaurantInfo.operatingHours}
              </p>
            </div>
          </div>

          {/* Column 4: Connect With Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-golden-yellow">
              {t('footer.connectTitle')}
            </h4>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={restaurantInfo.instagramUrl || "https://www.instagram.com/srenewaanandabavan?stkn=N29pdGxkcnAxdjc3"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-warm-white/10 hover:bg-golden-yellow text-warm-white hover:text-deep-green border border-warm-white/20 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={restaurantInfo.facebookUrl || "https://www.instagram.com/srenewaanandabavan?stkn=N29pdGxkcnAxdjc3"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-warm-white/10 hover:bg-golden-yellow text-warm-white hover:text-deep-green border border-warm-white/20 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={restaurantInfo.youtubeUrl || "https://www.youtube.com/@SreNewAanandaBavan"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-warm-white/10 hover:bg-golden-yellow text-warm-white hover:text-deep-green border border-warm-white/20 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Privacy & Legal Section (DPDP Act, 2023 Compliance) */}
        <div className="pt-8 pb-4 border-b border-warm-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-golden-yellow">
              {t('footer.privacyLegal')}
            </span>
            <span className="hidden sm:inline text-warm-white/40">|</span>
            <span className="hidden sm:inline text-warm-white/60 text-[11px]">
              DPDP Act, 2023 Compliant
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-warm-white/75 font-medium">
            <Link href="/privacy-notice" className="hover:text-golden-yellow transition-colors">
              • {t('footer.privacyNotice')}
            </Link>
            <button
              type="button"
              onClick={openPreferences}
              className="hover:text-golden-yellow transition-colors cursor-pointer inline-flex items-center"
            >
              • {t('footer.cookiePreferences')}
            </button>
            <Link href="/privacy-centre" className="hover:text-golden-yellow transition-colors">
              • {t('footer.privacyCentre')}
            </Link>
            <Link href="/terms" className="hover:text-golden-yellow transition-colors">
              • {t('footer.terms')}
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-white/60">
          <p>© {new Date().getFullYear()} {restaurantInfo.name}. {t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-golden-yellow transition-colors">
              {t('footer.philosophy')}
            </Link>
            <Link href="/menu" className="hover:text-golden-yellow transition-colors">
              {t('footer.menuCard')}
            </Link>
            <Link href="/contact" className="hover:text-golden-yellow transition-colors">
              {t('footer.reservations')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
