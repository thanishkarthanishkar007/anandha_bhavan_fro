import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { RestaurantProvider } from '@/context/RestaurantContext';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srenewaanandabavan.com'),
  title: {
    default: 'Sre New Aananda Bavan | Pure Veg A/C Restaurant in Salem (NH 44)',
    template: '%s | Sre New Aananda Bavan',
  },
  description:
    'Authentic South Indian pure vegetarian restaurant on Bangalore to Salem Highway (NH 44), Poosaripatty, Omalur. Savor crispy dosas, filter coffee, traditional thali meals, and pure veg delicacies.',
  keywords: [
    'Sre New Aananda Bavan',
    'ஸ்ரீ நியூ ஆனந்த பவன்',
    'Pure Vegetarian Restaurant Salem',
    'South Indian Vegetarian Restaurant',
    'NH 44 Highway Restaurant',
    'Bangalore to Salem Food Stop',
    'Poosaripatty Omalur Restaurant',
    'Salem Pure Veg Dining',
    'Ghee Roast Dosa Salem',
    'South Indian Meals Salem',
    'Pure Veg AC Family Restaurant',
  ],
  authors: [{ name: 'Sre New Aananda Bavan', url: 'https://srenewaanandabavan.com' }],
  creator: 'Sre New Aananda Bavan',
  publisher: 'Sre New Aananda Bavan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://srenewaanandabavan.com/',
  },
  openGraph: {
    title: 'Sre New Aananda Bavan | Pure Veg A/C Restaurant in Salem (NH 44)',
    description:
      'Authentic South Indian pure vegetarian dining sanctuary on NH 44 Bangalore to Salem Highway, Poosaripatty, Omalur. Premium AC dining, ample parking, and 24/7 EV charging.',
    url: 'https://srenewaanandabavan.com/',
    siteName: 'Sre New Aananda Bavan',
    images: [
      {
        url: '/images/about-aananda-bavan-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'Sre New Aananda Bavan Pure Veg Restaurant Exterior in Salem NH 44',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sre New Aananda Bavan | Pure Veg Restaurant in Salem (NH 44)',
    description:
      'Authentic South Indian pure vegetarian restaurant on Bangalore to Salem Highway (NH 44), Poosaripatty.',
    images: ['/images/about-aananda-bavan-exterior.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4F8F24',
};

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'VegetarianRestaurant'],
  '@id': 'https://srenewaanandabavan.com/#restaurant',
  name: 'Sre New Aananda Bavan',
  alternateName: 'ஸ்ரீ நியூ ஆனந்த பவன்',
  url: 'https://srenewaanandabavan.com/',
  logo: 'https://srenewaanandabavan.com/images/navbar-logo.png',
  image: [
    'https://srenewaanandabavan.com/images/about-aananda-bavan-exterior.jpg',
    'https://srenewaanandabavan.com/images/aananda-bavan-hero.png',
  ],
  description:
    'Authentic South Indian pure vegetarian A/C restaurant located on Bangalore to Salem National Highway (NH 44), Poosaripatty, Omalur, Salem. Serving crispy ghee roast dosas, traditional thali meals, fresh morning tiffin, and pure vegetarian dishes in a family-friendly ambiance with ample parking and 24/7 EV charging.',
  servesCuisine: [
    'South Indian',
    'Pure Vegetarian',
    'Tamil Nadu Traditional',
    'North Indian Vegetarian',
    'Chinese Vegetarian',
  ],
  priceRange: '₹₹',
  telephone: '+916383312948',
  email: 'srenewaanandabavan@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Bangalore to Salem Byepass, NH 44, opposite to Government Higher Secondary School, Poosaripatty',
    addressLocality: 'Omalur, Salem',
    addressRegion: 'Tamil Nadu',
    postalCode: '636305',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.8458256,
    longitude: 78.0664093,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '06:30',
      closes: '22:45',
    },
  ],
  hasMenu: 'https://srenewaanandabavan.com/menu/',
  acceptsReservations: 'True',
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Air Conditioning',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Pure Vegetarian',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Ample Highway Parking',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'EV Charging Station',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Family Friendly',
      value: true,
    },
  ],
  sameAs: [
    'https://www.instagram.com/srenewaanandabavan',
    'https://www.facebook.com/profile.php?id=61594584594104',
    'http://www.youtube.com/@SreNewAanandaBavan',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://srenewaanandabavan.com/#website',
  url: 'https://srenewaanandabavan.com/',
  name: 'Sre New Aananda Bavan',
  description:
    'Authentic South Indian Pure Vegetarian A/C Restaurant in Salem on NH 44.',
  inLanguage: 'en-IN',
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
