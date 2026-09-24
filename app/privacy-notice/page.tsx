'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionReveal from '@/components/SectionReveal';
import {
  ShieldCheck,
  FileText,
  UserCheck,
  Lock,
  Clock,
  Mail,
  ArrowRight,
  Cookie,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCookieConsent } from '@/context/CookieConsentContext';

export default function PrivacyNoticePage() {
  const { t } = useLanguage();
  const { openPreferences } = useCookieConsent();

  return (
    <div className="min-h-screen bg-warm-white text-deep-green flex flex-col font-outfit">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          badge="DPDP Act, 2023 Compliance"
          title="Privacy Notice & Data Protection"
          highlightText="Your Trust is Sacred"
          description="Sre New Aananda Bavan is committed to safeguarding your personal data in strict compliance with the Digital Personal Data Protection (DPDP) Act, 2023."
          breadcrumb="Privacy Notice"
          image="/images/food/restaurant-interior.webp"
        />

        {/* DPDP Quick Action Banner */}
        <section className="py-8 bg-cream/60 border-b border-deep-green/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 rounded-3xl bg-warm-white border border-restaurant-green/25 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-restaurant-green/10 text-restaurant-green flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-deep-green text-base sm:text-lg">
                    Manage Your Privacy in One Place
                  </h3>
                  <p className="text-xs sm:text-sm text-deep-green/75">
                    Exercise your statutory rights: View, Correct, Erase data, or Withdraw consent.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/privacy-centre"
                  className="px-5 py-2.5 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-xs sm:text-sm transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Privacy Centre</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="px-4 py-2.5 rounded-xl border border-deep-green/20 hover:bg-cream text-deep-green font-semibold text-xs sm:text-sm transition-all"
                >
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Privacy Notice Content */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Notice Introduction */}
            <SectionReveal className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-restaurant-green/10 text-restaurant-green font-bold text-xs uppercase tracking-wider">
                <span>Statutory Notice Under Section 5, DPDP Act 2023</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                1. Data Fiduciary Identity & Overview
              </h2>
              <p className="text-sm sm:text-base text-deep-green/85 leading-relaxed">
                This Privacy Notice applies to all digital personal data processed by <strong>Sre New Aananda Bavan</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating as a Pure Vegetarian Restaurant sanctuary located along National Highway 44 (Bangalore to Salem Byepass), opposite Government Higher Secondary School, Poosaripatty, Omalur, Salem, Tamil Nadu – 636305.
              </p>
              <p className="text-sm sm:text-base text-deep-green/85 leading-relaxed">
                As a <em>Data Fiduciary</em> under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, we ensure that your personal information is collected solely for specified, lawful, and transparent dining and customer service purposes, with your explicit and verifiable consent.
              </p>
            </SectionReveal>

            {/* Categories of Data Processed */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                2. Categories of Personal Data Collected
              </h2>
              <p className="text-sm text-deep-green/80 leading-relaxed">
                We only collect minimum necessary personal data required to deliver authentic hospitality and fulfill your dining arrangements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-cream/40 border border-deep-green/10 space-y-2">
                  <h4 className="font-bold text-deep-green text-sm flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-restaurant-green" />
                    <span>Table Reservation Data</span>
                  </h4>
                  <ul className="text-xs text-deep-green/75 space-y-1 list-disc list-inside">
                    <li>Full Name of the lead guest</li>
                    <li>Mobile Contact Number for arrival confirmation & SMS/WhatsApp updates</li>
                    <li>Email Address (for confirmation slips and receipts)</li>
                    <li>Number of guests, reserved date, and session (Breakfast, Lunch, Dinner)</li>
                    <li>Special dining or dietary preferences (e.g. Jain preparation, high-chair)</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-cream/40 border border-deep-green/10 space-y-2">
                  <h4 className="font-bold text-deep-green text-sm flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-golden-yellow" />
                    <span>Digital & Technical Telemetry</span>
                  </h4>
                  <ul className="text-xs text-deep-green/75 space-y-1 list-disc list-inside">
                    <li>IP address and approximate geolocation (used for map routing & security)</li>
                    <li>Browser type, device classification, and operating system</li>
                    <li>Cookie preferences and website interaction analytics (subject to consent)</li>
                    <li>Inquiry messages submitted through our contact forms</li>
                  </ul>
                </div>
              </div>
            </SectionReveal>

            {/* Purposes and Legal Basis */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                3. Purpose of Processing & Legal Basis (Section 6)
              </h2>
              <p className="text-sm sm:text-base text-deep-green/85 leading-relaxed">
                Under the DPDP Act 2023, personal data must be processed on the legal basis of <strong>Consent</strong> or for <strong>Certain Legitimate Uses</strong>:
              </p>
              <ul className="space-y-2.5 text-sm text-deep-green/80 list-disc list-inside">
                <li>
                  <strong>Table Reservation Management:</strong> Processing your name and contact details to hold tables, prevent overbooking, and accommodate dining needs.
                </li>
                <li>
                  <strong>Customer Service & Highway Assistance:</strong> Answering inquiries regarding restaurant timings, parking space, and EV charger availability.
                </li>
                <li>
                  <strong>Statutory and Food Safety Compliance:</strong> Adhering to applicable safety guidelines, billing records, and tax invoicing obligations under Indian Law.
                </li>
                <li>
                  <strong>Service Improvement:</strong> Aggregated anonymous analytics to optimize menu page loading speeds and restaurant accessibility.
                </li>
              </ul>
              <div className="p-4 rounded-2xl bg-restaurant-green/10 border border-restaurant-green/20 text-xs text-deep-green leading-relaxed font-medium">
                <strong>Our Sacred Promise:</strong> We never sell, rent, commercialize, or share your personal data with third-party advertisers or unauthorized brokers.
              </div>
            </SectionReveal>

            {/* Data Principal Rights */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                4. Your Rights Under the DPDP Act, 2023
              </h2>
              <p className="text-sm text-deep-green/80 leading-relaxed">
                As a Data Principal, the Digital Personal Data Protection Act guarantees you specific enforceable rights:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-warm-white border border-deep-green/15 shadow-xs">
                  <h4 className="font-bold text-deep-green text-sm mb-1">
                    1. Right to Access Information (Sec 11)
                  </h4>
                  <p className="text-xs text-deep-green/75 leading-relaxed">
                    You have the right to request a summary of the personal data we hold about you and the processing activities undertaken.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-warm-white border border-deep-green/15 shadow-xs">
                  <h4 className="font-bold text-deep-green text-sm mb-1">
                    2. Right to Correction and Erasure (Sec 12)
                  </h4>
                  <p className="text-xs text-deep-green/75 leading-relaxed">
                    You may request correction of inaccurate or misleading data, updating of incomplete details, and erasure of personal data that is no longer necessary.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-warm-white border border-deep-green/15 shadow-xs">
                  <h4 className="font-bold text-deep-green text-sm mb-1">
                    3. Right to Withdraw Consent (Sec 6(4))
                  </h4>
                  <p className="text-xs text-deep-green/75 leading-relaxed">
                    Where processing is based on consent, you may withdraw your consent with the same ease as it was given, without affecting prior lawful processing.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-warm-white border border-deep-green/15 shadow-xs">
                  <h4 className="font-bold text-deep-green text-sm mb-1">
                    4. Right of Grievance Redressal (Sec 13)
                  </h4>
                  <p className="text-xs text-deep-green/75 leading-relaxed">
                    You have the right to readily accessible grievance redressal mechanisms through our Data Protection Officer and the Data Protection Board of India.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/privacy-centre"
                  className="inline-flex items-center gap-2 text-sm font-bold text-restaurant-green hover:underline"
                >
                  <span>Submit a Data Subject Request in our Privacy Centre</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>

            {/* Cookies & Tracking Policy */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                5. Cookie and Tracking Notice
              </h2>
              <p className="text-sm text-deep-green/85 leading-relaxed">
                In compliance with DPDP standards, we maintain clear categorization and user controls over digital identifiers:
              </p>
              <div className="space-y-3 text-xs text-deep-green/80">
                <div className="p-3.5 rounded-xl bg-cream/50 border border-deep-green/10">
                  <strong className="text-deep-green text-sm block mb-0.5">Essential Cookies (Always Active)</strong>
                  Strictly necessary for security, table reservation session state, and language selection (English / Tamil). These cookies do not track you across other websites.
                </div>
                <div className="p-3.5 rounded-xl bg-cream/50 border border-deep-green/10">
                  <strong className="text-deep-green text-sm block mb-0.5">Analytics Cookies (Optional - User Choice)</strong>
                  Gather anonymous telemetry on website page views to help us improve mobile responsiveness and menu layouts.
                </div>
                <div className="p-3.5 rounded-xl bg-cream/50 border border-deep-green/10">
                  <strong className="text-deep-green text-sm block mb-0.5">Marketing Cookies (Optional - User Choice)</strong>
                  Used exclusively to present seasonal festivals (Pongal, Diwali, Mango Feasts) and special banquet announcements.
                </div>
              </div>
              <button
                type="button"
                onClick={openPreferences}
                className="mt-2 px-4 py-2 rounded-xl bg-cream border border-deep-green/20 hover:border-restaurant-green text-deep-green text-xs font-bold transition-colors"
              >
                Modify My Cookie Preferences
              </button>
            </SectionReveal>

            {/* Data Retention & Storage Policy */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                6. Data Retention and Erasure Policy
              </h2>
              <p className="text-sm sm:text-base text-deep-green/85 leading-relaxed">
                Personal data collected for dining table reservations is retained for a maximum duration of <strong>180 days</strong> to resolve any customer service inquiries or verify repeat dining records. After this retention period, or upon a validated erasure request, the data is permanently and irreversibly purged from our active operational databases, except where retention is strictly mandated under Indian taxation, accounting, or food safety regulations.
              </p>
            </SectionReveal>

            {/* Data Protection Officer & Redressal */}
            <SectionReveal className="space-y-4 pt-6 border-t border-deep-green/10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
                7. Data Protection Officer & Grievance Redressal
              </h2>
              <p className="text-sm text-deep-green/85 leading-relaxed">
                If you have any questions, concerns, complaints, or wish to exercise your rights under the DPDP Act 2023, you may contact our designated Grievance & Data Protection Officer:
              </p>

              <div className="p-6 rounded-3xl bg-cream/50 border border-deep-green/15 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-deep-green text-golden-yellow flex items-center justify-center font-bold">
                    DPO
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-green text-base">
                      Data Protection & Grievance Redressal Officer
                    </h4>
                    <p className="text-xs text-deep-green/70">
                      Sre New Aananda Bavan Pure Veg A/C Restaurant
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-deep-green/10 text-xs">
                  <div>
                    <span className="font-bold text-deep-green block">Official Postal Address:</span>
                    <p className="text-deep-green/80 mt-0.5">
                      Bangalore to Salem Byepass, NH 44, opposite to Government Higher Secondary School, Poosaripatty, Omalur, Salem, Tamil Nadu - 636305
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <div>
                      <span className="font-bold text-deep-green block">Privacy Email:</span>
                      <a href="mailto:srenewaanandabavan@gmail.com" className="text-restaurant-green hover:underline font-medium">
                        srenewaanandabavan@gmail.com
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-deep-green block">Phone:</span>
                      <a href="tel:+916383312948" className="text-restaurant-green hover:underline font-medium">
                        +91 63833 12948 / +91 86755 35555
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-deep-green/75 leading-relaxed border-t border-deep-green/10">
                  <strong>Statutory Resolution Timeline:</strong> In accordance with DPDP rules, we endeavor to resolve all privacy requests and grievances within <strong>30 calendar days</strong>. If not satisfied, you retain the statutory right to escalate to the Data Protection Board of India.
                </div>
              </div>
            </SectionReveal>

            {/* Updates to this Notice */}
            <SectionReveal className="pt-6 border-t border-deep-green/10 text-xs text-deep-green/60">
              <p>
                <strong>Last Updated:</strong> September 2026. This notice will be updated periodically to reflect subsequent rules and notifications issued under the Digital Personal Data Protection Act, 2023.
              </p>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
