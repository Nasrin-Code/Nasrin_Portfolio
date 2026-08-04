import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resumeData";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://nasrina.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nasrin A — Python Developer & Software Engineer",
  description:
    "Portfolio of Nasrin A, an entry-level Python Developer and Software Engineer specializing in Flask, REST APIs, and full-stack backend development.",
  keywords: [
    "Nasrin A",
    "Python Developer",
    "Software Engineer",
    "Backend Developer",
    "Flask Developer",
    "REST API Developer",
    "AI ML Engineer",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Nasrin A — Python Developer & Software Engineer",
    description:
      "Entry-level Python Developer and Software Engineer specializing in Flask, REST APIs, and full-stack backend development.",
    url: siteUrl,
    siteName: "Nasrin A",
    images: [{ url: "/profile.jpg", width: 900, height: 900, alt: profile.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasrin A — Python Developer & Software Engineer",
    description:
      "Entry-level Python Developer and Software Engineer specializing in Flask, REST APIs, and full-stack backend development.",
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Python Developer",
  email: profile.email,
  url: siteUrl,
  sameAs: [profile.linkedin, profile.github, profile.leetcode],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jbmono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
