import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.scss";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#103948',
};

export const metadata = {
  title: "Web Artisan | Tailored Web Solutions in Cape Town",
  description: "Web Artisan specialises in creating tailored web solutions for local and global businesses. Based in Cape Town, we deliver effective and user-friendly digital experiences.",
  alternates: {
    canonical: 'https://webartisan.co.za/',
  },
  openGraph: {
    title: "Web Artisan | Tailored Web Solutions in Cape Town",
    description: "Web Artisan specialises in creating tailored web solutions for local and global businesses. Based in Cape Town, we deliver effective and user-friendly digital experiences.",
    url: 'https://webartisan.co.za/',
    siteName: 'Web Artisan',
    images: [
      {
        url: 'https://webartisan.co.za/images/logo.jpeg',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Artisan | Tailored Web Solutions in Cape Town",
    description: "Web Artisan specialises in creating tailored web solutions for local and global businesses. Based in Cape Town, we deliver effective and user-friendly digital experiences.",
    images: ['https://webartisan.co.za/images/logo.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ backgroundColor: "var(--background-color)" }}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}