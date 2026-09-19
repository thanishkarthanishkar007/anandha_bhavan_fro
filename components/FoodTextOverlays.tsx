'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Sparkles, Utensils } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FoodTextOverlaysProps {
  scrollYProgress: MotionValue<number>;
}

export default function FoodTextOverlays({ scrollYProgress }: FoodTextOverlaysProps) {
  const { t } = useLanguage();

  // Hero Introduction at starting point: visible at start (0), gently fades out as user scrolls (0.04 -> 0.08)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.04, 0.08], [1, 0.9, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.08], [0, -30]);
  const pointerEvents = useTransform(heroOpacity, (val) => (val > 0.05 ? 'auto' : 'none'));

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 text-center">
      {/* Starting Center Content - Kept exactly as it is */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY, pointerEvents }}
        className="w-full max-w-5xl mx-auto flex flex-col items-center my-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream/90 backdrop-blur-md border border-restaurant-green/30 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-deep-green mb-4 sm:mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
          <span>{t('hero.badge')}</span>
        </div>

        <h1 className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] mx-auto flex items-center justify-center my-2 sm:my-3">
          <Image
            src="/images/aananda-bavan-hero.png"
            alt="Sre New Aananda Bavan - Pure Veg A/C Restaurant"
            width={1024}
            height={383}
            priority
            className="w-full h-auto object-contain drop-shadow-sm"
          />
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-deep-green/85 font-normal max-w-2xl leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="pointer-events-auto mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white font-medium text-xs sm:text-sm tracking-wide shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4" />
            <span>{t('hero.exploreMenu')}</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
