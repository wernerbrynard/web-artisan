// Page transition: a short, firm rise. No bounce.
// Done in CSS (see .page-enter in globals.scss) so the page is never left
// invisible while waiting for JavaScript.
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
