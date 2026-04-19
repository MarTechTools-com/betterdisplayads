import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

// Mock Supabase
vi.mock("@/lib/supabase", () => ({
  getSupabaseAdmin: () => ({
    from: () => ({
      upsert: vi.fn().mockResolvedValue({ error: null }),
      update: () => ({ eq: vi.fn().mockResolvedValue({ error: null }) }),
    }),
  }),
}));

// Mock Resend
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: "test-email-id" }),
    },
  })),
}));

// Import after mocks — dynamic import in async test
let POST: typeof import("@/app/api/subscribe/route").POST;

function makeRequest(body: Record<string, unknown>) {
  return new NextRequest("http://localhost/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/subscribe", () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    const mod = await import("@/app/api/subscribe/route");
    POST = mod.POST;
  });

  it("returns 200 for valid submission", async () => {
    const res = await POST(
      makeRequest({
        email: "test@example.com",
        gdpr_consent: true,
        source_page: "/",
        website: "",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
  });

  it("returns 400 for missing email", async () => {
    const res = await POST(
      makeRequest({ email: "", gdpr_consent: true, website: "" })
    );
    expect(res.status).toBe(400);
  });

  it("returns 400 for invalid email", async () => {
    const res = await POST(
      makeRequest({ email: "not-an-email", gdpr_consent: true, website: "" })
    );
    expect(res.status).toBe(400);
  });

  it("returns 400 for missing gdpr consent", async () => {
    const res = await POST(
      makeRequest({ email: "test@example.com", gdpr_consent: false, website: "" })
    );
    expect(res.status).toBe(400);
  });

  it("silently accepts honeypot submissions", async () => {
    const res = await POST(
      makeRequest({
        email: "bot@evil.com",
        gdpr_consent: true,
        website: "http://spam.com",
      })
    );
    // Returns 200 to not tip off bots
    expect(res.status).toBe(200);
  });

  it("includes company when provided", async () => {
    const res = await POST(
      makeRequest({
        email: "test@company.com",
        company: "Acme Corp",
        gdpr_consent: true,
        source_page: "/blog/test",
        website: "",
      })
    );
    expect(res.status).toBe(200);
  });
});
