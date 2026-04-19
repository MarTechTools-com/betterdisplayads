"use client";

import { useState } from "react";

interface Props {
  sourcePage: string;
  compact?: boolean;
}

export function EmailForm({ sourcePage, compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // bot
    if (!gdpr) {
      setErrorMsg("Please confirm consent to continue.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company: company || undefined,
          source_page: sourcePage,
          gdpr_consent: true,
          website: honeypot,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Submission failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(34, 197, 94, 0.08)",
          border: "1px solid rgba(34, 197, 94, 0.25)",
          borderRadius: 10,
          padding: "20px 24px",
          maxWidth: 480,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 16,
            fontWeight: 600,
            color: "var(--success)",
            margin: "0 0 6px",
          }}
        >
          Check your inbox
        </p>
        <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
          The PDF is on its way. Check spam if it doesn&apos;t arrive within a
          few minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}
    >
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          style={{
            flex: 1,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "12px 16px",
            color: "var(--text)",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            outline: "none",
          }}
        />
        {!compact && (
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company (optional)"
            style={{
              width: 160,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "12px 16px",
              color: "var(--text)",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              outline: "none",
            }}
          />
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: status === "loading" ? "var(--muted)" : "var(--accent)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "13px 24px",
          fontFamily: "var(--font-display)",
          fontSize: 15,
          fontWeight: 600,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "background 0.15s",
        }}
      >
        {status === "loading" ? "Sending…" : "Get the free ebook →"}
      </button>

      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          fontSize: 12,
          color: "var(--muted)",
          lineHeight: 1.4,
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          style={{ marginTop: 2, accentColor: "var(--accent)", flexShrink: 0 }}
        />
        I agree to receive occasional emails about display advertising quality.
        By submitting, you confirm you have read our{" "}
        <a href="/privacy" style={{ color: "var(--accent)" }}>
          Privacy Policy
        </a>
        .
      </label>

      {errorMsg && (
        <p style={{ fontSize: 13, color: "var(--error)", margin: 0 }}>
          {errorMsg}
        </p>
      )}

      <p
        style={{
          fontSize: 12,
          color: "var(--muted)",
          fontFamily: "var(--font-mono)",
          margin: 0,
        }}
      >
        // PDF delivered by email · No spam · Unsubscribe anytime
      </p>
    </form>
  );
}
