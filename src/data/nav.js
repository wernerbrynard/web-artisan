// src/data/nav.js
// One list of navigation links, used by the header and the footer.

export const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#rideout', label: 'Rideout' },
  { href: '/about', label: 'About' },
];

// Pages that have the contact form on them. Elsewhere, "Start a project"
// goes to the form on the home page.
const pagesWithForm = ['/', '/about'];

export function contactHref(pathname) {
  const path = (pathname || '/').replace(/\/$/, '') || '/';
  return pagesWithForm.includes(path) ? '#contact-form' : '/#contact-form';
}
