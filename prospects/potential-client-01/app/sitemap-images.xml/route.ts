import { NextResponse } from "next/server"

import { BASE_URL } from "../_lib/seo"

// Image data structure: { url, loc (page URL), caption, title }
interface ImageSitemapEntry {
  loc: string
  images: Array<{
    loc: string
    caption?: string
    title?: string
  }>
}

const imageSitemapData: ImageSitemapEntry[] = [
  {
    loc: `${BASE_URL}`,
    images: [
      {
        loc: `${BASE_URL}/images/img/hero-backsplash.png`,
        caption: "Completed custom kitchen backsplash tile installation in Groveland FL by Aesthetic Tile",
        title: "Kitchen Backsplash Installation",
      },
      {
        loc: `${BASE_URL}/images/Tile-Collage.webp`,
        caption: "Tile installation collage showcasing various Aesthetic Tile projects",
        title: "Tile Installation Projects",
      },
      {
        loc: `${BASE_URL}/images/aesthetic-tile-logo.png`,
        title: "Aesthetic Tile Logo",
      },
    ],
  },
  {
    loc: `${BASE_URL}/about`,
    images: [
      {
        loc: `${BASE_URL}/images/AboutUs-NoText.png`,
        caption: "Aesthetic Tile team and tile installation work",
        title: "About Aesthetic Tile",
      },
      {
        loc: `${BASE_URL}/images/Brad.webp`,
        caption: "Brad from Aesthetic Tile installing tile",
        title: "Brad - Aesthetic Tile Owner",
      },
      {
        loc: `${BASE_URL}/images/tile-installer-2.webp`,
        caption: "Tile installer carefully working on a project",
        title: "Professional Tile Installation",
      },
    ],
  },
  {
    loc: `${BASE_URL}/services`,
    images: [
      {
        loc: `${BASE_URL}/images/img/hero-backsplash.png`,
        caption: "Professional tile installation services",
        title: "Tile Installation Services",
      },
      {
        loc: `${BASE_URL}/images/img/kitchen-backsplash.png`,
        caption: "Kitchen backsplash installation",
        title: "Kitchen Backsplash Service",
      },
      {
        loc: `${BASE_URL}/images/img/bathroom-shower.png`,
        caption: "Bathroom and shower tile installation",
        title: "Bathroom & Shower Service",
      },
      {
        loc: `${BASE_URL}/images/img/floor-tile.png`,
        caption: "Floor tile installation",
        title: "Floor Tile Service",
      },
      {
        loc: `${BASE_URL}/images/img/fireplace.png`,
        caption: "Fireplace tile installation",
        title: "Fireplace Service",
      },
      {
        loc: `${BASE_URL}/images/services/outside-projects.webp`,
        caption: "Outdoor tile projects",
        title: "Outside Projects Service",
      },
      {
        loc: `${BASE_URL}/images/img/special-projects.png`,
        caption: "Special tile projects",
        title: "Special Projects Service",
      },
    ],
  },
  {
    loc: `${BASE_URL}/kitchen-backsplashes`,
    images: [
      {
        loc: `${BASE_URL}/images/AboutUs-NoText.png`,
        caption: "White ceramic subway tile backsplash installation in Clermont, FL by Aesthetic Tile",
        title: "Kitchen Backsplash Installation",
      },
      {
        loc: `${BASE_URL}/images/gallery/kitchen-backsplash-stone-lock.webp`,
        caption: "Gray stone ledger kitchen backsplash installation in Winter Garden, FL by Aesthetic Tile",
        title: "Stone Ledger Backsplash",
      },
    ],
  },
  {
    loc: `${BASE_URL}/bathroom-shower`,
    images: [
      {
        loc: `${BASE_URL}/images/AboutUs-NoText.png`,
        caption: "Custom walk-in shower installation with built-in niche in Clermont, FL",
        title: "Bathroom & Shower Installation",
      },
      {
        loc: `${BASE_URL}/images/gallery/bathroom-remodel-tile.webp`,
        caption: "Waterproofing membrane system installed before tiling a shower in Groveland, FL",
        title: "Bathroom Tile Installation",
      },
    ],
  },
  {
    loc: `${BASE_URL}/floor-tile-installation`,
    images: [
      {
        loc: `${BASE_URL}/images/AboutUs-NoText.png`,
        caption: "Floor tile installation project for a Central Florida home renovation",
        title: "Floor Tile Installation",
      },
      {
        loc: `${BASE_URL}/images/gallery/bathroom-floor-tile-checkered.webp`,
        caption: "Black and white marble checkered bathroom floor tile installation in Groveland, FL",
        title: "Checkered Floor Tile",
      },
    ],
  },
  {
    loc: `${BASE_URL}/fireplaces`,
    images: [
      {
        loc: `${BASE_URL}/images/AboutUs-NoText.png`,
        caption: "Contemporary tile fireplace feature wall installation in Clermont, FL",
        title: "Fireplace Tile Installation",
      },
      {
        loc: `${BASE_URL}/images/gallery/fireplace-project-square-tile.webp`,
        caption: "Textured ceramic square tile fireplace surround installation in Groveland, FL",
        title: "Fireplace Tile Surround",
      },
    ],
  },
  {
    loc: `${BASE_URL}/outside-projects`,
    images: [
      {
        loc: `${BASE_URL}/images/services/outside-projects.webp`,
        caption: "Outdoor tiled patio with brick exterior in Central Florida",
        title: "Outdoor Tile Projects",
      },
    ],
  },
  {
    loc: `${BASE_URL}/special-projects`,
    images: [
      {
        loc: `${BASE_URL}/images/AboutUs-NoText.png`,
        caption: "Custom tile feature project in Groveland, Florida",
        title: "Special Tile Projects",
      },
      {
        loc: `${BASE_URL}/images/gallery/fireplace-tile-stone.webp`,
        caption: "Chevron marble tile fireplace feature installation in Minneola, FL",
        title: "Custom Tile Feature",
      },
    ],
  },
  {
    loc: `${BASE_URL}/gallery`,
    images: [
      {
        loc: `${BASE_URL}/images/AboutUs-NoText.png`,
        caption: "Aesthetic Tile project gallery",
        title: "Tile Installation Gallery",
      },
      {
        loc: `${BASE_URL}/images/gallery/bathroom-floor-tile-checkered.webp`,
        caption: "Black and white marble checkered bathroom floor tile installation in Groveland, FL",
        title: "Checkered Bathroom Floor",
      },
      {
        loc: `${BASE_URL}/images/gallery/bathroom-remodel-stone-tile.webp`,
        caption: "Gray porcelain large-format bathroom shower tile renovation in Clermont, FL",
        title: "Bathroom Shower Tile",
      },
      {
        loc: `${BASE_URL}/images/gallery/bathroom-remodel-tan-tile.webp`,
        caption: "Tan stone-look porcelain bathroom remodel installation in Winter Garden, FL",
        title: "Tan Bathroom Tile",
      },
      {
        loc: `${BASE_URL}/images/gallery/bathroom-remodel-tile.webp`,
        caption: "Polished marble shower wall tile renovation in Minneola, FL",
        title: "Marble Shower Tile",
      },
      {
        loc: `${BASE_URL}/images/gallery/bathroom-tile-floor-mosaic.webp`,
        caption: "Colorful mosaic ceramic bathroom floor tile installation in Orlando, FL",
        title: "Mosaic Bathroom Floor",
      },
      {
        loc: `${BASE_URL}/images/gallery/fireplace-project-square-tile.webp`,
        caption: "Textured ceramic square tile fireplace surround installation in Groveland, FL",
        title: "Square Tile Fireplace",
      },
      {
        loc: `${BASE_URL}/images/gallery/fireplace-project.webp`,
        caption: "Stacked stone veneer fireplace refacing installation in Clermont, FL",
        title: "Stone Fireplace",
      },
      {
        loc: `${BASE_URL}/images/gallery/fireplace-stone.webp`,
        caption: "Natural stone ledgestone fireplace surround installation in Winter Garden, FL",
        title: "Ledgestone Fireplace",
      },
      {
        loc: `${BASE_URL}/images/gallery/fireplace-tile-stone.webp`,
        caption: "Chevron marble tile fireplace feature installation in Minneola, FL",
        title: "Chevron Fireplace Tile",
      },
      {
        loc: `${BASE_URL}/images/gallery/kitchen-backsplash-black-tile.webp`,
        caption: "Matte black ceramic hexagon kitchen backsplash installation in Groveland, FL",
        title: "Black Hexagon Backsplash",
      },
      {
        loc: `${BASE_URL}/images/gallery/kitchen-backsplash-star-wars.webp`,
        caption: "Glossy glass mosaic kitchen backsplash installation in Clermont, FL",
        title: "Glass Mosaic Backsplash",
      },
      {
        loc: `${BASE_URL}/images/gallery/kitchen-backsplash-stone-lock.webp`,
        caption: "Gray stone ledger kitchen backsplash installation in Winter Garden, FL",
        title: "Stone Ledger Backsplash",
      },
      {
        loc: `${BASE_URL}/images/gallery/kitchen-backsplash-stone-wedge.webp`,
        caption: "Multitone stone wedge kitchen backsplash installation in Minneola, FL",
        title: "Stone Wedge Backsplash",
      },
      {
        loc: `${BASE_URL}/images/gallery/kitchen-backsplash-tile.webp`,
        caption: "Classic white ceramic square tile kitchen backsplash installation in Orlando, FL",
        title: "White Square Backsplash",
      },
      {
        loc: `${BASE_URL}/images/gallery/patio-tile-black.webp`,
        caption: "Charcoal porcelain outdoor patio tile installation in Groveland, FL",
        title: "Black Patio Tile",
      },
    ],
  },
  {
    loc: `${BASE_URL}/contact`,
    images: [
      {
        loc: `${BASE_URL}/images/contact-bg.webp`,
        caption: "Contact Aesthetic Tile for tile installation services",
        title: "Contact Aesthetic Tile",
      },
      {
        loc: `${BASE_URL}/images/admiring-backsplash.webp`,
        caption: "Admiring completed kitchen backsplash installation",
        title: "Completed Backsplash",
      },
    ],
  },
  {
    loc: `${BASE_URL}/blog`,
    images: [
      {
        loc: `${BASE_URL}/images/Tile-Shop-Feature.png`,
        caption: "Aesthetic Tile shop and tile selection",
        title: "Tile Shop",
      },
    ],
  },
  {
    loc: `${BASE_URL}/blog/groveland-location-announcement`,
    images: [
      {
        loc: `${BASE_URL}/images/Groveland.webp`,
        caption: "Aesthetic Tile Groveland location",
        title: "Groveland Location",
      },
    ],
  },
  {
    loc: `${BASE_URL}/blog/pre-mixed-grout`,
    images: [
      {
        loc: `${BASE_URL}/images/Premixed-grout.webp`,
        caption: "Pre-mixed grout products",
        title: "Pre-Mixed Grout",
      },
    ],
  },
  {
    loc: `${BASE_URL}/blog/marketing-success`,
    images: [
      {
        loc: `${BASE_URL}/images/Tile-Shop-Feature.png`,
        caption: "Aesthetic Tile shop feature",
        title: "Tile Shop Feature",
      },
    ],
  },
  {
    loc: `${BASE_URL}/blog/myth-breakers-episode-1`,
    images: [
      {
        loc: `${BASE_URL}/images/Tile-Shop-Photoshoot.webp`,
        caption: "Tile shop photoshoot",
        title: "Tile Shop Photoshoot",
      },
    ],
  },
]

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageSitemapData
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
${entry.images
  .map(
    (img) => `    <image:image>
      <image:loc>${img.loc}</image:loc>${img.caption ? `\n      <image:caption>${img.caption}</image:caption>` : ""}${img.title ? `\n      <image:title>${img.title}</image:title>` : ""}
    </image:image>`
  )
  .join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  })
}






