// ─────────────────────────────────────────────
// API Route: POST /api/contact
// Validates form data and sends email via Nodemailer
// ─────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { sendEnquiryEmail } from '@/lib/mailer';
import { ContactFormData } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, product, units, message } = body;

    // Basic validation
    if (!name || !email || !product || !units) {
      return NextResponse.json(
        { error: 'Name, email, product, and quantity are required.' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    await sendEnquiryEmail({ name, email, product, units, message });

    return NextResponse.json(
      { success: true, message: 'Enquiry sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
