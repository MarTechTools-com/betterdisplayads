import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BetterDisplayAds.com — Stop Wasting Ad Spend on MFA Sites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0d12",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 14,
            color: "#f59e0b",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          BetterDisplayAds.com
        </div>

        <div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#f0f4f8",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#f59e0b" }}>$170B</span>
            &nbsp;in display ad spend
            <br />
            went nowhere last year.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#6b7a8d",
              maxWidth: 720,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Free ebook: learn how MFA sites drain your Google Ads budget and how
            to stop it.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              background: "#0ea5e9",
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              padding: "10px 24px",
              borderRadius: 8,
              display: "flex",
            }}
          >
            Download free ebook →
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
