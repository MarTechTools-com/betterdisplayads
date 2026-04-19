import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { EmailForm } from "@/components/EmailForm";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Stop Wasting Ad Spend on MFA Sites — Free Ebook",
  description:
    "Download the free ebook: Display Advertising Gone Bad. Learn how Made-for-Advertising sites drain your Google Ads budget — and how Display Gate Guard stops it.",
};

const STATS = [
  {
    number: "1T+",
    label: "MFA bid requests per month, per HUMAN Security",
    source: "humansecurity.com, 2025",
  },
  {
    number: "23%",
    label: "of display ads served to non-human traffic",
    source: "IAS, 2025",
  },
  {
    number: "$13.6B",
    label: "lost to ad fraud globally this year",
    source: "Statista, 2025",
  },
];

const PLACEMENTS = [
  {
    domain: "newsflashly.com",
    category: "MFA / Clickbait",
    score: "CRITICAL",
    adDensity: "47%",
    action: "exclude",
  },
  {
    domain: "toptentrending.net",
    category: "MFA / Clickbait",
    score: "CRITICAL",
    adDensity: "38%",
    action: "exclude",
  },
  {
    domain: "gossipworld24.com",
    category: "Low Quality",
    score: "HIGH",
    adDensity: "29%",
    action: "exclude",
  },
  {
    domain: "techreviews-blog.co",
    category: "Marginal",
    score: "MEDIUM",
    adDensity: "14%",
    action: "review",
  },
  {
    domain: "LocalLifestyle.net",
    category: "Marginal",
    score: "MEDIUM",
    adDensity: "11%",
    action: "review",
  },
];

const TOOL_STEPS = [
  {
    step: "01",
    title: "Connect your Google Ads account",
    body: "OAuth 2.0 — read-only access. We never touch your campaigns or budgets.",
  },
  {
    step: "02",
    title: "We audit your placement report",
    body: "Eight dimensions: ad density, content quality, brand safety, traffic sources, MFA signals, and more.",
  },
  {
    step: "03",
    title: "Get a scored exclusion list",
    body: "Download a ready-to-import CSV. Add it to your placement exclusions in 30 seconds.",
  },
];

function ScoreBadge({ score }: { score: string }) {
  const styles: Record<string, React.CSSProperties> = {
    CRITICAL: {
      background: "rgba(239, 68, 68, 0.12)",
      color: "#ef4444",
      border: "1px solid rgba(239, 68, 68, 0.2)",
    },
    HIGH: {
      background: "rgba(245, 158, 11, 0.12)",
      color: "#f59e0b",
      border: "1px solid rgba(245, 158, 11, 0.2)",
    },
    MEDIUM: {
      background: "rgba(107, 122, 141, 0.12)",
      color: "#6b7a8d",
      border: "1px solid rgba(107, 122, 141, 0.2)",
    },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: 12,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 4,
        fontFamily: "var(--font-mono)",
        ...styles[score],
      }}
    >
      {score}
    </span>
  );
}

export default async function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero-grid">
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--amber)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                display: "block",
                width: 24,
                height: 1,
                background: "var(--amber)",
              }}
            />
            2026 ad fraud report
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 28,
            }}
          >
            <span style={{ color: "var(--amber)" }}>$170B</span> in display ad
            spend
            <br />
            went nowhere last year.
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "var(--muted)",
              maxWidth: 520,
              lineHeight: 1.5,
              marginBottom: 48,
              fontWeight: 400,
            }}
          >
            MFA sites, click farms, and ad stacking drain your Google Ads budget
            every day.{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              The free ebook explains what&apos;s happening and how to stop it.
            </strong>
          </p>

          <EmailForm sourcePage="/" />
        </div>

        <div
          className="book-col"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/ebook-tablet.png"
            alt="Display Advertising Gone Bad — free ebook on tablet"
            width={1127}
            height={1491}
            priority
            className="book-float"
            style={{
              width: "100%",
              maxWidth: 360,
              height: "auto",
              filter:
                "drop-shadow(0 32px 64px rgba(0,0,0,0.6)) drop-shadow(0 8px 24px rgba(14,165,233,0.06))",
            }}
          />
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
          padding: "40px 40px",
        }}
      >
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div key={stat.number}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 40,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--amber)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.number}
              </div>
              <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.4 }}>
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--border)",
                  marginTop: 4,
                }}
              >
                / source: {stat.source}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PLACEMENT QUALITY TABLE ───────────────────── */}
      <section
        style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 40px" }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          exhibit A
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          Where your ad spend is going right now
        </h2>
        <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 40, maxWidth: 560 }}>
          A sample placement quality audit from a real $50K/month Google Display campaign.
          These sites appeared in the active targeting — none were manually added.
        </p>

        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted)",
                fontWeight: 500,
              }}
            >
              displaygg.com / placement-audit
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--amber)",
                background: "rgba(245, 158, 11, 0.1)",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                padding: "3px 8px",
                borderRadius: 4,
              }}
            >
              5 flagged
            </span>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
            }}
          >
            <thead>
              <tr style={{ background: "rgba(30, 37, 48, 0.5)" }}>
                {["Domain", "Category", "Quality Score", "Ad Density", "Action"].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 24px",
                        textAlign: "left",
                        fontSize: 11,
                        fontWeight: 500,
                        color: "var(--muted)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {PLACEMENTS.map((row) => (
                <tr
                  key={row.domain}
                  style={{ borderBottom: "1px solid rgba(30, 37, 48, 0.8)" }}
                >
                  <td
                    style={{
                      padding: "14px 24px",
                      color: "var(--text)",
                      fontWeight: 500,
                    }}
                  >
                    {row.domain}
                  </td>
                  <td style={{ padding: "14px 24px", color: "var(--muted)" }}>
                    {row.category}
                  </td>
                  <td style={{ padding: "14px 24px" }}>
                    <ScoreBadge score={row.score} />
                  </td>
                  <td style={{ padding: "14px 24px", color: "var(--text)" }}>
                    {row.adDensity}
                  </td>
                  <td style={{ padding: "14px 24px" }}>
                    {row.action === "exclude" ? (
                      <span
                        style={{ fontSize: 12, color: "var(--error)", fontWeight: 500 }}
                      >
                        ✕ Exclude
                      </span>
                    ) : (
                      <span
                        style={{ fontSize: 12, color: "var(--amber)", fontWeight: 500 }}
                      >
                        ⚠ Review
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              padding: "14px 24px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(10, 13, 18, 0.4)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
              }}
            >
              Showing 5 of 847 placements audited · 3 CRITICAL · 2 HIGH
            </span>
            <a
              href="https://displaygg.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Run your audit →
            </a>
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ────────────────────────────────── */}
      <div
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "80px 40px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                knowledge base
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Everything you need to know about display ad quality
              </h2>
            </div>
          </div>

          <div className="blog-card-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "28px 28px 24px",
                    height: "100%",
                    transition: "border-color 0.15s",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--muted)",
                      marginBottom: 12,
                    }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 17,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                      lineHeight: 1.3,
                      marginBottom: 12,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--muted)",
                      lineHeight: 1.5,
                      margin: "0 0 20px",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--accent)",
                    }}
                  >
                    Read →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── TOOL SECTION ─────────────────────────────── */}
      <section
        style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 40px" }}
      >
        <div className="tool-section-grid">
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--accent)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              the fix
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              Display Gate Guard audits your placements automatically
            </h2>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, marginBottom: 32 }}>
              Connect your Google Ads account. We analyze every placement in your
              campaign against eight quality dimensions. You get a scored exclusion
              list ready to import in 30 seconds.
            </p>
            <a
              href="https://displaygg.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Try Display Gate Guard free →
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TOOL_STEPS.map((step, i) => (
              <div
                key={step.step}
                style={{
                  display: "flex",
                  gap: 20,
                  paddingBottom: i < TOOL_STEPS.length - 1 ? 32 : 0,
                  borderBottom:
                    i < TOOL_STEPS.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  marginBottom: i < TOOL_STEPS.length - 1 ? 32 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--accent)",
                    minWidth: 32,
                    marginTop: 2,
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: 6,
                    }}
                  >
                    {step.title}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>
                    {step.body}
                  </div>
                </div>
              </div>
            ))}

            {/* Terminal output visual */}
            <div
              style={{
                marginTop: 32,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "16px 20px",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
              }}
            >
              <div style={{ color: "var(--muted)", marginBottom: 8 }}>
                $ displaygg audit --account=123-456-789
              </div>
              <div style={{ color: "var(--success)" }}>
                ✓ Audited 847 placements
              </div>
              <div style={{ color: "var(--error)" }}>
                ✕ 23 CRITICAL · 41 HIGH flagged
              </div>
              <div style={{ color: "var(--accent)", marginTop: 4 }}>
                → exclusions.csv ready to import
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--surface)",
          padding: "60px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                marginBottom: 8,
              }}
            >
              Stop paying for ad fraud
            </h3>
            <p style={{ fontSize: 15, color: "var(--muted)", margin: 0 }}>
              Get the free ebook and start excluding low-quality placements today.
            </p>
          </div>
          <EmailForm sourcePage="/footer" compact />
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>
          © {new Date().getFullYear()} BetterDisplayAds.com
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { href: "/privacy", label: "Privacy" },
            { href: "/imprint", label: "Imprint" },
            { href: "https://displaygg.com", label: "Display Gate Guard", external: true },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
