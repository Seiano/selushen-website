import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: 'STS-SOLUTION | Professional Fire Door Manufacturer | UL & ISO Certified',
    template: '%s | STS-SOLUTION',
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'fire door manufacturer',
    'steel fire door',
    'fire door supplier China',
    'UL certified fire door',
    'explosion proof door',
    'blast door manufacturer',
    'commercial fire door wholesale',
    'ISO certified door factory',
    'fire rated door',
    'door opening system solution',
  ],
  openGraph: {
    title: 'STS-SOLUTION | Professional Fire Door Manufacturer',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: '/images/hero/factory-hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'STS-SOLUTION Manufacturing Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STS-SOLUTION | Professional Fire Door Manufacturer',
    description: SITE_DESCRIPTION,
    images: ['/images/hero/factory-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nanjing Solution New Materials Co., Ltd.',
  alternateName: 'STS-SOLUTION',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Tiancheng Road, Binjiang Development Zone',
    addressLocality: 'Nanjing',
    addressRegion: 'Jiangsu',
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+86-15105150219',
    contactType: 'sales',
    availableLanguage: ['English', 'Chinese'],
  },
  sameAs: [],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 100,
  },
  areaServed: [
    { '@type': 'Place', name: 'Middle East' },
    { '@type': 'Place', name: 'Southeast Asia' },
    { '@type': 'Place', name: 'Russia' },
    { '@type': 'Place', name: 'Africa' },
    { '@type': 'Place', name: 'South Asia' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
