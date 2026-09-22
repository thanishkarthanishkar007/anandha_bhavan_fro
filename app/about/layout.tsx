import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Heritage & Authentic Pure Vegetarian Tradition',
  description:
    'Discover the story of Sre New Aananda Bavan. Dedicated to pure vegetarian culinary heritage, freshly ground spices, highway traveler hospitality, and pristine dining on NH 44 Salem.',
  alternates: {
    canonical: 'https://srenewaanandabavan.com/about/',
  },
  openGraph: {
    title: 'About Us | Sre New Aananda Bavan - Heritage & Pure Vegetarian Tradition',
    description:
      'Learn about our journey, culinary values, pure vegetarian philosophy, and highway hospitality on NH 44 Salem.',
    url: 'https://srenewaanandabavan.com/about/',
    siteName: 'Sre New Aananda Bavan',
    images: [
      {
        url: '/images/about-aananda-bavan-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'About Sre New Aananda Bavan Pure Veg Restaurant Salem',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Sre New Aananda Bavan',
    description:
      'Dedicated to pure vegetarian culinary heritage and pristine highway dining on NH 44 Salem.',
    images: ['/images/about-aananda-bavan-exterior.jpg'],
  },
};

const aboutBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://srenewaanandabavan.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: 'https://srenewaanandabavan.com/about/',
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
