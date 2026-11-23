import './globals.css'; // first: declares the cascade-layer order

import type {Metadata, Viewport} from 'next';
import {Analytics} from '@vercel/analytics/next';
import {Providers} from './providers';
import {site} from '@/content/site';
import {courses} from '@/content/courses';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.motto}`,
  description: site.description,
  keywords: [
    'PHECC',
    'CFR-A',
    'Emergency First Response',
    'Basic Life Support',
    'Manual Handling',
    'Patient Moving and Handling',
    'Fire Safety training',
    'PMAV',
    'first aid training Cavan',
    'on-site training Ireland',
  ],
  alternates: {canonical: '/'},
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/',
    siteName: site.name,
    title: `${site.name} | ${site.motto}`,
    description: site.description,
  },
  twitter: {card: 'summary_large_image', title: site.name, description: site.description},
};

export const viewport: Viewport = {
  themeColor: '#071629',
  colorScheme: 'light',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.name,
  slogan: site.motto,
  description: site.description,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  address: {'@type': 'PostalAddress', addressRegion: 'Cavan', addressCountry: 'IE'},
  areaServed: {'@type': 'Country', name: 'Ireland'},
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accredited training courses',
    itemListElement: courses.map(c => ({
      '@type': 'Offer',
      itemOffered: {'@type': 'Course', name: c.title, description: c.summary, provider: {'@type': 'Organization', name: site.name}},
    })),
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en-IE" data-theme="light">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
