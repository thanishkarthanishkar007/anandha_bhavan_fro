'use client';

import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import SectionReveal from './SectionReveal';

interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  favoriteDish: string;
}

const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Dr. Arundhati Sundaram',
    role: 'Food & Heritage Historian',
    location: 'Chennai',
    rating: 5,
    date: 'August 2026',
    title: 'An Authentic Culinary Masterpiece',
    content:
      'The dosa and sambar were incredible. Everything tasted fresh, vibrant, and faithful to South Indian temple culinary traditions. The idlis are genuinely cloud-soft with zero heavy baking soda.',
    favoriteDish: 'Soft Idli & Traditional Sambar',
  },
  {
    id: 'r2',
    name: 'Karthik Ramanathan',
    role: 'Gastronomy Columnist',
    location: 'Bengaluru',
    rating: 5,
    date: 'September 2026',
    title: 'Absolutely Delicious & Atmospheric',
    content:
      'Absolutely delicious vegetarian food and a beautiful atmosphere. The ghee roast dosa had that shatteringly crisp edge with pure farm butter notes, and the Ven Pongal felt like a warm embrace.',
    favoriteDish: 'Ghee Roast Dosa & Ven Pongal',
  },
  {
    id: 'r3',
    name: 'Meera Chidambaram',
    role: 'Executive Chef & Diner',
    location: 'Coimbatore',
    rating: 5,
    date: 'July 2026',
    title: 'Authentic Flavours Presented Beautifully',
    content:
      'Authentic South Indian flavours presented beautifully without ever compromising on soul. The freshly grated coconut chutney has that crackling mustard tadka made just moments before serving.',
    favoriteDish: 'Medhu Vadai & Fresh Coconut Chutney',
  },
  {
    id: 'r4',
    name: 'Vikramaditya Iyer',
    role: 'Longtime Vegetarian Connoisseur',
    location: 'Madurai',
    rating: 5,
    date: 'August 2026',
    title: 'The Gold Standard of Pure Veg Dining',
    content:
      'Finding a restaurant dedicated 100% to pure vegetarian gastronomy with such regal hospitality and pristine hygiene is rare. The degree filter coffee served in brass davarah is unmatched.',
    favoriteDish: 'South Indian Filter Coffee',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-warm-white relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-restaurant-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-golden-yellow/30 text-xs font-semibold uppercase tracking-[0.25em] text-deep-green mb-4">
            <Award className="w-3.5 h-3.5 text-golden-yellow" />
            <span>Honoured Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight">
            WORDS FROM OUR GUESTS
          </h2>

          <p className="mt-3 text-deep-green/80 text-sm sm:text-base leading-relaxed">
            Discover why food connoisseurs, families, and lovers of authentic South Indian cuisine consider Spice Royale their supreme culinary destination.
          </p>

          {/* Rating Summary Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-cream/80 border border-restaurant-green/20 shadow-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-golden-yellow text-golden-yellow" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-deep-green">
              4.9 / 5.0 Rating
            </span>
            <span className="text-xs text-deep-green/60">
              · Over 1,200+ Verified Diners
            </span>
          </div>
        </SectionReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((rev, index) => (
            <SectionReveal
              key={rev.id}
              delay={index * 0.08}
              className="bg-cream/40 rounded-3xl p-7 sm:p-8 border border-deep-green/10 hover:border-restaurant-green/30 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Quote & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-golden-yellow text-golden-yellow"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-restaurant-green/20" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-deep-green mb-2.5">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-deep-green/80 leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-5 border-t border-deep-green/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-deep-green">{rev.name}</span>
                    <span title="Verified Diner">
                      <CheckCircle2 className="w-3.5 h-3.5 text-restaurant-green" />
                    </span>
                  </div>
                  <span className="text-xs text-deep-green/60">
                    {rev.role} · {rev.location}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-deep-green/50 uppercase tracking-wider block">
                    Favorite
                  </span>
                  <span className="text-xs font-semibold text-restaurant-green">
                    {rev.favoriteDish}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
