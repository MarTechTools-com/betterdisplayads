-- ebook_leads table for BetterDisplayAds.com
-- Run this in the Supabase SQL Editor for the displaygg project
-- https://supabase.com/dashboard/project/<your-project-id>/sql/new

CREATE TABLE IF NOT EXISTS ebook_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  company VARCHAR(255),
  source_page VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  gdpr_consent BOOLEAN NOT NULL DEFAULT FALSE,
  resend_status VARCHAR(10) DEFAULT 'pending'
    CHECK (resend_status IN ('pending', 'sent', 'failed'))
);

-- Index for quick lookup by email (also unique, but explicit index helps query plans)
CREATE INDEX IF NOT EXISTS idx_ebook_leads_email ON ebook_leads (email);

-- Index for finding failed sends quickly
CREATE INDEX IF NOT EXISTS idx_ebook_leads_resend_status ON ebook_leads (resend_status)
  WHERE resend_status = 'failed';

-- Index for conversion analytics by source page
CREATE INDEX IF NOT EXISTS idx_ebook_leads_source_page ON ebook_leads (source_page);

-- Disable Row Level Security for service role access (server-side only via service role key)
-- The /api/subscribe route uses the service role key, so RLS is not needed.
-- If you ever add client-side Supabase access, enable RLS and add policies.
ALTER TABLE ebook_leads DISABLE ROW LEVEL SECURITY;
