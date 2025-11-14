'use client'

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

type TabId = "materials" | "styles" | "layouts"

type TabCard = {
  id: string
  title: string
  description: string
  icon: keyof typeof ICONS
  accent?: string
}

type TabDefinition = {
  id: TabId
  label: string
  eyebrow: string
  headline: string
  description: string
  highlight: {
    title: string
    blurb: string
    bullets: { label: string; detail: string }[]
    ctaLabel: string
  }
  cards: TabCard[]
  palette: string[]
}

const ICONS = {
  tile: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <rect x={3} y={3} width={8} height={8} rx={1.5} />
      <rect x={13} y={3} width={8} height={8} rx={1.5} />
      <rect x={3} y={13} width={8} height={8} rx={1.5} />
      <rect x={13} y={13} width={8} height={8} rx={1.5} />
    </svg>
  ),
  sparkle: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 16l.75 2.25L8 19l-2.25.75L5 22l-.75-2.25L2 19l2.25-.75L5 16z" />
      <path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z" />
    </svg>
  ),
  ruler: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M21 7l-4-4-14 14 4 4 14-14z" />
      <path d="M16.5 5.5l2 2" />
      <path d="M13.5 8.5l2 2" />
      <path d="M10.5 11.5l2 2" />
      <path d="M7.5 14.5l2 2" />
    </svg>
  ),
  drop: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M12 2.5S6 9.09 6 13a6 6 0 0012 0c0-3.91-6-10.5-6-10.5z" />
    </svg>
  ),
  plug: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M6 3v5" />
      <path d="M18 3v5" />
      <path d="M6 8h12" />
      <path d="M8 12h8" />
      <path d="M10 12v8" />
      <path d="M14 12v8" />
    </svg>
  ),
  spark: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M12 2l1.9 6.1L20 10l-5.1 1.9L12 18l-2.9-6.1L4 10l6.1-1.9L12 2z" />
    </svg>
  ),
  wave: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M3 7c.75-1 1.75-2 3.5-2s2.75 1 4.5 1 2.75-1 4.5-1S18.75 6 19.5 7" />
      <path d="M3 12c.75-1 1.75-2 3.5-2s2.75 1 4.5 1 2.75-1 4.5-1S18.75 11 19.5 12" />
      <path d="M3 17c.75-1 1.75-2 3.5-2s2.75 1 4.5 1 2.75-1 4.5-1S18.75 16 19.5 17" />
    </svg>
  ),
  layout: (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <rect x={3} y={3} width={7} height={7} rx={1.5} />
      <rect x={14} y={3} width={7} height={7} rx={1.5} />
      <rect x={3} y={14} width={18} height={7} rx={1.5} />
    </svg>
  ),
} as const

const TABS: TabDefinition[] = [
  {
    id: "materials",
    label: "Materials",
    eyebrow: "Hands-on swatches",
    headline: "Popular Backsplash Materials",
    description:
      "Pick a surface that fits your cooking style and cleanup routine—the right tile makes every day prep feel effortless.",
    highlight: {
      title: "Material Match Session",
      blurb:
        "Bring countertop or cabinet samples and we will build a mini mood board on-site in Clermont, Groveland, or Winter Garden.",
      bullets: [
        {
          label: "Sample Lending",
          detail: "Borrow swatches for 48 hours to view in your lighting before you commit.",
        },
        {
          label: "Sealing Guidance",
          detail: "Learn which stone or grout sealers hold up best to citrus, wine, and everyday cooking.",
        },
      ],
      ctaLabel: "Schedule a swatch meet-up",
    },
    cards: [
      {
        id: "ceramic-porcelain",
        title: "Ceramic & Porcelain",
        description:
          "Durable and budget-conscious, available in matte, satin, or high-gloss finishes that wipe clean fast.",
        icon: "tile",
      },
      {
        id: "natural-stone",
        title: "Natural Stone",
        description:
          "Marble, travertine, and quartzite with unique movement—sealed to resist wine splashes and espresso drips.",
        icon: "sparkle",
      },
      {
        id: "glass-mosaic",
        title: "Glass & Mosaics",
        description:
          "Reflective surfaces that brighten the cook line with artisan color blends and metallic accents.",
        icon: "spark",
      },
      {
        id: "xl-format",
        title: "Large Format Slabs",
        description:
          "Minimal grout lines for a modern, uninterrupted backsplash—perfect for statement veining.",
        icon: "layout",
      },
    ],
    palette: ["#a855f7", "#0f172a", "#e2e8f0", "#facc15"],
  },
  {
    id: "styles",
    label: "Styles",
    eyebrow: "Design-forward looks",
    headline: "Trending Backsplash Styles",
    description:
      "Whether you love timeless subway or crave sculptural relief tile, we dial in grout color, trim, and layout for a made-to-measure look.",
    highlight: {
      title: "Layout Mockups",
      blurb:
        "See three digital layout options with grout color overlays before we cut a single tile—ideal for home chefs who obsess over symmetry.",
      bullets: [
        {
          label: "Outlet Alignment",
          detail: "We center outlets, windows, and range hoods so the tile rhythm never feels off.",
        },
        {
          label: "Edge Profiles",
          detail: "Preview Schluter® trims or mitered returns for shelves, niches, and open concept shelves.",
        },
      ],
      ctaLabel: "Preview layout options",
    },
    cards: [
      {
        id: "elongated-subway",
        title: "Elongated Subway",
        description: "A refined 2x8 or 3x12 format with razor-thin grout for modern cottages and lake homes.",
        icon: "wave",
      },
      {
        id: "herringbone",
        title: "Herringbone & Chevron",
        description: "Diagonal drama that draws the eye up and frames decorative range hoods beautifully.",
        icon: "spark",
      },
      {
        id: "dimensional",
        title: "Dimensional Relief Tile",
        description: "Hand-pressed ceramics with sculpted faces for artisanal depth and soft shadow play.",
        icon: "sparkle",
      },
      {
        id: "mixed-metal",
        title: "Mixed-Material Insets",
        description: "Metallic liners, stone inserts, and wood shelves keep the kitchen curated without clutter.",
        icon: "tile",
      },
    ],
    palette: ["#f472b6", "#1e293b", "#f1f5f9", "#64748b"],
  },
  {
    id: "layouts",
    label: "Layouts",
    eyebrow: "Installer insights",
    headline: "Precision Layout Techniques",
    description:
      "Installation finesse keeps grout lines crisp and edges polished—our team plans every cut before the first tile is set.",
    highlight: {
      title: "Installer Playbook",
      blurb:
        "You’ll receive a short video recap from the jobsite walking through waterproofing, leveling systems, and final punch list.",
      bullets: [
        {
          label: "Surface Prep",
          detail: "Flattened substrates and waterproofing rated for Central Florida humidity.",
        },
        {
          label: "Expansion Joint Strategy",
          detail: "Discreet movement joints near windows and long counter runs prevent cracking.",
        },
      ],
      ctaLabel: "See our install checklist",
    },
    cards: [
      {
        id: "laser-layout",
        title: "Laser Layout",
        description: "We snap laser reference lines and dry-fit tricky transitions before mixing thinset.",
        icon: "ruler",
      },
      {
        id: "outlet-plan",
        title: "Outlet & Fixture Planning",
        description: "Custom trim plates, box extensions, and pre-cut tiles keep switches perfectly flush.",
        icon: "plug",
      },
      {
        id: "grout-science",
        title: "Grout Science",
        description: "Color-matched, stain-resistant grout paired with silicone in movement areas for longevity.",
        icon: "drop",
      },
      {
        id: "finish-detail",
        title: "Finish Detailing",
        description: "Polished edges, sealed trims, and post-install cleaning for camera-ready reveal day.",
        icon: "sparkle",
      },
    ],
    palette: ["#a855f7", "#0f172a", "#94a3b8", "#f97316"],
  },
]

export function PopularAndTrendingSection() {
  const [activeTab, setActiveTab] = useState<TabId>(TABS[0]!.id)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = TABS.findIndex((tab) => tab.id === prev)
        const nextIndex = (currentIndex + 1) % TABS.length
        return TABS[nextIndex]!.id
      })
    }, 6000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  const tab = useMemo(() => TABS.find((entry) => entry.id === activeTab) ?? TABS[0]!, [activeTab])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(20,184,166,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,rgba(15,23,42,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Explore Backsplash Options</h2>
          <p className="mt-3 text-lg text-slate-600">Swipe through materials, trending looks, and installer techniques</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {TABS.map((entry) => {
            const isActive = entry.id === activeTab
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActiveTab(entry.id)}
                className={`group relative overflow-hidden rounded-full border px-5 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${isActive ? "border-purple-500 bg-white text-purple-600 shadow-[0_0_18px_rgba(20,184,166,0.2)]" : "border-white/30 bg-white/40 text-slate-600 hover:border-purple-400 hover:text-purple-600"}`}
                aria-pressed={isActive}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {entry.label}
                  {isActive ? (
                    <span className="inline-flex size-1.5 rounded-full bg-purple-500" aria-hidden />
                  ) : null}
                </span>
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </button>
            )
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="h-full rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
              {tab.eyebrow}
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">{tab.headline}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{tab.description}</p>

            <div className="mt-6 space-y-4 rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-white to-slate-50/60 p-5 shadow-inner">
              <h4 className="text-lg font-semibold text-slate-900">{tab.highlight.title}</h4>
              <p className="text-sm text-slate-600">{tab.highlight.blurb}</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {tab.highlight.bullets.map((bullet) => (
                  <li key={bullet.label} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-2 rounded-full bg-purple-500" aria-hidden />
                    <span>
                      <span className="font-semibold text-slate-900">{bullet.label}.</span> {bullet.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-2 rounded-full border border-purple-500/70 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 transition hover:border-purple-500 hover:text-purple-700"
                >
                  {tab.highlight.ctaLabel}
                  <svg className="size-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Palette pairing ideas</p>
              <div className="flex flex-wrap gap-3">
                {tab.palette.map((hex) => (
                  <div key={hex} className="flex items-center gap-2">
                    <span className="inline-flex size-6 rounded-full border border-white/70 shadow-sm" style={{ backgroundColor: hex }} aria-hidden />
                    <span className="text-xs font-medium text-slate-500">{hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tab.cards.map((card) => (
              <article
                key={card.id}
                className="group relative overflow-hidden rounded-3xl border border-white bg-white/80 p-6 shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/15"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/15 to-cyan-400/20 blur-2xl transition-transform duration-500 group-hover:scale-125"
                />

                <div className="relative flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    {ICONS[card.icon]}
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900">{card.title}</h4>
                </div>

                <p className="relative mt-4 text-sm leading-6 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

