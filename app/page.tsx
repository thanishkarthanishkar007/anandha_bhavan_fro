'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FoodScroll from '@/components/FoodScroll';
import SectionReveal from '@/components/SectionReveal';
import MenuCard from '@/components/MenuCard';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { MENU_ITEMS, MenuItem } from '@/data/menu';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  Utensils,
  Leaf,
  Clock,
  Check,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  // Six featured signature items for the initial homepage view
  const featuredIds = [
    'bf-ghee-roast',
    'bf-sambar-idli',
    'bf-vadai',
    'ln-asb-meals',
    'grv-paneer-butter-masala',
    'hb-coffee',
  ];
  const displayedItems = MENU_ITEMS.filter((item) => featuredIds.includes(item.id));

  return (
    <div className="relative min-h-screen bg-warm-white text-deep-green flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Cinematic Food Scroll Hero */}
      <FoodScroll />

      {/* Hero Quick Highlight Bar */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-cream/95 backdrop-blur-md rounded-3xl border border-restaurant-green/20 shadow-premium p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-restaurant-green/10 flex items-center justify-center text-restaurant-green mb-2">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-deep-green">
              {t('highlight.pureVegTitle')}
            </h4>
            <p className="text-xs text-deep-green/70 mt-1">
              {t('highlight.pureVegDesc')}
            </p>
          </div>

          <div className="flex flex-col items-center border-t sm:border-t-0 sm:border-x border-deep-green/10 pt-4 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-golden-yellow/20 flex items-center justify-center text-deep-green mb-2">
              <Clock className="w-5 h-5 text-golden-yellow" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-deep-green">
              {t('highlight.freshGrindTitle')}
            </h4>
            <p className="text-xs text-deep-green/70 mt-1">
              {t('highlight.freshGrindDesc')}
            </p>
          </div>

          <div className="flex flex-col items-center border-t sm:border-t-0 border-deep-green/10 pt-4 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-restaurant-green/10 flex items-center justify-center text-restaurant-green mb-2">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-deep-green">
              {t('highlight.recipesTitle')}
            </h4>
            <p className="text-xs text-deep-green/70 mt-1">
              {t('highlight.recipesDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. About Restaurant: CRAFTED WITH TRADITION */}
      <section id="about" className="py-28 bg-warm-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <SectionReveal direction="left" className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-restaurant-green/20 bg-cream">
                <Image
                  src="/images/food/40.webp"
                  alt="Spice Royale Traditional South Indian Platter"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 bg-warm-white/95 backdrop-blur-md p-4 rounded-2xl border border-restaurant-green/20 shadow-md max-w-xs">
                  <div className="flex items-center gap-2 text-restaurant-green font-bold text-xs uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4 text-golden-yellow" />
                    <span>{t('about.floatingBadge')}</span>
                  </div>
                  <p className="text-xs text-deep-green/80 leading-snug">
                    {t('about.floatingText')}
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Narrative Column */}
            <SectionReveal direction="right" className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-semibold uppercase tracking-[0.25em] text-restaurant-green">
                <Leaf className="w-3.5 h-3.5" />
                <span>{t('about.badge')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight leading-tight">
                {t('about.title1')} <br />
                <span className="text-restaurant-green">{t('about.title2')}</span>
              </h2>

              <p className="text-base sm:text-lg text-deep-green/85 leading-relaxed">
                {t('about.desc')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/60 border border-deep-green/5">
                  <div className="w-8 h-8 rounded-xl bg-restaurant-green text-warm-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-deep-green">{t('about.feat1.title')}</h5>
                    <p className="text-xs text-deep-green/70 mt-0.5">
                      {t('about.feat1.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/60 border border-deep-green/5">
                  <div className="w-8 h-8 rounded-xl bg-restaurant-green text-warm-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-deep-green">{t('about.feat2.title')}</h5>
                    <p className="text-xs text-deep-green/70 mt-0.5">
                      {t('about.feat2.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/60 border border-deep-green/5">
                  <div className="w-8 h-8 rounded-xl bg-restaurant-green text-warm-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-deep-green">{t('about.feat3.title')}</h5>
                    <p className="text-xs text-deep-green/70 mt-0.5">
                      {t('about.feat3.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream/60 border border-deep-green/5">
                  <div className="w-8 h-8 rounded-xl bg-restaurant-green text-warm-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-deep-green">{t('about.feat4.title')}</h5>
                    <p className="text-xs text-deep-green/70 mt-0.5">
                      {t('about.feat4.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white text-sm font-semibold tracking-wide shadow-sm hover:shadow-premium transition-all duration-300"
                >
                  <span>{t('about.cta1')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream hover:bg-warm-white border border-deep-green/20 text-deep-green text-sm font-semibold tracking-wide shadow-sm transition-all duration-300"
                >
                  <Utensils className="w-4 h-4 text-restaurant-green" />
                  <span>{t('about.cta2')}</span>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 4. Signature Menu Section: OUR SIGNATURE FLAVOURS */}
      <section id="menu" className="py-24 bg-cream/30 border-t border-deep-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-semibold uppercase tracking-[0.25em] text-restaurant-green mb-4">
              <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
              <span>{t('menu.badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight">
              {t('menu.title')}
            </h2>

            <p className="mt-3 text-deep-green/80 text-sm sm:text-base leading-relaxed">
              {t('menu.subtitle')}
            </p>

          </SectionReveal>

          {/* Menu Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {/* View Full Menu Page CTA Button */}
          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-sm tracking-wide shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{t('menu.viewComplete')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Freshness Section: THE ARTISANAL SANCTUARY */}
      <section className="py-24 bg-cream/40 border-t border-deep-green/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <SectionReveal direction="left" className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-semibold uppercase tracking-[0.25em] text-restaurant-green">
                <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
                <span>{t('freshness.badge')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight leading-tight">
                {t('freshness.title1')} <br />
                <span className="text-restaurant-green">{t('freshness.title2')}</span>
              </h2>

              <p className="text-sm sm:text-base text-deep-green/85 leading-relaxed">
                {t('freshness.desc')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-2xl bg-warm-white border border-deep-green/10 shadow-sm">
                  <span className="font-bold text-restaurant-green block">{t('freshness.item1.title')}</span>
                  <span className="text-deep-green/70 text-[11px]">{t('freshness.item1.desc')}</span>
                </div>
                <div className="p-3 rounded-2xl bg-warm-white border border-deep-green/10 shadow-sm">
                  <span className="font-bold text-restaurant-green block">{t('freshness.item2.title')}</span>
                  <span className="text-deep-green/70 text-[11px]">{t('freshness.item2.desc')}</span>
                </div>
                <div className="p-3 rounded-2xl bg-warm-white border border-deep-green/10 shadow-sm">
                  <span className="font-bold text-restaurant-green block">{t('freshness.item3.title')}</span>
                  <span className="text-deep-green/70 text-[11px]">{t('freshness.item3.desc')}</span>
                </div>
                <div className="p-3 rounded-2xl bg-warm-white border border-deep-green/10 shadow-sm">
                  <span className="font-bold text-restaurant-green block">{t('freshness.item4.title')}</span>
                  <span className="text-deep-green/70 text-[11px]">{t('freshness.item4.desc')}</span>
                </div>
                <div className="p-3 rounded-2xl bg-warm-white border border-deep-green/10 shadow-sm">
                  <span className="font-bold text-restaurant-green block">{t('freshness.item5.title')}</span>
                  <span className="text-deep-green/70 text-[11px]">{t('freshness.item5.desc')}</span>
                </div>
                <div className="p-3 rounded-2xl bg-warm-white border border-deep-green/10 shadow-sm">
                  <span className="font-bold text-restaurant-green block">{t('freshness.item6.title')}</span>
                  <span className="text-deep-green/70 text-[11px]">{t('freshness.item6.desc')}</span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-restaurant-green/20 bg-cream">
                <Image
                  src="/images/food/pure-veg-ingredients-symphony.jpg"
                  alt="Sre New Aananda Bavan Pure Vegetarian Ingredients & Delicacies"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 bg-warm-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-restaurant-green/20 shadow-md flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-fresh-green animate-ping" />
                  <span className="text-xs font-bold text-deep-green">
                    {t('freshness.stamp')}
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 6. Restaurant Gallery (4 Preview Items) */}
      <Gallery isPreview={true} />
      <div className="bg-cream/30 pb-16 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-cream hover:bg-warm-white border border-restaurant-green/30 hover:border-restaurant-green text-deep-green font-bold text-sm tracking-wide shadow-sm hover:shadow-premium transition-all duration-300"
        >
          <span>{t('gallery.viewFull')}</span>
          <ArrowRight className="w-4 h-4 text-restaurant-green" />
        </Link>
      </div>

      {/* 7. Location & Contact */}
      <ContactSection showReservation={false} />

      {/* 8. Final CTA: EXPERIENCE THE TASTE */}
      <section className="py-28 bg-warm-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="relative rounded-3xl overflow-hidden bg-cream border border-restaurant-green/30 shadow-2xl p-8 sm:p-14 lg:p-20 text-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/food/40.webp"
                alt="Spice Royale Grand Feast"
                fill
                sizes="100vw"
                className="object-cover opacity-25 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-warm-white/80 to-cream/95" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm-white border border-restaurant-green/30 text-xs font-semibold uppercase tracking-[0.25em] text-restaurant-green shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
                <span>{t('cta.badge')}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-deep-green tracking-tight leading-tight">
                {t('cta.title1')} <br />
                <span className="text-restaurant-green">{t('cta.title2')}</span>
              </h2>

              <p className="text-base sm:text-xl text-deep-green/85 font-medium leading-relaxed max-w-xl mx-auto">
                {t('cta.quote')} <br />
                <span className="text-golden-yellow font-bold">{t('cta.quoteHighlight')}</span>
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-sm sm:text-base tracking-wide shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Utensils className="w-4 h-4 text-restaurant-yellow" />
                  <span>{t('cta.takeaway')}</span>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
