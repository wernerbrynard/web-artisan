import { pageMetadata } from '@/data/seo';

// Search and sharing details for the About page.
// The page itself is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "About | Web Artisan Studios",
  description: "A small Cape Town studio, founded by Werner Brynard, that builds websites, online shops and apps and stays on to look after them.",
  path: '/about',
});

export default function AboutLayout({ children }) {
  return children;
}
