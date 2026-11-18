import LegalPage from '@/components/Legal';
import { CookieSettingsLink } from '@/components/Consent';
import { pageMetadata } from '@/data/seo';

export const metadata = pageMetadata({
  title: "Privacy and cookies | Web Artisan Studios",
  description: "What personal information Web Artisan Studios collects through this website, why, who it is shared with, and the choices you have.",
  path: '/privacy',
});

const email = 'contact@webartisan.co.za';

export default function Privacy() {
  return (
    <LegalPage label="Legal" title="Privacy and cookies" updated="18 November 2026">
      <p>
        This page explains what personal information we collect through this website, why we collect it, and what you can do about it. It is written to meet South Africa&apos;s Protection of Personal Information Act (POPIA) and, for visitors in Europe and the United Kingdom, the General Data Protection Regulation (GDPR).
      </p>
      <p>
        It covers this website only. Work we do for clients is covered by our agreement with each client.
      </p>

      <h2>Who we are</h2>
      <p>
        Web Artisan Studios (Pty) Ltd, registration number 2025/012325/07, is a company based in Cape Town, South Africa. We are the responsible party under POPIA and the data controller under the GDPR for the information described here.
      </p>
      <p>
        Our Information Officer is Werner Brynard. For anything about your information, write to <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>What we collect, and why</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Information</th>
              <th>When</th>
              <th>Why, and our legal basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Your name, email address and message</td>
              <td>When you send the contact form</td>
              <td>To reply to you and discuss your project. This is needed to take steps at your request before any agreement, and is in our legitimate interest in answering enquiries.</td>
            </tr>
            <tr>
              <td>Pages viewed, the site you came from, your approximate location, and your device and browser type</td>
              <td>Only if you accept cookies</td>
              <td>To understand how the site is used and improve it. We do this only with your consent.</td>
            </tr>
            <tr>
              <td>Your IP address, the page requested and the time</td>
              <td>On every visit, in our hosting provider&apos;s server logs</td>
              <td>To keep the site running and secure. This is in our legitimate interest.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not ask for sensitive information, we do not make automated decisions about you, and we do not sell or rent your information to anyone.
      </p>

      <h2 id="cookies">Cookies</h2>
      <p>
        A cookie is a small file a website saves in your browser. We use cookies for one purpose, Google Analytics, and only if you accept them. If you decline, or do nothing, no analytics cookies are set and Google Analytics is not loaded.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Set by</th>
              <th>Purpose</th>
              <th>Kept for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>wa-cookie-choice</td>
              <td>This site (saved in your browser, not a cookie)</td>
              <td>Remembers whether you accepted or declined, so we do not ask on every page. Always used.</td>
              <td>Until you clear your browser data</td>
            </tr>
            <tr>
              <td>_ga and _ga_&lt;ID&gt;</td>
              <td>Google Analytics</td>
              <td>Tells one visitor from another and groups page views into visits. Only if you accept.</td>
              <td>Up to 2 years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        You can change your choice at any time: <CookieSettingsLink>open cookie settings</CookieSettingsLink>. The same link is at the bottom of every page.
      </p>

      <h2>Who we share it with</h2>
      <p>We use three service providers to run this site. Each handles information only to provide its service to us.</p>
      <ul>
        <li><strong>Resend</strong> delivers contact form messages to our inbox.</li>
        <li><strong>Google</strong> provides Google Analytics, if you accept cookies.</li>
        <li><strong>Railway</strong> hosts the website and keeps the server logs.</li>
      </ul>
      <p>
        These providers may store or process information outside South Africa and outside the European Economic Area, including in the United States. Where that happens we rely on their data protection terms, which include the standard contractual clauses approved for such transfers where these are required.
      </p>
      <p>We may also disclose information if the law requires us to.</p>

      <h2>How long we keep it</h2>
      <ul>
        <li><strong>Enquiries:</strong> for as long as we need them to deal with your enquiry and any work that follows. If nothing comes of an enquiry, we delete it when you ask us to.</li>
        <li><strong>Analytics:</strong> for the period set in our Google Analytics account, which is at most 14 months.</li>
        <li><strong>Server logs:</strong> for the short period our hosting provider keeps them.</li>
      </ul>

      <h2>Your rights</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>tell you what information we hold about you and give you a copy;</li>
        <li>correct information that is wrong;</li>
        <li>delete your information;</li>
        <li>stop or limit how we use it, including where we rely on legitimate interest;</li>
        <li>send your information to you or to someone else in a usable format.</li>
      </ul>
      <p>
        You can withdraw consent for analytics cookies at any time through the cookie settings above. To use any other right, write to <a href={`mailto:${email}`}>{email}</a>. We reply within 30 days and do not charge for this.
      </p>
      <p>
        If you are unhappy with how we have handled your information, please tell us first. You also have the right to complain to a regulator. In South Africa that is the <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">Information Regulator</a>. In Europe or the United Kingdom it is the data protection authority where you live.
      </p>

      <h2>Security</h2>
      <p>
        The site is served over an encrypted connection, and contact form messages go straight to our inbox and are not stored on the website. No system is perfectly secure. If a breach ever affects your information, we will tell you and the regulator as the law requires.
      </p>

      <h2>Children</h2>
      <p>This site is for businesses. It is not aimed at children and we do not knowingly collect their information.</p>

      <h2>Changes to this page</h2>
      <p>If we change how we handle information, we will update this page and the date at the top.</p>
    </LegalPage>
  );
}
