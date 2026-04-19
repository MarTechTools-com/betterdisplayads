import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BetterDisplayAds.com",
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "64px 40px 80px",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--muted)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 40,
          }}
        >
          ← Back
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--muted)",
            marginBottom: 48,
          }}
        >
          Last updated: January 2026
        </p>

        <div className="prose">
          <h2>What data we collect</h2>
          <p>
            When you download the free ebook, we collect your email address,
            optionally your company name, and the page you submitted the form
            from. We also collect standard server logs (IP address, user agent,
            timestamps) for security and debugging.
          </p>

          <h2>How we use your data</h2>
          <p>
            Your email address is used solely to deliver the ebook PDF and send
            occasional updates about display advertising quality. We do not sell
            your data to third parties. We do not use your data for advertising.
          </p>

          <h2>Third-party processors</h2>
          <p>
            We use the following services to process your data:
          </p>
          <ul>
            <li>
              <strong>Supabase</strong> — database hosting (EU region). Your
              lead data is stored there.
            </li>
            <li>
              <strong>Resend</strong> — email delivery. Your email address is
              passed to Resend to send the PDF.
            </li>
            <li>
              <strong>Vercel</strong> — hosting and analytics (anonymous,
              no cookies).
            </li>
          </ul>

          <h2>Your rights (GDPR)</h2>
          <p>
            If you are in the EU or EEA, you have the right to access, correct,
            or delete your personal data. To exercise these rights, email{" "}
            <a href="mailto:hello@betterdisplayads.com">
              hello@betterdisplayads.com
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            We do not use tracking cookies. Vercel Analytics collects anonymous
            page view data without cookies or personal identifiers.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href="mailto:hello@betterdisplayads.com">
              hello@betterdisplayads.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
