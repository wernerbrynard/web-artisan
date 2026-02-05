import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Web Artisan Contact Form <contact@webartisan.co.za>',
      to: ['werner@webartisan.co.za'],
      subject: `New Enquiry from ${name}`,
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
