import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Centre (DPDP Act, 2023) | Sre New Aananda Bavan',
  description:
    'Exercise your data privacy rights under the Digital Personal Data Protection (DPDP) Act, 2023. View, correct, erase your data, withdraw consent, or raise a privacy grievance with Sre New Aananda Bavan.',
  alternates: {
    canonical: 'https://srenewaanandabavan.com/privacy-centre/',
  },
  openGraph: {
    title: 'Privacy Centre | Sre New Aananda Bavan',
    description:
      'Manage your personal data and privacy requests under the DPDP Act 2023 at Sre New Aananda Bavan.',
    url: 'https://srenewaanandabavan.com/privacy-centre/',
    siteName: 'Sre New Aananda Bavan',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyCentreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
