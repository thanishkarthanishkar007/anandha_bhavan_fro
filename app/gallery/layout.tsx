import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | Restaurant Ambiance, AC Dining & Highway Hub',
  description:
    'Take a visual tour of Sre New Aananda Bavan in Salem. Modern family A/C dining halls, illuminated night elevation, grand highway facade, ample parking, and 24/7 EV charging facilities.',
  alternates: {
    canonical: 'https://srenewaanandabavan.com/gallery/',
  },
  openGraph: {
    title: 'Photo Gallery | Sre New Aananda Bavan - Ambiance & Architecture',
    description:
      'Explore photos of our modern dining spaces, architectural facade, pure veg kitchen hygiene, and traveler amenities on NH 44 Salem.',
    url: 'https://srenewaanandabavan.com/gallery/',
    siteName: 'Sre New Aananda Bavan',
    images: [
      {
        url: '/images/gallery/aananda-bavan-exterior-day-elevation.jpg',
        width: 1200,
        height: 675,
        alt: 'Sre New Aananda Bavan Grand Highway Elevation in Salem',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery | Sre New Aananda Bavan',
    description:
      'Visual tour of our pure veg family restaurant, AC dining hall, and 24/7 EV hub on NH 44.',
    images: ['/images/gallery/aananda-bavan-exterior-day-elevation.jpg'],
  },
};

const galleryBreadcrumbJsonLd = {
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
      name: 'Gallery',
      item: 'https://srenewaanandabavan.com/gallery/',
    },
  ],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryBreadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
