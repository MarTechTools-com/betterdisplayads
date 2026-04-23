import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GridCanvas } from "@/components/GridCanvas";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BetterDisplayAds.com — Stop Wasting Ad Spend on MFA Sites",
    template: "%s | BetterDisplayAds.com",
  },
  description:
    "Free ebook and resources for performance marketers. Learn how Made-for-Advertising sites drain your Google Ads budget and how to stop it.",
  metadataBase: new URL("https://www.betterdisplayads.com"),
  alternates: {
    canonical: "https://www.betterdisplayads.com",
  },
  openGraph: {
    type: "website",
    siteName: "BetterDisplayAds.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BetterDisplayAds.com",
  url: "https://www.betterdisplayads.com",
  description:
    "Resources and tools for performance marketers to identify and exclude low-quality Made-for-Advertising (MFA) sites from Google Display campaigns.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BetterDisplayAds.com",
  url: "https://www.betterdisplayads.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <GridCanvas />
        <div className="page-content">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
