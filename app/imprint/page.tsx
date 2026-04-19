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
          <h2>Responsible for this website</h2>
          <p>
            BetterDisplayAds.com is operated by the owner of DisplayGateGuard.
            For legal correspondence, please use the contact address below.
          </p>

          <h2>Contact</h2>
          <p>
            <a href="mailto:hello@betterdisplayads.com">
              hello@betterdisplayads.com
            </a>
          </p>

          <h2>Dispute resolution</h2>
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
            . We are not obliged to participate in dispute resolution proceedings
            before a consumer arbitration board.
          </p>
        </div>
      </main>
    </>
  );
}
