"use client";

import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import theme from "../theme/theme";
import "../app/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Metadata */}
        <title>Web Artisan | Tailored Web Solutions in Cape Town</title>
        <meta
          name="description"
          content="Web Artisan specialises in creating tailored web solutions for local and global businesses. Based in Cape Town, we deliver effective and user-friendly digital experiences."
        />
        <link rel="canonical" href="https://webartisan.co.za/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#103948" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Web Artisan | Tailored Web Solutions in Cape Town" />
        <meta property="og:description" content="Web Artisan specialises in creating tailored web solutions for local and global businesses. Based in Cape Town, we deliver effective and user-friendly digital experiences." />
        <meta property="og:image" content="https://webartisan.co.za/images/logo.jpeg" />
        <meta property="og:url" content="https://webartisan.co.za/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Artisan | Tailored Web Solutions in Cape Town" />
        <meta name="twitter:description" content="Web Artisan specialises in creating tailored web solutions for local and global businesses. Based in Cape Town, we deliver effective and user-friendly digital experiences." />
        <meta name="twitter:image" content="https://webartisan.co.za/images/logo.jpeg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ backgroundColor: "var(--background-color)" }}>
        <ChakraProvider theme={theme}>
          <NavBar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}