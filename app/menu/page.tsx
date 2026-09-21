'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import MenuCard from '@/components/MenuCard';
import SectionReveal from '@/components/SectionReveal';
import { MENU_ITEMS, CATEGORIES, MenuItem } from '@/data/menu';
import { MENU_ITEM_TRANSLATIONS } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { Search, Sparkles, Leaf, ShieldCheck, Heart, Clock } from 'lucide-react';

export default function MenuPage() {
  const { t, tCategory, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;

      // Search query filter (matches English, Tamil, descriptions, ingredients)
      const q = searchQuery.toLowerCase().trim();
      const tr = MENU_ITEM_TRANSLATIONS[item.id];
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (tr?.name && tr.name.toLowerCase().includes(q)) ||
        (tr?.description && tr.description.toLowerCase().includes(q)) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-warm-white text-deep-green flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <PageHero
          badge={t('hero.badge')}
          title={t('menu.title')}
          description={t('menu.subtitle')}
          breadcrumb={t('nav.menu')}
          image="/images/food/20.webp"
        />

        {/* Filter & Search Bar Area */}
        <section className="py-5 bg-cream/30 border-b border-deep-green/10 sticky top-[72px] z-30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-restaurant-green text-warm-white shadow-sm'
                        : 'bg-warm-white text-deep-green/75 hover:text-deep-green border border-deep-green/10'
                    }`}
                  >
                    {tCategory(cat)}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-4 h-4 text-deep-green/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t('menu.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-warm-white border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs text-deep-green placeholder-deep-green/40 shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-deep-green/40 hover:text-deep-green absolute right-3.5 top-1/2 -translate-y-1/2"
                  >
                    {t('menu.close')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Cards Grid */}
        <section className="py-16 bg-warm-white min-h-[50vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Banner & Service Timing Info */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-deep-green/10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight flex items-center gap-3">
                  <span>{tCategory(activeCategory)}</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-restaurant-green/10 text-restaurant-green">
                    {filteredItems.length} {language === 'ta' ? 'வகைகள்' : 'Items'}
                  </span>
                </h2>
                {activeCategory === 'All' && (
                  <p className="text-xs sm:text-sm text-deep-green/70 mt-1">
                    {language === 'ta' 
                      ? 'ஆனந்த பவனின் அனைத்து தூய சைவ உணவு வகைகள், சிற்றுண்டிகள், பழச்சாறுகள் மற்றும் இனிப்புகள்.' 
                      : 'Explore our complete array of authentic pure vegetarian delicacies, freshly prepared to order.'}
                  </p>
                )}
              </div>

              {(activeCategory === 'Breakfast' ||
                activeCategory === 'Lunch' ||
                activeCategory === 'Dinner' ||
                activeCategory === 'Cold Beverage & Juices') && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-cream border border-restaurant-green/20 text-deep-green text-xs font-bold shadow-sm">
                  <Clock className="w-4 h-4 text-golden-yellow shrink-0" />
                  <span>
                    {language === 'ta' ? 'சேவை நேரம்: ' : 'Service Hours: '}
                    {activeCategory === 'Breakfast' && (language === 'ta' ? 'காலை 7.00 - 11.30 மணி' : '7:00 AM – 11:30 AM')}
                    {activeCategory === 'Lunch' && (language === 'ta' ? 'மதியம் 11.30 - 3.30 மணி' : '11:30 AM – 3:30 PM')}
                    {activeCategory === 'Dinner' && (language === 'ta' ? 'மாலை 3.30 - இரவு 10.30 மணி' : '3:30 PM – 10:30 PM')}
                    {activeCategory === 'Cold Beverage & Juices' && (language === 'ta' ? 'காலை 10.00 - இரவு 10.30 மணி' : '10:00 AM – 10:30 PM')}
                  </span>
                </div>
              )}
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-20 bg-cream/40 rounded-3xl border border-deep-green/10 p-8">
                <Leaf className="w-12 h-12 text-restaurant-green/40 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-deep-green">No delicacies found</h3>
                <p className="text-xs sm:text-sm text-deep-green/70 mt-1">
                  Try adjusting your search query or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-5 py-2 rounded-full bg-restaurant-green text-warm-white text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
