import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Spice Royale | Pure Vegetarian Taste',
  description:
    'Premium South Indian vegetarian dining experience with authentic flavours and modern presentation.',
  keywords: [
    'Spice Royale',
    'South Indian Vegetarian',
    'Pure Veg Restaurant',
    'Dosa',
    'Idli',
    'Pongal',
    'Vadai',
    'Authentic South Indian',
  ],
  authors: [{ name: 'Spice Royale' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4F8F24',
};

import { LanguageProvider } from '@/context/LanguageContext';
import { RestaurantProvider } from '@/context/RestaurantContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/food/ezgif-frame-001.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="bg-warm-white text-deep-green overflow-x-clip antialiased selection:bg-restaurant-green selection:text-cream">
        <RestaurantProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </RestaurantProvider>
      </body>
    </html>
  );
}
