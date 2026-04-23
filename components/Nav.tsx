"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,13,18,0.96)" : "rgba(10,13,18,0.80)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 40px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            textDecoration: "none",
          }}
        >
          Better<span style={{ color: "var(--accent)" }}>Display</span>Ads
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Link
            href="/blog"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: 14,
              transition: "color 0.15s",
            }}
          >
            Blog
          </Link>
          <a
            href="https://displaygg.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "7px 16px",
              borderRadius: 6,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Try Display Gate Guard →
          </a>
        </div>
      </div>
    </nav>
  );
}
