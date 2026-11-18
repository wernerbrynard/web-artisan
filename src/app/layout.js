import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { studio } from "@/data/work";
import { pageMetadata, siteUrl } from "@/data/seo";
import "./globals.scss";

// Headings: Archivo, set slightly wide (the width axis is what font-stretch uses).
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });
const instrument = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' });

const title = "Web Artisan Studios | Websites, shops and apps, Cape Town";
const description = "Web Artisan Studios builds websites, online shops and apps, and looks after them once they are live. Based in Cape Town, working with brands in motorcycling, touring, food and engineering.";

// Shown to search engines as structured facts about the business.
const organisation = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Web Artisan Studios',
  legalName: 'Web Artisan Studios (Pty) Ltd',
  url: `${siteUrl}/`,
  logo: `${siteUrl}/apple-icon.png`,
  image: `${siteUrl}/images/share.png`,
  description,
  foundingDate: String(studio.since),
  founder: { '@type': 'Person', name: 'Werner Brynard' },
  address: { '@type': 'PostalAddress', addressLocality: 'Cape Town', addressCountry: 'ZA' },
  areaServed: 'Worldwide',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f222b',
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({ title, description, path: '/' }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}
