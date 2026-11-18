import NextLink from 'next/link';
import LegalPage from '@/components/Legal';
import { pageMetadata } from '@/data/seo';

export const metadata = pageMetadata({
  title: "Website terms | Web Artisan Studios",
  description: "The terms that apply to using the Web Artisan Studios website.",
  path: '/terms',
});

const email = 'contact@webartisan.co.za';

export default function Terms() {
  return (
    <LegalPage label="Legal" title="Website terms" updated="18 November 2026">
      <p>
        These terms apply to your use of this website. They are short on purpose. By using the site you agree to them.
      </p>
      <p>
        They do not cover work we do for clients. That is set out in the written quote and agreement for each project.
      </p>

      <h2>Who we are</h2>
      <p>
        This website is run by Web Artisan Studios (Pty) Ltd, a private company registered in South Africa with registration number 2025/012325/07, based in Cape Town. You can reach us at <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>What this site is for</h2>
      <p>
        The site describes our studio and shows examples of our work. It is general information, not an offer or a quote. A price or timeline only becomes binding once we have agreed it with you in writing.
      </p>

      <h2>Our content and other people&apos;s</h2>
      <p>
        The text, design, logo and code of this site belong to Web Artisan Studios. You may share links to the site and quote from it with credit. Please do not copy it wholesale or pass it off as your own.
      </p>
      <p>
        The names, logos and website screenshots of the brands shown on this site belong to their owners. They appear here as examples of work we have done for them.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The site links to our clients&apos; websites and other sites we do not control. We are not responsible for their content or for how they handle your information.
      </p>

      <h2>Accuracy and liability</h2>
      <p>
        We take care to keep this site correct and available, but we provide it as it is and cannot promise that it will always be accurate, complete or uninterrupted.
      </p>
      <p>
        To the extent the law allows, we are not liable for any loss that results from using this site or relying on what it says. Nothing in these terms limits any right you have under the law that cannot be limited or excluded, including rights under consumer protection law.
      </p>

      <h2>Your information</h2>
      <p>
        How we handle personal information and cookies is explained in our <NextLink href="/privacy">privacy and cookies page</NextLink>.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of South Africa, and the South African courts have jurisdiction over any dispute about them. If you are a consumer living in another country, this does not take away any protection the law of that country gives you.
      </p>

      <h2>Changes</h2>
      <p>If we change these terms, we will update this page and the date at the top.</p>
    </LegalPage>
  );
}
