'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useLanguage } from '@/context/LanguageContext';

export interface GalleryItem {
  id: string;
  title: string;
  titleTa?: string;
  category: 'Architecture & Exterior' | 'Interior & Dining' | 'Night & Twilight';
  secondaryCategory?: 'Night & Twilight' | 'Interior & Dining' | 'Architecture & Exterior';
  image: string;
  aspectRatioClass?: string;
  spanClass?: string;
  caption: string;
  captionTa?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-exterior-day-elevation',
    title: 'Grand Architectural Elevation',
    titleTa: 'ஸ்ரீ நியூ ஆனந்த பவன் பிரம்மாண்ட முகப்புத் தோற்றம்',
    category: 'Architecture & Exterior',
    image: '/images/gallery/aananda-bavan-exterior-day-elevation.jpg',
    aspectRatioClass: 'aspect-[16/9]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    caption: 'Full-width daytime elevation showcasing Sre New Aananda Bavan, A&B Cafeteria, and the grand pylon signage.',
    captionTa: 'ஸ்ரீ நியூ ஆனந்த பவன், கஃபேடீரியா மற்றும் பிரம்மாண்ட பெயர் பலகையுடன் கூடிய முழு முகப்புத் தோற்றம்.',
  },
  {
    id: 'g-exterior-day-front',
    title: 'Sre New Aananda Bavan Sanctuary',
    titleTa: 'ஸ்ரீ நியூ ஆனந்த பவன் பகல் நேர முகப்பு',
    category: 'Architecture & Exterior',
    image: '/images/gallery/aananda-bavan-exterior-day-front.jpg',
    aspectRatioClass: 'aspect-[16/9]',
    caption: 'Daylight architectural facade with grand illuminated signage, lush greenery, and EV charging facilities.',
    captionTa: 'பகலில் ஒளிரும் நவீன முகப்பு, பிரம்மாண்ட பெயர் பலகை, பசுமையான சூழல் மற்றும் மின்வாகன மின்னேற்று மையம்.',
  },
  {
    id: 'g-exterior-day-angle',
    title: 'Hotel Cafeteria & EV Hub Promenade',
    titleTa: 'கஃபேடீரியா & 24/7 மின்வாகன மையம்',
    category: 'Architecture & Exterior',
    image: '/images/gallery/aananda-bavan-exterior-day-angle.jpg',
    aspectRatioClass: 'aspect-[16/9]',
    caption: 'Spacious daytime promenade featuring 24/7 EV charging station, family amenities, and open cafeteria.',
    captionTa: '24/7 மின்வாகன மின்னேற்று வசதி, குடும்ப ஓய்வு பகுதி மற்றும் விசாலமான உணவக வெளி வளாகம்.',
  },
  {
    id: 'g-interior-cash-counter',
    title: 'Dining Hall & Illuminated Cash Counter',
    titleTa: 'பணப்பரிவர்த்தனை முகப்பு & உணவக அரங்கம்',
    category: 'Interior & Dining',
    secondaryCategory: 'Night & Twilight',
    image: '/images/gallery/aananda-bavan-interior-cash-counter-dining.jpg',
    aspectRatioClass: 'aspect-[1024/418]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    caption: 'Panoramic view of the dining hall highlighting the glowing illuminated cash counter, wooden louver blinds, and warm ambiance.',
    captionTa: 'ஒளிவீசும் பணப்பரிவர்த்தனை கவுண்ட்டர், மர ஜன்னல் திரைச்சீலைகள் மற்றும் அமைதியான உணவக சூழல்.',
  },
  {
    id: 'g-interior-reception-dining',
    title: 'Royal Dining Sanctuary & Reception',
    titleTa: 'வரவேற்பறை & நவீன உணவக அரங்கம்',
    category: 'Interior & Dining',
    image: '/images/gallery/aananda-bavan-interior-reception-dining.jpg',
    aspectRatioClass: 'aspect-[16/9]',
    caption: 'Contemporary dining hall interior featuring artisanal cane lighting, comfortable wood seating, and curated hospitality counter.',
    captionTa: 'அழகிய மூங்கில் வேலைப்பாடு விளக்குகள், மர நாற்காலிகள் மற்றும் நேர்த்தியான வரவேற்பறையுடன் கூடிய நவீன சைவ உணவக அரங்கம்.',
  },
  {
    id: 'g-interior-day-dining',
    title: 'Artisanal Dining Hall & Kitchen Promenade',
    titleTa: 'இயற்கை வெளிச்சம் கொண்ட உணவக கூடம்',
    category: 'Interior & Dining',
    image: '/images/gallery/aananda-bavan-interior-day-dining.jpg',
    aspectRatioClass: 'aspect-[16/9]',
    caption: 'Sunlit dining hall with botanical wall art, heritage tile borders, spacious tables, and direct view toward the kitchen entrance.',
    captionTa: 'இயற்கை வெளிச்சம், மூலிகை ஓவியங்கள், பாரம்பரிய தரை வடிவமைப்பு மற்றும் தூய சமையலறை முகப்புடன் கூடிய உணவக கூடம்.',
  },
  {
    id: 'g-interior-night-panoramic',
    title: 'Twilight Panoramic Dining Experience',
    titleTa: 'மாலை நேர அமைதியான சூழல் & அகன்ற தோற்றம்',
    category: 'Interior & Dining',
    secondaryCategory: 'Night & Twilight',
    image: '/images/gallery/aananda-bavan-interior-night-panoramic.jpg',
    aspectRatioClass: 'aspect-[1024/418]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    caption: 'Expansive panoramic evening view of the dining hall bathed in warm pendant illumination and serene family dining atmosphere.',
    captionTa: 'மாலை நேர பொன்னிற ஒளிவெள்ளத்தில் அமைதியான குடும்ப உணவருந்தும் அகன்ற பரந்த உணவக அரங்கம்.',
  },
  {
    id: 'g-dining-hall-floor-plan',
    title: 'Dining Sanctuary Master Architectural Plan',
    titleTa: 'உணவக அரங்க முழு வரைபடம் & அமைவு',
    category: 'Architecture & Exterior',
    secondaryCategory: 'Interior & Dining',
    image: '/images/gallery/aananda-bavan-dining-hall-floor-plan.jpg',
    aspectRatioClass: 'aspect-[1024/839]',
    spanClass: 'sm:col-span-2 lg:col-span-2',
    caption: 'Top-down 3D architectural plan displaying the symmetrical table layout, floral tile walkways, wash counters, and entrance foyer.',
    captionTa: 'உணவக இருக்கை அமைப்புகள், மலர் வடிவ தரை தளம், கை கழுவும் பகுதி மற்றும் வரவேற்பறை கொண்ட முழு முப்பரிமாண கட்டட வரைபடம்.',
  },
  {
    id: 'g-exterior-dusk-angle',
    title: 'Twilight Architectural Illumination',
    titleTa: 'மாலை நேர வண்ண விளக்குகள்',
    category: 'Night & Twilight',
    image: '/images/gallery/aananda-bavan-exterior-dusk-angle.jpg',
    aspectRatioClass: 'aspect-[16/9]',
    caption: 'Warm vertical wood-slat cladding, glowing LED facade, and modern cafeteria promenade.',
    captionTa: 'மாலை பொழுதில் ஒளிரும் அழகிய மர வேலைப்பாடுகள் மற்றும் வண்ண விளக்குகளுடன் கூடிய நவீன உணவக வளாகம்.',
  },
  {
    id: 'g-exterior-night-front',
    title: 'Nocturnal Heritage Splendour',
    titleTa: 'இரவு நேர பிரம்மாண்ட தோற்றம்',
    category: 'Night & Twilight',
    image: '/images/gallery/aananda-bavan-exterior-night-front.jpg',
    aspectRatioClass: 'aspect-[16/9]',
    caption: 'Striking night view of Sre New Aananda Bavan showcasing the illuminated architectural entrance and guest parking.',
    captionTa: 'இரவில் ஒளிவீசும் ஸ்ரீ நியூ ஆனந்த பவன் முகப்பு, வாகன நிறுத்துமிடம் மற்றும் நவீன வெளிச்சம்.',
  },
];

const PREVIEW_ITEMS: GalleryItem[] = [
  GALLERY_ITEMS[0], // Grand Architectural Elevation
  GALLERY_ITEMS[1], // Sre New Aananda Bavan Sanctuary Front
  GALLERY_ITEMS[4], // Royal Dining Sanctuary & Reception
  GALLERY_ITEMS[9], // Nocturnal Heritage Splendour
];

const CATEGORIES = ['All', 'Architecture & Exterior', 'Interior & Dining', 'Night & Twilight'] as const;

interface GalleryProps {
  isPreview?: boolean;
}

export default function Gallery({ isPreview = false }: GalleryProps) {
  const { t, tCategory, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getTitle = (item: GalleryItem) =>
    language === 'ta' && item.titleTa ? item.titleTa : item.title;
  const getCaption = (item: GalleryItem) =>
    language === 'ta' && item.captionTa ? item.captionTa : item.caption;

  const displayItems = isPreview ? PREVIEW_ITEMS : GALLERY_ITEMS;

  const filteredItems =
    activeCategory === 'All' || isPreview
      ? displayItems
      : displayItems.filter(
          (item) => item.category === activeCategory || item.secondaryCategory === activeCategory
        );

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream/30 border-t border-deep-green/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-semibold uppercase tracking-[0.25em] text-restaurant-green mb-4">
            <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
            <span>{t('gallery.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight">
            {t('gallery.title')}
          </h2>
          <p className="mt-3 text-deep-green/80 text-sm sm:text-base leading-relaxed">
            {t('gallery.subtitle')}
          </p>

          {/* Category Filter Tabs */}
          {!isPreview && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-restaurant-green text-warm-white shadow-sm'
                      : 'bg-warm-white text-deep-green/70 hover:text-deep-green border border-deep-green/10 hover:border-restaurant-green/40'
                  }`}
                >
                  {tCategory(cat)}
                </button>
              ))}
            </div>
          )}
        </SectionReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {filteredItems.map((item, index) => {
            const isFullSpan =
              !isPreview &&
              (activeCategory === 'All'
                ? Boolean(item.spanClass)
                : filteredItems.length % 2 !== 0 && (Boolean(item.spanClass) || index === 0));
            const aspectClass = item.aspectRatioClass || 'aspect-[16/9]';

            return (
              <SectionReveal
                key={item.id}
                delay={index * 0.04}
                className={`group relative rounded-3xl overflow-hidden bg-warm-white border border-deep-green/10 hover:border-restaurant-green/40 shadow-sm hover:shadow-premium-hover transition-all duration-500 cursor-pointer ${
                  isFullSpan ? 'sm:col-span-2 lg:col-span-2' : ''
                } ${aspectClass}`}
              >
                <div
                  onClick={() => setLightboxIndex(index)}
                  className="relative w-full h-full"
                  role="button"
                  tabIndex={0}
                  aria-label={`View image: ${getTitle(item)}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setLightboxIndex(index);
                    }
                  }}
                >
                  <Image
                    src={item.image}
                    alt={getTitle(item)}
                    fill
                    sizes={
                      isFullSpan
                        ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1000px'
                        : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px'
                    }
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-warm-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-deep-green shadow-sm">
                    {tCategory(item.category)}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-warm-white/90 text-deep-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4 text-restaurant-green" />
                </div>

                {/* Text Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-warm-white drop-shadow-sm">
                    {getTitle(item)}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/90 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {getCaption(item)}
                  </p>
                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-deep-green/85 backdrop-blur-md animate-fade-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-warm-white/90 text-deep-green hover:bg-warm-white hover:text-restaurant-green shadow-lg transition-colors focus:outline-none"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-warm-white/80 text-deep-green hover:bg-warm-white shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-warm-white/80 text-deep-green hover:bg-warm-white shadow-lg transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Display */}
            <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
              <div className="relative w-full h-[62vh] max-h-[62vh] rounded-3xl overflow-hidden bg-black/50 shadow-2xl border border-warm-white/20 flex items-center justify-center p-2">
                <Image
                  src={currentItem.image}
                  alt={getTitle(currentItem)}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Card */}
              <div className="mt-4 px-6 py-4 bg-warm-white rounded-2xl max-w-xl text-center shadow-xl border border-restaurant-green/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-restaurant-green">
                    {tCategory(currentItem.category)}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-golden-yellow" />
                  <span className="text-[10px] text-deep-green/60 font-mono">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-deep-green">
                  {getTitle(currentItem)}
                </h4>
                <p className="text-xs sm:text-sm text-deep-green/80 mt-1 leading-relaxed">
                  {getCaption(currentItem)}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
