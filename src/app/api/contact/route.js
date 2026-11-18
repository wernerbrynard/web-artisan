import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Brand colours for the email. Email clients cannot read the site's theme,
// so these are copies of the values in src/theme/theme.js.
const c = {
  stone: '#edf0f0',
  paper: '#f6f8f8',
  ink: '#0f222b',
  steel: '#586b73',
  mist: '#9fb1b7',
  brass: '#c9981f',
  line: '#d3dada',
};

const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const mono = "'SFMono-Regular', Menlo, Consolas, 'Courier New', monospace";

// The visitor's text goes into HTML, so anything that could be read as markup is escaped.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const label = (text) =>
  `<p style="margin:0 0 6px;font-family:${mono};font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:${c.steel};">${text}</p>`;

function enquiryHtml({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
  const received = new Date().toLocaleString('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    dateStyle: 'long',
    timeStyle: 'short',
  });

  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:${c.stone};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${c.stone};">
<tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
    <tr><td style="background:${c.ink};border-radius:4px 4px 0 0;padding:22px 32px;border-bottom:3px solid ${c.brass};">
      <p style="margin:0;font-family:${mono};font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:${c.mist};">Web Artisan Studios &middot; Website enquiry</p>
    </td></tr>
    <tr><td style="background:${c.paper};border:1px solid ${c.line};border-top:0;border-radius:0 0 4px 4px;padding:32px;">
      <h1 style="margin:0 0 24px;font-family:${sans};font-size:26px;line-height:1.2;font-weight:700;letter-spacing:-0.4px;color:${c.ink};">New enquiry from ${safeName}</h1>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:0 0 18px;">
          ${label('Name')}
          <p style="margin:0;font-family:${sans};font-size:16px;line-height:1.5;color:${c.ink};">${safeName}</p>
        </td></tr>
        <tr><td style="padding:0 0 18px;">
          ${label('Email')}
          <p style="margin:0;font-family:${sans};font-size:16px;line-height:1.5;"><a href="mailto:${safeEmail}" style="color:${c.ink};text-decoration:underline;">${safeEmail}</a></p>
        </td></tr>
        <tr><td style="padding:18px 0 0;border-top:1px solid ${c.line};">
          ${label('Message')}
          <p style="margin:0;font-family:${sans};font-size:16px;line-height:1.6;color:${c.ink};">${safeMessage}</p>
        </td></tr>
        <tr><td style="padding:28px 0 0;">
          <a href="mailto:${safeEmail}" style="display:inline-block;background:${c.ink};color:${c.stone};font-family:${sans};font-size:15px;font-weight:600;text-decoration:none;padding:12px 20px;border-radius:4px;">Reply to ${safeName} <span style="color:${c.brass};">&rarr;</span></a>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:16px 32px 0;">
      <p style="margin:0;font-family:${mono};font-size:11px;letter-spacing:0.6px;color:${c.steel};">Sent from the form on webartisan.co.za &middot; ${received}</p>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Web Artisan Studios Contact Form <werner@webartisan.co.za>',
      to: ['werner@webartisan.co.za'],
      reply_to: email,
      // A subject is a single line, so line breaks in the name are flattened.
      subject: `New Enquiry from ${String(name).replace(/\s+/g, ' ').trim()}`,
      html: enquiryHtml({ name, email, message }),
      // Plain version for mail apps that do not show HTML.
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
