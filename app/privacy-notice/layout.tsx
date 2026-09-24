import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice (DPDP Act, 2023) | Sre New Aananda Bavan',
  description:
    'Digital Personal Data Protection (DPDP) Act, 2023 compliant privacy notice of Sre New Aananda Bavan Pure Veg Restaurant in Salem (NH 44). Learn how we process and protect your dining and reservation data.',
  alternates: {
    canonical: 'https://srenewaanandabavan.com/privacy-notice/',
  },
  openGraph: {
    title: 'Privacy Notice (DPDP Act, 2023) | Sre New Aananda Bavan',
    description:
      'Learn about your data privacy rights, consent mechanisms, and grievance redressal under the Digital Personal Data Protection Act, 2023 at Sre New Aananda Bavan.',
    url: 'https://srenewaanandabavan.com/privacy-notice/',
    siteName: 'Sre New Aananda Bavan',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
