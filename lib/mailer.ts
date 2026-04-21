// ─────────────────────────────────────────────
// Nodemailer Transporter
// ─────────────────────────────────────────────
// Configured for Gmail SMTP (App Password required)
// See README.md for full setup guide

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface EnquiryEmailPayload {
  name: string;
  email: string;
  product: string;
  units: string;
  message: string;
}

export async function sendEnquiryEmail(data: EnquiryEmailPayload): Promise<void> {
  const { name, email, product, units, message } = data;

  // Email to business owner
  await transporter.sendMail({
    from: `"FlowerType Enquiry" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    replyTo: email,
    subject: `New Enquiry from ${name} — ${product || 'General'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0d1b2a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">New Product Enquiry</h1>
          <p style="color: #9ab; margin: 4px 0 0;">Flower Smart Intelligent Technology</p>
        </div>
        <div style="border: 1px solid #e2e8f0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Product</td><td style="padding: 8px 0;">${product || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Units</td><td style="padding: 8px 0;">${units || '—'}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 6px;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px;">MESSAGE</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
  });

  // Auto-reply to customer
  await transporter.sendMail({
    from: `"Flower Smart Technology" <${process.env.SMTP_FROM}>`,
    to: email,
    subject: 'We received your enquiry — Flower Smart Technology',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0d1b2a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">Thank you, ${name}!</h1>
        </div>
        <div style="border: 1px solid #e2e8f0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
          <p>We've received your enquiry about <strong>${product || 'our capsule homes'}</strong> and will get back to you within <strong>24 hours</strong>.</p>
          <p style="color: #666; font-size: 14px;">In the meantime, you can reach us directly at:</p>
          <ul style="color: #666; font-size: 14px;">
            <li>Email: ridoyrkr@outlook.com</li>
            <li>WhatsApp: +86 132 2252 5102</li>
          </ul>
          <p>— The Flower Smart Technology Team</p>
        </div>
      </div>
    `,
  });
}
