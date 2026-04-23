import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { EmailForm } from "@/components/EmailForm";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Stop Wasting Ad Spend on MFA Sites — Free Ebook",
  description:
    "Download the free ebook: Display Advertising Gone Bad. Learn how Made-for-Advertising sites drain your Google Ads budget — and how Display Gate Guard stops it.",
  alternates: {
    canonical: "https://www.betterdisplayads.com/",
  },
  openGraph: {
    url: "https://www.betterdisplayads.com/",
    type: "website",
  },
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

const BLOG_ACCENTS = [
  "#0ea5e9",
  "#6366f1",
  "#ef4444",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#14b8a6",
  "#f97316",
  "#a3e635",
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
    title: "Export your placement report",
    body: "Download your placement performance report from Google Ads. Takes about 30 seconds — no integrations, no OAuth.",
  },
  {
    step: "02",
    title: "Run it through the self-service tool",
    body: "Upload your CSV to Display Gate Guard. We score every placement across eight quality dimensions instantly.",
  },
  {
    step: "03",
    title: "Or send it to us for a full analysis",
    body: "Want a deeper look? Send us your report and we'll deliver a full audit with a scored exclusion list and written recommendations.",
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
          <div
            className="book-float"
            style={{
              width: 300,
              height: 400,
              filter:
                "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 8px 32px rgba(14,165,233,0.10))",
            }}
          >
            <svg
              viewBox="0 0 300 400"
              width="300"
              height="400"
            >
              <defs>
                <linearGradient id="tabletGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1a2035" />
                  <stop offset="100%" stopColor="#0d1018" />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c0392b" />
                  <stop offset="100%" stopColor="#8b1a10" />
                </linearGradient>
                <radialGradient id="screenGlow" cx="0.2" cy="0.3">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <clipPath id="screenClip">
                  <rect x="22" y="28" width="256" height="344" rx="4" />
                </clipPath>
              </defs>
              <rect x="0" y="0" width="300" height="400" rx="18" fill="url(#tabletGrad)" />
              <rect x="1" y="1" width="298" height="398" rx="17" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              <circle cx="150" cy="12" r="3" fill="#0d1018" />
              <rect x="22" y="28" width="256" height="344" rx="4" fill="url(#screenGrad)" />
              <g clipPath="url(#screenClip)">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <line key={i} x1="0" y1={60 + i * 40} x2="300" y2={60 + i * 40} stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
                ))}
                <rect x="30" y="48" width="120" height="18" rx="3" fill="rgba(0,0,0,0.3)" />
                <text x="38" y="61" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace" fontWeight="500">2026 AD FRAUD REPORT</text>
                <text x="30" y="108" fill="#fff" fontSize="22" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" letterSpacing="-0.5">DISPLAY</text>
                <text x="30" y="134" fill="#fff" fontSize="22" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" letterSpacing="-0.5">ADVERTISING</text>
                <text x="30" y="160" fill="#fff" fontSize="22" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" letterSpacing="-0.5">GONE BAD</text>
                <rect x="30" y="172" width="240" height="1.5" fill="rgba(255,255,255,0.2)" />
                <rect x="30" y="184" width="200" height="7" rx="2" fill="rgba(255,255,255,0.15)" />
                <rect x="30" y="197" width="170" height="7" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="30" y="210" width="185" height="7" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="30" y="223" width="140" height="7" rx="2" fill="rgba(255,255,255,0.08)" />
                <rect x="22" y="280" width="256" height="92" fill="rgba(0,0,0,0.35)" />
                <text x="30" y="305" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">Ad Fraud Losses · Where Your Spend Goes</text>
                <text x="30" y="318" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">and How to Get It Back</text>
                <rect x="30" y="328" width="72" height="14" rx="3" fill="rgba(255,255,255,0.1)" />
                <text x="34" y="339" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">BetterDisplayAds.com</text>
                <rect x="22" y="28" width="256" height="344" fill="url(#screenGlow)" opacity="0.3" />
              </g>
              <circle cx="150" cy="386" r="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div
              key={stat.number}
              className="stat-item"
              style={{
                padding: "36px 40px",
                borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {i === 0 && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="3" fill="var(--accent)" />
                    <circle cx="7" cy="7" r="6" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.4" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2a5 5 0 100 10A5 5 0 007 2z" stroke="var(--accent)" strokeWidth="1" fill="none" />
                    <path d="M7 5v4M5 7h4" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="2" y="4" width="10" height="7" rx="1.5" stroke="var(--accent)" strokeWidth="1" fill="none" />
                    <path d="M5 4V3a2 2 0 014 0v1" stroke="var(--accent)" strokeWidth="1" />
                  </svg>
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 38,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--amber)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.number}
              </div>
              <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.4, marginBottom: 4 }}>
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--muted2)",
                }}
              >
                / {stat.source}
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
              {PLACEMENTS.map((row, i) => (
                <tr
                  key={row.domain}
                  className="placement-row"
                  style={{ borderBottom: i < PLACEMENTS.length - 1 ? "1px solid var(--border)" : "none" }}
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
            {posts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  className="blog-card"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      height: 3,
                      background: BLOG_ACCENTS[idx % BLOG_ACCENTS.length],
                      opacity: 0.7,
                    }}
                  />
                  <div style={{ padding: "22px 24px 20px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--muted2)",
                        marginBottom: 10,
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
                        fontSize: 16,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--text)",
                        lineHeight: 1.35,
                        marginBottom: 10,
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--muted)",
                        lineHeight: 1.55,
                        margin: "0 0 16px",
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
                  </div>
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
              Export your placement report from Google Ads and run it through the
              self-service tool — or send it to us for a full audit with a written
              report. Either way, you get a scored exclusion list ready to import.
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
                marginTop: 28,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "10px 16px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  background: "rgba(10,13,18,0.4)",
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "block", opacity: 0.7 }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "block", opacity: 0.7 }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "block", opacity: 0.7 }} />
              </div>
              <div
                style={{
                  padding: "16px 20px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                }}
              >
                <div style={{ color: "var(--muted)", marginBottom: 10 }}>
                  $ displaygg audit --account=123-456-789
                </div>
                <div style={{ color: "var(--success)", marginBottom: 4 }}>
                  ✓ Audited 847 placements
                </div>
                <div style={{ color: "var(--error)", marginBottom: 4 }}>
                  ✕ 23 CRITICAL · 41 HIGH flagged
                </div>
                <div style={{ color: "var(--accent)" }}>
                  → exclusions.csv ready to import
                </div>
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
