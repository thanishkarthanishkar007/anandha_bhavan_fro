import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Utensils, Phone, ArrowRight, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Sre New Aananda Bavan',
  description:
    'The page you are looking for does not exist or has been moved. Explore our authentic South Indian pure vegetarian menu or contact Sre New Aananda Bavan.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-warm-white text-deep-green flex flex-col font-outfit">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-restaurant-green/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-8">
          {/* Badge & Icon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-restaurant-green/20 text-xs font-bold uppercase tracking-[0.25em] text-restaurant-green shadow-xs">
            <Compass className="w-4 h-4 text-golden-yellow" />
            <span>404 • Page Not Found</span>
          </div>

          {/* Hexagonal Logo */}
          <div className="flex justify-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-3 rounded-3xl bg-cream/70 border border-restaurant-green/20 shadow-sm">
              <Image
                src="/images/navbar-logo.png"
                alt="Sre New Aananda Bavan"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-deep-green tracking-tight">
              Lost Your Way to Flavour?
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-deep-green/75 max-w-lg mx-auto leading-relaxed">
              We couldn’t find the page you’re looking for. It might have been moved or removed.
              Let us guide you back to our traditional South Indian vegetarian offerings.
            </p>
          </div>

          {/* Quick Helpful Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-restaurant-green hover:bg-leaf-green text-warm-white font-semibold text-sm tracking-wide shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream hover:bg-warm-white border border-deep-green/20 text-deep-green font-semibold text-sm tracking-wide shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Utensils className="w-4 h-4 text-restaurant-green" />
              <span>Explore Pure Veg Menu</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream hover:bg-warm-white border border-deep-green/20 text-deep-green font-semibold text-sm tracking-wide shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-restaurant-green" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Highway Assistance Note */}
          <div className="pt-6 border-t border-deep-green/10 text-xs text-deep-green/60">
            <p>
              Looking for Sre New Aananda Bavan on NH 44 (Bangalore - Salem Highway)?
              <br className="hidden sm:inline" /> Call us directly at{' '}
              <a
                href="tel:+916383312948"
                className="font-bold text-restaurant-green hover:underline"
              >
                +91 63833 12948
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
