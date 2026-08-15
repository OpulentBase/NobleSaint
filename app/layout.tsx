import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Landscapes, Hardscapes & Pools | Southern California`,
    template: `%s | ${site.name}`,
  },
  description:
    "A father-and-son build team designing and constructing landscapes, hardscapes and pools across Orange County and Southern California. Twenty years on site. Call 714-585-6835.",
  keywords: [
    "landscape contractor Orange County",
    "hardscape contractor Southern California",
    "pool builder Orange County",
    "pool remodel",
    "backyard design build",
    "travertine patio",
    "outdoor kitchen",
  ],
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Landscapes, Hardscapes & Pools`,
    description:
      "Twenty years of building outdoor space in Southern California. Design, hardscape and pool construction by a father-and-son team.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Landscapes, Hardscapes & Pools`,
    description: "Design and build for Southern California properties. Family owned since 2004.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1f1a",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: `+1-${site.contact.phone}`,
  email: site.contact.email,
  founder: { "@type": "Person", name: "Guerrero family" },
  employee: { "@type": "Person", name: site.contact.person },
  foundingDate: String(site.founded),
  description:
    "Design and build contractor for landscapes, hardscapes and swimming pools serving Orange County and Southern California.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Orange County, California" },
    { "@type": "AdministrativeArea", name: "Los Angeles County, California" },
    { "@type": "AdministrativeArea", name: "Riverside County, California" },
    { "@type": "AdministrativeArea", name: "San Diego County, California" },
  ],
  address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
  priceRange: "$$$",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape design and installation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardscape and masonry construction" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Swimming pool construction and renovation" } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>
        <a
          href="#inquiry"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-cypress focus:px-4 focus:py-2 focus:text-limestone"
        >
          Skip to the inquiry form
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
