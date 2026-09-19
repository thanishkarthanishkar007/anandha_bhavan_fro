'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import SectionReveal from '@/components/SectionReveal';
import {
  MapPin,
  Car,
  Clock,
  Sparkles,
  Users,
  UtensilsCrossed,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  const eventFeatures = [
    {
      icon: Users,
      title: t('contactPage.feat1.title'),
      desc: t('contactPage.feat1.desc'),
    },
    {
      icon: UtensilsCrossed,
      title: t('contactPage.feat2.title'),
      desc: t('contactPage.feat2.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('contactPage.feat3.title'),
      desc: t('contactPage.feat3.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-warm-white text-deep-green flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          badge={t('contactPage.heroBadge')}
          title={t('contactPage.heroTitle')}
          highlightText={t('contactPage.heroHighlight')}
          description={t('contactPage.heroDesc')}
          breadcrumb={t('nav.contact')}
          image="/images/food/restaurant-interior.webp"
        />

        {/* Contact Information & Table Booking Engine */}
        <ContactSection />

        {/* Private Dining & Banqueting Section */}
        <section className="py-20 bg-warm-white border-t border-deep-green/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-golden-yellow/30 text-xs font-semibold uppercase tracking-[0.25em] text-deep-green mb-4">
                <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
                <span>{t('contactPage.cateringBadge')}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-deep-green tracking-tight">
                {t('contactPage.cateringTitle')}
              </h3>
              <p className="mt-3 text-deep-green/80 text-sm sm:text-base leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventFeatures.map((feat, i) => {
                const IconComponent = feat.icon;
                return (
                  <SectionReveal
                    key={feat.title}
                    delay={i * 0.1}
                    className="p-7 rounded-3xl bg-cream/40 border border-deep-green/10 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-restaurant-green/10 text-restaurant-green flex items-center justify-center mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-deep-green mb-2">{feat.title}</h4>
                    <p className="text-xs sm:text-sm text-deep-green/75 leading-relaxed">
                      {feat.desc}
                    </p>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Arrival & Parking Guidance */}
        <section className="py-16 bg-cream/30 border-t border-deep-green/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-deep-green/80">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-warm-white border border-deep-green/10">
                <Car className="w-5 h-5 text-restaurant-green shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-deep-green block">{t('contactPage.valet')}</span>
                  {t('contactPage.valetDesc')}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-warm-white border border-deep-green/10">
                <Clock className="w-5 h-5 text-golden-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-deep-green block">{t('contact.hoursTitle')}</span>
                  {t('contact.hoursText')}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-warm-white border border-deep-green/10">
                <MapPin className="w-5 h-5 text-restaurant-green shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-deep-green block">{t('contactPage.transit')}</span>
                  {t('contactPage.transitDesc')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
