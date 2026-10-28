'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionReveal from '@/components/SectionReveal';
import { useLanguage } from '@/context/LanguageContext';
import {
  Leaf,
  CheckCircle2,
  Users,
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const partners = [
    {
      name: 'Vijayalakshmi Srinivasan',
      role: t('aboutPage.partnerRole'),
      image: '/images/partners/vijayalakshmi-srinivasan.jpg',
    },
    {
      name: 'Senthilkumar',
      role: t('aboutPage.partnerRole'),
      image: '/images/partners/senthilkumar.jpg',
    },
    {
      name: 'Mahendran PhD',
      role: t('aboutPage.partnerRole'),
      image: '/images/partners/mahendran.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-warm-white text-deep-green flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          badge={t('aboutPage.heroBadge')}
          title={t('aboutPage.heroTitle')}
          highlightText={t('aboutPage.heroHighlight')}
          description={t('aboutPage.heroDesc')}
          breadcrumb={t('nav.about')}
          image="/images/food/40.webp"
        />

        {/* Founding Narrative & Philosophy */}
        <section className="py-24 bg-warm-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <SectionReveal direction="left" className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-bold uppercase tracking-[0.25em] text-restaurant-green">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>{t('aboutPage.hearthBadge')}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight leading-tight">
                  {t('aboutPage.reverenceTitle')}
                </h2>

                <p className="text-base sm:text-lg text-deep-green/85 leading-relaxed">
                  {t('aboutPage.para1')}
                </p>

                <p className="text-sm sm:text-base text-deep-green/75 leading-relaxed">
                  {t('aboutPage.para2')}
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-deep-green">
                    <CheckCircle2 className="w-4 h-4 text-restaurant-green" />
                    <span>{t('aboutPage.gheeOnly')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-deep-green">
                    <CheckCircle2 className="w-4 h-4 text-restaurant-green" />
                    <span>{t('aboutPage.zeroChemicals')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-deep-green">
                    <CheckCircle2 className="w-4 h-4 text-restaurant-green" />
                    <span>{t('aboutPage.dailyGrind')}</span>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal direction="right" className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-restaurant-green/20 bg-cream">
                  <Image
                    src="/images/food/30.webp"
                    alt="Culinary artisan steaming soft idlis"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-warm-white/95 backdrop-blur-md p-5 rounded-2xl border border-restaurant-green/20 shadow-md">
                    <span className="text-xs font-bold uppercase tracking-wider text-golden-yellow block mb-1">
                      {t('freshness.badge')}
                    </span>
                    <p className="text-xs text-deep-green/85 leading-snug">
                      &ldquo;{t('aboutPage.templeLore')}&rdquo;
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section className="py-24 bg-cream/30 border-y border-deep-green/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-golden-yellow/30 text-xs font-semibold uppercase tracking-[0.25em] text-deep-green mb-4">
                <Users className="w-3.5 h-3.5 text-golden-yellow" />
                <span>{t('aboutPage.partnersBadge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight">
                {t('aboutPage.partnersTitle')}
              </h2>
              <p className="mt-3 text-deep-green/80 text-sm sm:text-base leading-relaxed">
                {t('aboutPage.partnersDesc')}
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-sm sm:max-w-md md:max-w-5xl mx-auto">
              {partners.map((partner, i) => (
                <SectionReveal
                  key={partner.name}
                  delay={i * 0.1}
                  className="group relative rounded-3xl overflow-hidden bg-warm-white border border-deep-green/10 hover:border-restaurant-green/40 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-[#F3FDF4] to-[#F1F9F0]">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} - ${partner.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={i === 0}
                    />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
