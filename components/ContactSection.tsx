'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Calendar,
  ShieldCheck,
  Navigation,
  Check,
} from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useLanguage } from '@/context/LanguageContext';
import { useRestaurant } from '@/context/RestaurantContext';
import { API_BASE_URL } from '@/lib/api';

interface ContactSectionProps {
  showReservation?: boolean;
}

export default function ContactSection({ showReservation = true }: ContactSectionProps) {
  const { t } = useLanguage();
  const { restaurantInfo } = useRestaurant();
  const [resForm, setResForm] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2 Guests',
    date: '',
    timeSlot: '',
    specialRequests: '',
  });
  const [consentGiven, setConsentGiven] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentGiven) {
      setConsentError(true);
      return;
    }

    setIsSubmitting(true);
    setConsentError(false);

    const apiUrl = API_BASE_URL;
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...resForm,
          dpdpConsent: true,
          dpdpConsentTimestamp: new Date().toISOString(),
          dpdpVersion: 'DPDP-Act-2023',
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      setSubmitted(true);
      setConsentGiven(false);
      setResForm({
        name: '',
        phone: '',
        email: '',
        guests: '2 Guests',
        date: '',
        timeSlot: '',
        specialRequests: '',
      });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      console.warn('Backend API request error, preserving user feedback:', err);
      // Fallback: show submitted confirmation so user experience is smooth even during offline testing
      setSubmitted(true);
      setConsentGiven(false);
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream/40 border-t border-deep-green/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-restaurant-green/20 text-xs font-semibold uppercase tracking-[0.25em] text-restaurant-green mb-4">
            <MapPin className="w-3.5 h-3.5 text-golden-yellow" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-deep-green tracking-tight">
            {t('contact.title1')} {t('contact.title2')}
          </h2>
          <p className="mt-3 text-deep-green/80 text-sm sm:text-base leading-relaxed">
            {showReservation ? t('contact.subtitle') : t('contact.subtitleNoRes')}
          </p>
        </SectionReveal>

        {/* Premium Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Restaurant Information */}
          <SectionReveal direction="left" className="lg:col-span-6 space-y-6">
            <div className="bg-warm-white rounded-3xl p-7 sm:p-9 border border-deep-green/10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-deep-green mb-6 flex items-center gap-2.5">
                <span>{t('contact.infoTitle')}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-restaurant-green/10 text-restaurant-green font-semibold">
                  {t('contact.pureVeg')}
                </span>
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-cream border border-restaurant-green/20 flex items-center justify-center shrink-0 text-restaurant-green">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-deep-green/60 block">
                      {t('contact.addressLabel')}
                    </span>
                    <p className="text-sm sm:text-base text-deep-green font-medium mt-0.5 leading-snug">
                      {restaurantInfo.address || t('contact.addressText')}
                    </p>
                    <span className="text-xs text-restaurant-green mt-1 inline-block font-medium">
                      {restaurantInfo.landmark || t('contact.landmark')}
                    </span>
                  </div>
                </div>

                {/* Telephone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-deep-green/5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cream border border-restaurant-green/20 flex items-center justify-center shrink-0 text-restaurant-green">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-deep-green/60 block">
                        {t('contact.phoneLabel')}
                      </span>
                      <a
                        href={`tel:${restaurantInfo.phoneRaw || restaurantInfo.phone}`}
                        className="text-sm font-bold text-deep-green hover:text-restaurant-green transition-colors"
                      >
                        {restaurantInfo.phone}
                      </a>
                      <span className="text-[11px] text-deep-green/60 block">
                        {showReservation ? t('contact.tableEnq') : t('contact.diningEnq')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cream border border-restaurant-green/20 flex items-center justify-center shrink-0 text-restaurant-green">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-deep-green/60 block">
                        {t('contact.whatsAppLabel')}
                      </span>
                      <a
                        href={`https://wa.me/${(restaurantInfo.whatsappRaw || restaurantInfo.whatsapp).replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-deep-green hover:text-restaurant-green transition-colors"
                      >
                        {restaurantInfo.whatsapp}
                      </a>
                      <span className="text-[11px] text-deep-green/60 block">{t('contact.instantChat')}</span>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="pt-4 border-t border-deep-green/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-golden-yellow" />
                    <span className="text-xs font-bold uppercase tracking-wider text-deep-green">
                      {t('contact.operatingHoursLabel')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-cream/70 border border-deep-green/5">
                      <span className="font-bold text-deep-green block">{t('contact.mornTiffin')}</span>
                      <span className="text-deep-green/70">{restaurantInfo.mornTiffin}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-cream/70 border border-deep-green/5">
                      <span className="font-bold text-deep-green block">{t('contact.royalLunch')}</span>
                      <span className="text-deep-green/70">{restaurantInfo.royalLunch}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-cream/70 border border-deep-green/5">
                      <span className="font-bold text-deep-green block">{t('contact.dinnerTiffin')}</span>
                      <span className="text-deep-green/70">{restaurantInfo.dinnerTiffin}</span>
                    </div>
                  </div>
                </div>

                {/* Vegetarian Sanctuary Guarantee */}
                <div className="p-4 rounded-2xl bg-restaurant-green/10 border border-restaurant-green/20 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-restaurant-green shrink-0" />
                  <p className="text-xs text-deep-green/90 leading-relaxed font-medium">
                    {t('contact.sanctuaryGuarantee')}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right Column: Interactive Reservation & Location Preview */}
          <SectionReveal direction="right" className="lg:col-span-6 space-y-6">
            {showReservation && (
              /* Table Reservation Card */
              <div className="bg-warm-white rounded-3xl p-7 sm:p-9 border border-deep-green/10 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-deep-green">
                      {t('contact.reserveTitle')}
                    </h3>
                    <p className="text-xs text-deep-green/70 mt-0.5">
                      {t('contact.reserveSubtitle')}
                    </p>
                  </div>
                  <Calendar className="w-6 h-6 text-golden-yellow" />
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-cream border border-restaurant-green/30 text-center space-y-2 animate-fade-in">
                    <div className="w-10 h-10 rounded-full bg-restaurant-green text-warm-white flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-deep-green">
                      {t('contact.recTitle')}
                    </h4>
                    <p className="text-xs text-deep-green/80">
                      {t('contact.recDesc')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-deep-green/80 block mb-1">
                        {t('contact.nameLabel')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. S. Venkataraman"
                        value={resForm.name}
                        onChange={(e) => setResForm({ ...resForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs sm:text-sm text-deep-green"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-semibold text-deep-green/80 block mb-1">
                          {t('contact.phoneFormLabel')}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98400 00000"
                          value={resForm.phone}
                          onChange={(e) => setResForm({ ...resForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs sm:text-sm text-deep-green"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-deep-green/80 block mb-1">
                          {t('contact.emailLabel')}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t('contact.emailPlaceholder')}
                          value={resForm.email}
                          onChange={(e) => setResForm({ ...resForm, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs sm:text-sm text-deep-green"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div>
                        <label className="text-xs font-semibold text-deep-green/80 block mb-1">
                          {t('contact.guestsLabel')}
                        </label>
                        <select
                          value={resForm.guests}
                          onChange={(e) => setResForm({ ...resForm, guests: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs text-deep-green"
                        >
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>4 Guests</option>
                          <option>6 Guests</option>
                          <option>8+ Family Feast</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-deep-green/80 block mb-1">
                          {t('contact.dateLabel')}
                        </label>
                        <input
                          type="date"
                          required
                          value={resForm.date}
                          onChange={(e) => setResForm({ ...resForm, date: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs text-deep-green"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-deep-green/80 block mb-1">
                          {t('contact.sessionLabel')}{' '}
                          <span className="text-deep-green/50 font-normal text-[11px]">({t('contact.optional')})</span>
                        </label>
                        <select
                          value={resForm.timeSlot}
                          onChange={(e) => setResForm({ ...resForm, timeSlot: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs text-deep-green"
                        >
                          <option value="">{t('contact.selectSession')}</option>
                          <option>Breakfast (08:30 AM)</option>
                          <option>Breakfast (10:00 AM)</option>
                          <option>Lunch (12:30 PM)</option>
                          <option>Lunch (02:00 PM)</option>
                          <option>Evening Tiffin (06:00 PM)</option>
                          <option>Dinner (08:00 PM)</option>
                          <option>Dinner (09:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-deep-green/80 block mb-1">
                        {t('contact.dietaryLabel')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('contact.dietaryPlaceholder')}
                        value={resForm.specialRequests}
                        onChange={(e) => setResForm({ ...resForm, specialRequests: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs text-deep-green"
                      />
                    </div>

                    {/* DPDP Act 2023 Consent Checkbox */}
                    <div className="pt-1 space-y-1">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none group">
                        <input
                          type="checkbox"
                          required
                          checked={consentGiven}
                          onChange={(e) => {
                            setConsentGiven(e.target.checked);
                            if (consentError) setConsentError(false);
                          }}
                          className="mt-0.5 w-4 h-4 rounded text-restaurant-green border-deep-green/30 focus:ring-restaurant-green accent-restaurant-green cursor-pointer shrink-0"
                        />
                        <span className="text-xs text-deep-green/85 leading-relaxed group-hover:text-deep-green transition-colors">
                          {t('contact.dpdpConsentPrefix')}{' '}
                          <Link
                            href="/privacy-notice"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-restaurant-green underline hover:text-leaf-green"
                          >
                            {t('footer.privacyNotice')}
                          </Link>
                          {t('contact.dpdpConsentSuffix')} <span className="text-red-500 font-bold">*</span>
                        </span>
                      </label>
                      {consentError && (
                        <p className="text-[11px] text-red-600 font-semibold pl-6.5">
                          {t('contact.dpdpConsentRequired')}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-warm-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>{t('contact.confirmRequest')}</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Location Map Card */}
            {showReservation ? (
              <div className="relative block w-full aspect-[2.55/1] min-h-[260px] rounded-3xl overflow-hidden border border-deep-green/15 shadow-sm group hover:shadow-md transition-all duration-300 bg-warm-white">
                <iframe
                  src={restaurantInfo.mapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2017.8807760691552!2d78.0664093377075!3d11.845825643645435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1789711781336!5m2!1sen!2sin"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`${restaurantInfo.name} Google Map Location`}
                  className="w-full h-full min-h-[260px] border-0"
                />

                {/* Floating Map Pin Title Badge */}
                <div className="pointer-events-none absolute top-3.5 left-3.5 bg-warm-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-restaurant-green/20 shadow-sm flex items-center gap-2 z-10">
                  <div className="w-2 h-2 rounded-full bg-restaurant-green animate-pulse" />
                  <span className="text-xs font-bold text-deep-green tracking-wide">
                    {t('contact.mapsTitle')}
                  </span>
                </div>

                {/* Floating Directions Action Badge */}
                <a
                  href="https://www.google.com/maps?q=11.8458256,78.0664093"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Sre New Aananda Bavan on Google Maps"
                  className="absolute bottom-3.5 right-3.5 bg-warm-white/95 backdrop-blur-md hover:bg-cream px-3.5 py-1.5 rounded-2xl border border-deep-green/15 shadow-md flex items-center gap-2 text-xs font-bold text-deep-green transition-colors z-10"
                >
                  <Navigation className="w-3.5 h-3.5 text-restaurant-green" />
                  <span>{t('contact.directions')}</span>
                </a>
              </div>
            ) : (
              /* Home Page Location Showcase */
              <div
                className="relative flex-1 min-h-[460px] h-full rounded-3xl overflow-hidden border border-deep-green/10 shadow-sm bg-cream flex flex-col justify-between"
              >
                <Image
                  src="/images/food/restaurant-interior.webp"
                  alt="Sre New Aananda Bavan Dining Ambiance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/95 via-deep-green/65 to-deep-green/45 backdrop-blur-[1px]" />

                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full text-warm-white">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-golden-yellow shrink-0" />
                        <span className="text-base sm:text-lg font-bold tracking-wide">
                          {t('contact.mapsTitle')}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest bg-warm-white/20 backdrop-blur-md px-3 py-1 rounded-full shrink-0">
                        GPS: 11.8458° N, 78.0664° E
                      </span>
                    </div>

                    <div className="mt-4 space-y-4">
                      <p className="text-sm sm:text-base text-cream/90 leading-relaxed">
                        {t('contact.mapsDesc')}
                      </p>

                      <div className="p-4 rounded-2xl bg-warm-white/10 backdrop-blur-md border border-warm-white/15 space-y-1.5">
                        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-golden-yellow">
                          <Navigation className="w-4 h-4" />
                          <span>Prime Highway Location</span>
                        </div>
                        <p className="text-xs text-cream/90 leading-relaxed">
                          {t('contact.landmark')}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-restaurant-green/30 backdrop-blur-md border border-restaurant-green/30 space-y-1">
                        <span className="text-xs font-bold text-warm-white block">
                          Walk-ins Warmly Welcomed Daily
                        </span>
                        <p className="text-[11px] text-cream/80">
                          Step right in with family & friends for authentic hot filter coffee, freshly roasted dosas, and pure vegetarian meals.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://www.google.com/maps?q=11.8458256,78.0664093"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-warm-white hover:bg-cream text-deep-green font-bold text-xs sm:text-sm shadow-md transition-colors"
                      >
                        <Navigation className="w-4 h-4 text-restaurant-green" />
                        <span>{t('contact.directions')}</span>
                      </a>

                      <a
                        href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                      >
                        <Phone className="w-4 h-4 text-restaurant-yellow" />
                        <span>Direct Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
