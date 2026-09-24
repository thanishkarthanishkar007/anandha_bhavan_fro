import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sre New Aananda Bavan',
  description:
    'Terms of service, dining table reservation policies, and conditions of use for Sre New Aananda Bavan Pure Veg Restaurant in Salem (NH 44).',
  alternates: {
    canonical: 'https://srenewaanandabavan.com/terms/',
  },
  openGraph: {
    title: 'Terms & Conditions | Sre New Aananda Bavan',
    description:
      'Review terms of service, table booking policies, and hospitality conditions at Sre New Aananda Bavan Salem.',
    url: 'https://srenewaanandabavan.com/terms/',
    siteName: 'Sre New Aananda Bavan',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
