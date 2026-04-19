/**
 * Upload the ebook PDF to Vercel Blob.
 *
 * Prerequisites:
 *   1. Create a Vercel project for betterdisplayads.com in the Vercel dashboard.
 *   2. Go to Project Settings → Storage → Blob → "Create" (free tier).
 *      This generates a BLOB_READ_WRITE_TOKEN.
 *   3. Run:
 *        BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxx node scripts/upload-pdf.mjs
 *
 * The script prints the public URL. Save it as BLOB_PDF_URL in Vercel env vars.
 */

import { put } from "@vercel/blob";
import { readFileSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PDF_PATH = resolve(
  __dirname,
  "../Display Advertising Gone Bad – Avoid THIS Type of Website in Your Digital Display Campaigns and Improve your ROAS.pdf"
);

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Error: BLOB_READ_WRITE_TOKEN is not set.");
  console.error(
    "Run: BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxx node scripts/upload-pdf.mjs"
  );
  process.exit(1);
}

try {
  statSync(PDF_PATH);
} catch {
  console.error(`Error: PDF not found at:\n  ${PDF_PATH}`);
  process.exit(1);
}

console.log("Uploading PDF to Vercel Blob...");

const pdfBuffer = readFileSync(PDF_PATH);

const blob = await put(
  "ebooks/display-advertising-gone-bad.pdf",
  pdfBuffer,
  {
    access: "public",
    token,
    contentType: "application/pdf",
    allowOverwrite: true,
  }
);

console.log("\n✓ Upload complete!");
console.log(`  Public URL: ${blob.url}`);
console.log("\nNext step — add this to your Vercel project env vars:");
console.log(`  BLOB_PDF_URL=${blob.url}`);
console.log(
  "\nVercel dashboard: Project Settings → Environment Variables → Add"
);
