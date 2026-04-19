import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — bots fill this field, real browsers don't
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const company = typeof body.company === "string" ? body.company.trim() : null;
  const sourcePage = typeof body.source_page === "string" ? body.source_page : "/";
  const gdprConsent = body.gdpr_consent === true;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!gdprConsent) {
    return NextResponse.json({ error: "Consent required" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // Upsert lead — email is UNIQUE, so re-downloads are fine
  const { error: dbError } = await supabase.from("ebook_leads").upsert(
    {
      email,
      company: company || null,
      source_page: sourcePage,
      gdpr_consent: true,
      resend_status: "pending",
    },
    { onConflict: "email" }
  );

  if (dbError) {
    console.error("[subscribe] Supabase error:", dbError);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  // Send PDF via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  const pdfUrl = process.env.BLOB_PDF_URL ?? "";

  try {
    await resend.emails.send({
      from: "hello@betterdisplayads.com",
      to: email,
      subject: "Your free ebook: Display Advertising Gone Bad",
      html: `
<!DOCTYPE html>
<html>
<body style="background:#0a0d12;color:#f0f4f8;font-family:'IBM Plex Sans',Arial,sans-serif;max-width:560px;margin:0 auto;padding:40px 24px">
  <p style="font-family:monospace;font-size:12px;color:#6b7a8d;margin-bottom:32px">
    betterdisplayads.com
  </p>

  <h1 style="font-size:24px;font-weight:700;letter-spacing:-0.02em;margin-bottom:16px">
    Here's your free ebook
  </h1>

  <p style="font-size:16px;color:#9badbe;line-height:1.6;margin-bottom:32px">
    Thanks for downloading <strong style="color:#f0f4f8">Display Advertising Gone Bad</strong>.
    Click the button below to download your PDF.
  </p>

  <a href="${pdfUrl}"
     style="display:inline-block;background:#0ea5e9;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;margin-bottom:24px">
    Download PDF →
  </a>

  <p style="font-size:13px;color:#6b7a8d;margin-bottom:4px">
    Or copy this link: <a href="${pdfUrl}" style="color:#0ea5e9">${pdfUrl}</a>
  </p>

  <hr style="border:none;border-top:1px solid #1e2530;margin:40px 0" />

  <p style="font-size:12px;color:#6b7a8d;line-height:1.6">
    You're receiving this because you downloaded an ebook from betterdisplayads.com.
    <br>
    Questions? Reply to this email.
    To unsubscribe, email <a href="mailto:hello@betterdisplayads.com" style="color:#6b7a8d">hello@betterdisplayads.com</a>.
  </p>
</body>
</html>
      `,
    });

    await supabase
      .from("ebook_leads")
      .update({ resend_status: "sent" })
      .eq("email", email);
  } catch (emailErr) {
    console.error("[subscribe] Resend error:", emailErr);
    await supabase
      .from("ebook_leads")
      .update({ resend_status: "failed" })
      .eq("email", email);
    // Lead is captured — don't fail the response
  }

  return NextResponse.json({ ok: true });
}
