import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { EmailForm } from "@/components/EmailForm";
import { getAllPosts, getPostSource, postExists } from "@/lib/posts";

const BASE = "https://www.betterdisplayads.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!postExists(slug)) return {};

  const source = getPostSource(slug);
  const { data } = matter(source);
  const url = `${BASE}/blog/${slug}`;

  return {
    title: data.title,
    description: data.excerpt ?? data.description ?? "",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description: data.excerpt ?? data.description ?? "",
      type: "article",
      url,
      publishedTime: data.date,
      siteName: "BetterDisplayAds.com",
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  if (!postExists(slug)) notFound();

  const source = getPostSource(slug);
  const { data: frontmatter } = matter(source);

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  const postUrl = `${BASE}/blog/${slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.excerpt ?? frontmatter.description ?? "",
    url: postUrl,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      "@type": "Organization",
      name: "BetterDisplayAds.com",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "BetterDisplayAds.com",
      url: BASE,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Nav />

      <main className="blog-post-layout">
        {/* Article */}
        <article>
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

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--muted)",
              marginBottom: 16,
            }}
          >
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--text)",
              marginBottom: 40,
            }}
          >
            {frontmatter.title}
          </h1>

          <div className="prose">{content}</div>
        </article>

        {/* Sidebar CTA */}
        <aside
          style={{
            position: "sticky",
            top: 80,
          }}
        >
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 28,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--amber)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              free ebook
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "var(--text)",
                lineHeight: 1.3,
                marginBottom: 12,
              }}
            >
              Display Advertising Gone Bad
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.5,
                marginBottom: 20,
              }}
            >
              The complete guide to MFA sites, ad fraud, and how to stop wasting
              budget on low-quality placements.
            </p>
            <EmailForm sourcePage={`/blog/${slug}`} compact />
          </div>

          <div
            style={{
              marginTop: 16,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: 8,
                lineHeight: 1.3,
              }}
            >
              Ready to audit your placements?
            </p>
            <p
              style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16, lineHeight: 1.5 }}
            >
              Display Gate Guard analyzes every placement in your Google Ads
              campaign and gives you a scored exclusion list.
            </p>
            <a
              href="https://displaygg.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "transparent",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                padding: "10px 16px",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Try it free →
            </a>
          </div>
        </aside>
      </main>

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
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()} BetterDisplayAds.com
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { href: "/privacy", label: "Privacy" },
            { href: "/imprint", label: "Imprint" },
            {
              href: "https://displaygg.com",
              label: "Display Gate Guard",
              external: true,
            },
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
