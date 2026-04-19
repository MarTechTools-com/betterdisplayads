import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "120px 40px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 80,
            fontWeight: 700,
            color: "var(--border)",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: 16,
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--accent)",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: 8,
            fontFamily: "var(--font-display)",
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          ← Back to home
        </Link>
      </main>
    </>
  );
}
