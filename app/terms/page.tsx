import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for BetterDisplayAds.com",
  alternates: { canonical: "https://www.betterdisplayads.com/terms" },
};

export default function Terms() {
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
          Terms of Service
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
          <h2>1. Scope and operator</h2>
          <p>
            These Terms of Service govern your use of BetterDisplayAds.com
            (the "Website"), operated by Nenad Franjic. By accessing or using
            this Website you agree to these terms. If you do not agree, please
            do not use the Website.
          </p>

          <h2>2. Services provided</h2>
          <p>
            BetterDisplayAds.com provides:
          </p>
          <ul>
            <li>
              Educational articles and blog posts about display advertising
              quality, Made-for-Advertising (MFA) sites, and Google Display
              Network placement management.
            </li>
            <li>
              A free ebook ("Display Advertising Gone Bad") delivered by email
              upon request.
            </li>
            <li>
              Links and references to Display Gate Guard (displaygg.com), a
              separate placement audit tool operated independently.
            </li>
          </ul>
          <p>
            All content on this Website is provided for informational purposes
            only. It does not constitute legal, financial, or professional
            advice. Results from applying any information on this Website may
            vary and are not guaranteed.
          </p>

          <h2>3. Email subscription and ebook delivery</h2>
          <p>
            When you submit your email address to receive the free ebook, you
            consent to:
          </p>
          <ul>
            <li>Receiving the requested ebook by email.</li>
            <li>
              Receiving occasional emails about display advertising quality,
              product updates, and related resources from BetterDisplayAds.com.
            </li>
          </ul>
          <p>
            You may unsubscribe at any time using the link included in every
            email. We process your data in accordance with our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>4. Intellectual property</h2>
          <p>
            All content on this Website — including text, graphics, data, and
            the ebook — is owned by Nenad Franjic and protected by applicable
            copyright law. You may not reproduce, distribute, or create
            derivative works without prior written permission, except for
            personal, non-commercial use.
          </p>
          <p>
            Sharing individual articles by linking to them on this Website is
            explicitly permitted and encouraged.
          </p>

          <h2>5. Disclaimer of warranties</h2>
          <p>
            This Website and its content are provided "as is" without warranty
            of any kind, express or implied. We do not warrant that the Website
            will be uninterrupted, error-free, or free of viruses or other
            harmful components. We make no warranties regarding the accuracy,
            completeness, or suitability of any content for your specific
            purposes.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Nenad Franjic
            shall not be liable for any indirect, incidental, consequential, or
            punitive damages arising from your use of this Website or reliance
            on its content. This includes, without limitation, lost profits,
            lost ad spend, or data loss.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties
            or limitation of liability. In such cases, liability is limited to
            the maximum extent permitted by law.
          </p>

          <h2>7. External links</h2>
          <p>
            This Website contains links to third-party websites, including
            displaygg.com, Google, and other external resources. These links are
            provided for convenience only. We have no control over the content
            or practices of linked sites and accept no liability for them.
          </p>

          <h2>8. Changes to these terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time.
            Changes will be posted on this page with an updated date. Continued
            use of the Website after changes are posted constitutes acceptance
            of the revised terms.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by applicable law. For users in the
            European Union, mandatory consumer protection provisions of your
            country of residence apply in addition to these terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms can be directed to:{" "}
            <a href="mailto:nenad.franjic@displaygateguard.com">
              nenad.franjic@displaygateguard.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
