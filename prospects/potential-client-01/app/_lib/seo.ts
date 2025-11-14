import type { Metadata } from "next"

export const BASE_URL = "https://www.aesthetictile-florida.com"
export const SITE_NAME = "Aesthetic Tile"
const DEFAULT_OG_IMAGE = "/images/img/hero-backsplash.png"

export function absoluteUrl(path = "/") {
  return new URL(path, BASE_URL).toString()
}

interface BuildMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const resolvedImage = image.startsWith("http") ? image : absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  }
}

export interface FaqItem {
  question: string
  answer: string
}

interface FaqJsonLdOptions {
  url: string
  faqs: FaqItem[]
  name?: string
}

export function createFaqJsonLd({ url, faqs, name }: FaqJsonLdOptions) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name,
      url,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    null,
    2,
  )
}

interface ArticleJsonLdOptions {
  url: string
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName: string
}

export function createArticleJsonLd({
  url,
  headline,
  description,
  image = DEFAULT_OG_IMAGE,
  datePublished,
  dateModified,
  authorName,
}: ArticleJsonLdOptions) {
  const resolvedImage = image.startsWith("http") ? image : absoluteUrl(image)

  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: url,
      headline,
      description,
      image: resolvedImage,
      author: {
        "@type": "Person",
        name: authorName,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/aesthetic-tile-logo.png"),
        },
      },
      datePublished,
      dateModified: dateModified ?? datePublished,
    },
    null,
    2,
  )
}

interface LocalBusinessJsonLdOptions {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  logo?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  sameAs?: string[]
  serviceArea?: string[]
}

export function createLocalBusinessJsonLd({
  name,
  description,
  url,
  telephone,
  email,
  logo = "/images/aesthetic-tile-logo.png",
  address,
  sameAs = [],
  serviceArea = [],
}: LocalBusinessJsonLdOptions) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${url}#home-and-construction-business`,
    name,
    description,
    url,
    image: absoluteUrl(logo),
    logo: absoluteUrl(logo),
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
  }

  if (sameAs.length > 0) {
    base.sameAs = sameAs
  }

  if (serviceArea.length > 0) {
    base.areaServed = serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    }))
  }

  return JSON.stringify(base, null, 2)
}

interface WebsiteJsonLdOptions {
  url: string
  name: string
  searchActionUrl?: string
}

export function createWebsiteJsonLd({ url, name, searchActionUrl }: WebsiteJsonLdOptions) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
  }

  if (searchActionUrl) {
    data.potentialAction = {
      "@type": "SearchAction",
      target: `${searchActionUrl}{search_term}`,
      "query-input": "required name=search_term",
    }
  }

  return JSON.stringify(data, null, 2)
}

interface ServiceJsonLdOptions {
  url: string
  name: string
  description: string
  serviceType: string
  areaServed?: string[]
  providerName?: string
  providerUrl?: string
}

export function createServiceJsonLd({
  url,
  name,
  description,
  serviceType,
  areaServed = [],
  providerName = SITE_NAME,
  providerUrl = BASE_URL,
}: ServiceJsonLdOptions) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType,
      url,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: providerName,
        url: providerUrl,
      },
      areaServed: areaServed.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
    },
    null,
    2,
  )
}

