// src/data/seo.js
// Search and sharing details shared by every page, so the share image and
// site name are set in one place.

export const siteUrl = 'https://webartisan.co.za';

const shareImage = {
  url: '/images/share.png',
  width: 1200,
  height: 630,
  alt: 'Web Artisan Studios. Built to go the distance.',
};

// Builds a page's metadata. `path` is the page's address on the site, such as '/about'.
export function pageMetadata({ title, description, path = '/' }) {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Web Artisan Studios',
      images: [shareImage],
      locale: 'en_ZA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [shareImage.url],
    },
  };
}
