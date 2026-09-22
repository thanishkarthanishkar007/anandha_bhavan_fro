import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pure Veg Menu | South Indian Tiffin, Thali Meals & Delicacies',
  description:
    'Explore our pure vegetarian menu: Crispy Ghee Roast Dosa, Sambar Idli, Medu Vadai, South Indian Royal Lunch Meals, North Indian gravies, and authentic filter coffee on NH 44 Salem.',
  alternates: {
    canonical: 'https://srenewaanandabavan.com/menu/',
  },
  openGraph: {
    title: 'Pure Veg Menu | Sre New Aananda Bavan - South Indian Delicacies',
    description:
      'Full menu featuring authentic South Indian breakfast, royal lunch thali meals, fresh evening tiffin, North Indian gravies, and beverages.',
    url: 'https://srenewaanandabavan.com/menu/',
    siteName: 'Sre New Aananda Bavan',
    images: [
      {
        url: '/images/food/items/bf-ghee-roast.jpg',
        width: 800,
        height: 600,
        alt: 'Sre New Aananda Bavan Ghee Roast Dosa and South Indian Specialties',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Veg Menu | Sre New Aananda Bavan',
    description:
      'Crispy dosas, traditional meals, fresh tiffin, and pure vegetarian dishes in Salem on NH 44.',
    images: ['/images/food/items/bf-ghee-roast.jpg'],
  },
};

const menuJsonLd = {
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
          name: 'Menu',
          item: 'https://srenewaanandabavan.com/menu/',
        },
      ],
    },
    {
      '@type': 'Menu',
      '@id': 'https://srenewaanandabavan.com/menu/#foodmenu',
      name: 'Sre New Aananda Bavan Pure Vegetarian Menu',
      description:
        'Complete pure vegetarian menu comprising South Indian morning tiffin, traditional thali lunch meals, evening tiffin, fresh bread/parotta, Indian gravies, and authentic South Indian beverages.',
      inLanguage: ['en', 'ta'],
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Morning Tiffin & South Indian Breakfast',
          description: 'Authentic breakfast specialties made with freshly ground batter and pure ghee.',
        },
        {
          '@type': 'MenuSection',
          name: 'Royal South Indian Lunch',
          description: 'Traditional plantain leaf meals with authentic sambar, rasam, kootu, poriyal, and payasam.',
        },
        {
          '@type': 'MenuSection',
          name: 'Dinner Tiffin & Parotta',
          description: 'Hot tiffin, flaky parottas, dosas, and vegetarian gravies.',
        },
        {
          '@type': 'MenuSection',
          name: 'Hot & Cold Beverages',
          description: 'Kumbakonam degree filter coffee, tea, and fresh fruit beverages.',
        },
      ],
    },
  ],
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      {children}
    </>
  );
}
