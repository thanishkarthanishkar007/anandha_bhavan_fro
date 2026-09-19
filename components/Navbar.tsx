'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useRestaurant } from '@/context/RestaurantContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { restaurantInfo } = useRestaurant();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.menu'), href: '/menu' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-warm-white/90 backdrop-blur-md shadow-sm border-b border-deep-green/10 py-3'
          : 'bg-transparent py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="group flex items-center gap-2 sm:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-restaurant-green rounded-lg shrink-0"
          aria-label={`${restaurantInfo.name} Home`}
        >
          {/* Hexagonal A&B Logo */}
          <div className="relative h-8 sm:h-9 md:h-11 shrink-0 flex items-center">
            <Image
              src={restaurantInfo.logo || "/images/navbar-logo.png"}
              alt={`${restaurantInfo.name} Logo`}
              width={1014}
              height={582}
              priority
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Sre New Aananda Bavan Brand Name */}
          <div className="relative h-6 sm:h-7 md:h-9 shrink-0 flex items-center">
            <Image
              src={restaurantInfo.brandImage || "/images/navbar-brand.png"}
              alt={`${restaurantInfo.name} - Pure Veg A/C Restaurant`}
              width={1024}
              height={316}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  active
                    ? 'text-restaurant-green font-bold after:w-full'
                    : 'text-deep-green/80 hover:text-restaurant-green after:w-0 hover:after:w-full'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-restaurant-green after:transition-all after:duration-300`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Single Language Selector + Single Enquiry Button + Mobile/Tablet Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Switcher */}
          <div
            className="flex items-center p-0.5 rounded-full bg-cream/90 backdrop-blur-sm border border-deep-green/15 text-[11px] sm:text-xs font-semibold shadow-xs"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-200 font-bold ${
                language === 'en'
                  ? 'bg-restaurant-green text-warm-white shadow-xs'
                  : 'text-deep-green/70 hover:text-restaurant-green'
              }`}
              aria-label="English"
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ta')}
              className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-200 font-bold ${
                language === 'ta'
                  ? 'bg-restaurant-green text-warm-white shadow-xs'
                  : 'text-deep-green/70 hover:text-restaurant-green'
              }`}
              aria-label="தமிழ்"
              aria-pressed={language === 'ta'}
            >
              தமிழ்
            </button>
          </div>

          {/* Single Enquiry Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-premium transition-all duration-300 transform hover:-translate-y-0.5 shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{t('nav.enquiry')}</span>
          </Link>

          {/* Mobile & Tablet Navigation Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-1.5 rounded-lg text-deep-green hover:text-restaurant-green hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-restaurant-green shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-warm-white/98 border-b border-deep-green/10 px-6 py-6 shadow-xl backdrop-blur-xl transition-all duration-300 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2.5 border-b border-deep-green/5 transition-colors flex items-center justify-between ${
                    active
                      ? 'text-restaurant-green font-bold'
                      : 'text-deep-green hover:text-restaurant-green font-medium'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      active ? 'bg-restaurant-green' : 'bg-golden-yellow/40'
                    }`}
                  />
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-restaurant-green text-warm-white font-semibold text-sm shadow-md"
              >
                {t('nav.orderOnline')}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-cream border border-restaurant-green/30 text-deep-green font-semibold text-sm"
              >
                {t('nav.reserveTable')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
