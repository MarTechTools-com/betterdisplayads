import Link from "next/link";

export function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10, 13, 18, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
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

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            href="/blog"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Blog
          </Link>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
}
