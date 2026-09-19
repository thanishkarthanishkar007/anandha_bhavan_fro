'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MenuItem, MENU_ITEMS } from '@/data/menu';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShoppingBag,
  Plus,
  Minus,
  Sparkles,
  Flame,
  ShieldCheck,
  Heart,
  CheckCircle,
  X,
  Clock,
  ArrowRight,
} from 'lucide-react';
import SectionReveal from './SectionReveal';

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export default function OrderSection() {
  const { t, tItem, tCategory } = useLanguage();
  const orderableItems = MENU_ITEMS.slice(0, 4); // Signature 4 items
  const [quantities, setQuantities] = useState<Record<string, number>>({
    [orderableItems[0].id]: 1,
    [orderableItems[1].id]: 1,
    [orderableItems[2].id]: 1,
    [orderableItems[3].id]: 1,
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const incrementQty = (id: string) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decrementQty = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const addToCart = (item: MenuItem) => {
    const qty = quantities[item.id] || 1;
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + qty } : ci
        );
      }
      return [...prevCart, { item, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const cartTotal = cart.reduce(
    (sum, ci) => sum + ci.item.numericPrice * ci.quantity,
    0
  );

  const totalItemCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  const handleSimulateCheckout = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      setCart([]);
      setOrderConfirmed(false);
      setIsCartOpen(false);
    }, 4000);
  };

  return (
    <section id="order" className="py-24 bg-warm-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-semibold uppercase tracking-[0.25em] text-restaurant-green mb-4">
            <ShoppingBag className="w-3.5 h-3.5 text-golden-yellow" />
            <span>{t('order.takeawayBadge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight">
            {t('order.savourTitle')}
          </h2>

          <p className="mt-3 text-deep-green/80 text-sm sm:text-base leading-relaxed">
            {t('order.savourDesc')}
          </p>

          {/* Delivery Promise Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-restaurant-green/10 border border-restaurant-green/20 text-xs sm:text-sm font-semibold text-deep-green">
            <Sparkles className="w-4 h-4 text-restaurant-green" />
            <span>{t('order.promise')}</span>
          </div>
        </SectionReveal>

        {/* 4 Processing Tags */}
        <SectionReveal delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-cream/70 border border-deep-green/10">
            <div className="w-9 h-9 rounded-xl bg-warm-white border border-restaurant-green/30 flex items-center justify-center text-restaurant-green shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-deep-green block">
                {t('order.veg100')}
              </span>
              <span className="text-[11px] text-deep-green/60">{t('order.veg100Desc')}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-cream/70 border border-deep-green/10">
            <div className="w-9 h-9 rounded-xl bg-warm-white border border-restaurant-green/30 flex items-center justify-center text-restaurant-yellow shrink-0">
              <Flame className="w-5 h-5 text-golden-yellow" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-deep-green block">
                {t('order.freshPrep')}
              </span>
              <span className="text-[11px] text-deep-green/60">{t('order.freshPrepDesc')}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-cream/70 border border-deep-green/10">
            <div className="w-9 h-9 rounded-xl bg-warm-white border border-restaurant-green/30 flex items-center justify-center text-restaurant-green shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-deep-green block">
                {t('order.qualityIng')}
              </span>
              <span className="text-[11px] text-deep-green/60">{t('order.qualityIngDesc')}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-cream/70 border border-deep-green/10">
            <div className="w-9 h-9 rounded-xl bg-warm-white border border-restaurant-green/30 flex items-center justify-center text-restaurant-green shrink-0">
              <Heart className="w-5 h-5 text-fresh-green" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-deep-green block">
                {t('order.madeCare')}
              </span>
              <span className="text-[11px] text-deep-green/60">{t('order.madeCareDesc')}</span>
            </div>
          </div>
        </SectionReveal>

        {/* Featured Signature Order Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderableItems.map((item) => {
            const itemTrans = tItem(item);
            return (
              <div
                key={item.id}
                className="bg-cream/40 rounded-3xl p-5 border border-deep-green/10 hover:border-restaurant-green/30 shadow-sm flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-cream mb-4">
                    <Image
                      src={item.image}
                      alt={itemTrans.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-warm-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full flex items-center gap-1.5 border border-restaurant-green/20">
                      <div className="w-2.5 h-2.5 rounded-sm border border-restaurant-green flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-restaurant-green" />
                      </div>
                      <span className="text-[9px] font-bold text-deep-green uppercase">
                        {t('menu.pureVeg')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-restaurant-green">
                      {tCategory(item.category)}
                    </span>
                    <span className="text-xs text-deep-green/50">
                      {item.orderSection.portionSize}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-deep-green mt-1">{itemTrans.name}</h3>
                  <p className="text-xs text-deep-green/75 mt-1 line-clamp-2 leading-relaxed">
                    {itemTrans.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-deep-green">{item.price}</span>
                    <span className="text-[11px] text-deep-green/60 italic">{itemTrans.tagline}</span>
                  </div>
                </div>

                {/* Quantity Controls & Add to Cart */}
                <div className="mt-4 pt-3 border-t border-deep-green/10 flex items-center gap-2">
                  <div className="flex items-center border border-deep-green/20 rounded-xl bg-warm-white overflow-hidden">
                    <button
                      onClick={() => decrementQty(item.id)}
                      className="p-1.5 text-deep-green hover:bg-cream transition-colors"
                      aria-label={`Decrease quantity of ${itemTrans.name}`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 text-xs font-bold text-deep-green min-w-[20px] text-center">
                      {quantities[item.id] || 1}
                    </span>
                    <button
                      onClick={() => incrementQty(item.id)}
                      className="p-1.5 text-deep-green hover:bg-cream transition-colors"
                      aria-label={`Increase quantity of ${itemTrans.name}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 py-2 px-3 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white text-xs font-bold tracking-wide shadow-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{t('order.addToCart')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Cart Trigger Pill when items exist */}
        {cart.length > 0 && !isCartOpen && (
          <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white shadow-2xl hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-restaurant-yellow text-deep-green text-[11px] font-black flex items-center justify-center">
                  {totalItemCount}
                </span>
              </div>
              <span className="font-bold text-sm tracking-wide">{t('order.viewOrder')} (₹{cartTotal})</span>
            </button>
          </div>
        )}

        {/* Cart Drawer Modal (Client-side only demonstration) */}
        {isCartOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-green/60 backdrop-blur-sm animate-fade-in"
          >
            <div className="relative w-full max-w-lg bg-warm-white rounded-3xl shadow-2xl border border-restaurant-green/30 overflow-hidden flex flex-col max-h-[85vh]">
              {/* Drawer Header */}
              <div className="p-6 bg-cream/80 border-b border-deep-green/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-restaurant-green" />
                  <h3 className="text-lg font-bold text-deep-green">{t('order.yourOrder')}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-restaurant-green text-warm-white font-bold">
                    {totalItemCount} {t('menu.itemsCount')}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-warm-white text-deep-green/70 hover:text-deep-green"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                {orderConfirmed ? (
                  <div className="p-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-restaurant-green text-warm-white flex items-center justify-center mx-auto">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-deep-green">
                      {t('order.simCompleted')}
                    </h4>
                    <p className="text-xs sm:text-sm text-deep-green/80 leading-relaxed max-w-sm mx-auto">
                      {t('order.notice')}
                    </p>
                  </div>
                ) : cart.length === 0 ? (
                  <p className="text-center text-sm text-deep-green/60 py-8">
                    {t('order.cartEmpty')}
                  </p>
                ) : (
                  <>
                    <div className="space-y-3">
                      {cart.map((ci) => {
                        const itemTrans = tItem(ci.item);
                        return (
                          <div
                            key={ci.item.id}
                            className="flex items-center justify-between p-3 rounded-2xl bg-cream/40 border border-deep-green/5"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl overflow-hidden relative bg-warm-white shrink-0">
                                <Image
                                  src={ci.item.image}
                                  alt={itemTrans.name}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-deep-green">
                                  {itemTrans.name}
                                </h4>
                                <span className="text-xs text-deep-green/60">
                                  {ci.quantity} × {ci.item.price}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-deep-green">
                                ₹{ci.item.numericPrice * ci.quantity}
                              </span>
                              <button
                                onClick={() => removeFromCart(ci.item.id)}
                                className="text-deep-green/40 hover:text-red-600 p-1"
                                aria-label={`Remove ${itemTrans.name}`}
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Static Notice: Client-side demonstration */}
                    <div className="p-3.5 rounded-xl bg-restaurant-yellow/15 border border-restaurant-yellow/30 text-[11px] text-deep-green leading-relaxed">
                      <span className="font-bold block mb-0.5">{t('footer.pureVegBadge')}:</span>
                      {t('order.notice')}
                    </div>
                  </>
                )}
              </div>

              {/* Drawer Footer */}
              {!orderConfirmed && cart.length > 0 && (
                <div className="p-6 bg-cream/60 border-t border-deep-green/10 space-y-4">
                  <div className="flex items-center justify-between text-base font-extrabold text-deep-green">
                    <span>{t('order.orderSubtotal')}</span>
                    <span>₹{cartTotal}</span>
                  </div>

                  <button
                    onClick={handleSimulateCheckout}
                    className="w-full py-3.5 rounded-2xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-sm tracking-wide shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t('order.simulatePlacement')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
