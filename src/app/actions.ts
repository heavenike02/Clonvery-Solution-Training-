'use server';

import {Resend} from 'resend';
import {z} from 'zod';
import {site} from '@/content/site';
import {courseTitles} from '@/content/courses';

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your name').max(120),
  orgName: z.string().trim().max(160).optional().default(''),
  email: z.string().trim().email('Please enter a valid email address').max(200),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a phone number')
    .max(30)
    .regex(/^[+()\d\s-]+$/, 'Please enter a valid phone number'),
  county: z.string().trim().min(2, 'Please enter your county or location').max(80),
  course: z.enum(courseTitles, {message: 'Please choose a course'}),
  participants: z.coerce.number().int().min(1).max(500).optional(),
  notes: z.string().trim().max(2000).optional().default(''),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().max(0).optional().default(''),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

export type EnquiryResult =
  | {ok: true}
  | {ok: false; reason: 'validation'; fieldErrors: FieldErrors}
  | {ok: false; reason: 'send_failed' | 'not_configured'};

export async function sendEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof EnquiryInput;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {ok: false, reason: 'validation', fieldErrors};
  }

  const data = parsed.data;
  // Silently accept bot submissions without sending anything.
  if (data.website) return {ok: true};

  // Accept the conventional name, or `resend` as it was saved in the Vercel project.
  const apiKey = process.env.RESEND_API_KEY ?? process.env.resend;
  if (!apiKey) {
    console.error('[enquiry] RESEND_API_KEY (or `resend`) is not set');
    return {ok: false, reason: 'not_configured'};
  }

  const to = process.env.ENQUIRY_TO_EMAIL ?? site.email;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? 'Clonervy Website <onboarding@resend.dev>';

  const rows: Array<[string, string]> = [
    ['Course', data.course],
    ['Name', data.fullName],
    ['Company / Organization', data.orgName],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Location / County', data.county],
    ['Approx. Number of Trainees', data.participants ? String(data.participants) : ''],
    ['Preferred Dates / Details', data.notes],
  ].filter((r): r is [string, string] => Boolean(r[1]));

  const text = [
    'New training enquiry from the Clonervy website',
    '',
    ...rows.map(([k, v]) => `• ${k}: ${v}`),
  ].join('\n');

  const html = `
    <div style="font-family:system-ui,sans-serif;color:#1e293b">
      <h2 style="color:#0c2340;margin:0 0 12px">New training enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="font-weight:700;color:#0c2340;vertical-align:top">${escapeHtml(k)}</td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
          )
          .join('')}
      </table>
      <p style="color:#475569;font-size:13px;margin-top:16px">Reply to this email to respond directly to ${escapeHtml(data.fullName)}.</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const {error} = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Training Enquiry: ${data.course} (${data.county})`,
      text,
      html,
    });
    if (error) {
      console.error('[enquiry] Resend error', error);
      return {ok: false, reason: 'send_failed'};
    }
    return {ok: true};
  } catch (err) {
    console.error('[enquiry] send threw', err);
    return {ok: false, reason: 'send_failed'};
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, ch => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'})[ch]!);
}
