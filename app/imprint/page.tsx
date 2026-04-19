import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information for BetterDisplayAds.com",
};

export default function Imprint() {
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
            marginBottom: 48,
          }}
        >
          Imprint
        </h1>

        <div className="prose">
          <h2>Operator</h2>
          <p>
            BetterDisplayAds.com is operated by the team behind Display Gate
            Guard.
          </p>

          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:info@displaygateguard.com">
              info@displaygateguard.com
            </a>
          </p>

          <h2>Responsible for content</h2>
          <p>
            The editorial team at BetterDisplayAds.com is responsible for the
            content published on this website within the meaning of applicable
            press law.
          </p>

          <h2>Liability for content</h2>
          <p>
            The content of this website has been created with care. We accept no
            liability for the accuracy, completeness, or timeliness of the
            information provided. This website is for informational purposes
            only and does not constitute legal, financial, or professional
            advice.
          </p>

          <h2>Liability for links</h2>
          <p>
            This website contains links to external third-party websites. We
            have no influence over the content of those sites and accept no
            liability for them. The respective operators of those sites are
            solely responsible for their content.
          </p>

          <h2>Online dispute resolution (EU)</h2>
          <p>
            The European Commission provides an online dispute resolution
            platform:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . We are not obligated to participate in dispute resolution
            proceedings before a consumer arbitration board and do not currently
            do so.
          </p>
        </div>
      </main>
    </>
  );
}
