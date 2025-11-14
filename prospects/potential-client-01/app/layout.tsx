import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

import { GlassHeader } from "./_components/GlassHeader"
import { SimpleFooter } from "./_components/SimpleFooter"
import { socialLinks } from "./_components/navigation"
import {
  BASE_URL,
  absoluteUrl,
  createLocalBusinessJsonLd,
  createWebsiteJsonLd,
} from "./_lib/seo"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Aesthetic Tile",
  description: "High-end tile & stone installations",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/img/favicon-180x180.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "vOLr6fqjEKzuwF9ohWxZlFV9UHPyAP5rTEi-a9Wq-fM",
  },
}

export const viewport: Viewport = {
  themeColor: "#7C3AED",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const sameAsLinks = socialLinks.map((link) => link.href)
  const localBusinessJsonLd = createLocalBusinessJsonLd({
    name: "Aesthetic Tile",
    description:
      "Aesthetic Tile is a third-generation, owner-led tile installation company serving Groveland, Clermont, Minneola, Winter Garden, Orlando, and Central Florida.",
    url: BASE_URL,
    telephone: "+1-502-650-7014",
    email: "office@aesthetictile.com",
    address: {
      streetAddress: "1195 Greenley Ave",
      addressLocality: "Groveland",
      addressRegion: "FL",
      postalCode: "34736",
      addressCountry: "US",
    },
    sameAs: sameAsLinks,
    serviceArea: ["Groveland, FL", "Clermont, FL", "Minneola, FL", "Winter Garden, FL", "Orlando, FL"],
  })

  const websiteJsonLd = createWebsiteJsonLd({
    url: BASE_URL,
    name: "Aesthetic Tile",
  })

  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white text-slate-800 antialiased`}>
        <Script id="trusted-types-policy" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined' && window.trustedTypes && !window.trustedTypes.defaultPolicy) {
              window.trustedTypes.createPolicy('default', {
                createHTML: (input) => input,
                createScript: (input) => input,
                createScriptURL: (input) => input,
              });
            }
          `}
        </Script>
        <GlassHeader />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteJsonLd }} />
        <main className="grow pt-24">{children}</main>
        <SimpleFooter />
      </body>
    </html>
  )
}
