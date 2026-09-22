import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Table Reservations | Poosaripatty, Omalur, Salem (NH 44)',
  description:
    'Visit or contact Sre New Aananda Bavan on Bangalore to Salem Highway (NH 44), opposite Govt Higher Secondary School, Poosaripatty, Omalur, Salem. Call +91 63833 12948 or reserve a table.',
  alternates: {
    canonical: 'https://srenewaanandabavan.com/contact/',
  },
  openGraph: {
    title: 'Contact & Table Reservations | Sre New Aananda Bavan Salem',
    description:
      'Find our exact highway location, contact details, opening hours, and table reservation form for Sre New Aananda Bavan on NH 44.',
    url: 'https://srenewaanandabavan.com/contact/',
    siteName: 'Sre New Aananda Bavan',
    images: [
      {
        url: '/images/about-aananda-bavan-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Sre New Aananda Bavan Pure Veg Restaurant Salem',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Reservations | Sre New Aananda Bavan',
    description:
      'Contact numbers, map location on NH 44, and table reservations for Sre New Aananda Bavan Salem.',
    images: ['/images/about-aananda-bavan-exterior.jpg'],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          name: 'Contact',
          item: 'https://srenewaanandabavan.com/contact/',
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://srenewaanandabavan.com/contact/#contactpage',
      url: 'https://srenewaanandabavan.com/contact/',
      name: 'Contact Sre New Aananda Bavan',
      description:
        'Official contact and table enquiry page for Sre New Aananda Bavan Pure Veg A/C Restaurant, Poosaripatty, Omalur, Salem, Tamil Nadu.',
      mainEntity: {
        '@type': 'Restaurant',
        name: 'Sre New Aananda Bavan',
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
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
