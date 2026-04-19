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
          Last updated: April 2026
        </p>

        <div className="prose">
          <p>
            This policy describes how BetterDisplayAds.com (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;) collects, uses, and protects personal data when
            you use this website. It applies to visitors worldwide and
            specifically addresses rights under the EU General Data Protection
            Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>

          <h2>Data controller</h2>
          <p>
            BetterDisplayAds.com is operated by the team behind Display Gate
            Guard. For all data-related inquiries, contact us at{" "}
            <a href="mailto:info@displaygateguard.com">
              info@displaygateguard.com
            </a>
            .
          </p>

          <h2>What data we collect and why</h2>
          <p>We collect the following personal data, and only this:</p>
          <ul>
            <li>
              <strong>Email address</strong> — to deliver the ebook PDF you
              requested and to send occasional emails about display advertising
              quality, with your explicit consent.
            </li>
            <li>
              <strong>Company name</strong> — optional, provided voluntarily.
              Used only to understand our audience.
            </li>
            <li>
              <strong>Source page</strong> — the URL of the page where you
              submitted the form. Used for internal analytics only.
            </li>
            <li>
              <strong>Standard server logs</strong> — IP address, browser type,
              and timestamps, collected automatically by our hosting provider
              for security and debugging. Not linked to your identity.
            </li>
          </ul>

          <p>We do not collect payment data, location data, or any sensitive personal information.</p>

          <h2>Legal basis for processing (GDPR)</h2>
          <p>We rely on the following lawful bases:</p>
          <ul>
            <li>
              <strong>Consent (Article 6(1)(a))</strong> — for sending
              marketing emails. You may withdraw consent at any time by clicking
              the unsubscribe link in any email or contacting us directly.
            </li>
            <li>
              <strong>Legitimate interests (Article 6(1)(f))</strong> — for
              delivering the ebook you requested and for server security logs.
              These interests do not override your rights.
            </li>
          </ul>

          <h2>How we use your data</h2>
          <p>
            We use your email address to deliver the ebook PDF and to send
            occasional updates about display advertising quality. We do not sell
            your personal data. We do not use your data for advertising. We do
            not share your data with third parties except the processors listed
            below, who are contractually bound to handle it securely.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain your email address and associated data for as long as you
            remain subscribed to our communications. If you unsubscribe or
            request deletion, we will remove your data within 30 days.
          </p>

          <h2>Third-party processors</h2>
          <p>
            We use the following sub-processors. Each is bound by a data
            processing agreement:
          </p>
          <ul>
            <li>
              <strong>Supabase</strong> — database hosting. Your lead data is
              stored on Supabase infrastructure (EU region).
            </li>
            <li>
              <strong>Resend</strong> — transactional email delivery. Your email
              address is passed to Resend solely to send the ebook and
              subsequent communications.
            </li>
            <li>
              <strong>Vercel</strong> — website hosting. Vercel processes server
              request logs. Vercel Web Analytics collects anonymous, aggregated
              page view data with no cookies and no personal identifiers.
            </li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We do not use tracking cookies or advertising cookies. Vercel Web
            Analytics is cookie-free and does not collect or store personal
            data. No cookie consent banner is required.
          </p>

          <h2>Your rights (EU / EEA — GDPR)</h2>
          <p>If you are located in the EU or EEA, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification</strong> — request correction of inaccurate data.</li>
            <li><strong>Erasure</strong> — request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
            <li><strong>Restriction</strong> — request that we limit how we process your data.</li>
            <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interests.</li>
            <li><strong>Withdraw consent</strong> — at any time, without affecting the lawfulness of prior processing.</li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:info@displaygateguard.com">
              info@displaygateguard.com
            </a>
            . We will respond within 30 days. You also have the right to lodge a
            complaint with your local data protection authority.
          </p>

          <h2>Your rights (California — CCPA / CPRA)</h2>
          <p>If you are a California resident, you have the right to:</p>
          <ul>
            <li><strong>Know</strong> — request disclosure of the personal information we collect, use, or share.</li>
            <li><strong>Delete</strong> — request deletion of your personal information.</li>
            <li><strong>Correct</strong> — request correction of inaccurate personal information.</li>
            <li><strong>Opt out of sale or sharing</strong> — we do not sell or share your personal information with third parties for cross-context behavioral advertising.</li>
            <li><strong>Non-discrimination</strong> — we will not discriminate against you for exercising any of these rights.</li>
          </ul>
          <p>
            To submit a request, email{" "}
            <a href="mailto:info@displaygateguard.com">
              info@displaygateguard.com
            </a>{" "}
            with the subject line &ldquo;California Privacy Request&rdquo;. We
            will respond within 45 days as required by law.
          </p>

          <h2>Do not sell or share my personal information</h2>
          <p>
            We do not sell your personal information and we do not share it with
            third parties for cross-context behavioral advertising purposes. The
            processors listed above receive your data solely to provide the
            services described in this policy.
          </p>

          <h2>International data transfers</h2>
          <p>
            Our processors may operate infrastructure outside the EU. Where
            personal data is transferred outside the EEA, we rely on Standard
            Contractual Clauses (SCCs) or other adequacy mechanisms approved by
            the European Commission.
          </p>

          <h2>Contact</h2>
          <p>
            For any questions about this privacy policy or your personal data:{" "}
            <a href="mailto:info@displaygateguard.com">
              info@displaygateguard.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
