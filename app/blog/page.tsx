import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Display Advertising Quality",
  description:
    "Articles about MFA sites, ad fraud, display advertising quality, and how to improve your ROAS on Google Display Network.",
  alternates: {
    canonical: "https://www.betterdisplayads.com/blog",
  },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 40px 80px" }}>
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
          knowledge base
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 48,
          }}
        >
          Display advertising quality
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "28px 28px 24px",
                  height: "100%",
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
                <h2
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
                </h2>
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
      </main>
    </>
  );
}
