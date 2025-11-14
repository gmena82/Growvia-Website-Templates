import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"
import { absoluteUrl, buildMetadata, createFaqJsonLd, createServiceJsonLd } from "../_lib/seo"

export const metadata = buildMetadata({
  title: "Custom & Special Tile Projects | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "From custom mosaics and medallions to patios, feature walls, and specialty tile work, Aesthetic Tile delivers standout projects across Groveland, Clermont, Winter Garden, and Orlando.",
  path: "/special-projects",
  image: "/images/img/special-projects.png",
})

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const SPECIAL_PROJECTS_FAQS = [
  {
    question: "Can you take on unique designs in Clermont (mosaics, medallions, patio inlays)?",
    answer:
      "Yes—Clermont specialty work is common; we template and dry‑fit complex layouts first.",
  },
  {
    question: "Can you install exterior tile in Florida?",
    answer:
      "With the right tile, mortar, and movement joints—yes; we account for sun and thermal swing.",
  },
  {
    question: "Can you integrate mixed materials (metal, wood, glass)?",
    answer:
      "We choose compatible adhesives/grouts and plan joints to manage movement.",
  },
  {
    question: "Will you sign off on slope/drainage for outdoor spaces?",
    answer:
      "We check slope and recommend drainage details to protect the assembly.",
  },
  {
    question: "How do you price custom or complex projects?",
    answer:
      "We assess scope, materials, and labor during the estimate. Custom work requires extra planning, and we provide transparent pricing upfront.",
  },
  {
    question: "Can you replicate a design I saw online or in a magazine?",
    answer:
      "Absolutely. Bring photos or links, and we'll help source materials and recreate the look with our craftsmanship.",
  },
]

export default function SpecialProjectsPage() {
  const serviceJsonLd = createServiceJsonLd({
    url: absoluteUrl("/special-projects"),
    name: "Custom & Specialty Tile Projects",
    description:
      "Custom tile projects including mosaics, feature walls, medallions, and outdoor installations crafted for Central Florida homes.",
    serviceType: "Custom Tile Installation",
    areaServed: ["Groveland, FL", "Clermont, FL", "Minneola, FL", "Winter Garden, FL", "Orlando, FL"],
  })

  return (
    <>
      <div className="space-y-24 pb-24">
        <HeroSection />
        <MainContentSection />
        <ProjectsAndMaterialsSection />
        <ProcessSection />
        <CallToActionSection />
        <FaqSection />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/AboutUs-NoText.png"
          alt="Custom tile feature project installation in Groveland, FL home by Aesthetic Tile"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom Tile Projects in Clermont & Groveland, FL
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/90">
          Aesthetic Tile brings unique tile visions to life across Clermont, Groveland, and Central Florida. From custom floor medallions and intricate mosaics to exterior accents and specialty feature walls, we handle complex layouts and mixed materials with precision. Our owner-led approach ensures creative designs are installed with the same technical rigor as standard projects—proper waterproofing, expansion joints, and substrate prep so your one-of-a-kind installation performs beautifully indoors or outdoors. If you have a tile idea that requires extra planning and craftsmanship, we're ready to collaborate.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-600"
          >
            Request a Custom Project Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}

function MainContentSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/gallery/fireplace-tile-stone.webp"
            alt="Custom chevron marble fireplace tile installation in Clermont, FL living room by Aesthetic Tile"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Your Vision, Our Craftsmanship</h2>
          <p className="text-base leading-7 text-slate-600">
            Have a unique idea that goes beyond a standard installation? At Aesthetic Tile, we thrive on creative
            challenges and special projects. From custom mosaic entryways and intricate floor medallions to outdoor
            patios and feature walls, our team has the skill and artistry to bring your most ambitious ideas to life.
          </p>
          <p className="text-base leading-7 text-slate-600">
            We combine generations of craftsmanship with modern techniques to tackle complex designs and unconventional
            applications. Our detailed planning accounts for framing, transitions, lighting impacts, and how the tile
            will perform in Florida's humid climate so the finished work looks seamless from every angle.
          </p>
          <p className="text-base leading-7 text-slate-600">
            We proudly serve homeowners throughout Central Florida, including Groveland, Clermont, Minneola, Winter
            Garden, and Orlando, bringing our family's tradition of excellence to every project.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectsAndMaterialsSection() {
  const projectShowcase = [
    {
      name: "Mosaic medallions",
      detail: "Hand-cut stone or glass mosaics framed with Schluter trims for grand foyers and wine rooms.",
    },
    {
      name: "Feature walls",
      detail: "Textured porcelain, Venetian plaster tile, or stone slabs with hidden lighting and niches.",
    },
    {
      name: "Outdoor living",
      detail: "Screened lanais, pool surrounds, and summer kitchens engineered for sun and storms.",
    },
    {
      name: "Specialty steps & risers",
      detail: "Inlaid patterns, contrasting nosings, and curved profiles that meet code and design goals.",
    },
  ]

  const collaborationSteps = [
    {
      label: "Design charrette",
      text: "We review inspiration, surface transitions, and how the space will be used day-to-day.",
    },
    {
      label: "Digital mockups",
      text: "You receive scaled elevations with grout, trim, lighting, and slope notes before we order tile.",
    },
    {
      label: "Crafted install",
      text: "Owner-led crews keep the jobsite immaculate and deliver museum-level detailing.",
    },
  ]

  const exteriorSystems = [
    "Drainage plane mapped before slab or deck installs",
    "Movement joints hidden within grout patterning",
    "Slip-resistant tile with UV-stable grout and sealers",
    "Heated floor or snow-melt prep for northern transplants",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900/5 via-purple-50/25 to-slate-100 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(15,23,42,0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Custom & Specialty Work</h2>
          <p className="mt-3 text-lg text-slate-600">Signature installations, collaboration rituals, and weather-ready systems</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-10 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="absolute -right-20 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-purple-400/30 to-purple-500/10 blur-3xl" aria-hidden />
            <div className="absolute -left-14 bottom-0 h-44 w-44 rounded-full bg-gradient-to-tr from-slate-400/25 to-transparent blur-3xl" aria-hidden />

            <div className="relative flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">
              <span className="rounded-full bg-purple-500/10 px-4 py-1 text-[0.7rem] text-purple-700">Signature Installations</span>
              <span className="rounded-full border border-purple-500/20 px-4 py-1 text-[0.7rem] text-slate-600">Designers welcome on-site</span>
            </div>

            <div className="relative mt-6 space-y-4">
              <h3 className="text-3xl font-semibold text-slate-900">Built like commissioned artwork</h3>
              <p className="text-sm leading-6 text-slate-600">
                Specialty tile moments start with intricate layout math, mockups you can touch, and field adjustments guided by natural light. We obsess over reveals, edge profiles, and how your project will patina over time.
              </p>
            </div>

            <div className="relative mt-8 grid gap-6 md:grid-cols-2">
              {projectShowcase.map((project) => (
                <div key={project.name} className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm shadow-slate-900/5">
                  <p className="text-sm font-semibold text-slate-900">{project.name}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{project.detail}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-10 space-y-6">
              {collaborationSteps.map((step, index) => (
                <div key={step.label} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/15 text-xs font-semibold text-purple-600">{index + 1}</span>
                    {index < collaborationSteps.length - 1 ? <span className="mt-1 h-full w-px bg-gradient-to-b from-purple-400/40 to-transparent" aria-hidden /> : null}
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4 shadow-inner shadow-slate-900/5">
                    <h4 className="text-sm font-semibold text-slate-900">{step.label}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="relative space-y-6">
            <div className="absolute -right-10 top-12 hidden h-28 w-28 rounded-full bg-gradient-to-br from-purple-300/25 to-transparent blur-2xl lg:block" aria-hidden />

            <article className="relative overflow-hidden rounded-[28px] border-2 border-purple-200/60 bg-gradient-to-br from-white via-white/80 to-purple-100/30 p-8 shadow-xl shadow-purple-500/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-700">
                Material Lab
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Palette explorations & tactile samples</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We stage sample boards that blend tile, grout, trim, lighting, and hardware finishes so you can approve every detail before fabrication.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 text-xs font-medium text-slate-600 shadow-sm shadow-purple-500/5">
                  <p className="text-sm font-semibold text-slate-900">Mockup lending</p>
                  <p className="mt-2">
                    Borrow panels for 48 hours to review against cabinetry, stone slabs, and natural light.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 text-xs font-medium text-slate-600 shadow-sm shadow-purple-500/5">
                  <p className="text-sm font-semibold text-slate-900">Trim decisions</p>
                  <p className="mt-2">
                    Compare mitered corners vs. Schluter\u00ae, radius profiles, or custom metalwork without guesswork.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {["#7c3aed", "#6d28d9", "#f59e0b", "#1e293b"].map((hex) => (
                  <div key={hex} className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                    <span className="inline-flex size-6 rounded-full border border-white/60 shadow" style={{ backgroundColor: hex }} aria-hidden />
                    {hex}
                  </div>
                ))}
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[28px] border-2 border-purple-300/40 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl shadow-purple-500/20">
              {/* Decorative elements */}
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/30 to-transparent blur-2xl" aria-hidden />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tl from-purple-400/20 to-transparent blur-2xl" aria-hidden />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300 backdrop-blur-sm">
                  Outdoor Systems
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">Engineered for Florida humidity & sun</h3>
                <ul className="mt-6 space-y-4">
                  {exteriorSystems.map((item, index) => (
                    <li key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-purple-400/30 hover:bg-white/10">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-purple-500/30">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-center">
                  <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
                    Groveland • Clermont • Orlando
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Consultation & Design Review",
      description: "We review inspiration, surface transitions, and how the space will be used day-to-day.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Material Guidance & Layout Planning",
      description: "Digital mockups with grout, trim, lighting, and slope notes before we order tile.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Surface Preparation & Installation",
      description: "Owner-led crews keep the jobsite immaculate and deliver museum-level detailing.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Grouting, Finishing & Care Guidance",
      description: "Professional finishing touches and detailed care instructions for lasting beauty.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(20,184,166,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,rgba(148,163,184,0.04),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 ring-1 ring-purple-500/20">
            Our Process
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">Our Special Project Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Each stage is managed by licensed installers who maintain a clean jobsite, provide proactive updates, and deliver the craftsmanship Groveland and Clermont homeowners expect from a family-owned company.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border-2 border-white bg-white p-6 shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Decorative gradient */}
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-purple-400/10 to-purple-600/10 blur-2xl transition-transform group-hover:scale-150" />
              
              <div className="relative">
                {/* Number badge */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-purple-500/30">
                    {step.number}
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2 text-purple-600 ring-1 ring-slate-200 transition-all group-hover:bg-purple-50 group-hover:ring-purple-200">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40"
          >
            Request a Custom Project Estimate
            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/special-projects"),
    name: "Aesthetic Tile Special Projects FAQs",
    faqs: SPECIAL_PROJECTS_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SPECIAL_PROJECTS_FAQS.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white bg-white p-6 shadow-md shadow-slate-900/5">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
    </>
  )
}

function CallToActionSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Luxury porcelain kitchen tile backsplash installation in Orlando, FL home by Aesthetic Tile"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Have a Unique Idea?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your special tile project. Professional craftsmanship, competitive pricing, and
              exceptional service guaranteed.
            </p>
            <div className="space-y-3">
              {CTA_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm font-semibold text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm subject="Aesthetic Tile — New CTA Form Submission" className="backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}

