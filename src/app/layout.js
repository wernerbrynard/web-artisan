// src/app/layout.js
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from "@/components/Footer";
import theme from "../theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Artisan - Custom Web Solutions",
  description: "Web Artisan specialises in creating custom web solutions tailored to your business needs.",
  openGraph: {
    title: 'Web Artisan - Custom Web Solutions',
    description: 'Web Artisan specialises in creating custom web solutions tailored to your business needs.',
    url: 'https://web-artisan-697d2.web.app/',
    images: [
      {
        url: 'https://web-artisan-697d2.web.app/images/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Web Artisan Preview Image',
      },
    ],
    site_name: 'Web Artisan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Artisan - Custom Web Solutions',
    description: 'Web Artisan specialises in creating custom web solutions tailored to your business needs.',
    image: 'https://web-artisan-697d2.web.app/images/logo.jpg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/src/app/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        {/* Other head elements */}
      </Head>
      <body className={inter.className} style={{ backgroundColor: 'var(--background-color)' }}>
        <ChakraProvider>
          <NavBar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}