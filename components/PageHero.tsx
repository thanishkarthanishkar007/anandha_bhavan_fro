'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface PageHeroProps {
  badge: string;
  title: string;
  highlightText?: string;
  description: string;
  breadcrumb: string;
  image?: string;
}

export default function PageHero({
  badge,
  title,
  highlightText,
  description,
  breadcrumb,
  image = '/images/food/40.webp',
}: PageHeroProps) {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cream/40 border-b border-deep-green/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/95 via-warm-white/80 to-cream/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-deep-green/60 mb-6 bg-warm-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-deep-green/10"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-restaurant-green transition-colors">
            {t('nav.home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-deep-green/40" />
          <span className="text-restaurant-green">{breadcrumb}</span>
        </motion.nav>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="block mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-bold uppercase tracking-[0.25em] text-restaurant-green shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
            <span>{badge}</span>
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-deep-green tracking-tight leading-tight max-w-4xl mx-auto"
        >
          {title}{' '}
          {highlightText && (
            <span className="text-restaurant-green font-extrabold">{highlightText}</span>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-deep-green/80 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
