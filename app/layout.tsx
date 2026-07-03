import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "General Supplier Prabumulih",
    "Kontraktor Prabumulih",
    "Technical Service Sumatera Selatan",
    "IT Solution Prabumulih",
    "Jasa IT Prabumulih",
    "Pengadaan barang Prabumulih",
    "Kobadaran Mulia Utama",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.shortName,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [`${site.url}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} font-sans overflow-x-hidden`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
