'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionReveal from '@/components/SectionReveal';
import {
  FileText,
  ShieldCheck,
  CalendarCheck,
  UtensilsCrossed,
  HelpCircle,
  Scale,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-warm-white text-deep-green flex flex-col font-outfit">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          badge="Hospitality & Governance"
          title="Terms & Conditions"
          highlightText="Our Dining Agreement"
          description="Guidelines and terms governing your visit, table reservations, and use of the Sre New Aananda Bavan website."
          breadcrumb="Terms & Conditions"
          image="/images/food/restaurant-interior.webp"
        />

        {/* Terms Content */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* 1. Introduction */}
            <SectionReveal className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-restaurant-green" />
                <span>1. Introduction & Acceptance</span>
              </h2>
              <p className="text-sm sm:text-base text-deep-green/85 leading-relaxed">
                Welcome to the official website of <strong>Sre New Aananda Bavan</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), located along the Bangalore to Salem National Highway (NH 44), Poosaripatty, Omalur, Salem, Tamil Nadu – 636305.
              </p>
              <p className="text-sm sm:text-base text-deep-green/85 leading-relaxed">
                By accessing this website, requesting a table reservation, or visiting our dining facilities, you agree to comply with and be bound by these Terms & Conditions, along with our <Link href="/privacy-notice" className="font-semibold text-restaurant-green underline hover:text-leaf-green">Privacy Notice</Link>. If you do not agree to any part of these terms, please refrain from using our digital reservation services.
              </p>
            </SectionReveal>

            {/* 2. Pure Vegetarian Sanctuary Policy */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight flex items-center gap-2.5">
                <UtensilsCrossed className="w-6 h-6 text-restaurant-green" />
                <span>2. 100% Pure Vegetarian Sanctuary Policy</span>
              </h2>
              <p className="text-sm text-deep-green/85 leading-relaxed">
                Sre New Aananda Bavan is strictly a <strong>100% Pure Vegetarian Restaurant</strong>. In accordance with our culinary philosophy and sanctity:
              </p>
              <ul className="text-sm text-deep-green/80 space-y-2 list-disc list-inside">
                <li>No non-vegetarian foods, fish, meats, or poultry of any kind are prepared, stored, or permitted on our premises.</li>
                <li>Zero egg policy: All our culinary preparations, gravies, batters, and sweets are crafted without egg derivatives.</li>
                <li>Outside cooked food or beverages are strictly prohibited inside the dining areas to maintain food hygiene and religious sanctity.</li>
              </ul>
            </SectionReveal>

            {/* 3. Table Reservations & Walk-ins */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight flex items-center gap-2.5">
                <CalendarCheck className="w-6 h-6 text-restaurant-green" />
                <span>3. Table Reservations & Highway Arrivals</span>
              </h2>
              <div className="space-y-3 text-sm text-deep-green/85 leading-relaxed">
                <p>
                  <strong>Reservation Confirmations:</strong> Submitting a table booking request via this website constitutes a reservation request. Our dining host will verify table availability and confirm via telephone or WhatsApp message.
                </p>
                <p>
                  <strong>Grace Period:</strong> Reserved tables will be held for a maximum of <strong>15 minutes</strong> past the scheduled arrival time. If travelers encounter highway traffic delays, please notify our front desk at <a href="tel:+916383312948" className="text-restaurant-green font-semibold underline">+91 63833 12948</a> to adjust your slot.
                </p>
                <p>
                  <strong>Walk-in Priority:</strong> While we prioritize confirmed reservations, during festival surges and peak highway holiday travel hours, seating is managed equitably to accommodate all visiting families promptly.
                </p>
              </div>
            </SectionReveal>

            {/* 4. Menu, Pricing & Allergen Information */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-restaurant-green" />
                <span>4. Menu, Pricing & Dietary Requests</span>
              </h2>
              <p className="text-sm text-deep-green/85 leading-relaxed">
                Menu items, seasonal specialties (such as special thalis, payasam, or regional dosas), and prices are subject to seasonal availability. We make every effort to display up-to-date pricing on this website; however, physical printed menus at the restaurant prevail in case of any discrepancy.
              </p>
              <div className="p-4 rounded-2xl bg-cream/60 border border-deep-green/10 text-xs text-deep-green/85 leading-relaxed">
                <strong>Dietary & Allergy Advisory:</strong> While we accommodate Jain dining (no onion, no garlic) and specific dietary requests upon advance notice, our kitchens handle traditional nuts, dairy (pure cow ghee, paneer, milk), and gluten. Guests with acute allergies must inform the service staff prior to ordering.
              </div>
            </SectionReveal>

            {/* 5. Intellectual Property & Digital Usage */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-restaurant-green" />
                <span>5. Intellectual Property Rights</span>
              </h2>
              <p className="text-sm text-deep-green/85 leading-relaxed">
                All intellectual property on this website—including the &ldquo;Sre New Aananda Bavan&rdquo; name, logo, graphic badges, food photographs, textual narratives, and digital layout—is the exclusive property of Sre New Aananda Bavan. Unauthorized reproduction, modification, scraping, or redistribution for commercial purposes is strictly prohibited without prior written consent.
              </p>
            </SectionReveal>

            {/* 6. Limitation of Liability */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-restaurant-green" />
                <span>6. Limitation of Liability</span>
              </h2>
              <p className="text-sm text-deep-green/85 leading-relaxed">
                We endeavor to provide uninterrupted, error-free website access and dependable reservation tracking. However, we shall not be held liable for incidental delays, technical downtime caused by third-party telecommunication networks, or unforeseen highway transit delays experienced by guests.
              </p>
            </SectionReveal>

            {/* 7. Governing Law & Dispute Resolution */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                7. Governing Law & Jurisdiction
              </h2>
              <p className="text-sm text-deep-green/85 leading-relaxed">
                These Terms and Conditions shall be governed by, and construed in accordance with, the laws of the Republic of India. Any disputes or claims arising out of or related to our services or website shall be subject to the exclusive jurisdiction of the competent courts in <strong>Salem, Tamil Nadu, India</strong>.
              </p>
            </SectionReveal>

            {/* 8. Contact & Inquiries */}
            <SectionReveal className="p-6 rounded-3xl bg-cream/50 border border-deep-green/15 space-y-3">
              <h3 className="font-bold text-deep-green text-base">
                Questions Regarding Our Terms?
              </h3>
              <p className="text-xs text-deep-green/80">
                For questions regarding these terms, table reservations, or private party bookings:
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-deep-green pt-2">
                <a href="tel:+916383312948" className="inline-flex items-center gap-1.5 text-restaurant-green hover:underline">
                  <Phone className="w-4 h-4" />
                  <span>+91 63833 12948</span>
                </a>
                <a href="mailto:srenewaanandabavan@gmail.com" className="inline-flex items-center gap-1.5 text-restaurant-green hover:underline">
                  <span>srenewaanandabavan@gmail.com</span>
                </a>
                <Link href="/privacy-centre" className="inline-flex items-center gap-1 text-restaurant-green hover:underline ml-auto">
                  <span>Privacy Centre</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
