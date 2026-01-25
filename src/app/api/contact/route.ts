
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string) {
  if (!token) {
    return { success: false, score: 0, error: 'Missing reCAPTCHA token' };
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  return data;
}

export async function POST(req: NextRequest) {
  const { name, email, message, honeypot, token } = await req.json();

  const recaptchaResponse = await verifyRecaptcha(token);

  if (!recaptchaResponse.success || recaptchaResponse.score < 0.5) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
  }

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Contact Form <noreply@peterhoggarth.com>',
      to: ['me@peterhoggarth.com'],
      subject: 'New message from your portfolio contact form',
      replyTo: email,
      html: `<p>You have a new message from your portfolio contact form:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
