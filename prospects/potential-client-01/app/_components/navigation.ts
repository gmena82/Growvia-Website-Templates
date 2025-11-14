import type { Route } from "next"

export type NavItem = {
  label: string
  href: Route
}

export type ExternalLink = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "In Stock", href: "/gallery" },
  { label: "Repairs", href: "/services" },
  { label: "Financing", href: "/contact" },
]

export const serviceNav: NavItem[] = [
  { label: "Buy Devices", href: "/kitchen-backsplashes" },
  { label: "Repair Services", href: "/bathroom-shower" },
  { label: "Trade-Ins & Sell", href: "/floor-tile-installation" },
  { label: "Financing Options", href: "/fireplaces" },
  { label: "Accessories", href: "/outside-projects" },
  { label: "Business Solutions", href: "/special-projects" },
]

export const socialLinks: ExternalLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/ElectronicsHouseOrlando" },
  { label: "X", href: "https://x.com/ElectronicsHouse" },
  { label: "YouTube", href: "https://www.youtube.com/@ElectronicsHouse" },
  { label: "Instagram", href: "https://www.instagram.com/electronicshouseorlando/" },
]

