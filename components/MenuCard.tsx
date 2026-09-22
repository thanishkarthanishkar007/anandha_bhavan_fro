'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Eye, X, Clock, Flame, ShieldCheck } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onQuickOrder?: (item: MenuItem) => void;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { t, tItem, tCategory } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  const itemTrans = tItem(item);

  return (
    <>
      <div className="group relative bg-warm-white rounded-2xl border border-deep-green/10 hover:border-restaurant-green/30 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-premium-hover transform hover:-translate-y-1">
        <div>
          {/* Food Image Container */}
          <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-cream mb-4">
            <Image
              src={item.image}
              alt={`${itemTrans.name} - Pure Vegetarian South Indian Specialty at Sre New Aananda Bavan`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-green/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Pure Vegetarian Indicator Badge */}
            <div className="absolute top-3 left-3 bg-warm-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-restaurant-green/20">
              <div className="w-3.5 h-3.5 rounded-sm border-2 border-restaurant-green flex items-center justify-center p-[2px]">
                <div className="w-1.5 h-1.5 rounded-full bg-restaurant-green" />
              </div>
              <span className="text-[10px] font-bold tracking-wider text-deep-green uppercase">
                {t('menu.pureVeg')}
              </span>
            </div>

            {/* Price Pill */}
            <div className="absolute bottom-3 right-3 bg-deep-green/90 backdrop-blur-md text-warm-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md border border-restaurant-yellow/30">
              {item.price}
            </div>

            {/* Popular Ribbon if marked */}
            {item.orderSection.isPopular && (
              <div className="absolute top-3 right-3 bg-restaurant-yellow text-deep-green px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                {t('menu.chefPick')}
              </div>
            )}
          </div>

          {/* Item Meta */}
          <div className="flex items-center justify-between text-xs text-restaurant-green font-medium mb-1.5">
            <span className="uppercase tracking-widest">{tCategory(item.category)}</span>
            <span className="text-deep-green/50 italic">{itemTrans.tagline}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-deep-green group-hover:text-restaurant-green transition-colors">
            {itemTrans.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-deep-green/75 leading-relaxed line-clamp-2">
            {itemTrans.description}
          </p>

          {/* Ingredients Preview */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.ingredients.slice(0, 3).map((ing, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-md bg-cream text-deep-green/80 border border-deep-green/5"
              >
                {ing}
              </span>
            ))}
            {item.ingredients.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 text-deep-green/50">
                +{item.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-3 border-t border-deep-green/10">
          <button
            onClick={() => setShowModal(true)}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-deep-green/20 hover:border-restaurant-green text-deep-green hover:text-restaurant-green bg-cream/40 hover:bg-cream text-xs font-semibold tracking-wide transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
            <span>{t('menu.viewDetails')}</span>
          </button>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${item.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-deep-green/60 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-2xl bg-warm-white rounded-3xl shadow-2xl border border-restaurant-green/20 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header with Image */}
            <div className="relative h-56 sm:h-64 w-full bg-cream shrink-0">
              <Image
                src={item.image}
                alt={itemTrans.name}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-white via-transparent to-deep-green/30" />

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-warm-white/90 text-deep-green hover:bg-warm-white hover:text-restaurant-green shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges on Modal Banner */}
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="bg-warm-white/95 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-restaurant-green/30">
                  <div className="w-3.5 h-3.5 rounded-sm border-2 border-restaurant-green flex items-center justify-center p-[2px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-restaurant-green" />
                  </div>
                  <span className="text-xs font-bold text-deep-green uppercase tracking-wider">
                    {t('nav.pureVegBadge')}
                  </span>
                </div>
                <span className="bg-golden-yellow text-deep-green font-extrabold px-3 py-1 rounded-full text-xs shadow-sm">
                  {item.price}
                </span>
              </div>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-restaurant-green">
                  {tCategory(item.category)} · {item.orderSection.portionSize}
                </span>
                <h2
                  id={`modal-title-${item.id}`}
                  className="text-2xl sm:text-3xl font-extrabold text-deep-green mt-1"
                >
                  {itemTrans.name}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-deep-green/80 leading-relaxed">
                  {itemTrans.description}
                </p>
              </div>

              {/* Ingredients & Pure Veg Promise */}
              <div className="p-4 rounded-2xl bg-cream/70 border border-restaurant-green/15">
                <h4 className="text-xs font-bold uppercase tracking-wider text-deep-green flex items-center gap-1.5 mb-2.5">
                  <ShieldCheck className="w-4 h-4 text-restaurant-green" />
                  <span>{t('menu.ingredients')}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-warm-white border border-restaurant-green/20 text-xs font-medium text-deep-green"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Story & Heritage */}
              {item.storySections.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-deep-green/60">
                    {t('menu.heritage')}
                  </h4>
                  {item.storySections.map((sec, i) => (
                    <div key={i} className="pl-3 border-l-2 border-golden-yellow">
                      <h5 className="text-sm font-bold text-deep-green">{sec.heading}</h5>
                      <p className="text-xs sm:text-sm text-deep-green/75 mt-0.5">{sec.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Preparation & Freshness Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-warm-white border border-deep-green/10">
                  <div className="flex items-center gap-1.5 text-restaurant-green font-semibold mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{t('menu.preparation')}</span>
                  </div>
                  <p className="text-deep-green/80 leading-relaxed">
                    {item.detailsSection.preparation}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-warm-white border border-deep-green/10">
                  <div className="flex items-center gap-1.5 text-restaurant-yellow font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5 text-golden-yellow" />
                    <span>{t('freshness.badge')}</span>
                  </div>
                  <p className="text-deep-green/80 leading-relaxed">
                    {item.freshnessSection.freshnessGuarantee}
                  </p>
                </div>
              </div>

              {/* Accompaniments */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-deep-green/70 mb-2">
                  {t('menu.accompaniments')}
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-deep-green/80">
                  {item.orderSection.accompaniments.map((acc, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-full bg-cream border border-deep-green/10"
                    >
                      • {acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-cream/50 border-t border-deep-green/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-deep-green/60 block">Price</span>
                <span className="text-xl font-bold text-deep-green">{item.price}</span>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white text-xs font-bold tracking-wide shadow-md transition-colors"
              >
                {t('menu.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
