'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import SectionReveal from '@/components/SectionReveal';
import Link from 'next/link';
import { Sparkles, Utensils } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-warm-white text-deep-green flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          description={t('gallery.subtitle')}
          breadcrumb={t('nav.gallery')}
          image="/images/gallery/aananda-bavan-exterior-day-front.jpg"
        />

        {/* Gallery Interactive Component with Lightbox */}
        <Gallery />

        {/* Ambiance Note & Invitation */}
        <section className="py-20 bg-cream/30 border-t border-deep-green/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionReveal className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-white border border-restaurant-green/20 text-xs font-bold uppercase tracking-[0.25em] text-restaurant-green">
                <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
                <span>{t('hero.badge')}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-deep-green tracking-tight">
                {t('gallery.visitTitle')}
              </h3>
              <p className="text-sm sm:text-base text-deep-green/80 max-w-xl mx-auto leading-relaxed">
                {t('gallery.visitDesc')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-sm tracking-wide shadow-premium hover:shadow-premium-hover transition-all duration-300"
                >
                  <Utensils className="w-4 h-4 text-restaurant-yellow" />
                  <span>{t('hero.exploreMenu')}</span>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
