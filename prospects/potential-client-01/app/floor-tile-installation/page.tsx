import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"
import { absoluteUrl, buildMetadata, createFaqJsonLd, createServiceJsonLd } from "../_lib/seo"

export const metadata = buildMetadata({
  title: "Floor Tile Installation Services | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "Transform your home with durable and beautiful floor tile installation by Aesthetic Tile. Serving Groveland, Clermont, and Orlando with large-format, wood-look, and custom tile floors.",
  path: "/floor-tile-installation",
  image: "/images/img/floor-tile.png",
})

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const FLOOR_FAQS = [
  {
    question: "Do you handle whole‑home flooring in Clermont?",
    answer:
      "Yes—Clermont homes get large‑format floors with attention to lippage control and clean transitions.",
  },
  {
    question: "How do you prep slabs or subfloors in Florida?",
    answer:
      "Moisture testing, leveling, crack isolation, and movement joints where needed.",
  },
  {
    question: "What's the best grout for high‑traffic areas?",
    answer:
      "We recommend premium grout with stain resistance for easier upkeep.",
  },
  {
    question: "Can you tie new tile into existing flooring?",
    answer:
      "Yes—we plan transitions so rooms flow and heights match at thresholds.",
  },
  {
    question: "How long does floor tile installation take?",
    answer:
      "It depends on square footage and complexity. A standard room might take 2-3 days, while whole-home installations can take a week or more.",
  },
  {
    question: "What types of floor tile do you recommend for Florida homes?",
    answer:
      "Porcelain and ceramic are popular for durability and moisture resistance. Large-format and wood-look planks are trending for modern aesthetics.",
  },
]

export default function FloorTileInstallationPage() {
  const serviceJsonLd = createServiceJsonLd({
    url: absoluteUrl("/floor-tile-installation"),
    name: "Floor Tile Installation Services",
    description:
      "Large-format, wood-look, and custom tile flooring installations with meticulous prep, leveling, and owner-led craftsmanship across Central Florida.",
    serviceType: "Floor Tile Installation",
    areaServed: ["Groveland, FL", "Clermont, FL", "Minneola, FL", "Winter Garden, FL", "Orlando, FL"],
  })

  return (
    <>
      <div className="space-y-24 pb-24">
        <HeroSection />
        <MainContentSection />
        <PrepAndBenefitsSection />
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
          alt="Porcelain floor tile installation project for a Central Florida home renovation in Clermont and Groveland, FL"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Floor Tile Installation in Clermont & Groveland, FL
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/90">
          Aesthetic Tile provides professional floor tile installation for homes in Clermont, Groveland, and Central Florida. We install porcelain, ceramic, and natural stone floors with meticulous attention to lippage control, level surfaces, and seamless transitions between rooms. From kitchens and entryways to whole-home flooring projects, our owner-led team ensures proper substrate preparation, movement joints where needed, and durable finishes that stand up to daily wear. Expect clean grout lines, precision cuts, and floors that enhance your home's value and comfort.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-600"
          >
            Schedule Your Flooring Consultation
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
            src="/images/gallery/bathroom-floor-tile-checkered.webp"
            alt="Black and white checkered porcelain floor tile installation in Clermont, FL bathroom by Aesthetic Tile"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Expert Flooring Installation for a Lasting Impression</h2>
          <p className="text-base leading-7 text-slate-600">
            Floor tile is a fantastic investment in your home, offering an unmatched combination of durability and
            elegance. Whether you prefer the timeless look of natural stone, the versatility of ceramic, or the
            strength of porcelain, the right tile floor can elevate any space from the kitchen to the entryway.
          </p>
          <p className="text-base leading-7 text-slate-600">
            Our installation process is built on a foundation of precision. We ensure a perfectly level subfloor,
            flawless grout lines, and a meticulous layout, guaranteeing a beautiful and durable surface that stands up
            to daily life for decades to come.
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

function PrepAndBenefitsSection() {
  const prepStats = [
    { label: "Lippage tolerance", value: "<= 1/32\"", helper: "Laser-leveled substrates" },
    { label: "Membrane coverage", value: "100%", helper: "Flood-tested when required" },
    { label: "Crew experience", value: "20+ yrs", helper: "Third-generation installers" },
    { label: "Lead time", value: "2-4 weeks", helper: "Groveland & Clermont projects" },
  ]

  const prepTimeline = [
    {
      title: "Surface obsession",
      description: "Moisture testing, grinding, and patching before the first layout line is snapped.",
    },
    {
      title: "Layout rehearsal",
      description: "Dry-fit focal areas, align transitions, and stage trims so day-one install feels choreographed.",
    },
    {
      title: "Florida-proof materials",
      description: "Premium mortars, Schluter\u00ae uncoupling, and movement joints built for humidity swings.",
    },
    {
      title: "Precision execution",
      description: "Lippage control systems and laser alignment ensure perfectly level surfaces across large open spaces.",
    },
  ]

  const materialPairings = [
    {
      name: "Wood-Look Plank",
      detail: "Warmth of hardwood with slip-resistant porcelain for great rooms and open concepts.",
    },
    {
      name: "Large Format Tile",
      detail: "48\u2033 panels with 1/16\u2033 grout lines for gallery-level living spaces.",
    },
    {
      name: "Porcelain & Ceramic",
      detail: "Budget-friendly combos for rentals, short-term stays, and busy family kitchens.",
    },
    {
      name: "Natural Stone",
      detail: "Travertine, marble, and ledger stone sealed for breezeways and sunrooms.",
    },
  ]

  const floridaChecklist = [
    "Drainage slope checked before patio or pool surround installs",
    "Expansion joints sized for Central Florida temperature swings",
    "Outdoor-rated mortars and grouts with UV-stable sealers",
    "Curb-less transitions planned for accessibility and cleaning",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900/5 via-purple-50/20 to-slate-100 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(20,184,166,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(15,23,42,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Floor Tile Excellence</h2>
          <p className="mt-3 text-lg text-slate-600">Prep technology, designer pairings, and Florida-tested assemblies</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="relative overflow-hidden rounded-[32px] bg-slate-900 p-10 text-slate-100 shadow-2xl shadow-purple-500/10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/40 to-purple-500/30 blur-2xl" aria-hidden />
            <div className="absolute -left-24 bottom-[-40px] h-48 w-48 rounded-full bg-gradient-to-br from-slate-700/40 to-slate-900/0 blur-3xl" aria-hidden />

            <div className="relative flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
              <span className="rounded-full bg-white/10 px-4 py-1 text-[0.7rem] text-purple-200">Installer Playbook</span>
              <span className="rounded-full border border-white/10 px-4 py-1 text-[0.7rem] text-slate-200">Clermont crews on site weekly</span>
            </div>

            <div className="relative mt-6 space-y-4">
              <h3 className="text-3xl font-semibold text-white">Subfloor prep is the foundation of every flawless floor</h3>
              <p className="text-sm leading-6 text-slate-200">
                We treat concrete and wood substrates like finish carpentry&mdash;laser-leveled, moisture tested, and protected with uncoupling membranes so your tile looks impeccable for decades.
              </p>
            </div>

            <dl className="relative mt-8 grid gap-6 sm:grid-cols-2">
              {prepStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
                  <p className="mt-1 text-xs text-slate-200/80">{stat.helper}</p>
                </div>
              ))}
            </dl>

            <div className="relative mt-10 space-y-6">
              {prepTimeline.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-400/20 text-xs font-semibold text-purple-200">{index + 1}</span>
                    {index < prepTimeline.length - 1 ? <span className="mt-1 h-full w-px bg-gradient-to-b from-purple-400/40 to-transparent" aria-hidden /> : null}
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 shadow-inner shadow-slate-900/20">
                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-slate-200/90">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-300/70 bg-white/10 px-6 py-3 text-sm font-semibold text-purple-100 backdrop-blur transition hover:border-purple-200 hover:text-white"
              >
                Request your flooring estimate
                <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 011.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative grid gap-6">
            <div className="absolute -right-8 -top-10 hidden h-24 w-24 rounded-full bg-gradient-to-br from-purple-300/30 to-transparent blur-2xl lg:block" aria-hidden />

            <article className="relative overflow-hidden rounded-[26px] border border-white/60 bg-white/80 p-8 shadow-xl shadow-slate-900/5 backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-700">
                Designer Pairings
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Material palettes we install every week</h3>
              <div className="mt-6 space-y-4">
                {materialPairings.map((option) => (
                  <div key={option.name} className="rounded-2xl border border-slate-100 bg-white/70 p-4 shadow-sm shadow-slate-900/5">
                    <p className="text-sm font-semibold text-slate-900">{option.name}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{option.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[26px] border border-purple-200/60 bg-gradient-to-br from-purple-500/15 via-white/70 to-purple-400/10 p-8 shadow-xl shadow-purple-500/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                Florida Checklist
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Outdoor-ready and lake-house approved</h3>
              <ul className="mt-6 space-y-4">
                {floridaChecklist.map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white/60 p-4 text-sm text-slate-700 shadow-sm">
                    <span className="mt-1 inline-flex size-2 rounded-full bg-purple-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-purple-600/90">
                  Serving Groveland • Clermont • Winter Garden
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
      title: "Consultation",
      description: "Site visit to measure, inspect existing conditions, and discuss design preferences and materials.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Substrate Preparation",
      description: "Surface corrections, moisture testing, grinding, and patching for a perfectly level foundation.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Membrane Installation",
      description: "Uncoupling membrane or crack isolation systems installed where required for long-term protection.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Layout Planning",
      description: "Dry-fit focal areas and plan cuts to minimize waste and ensure balanced, professional appearance.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      ),
    },
    {
      number: 5,
      title: "Tile Setting",
      description: "Precise installation with lippage control systems and alignment tools for flawless results.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        </svg>
      ),
    },
    {
      number: 6,
      title: "Grouting & Sealing",
      description: "Professional grouting, cleanup, and sealer application to protect your investment.",
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
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">Our Floor Installation Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Every flooring project begins with a site visit to measure, inspect existing conditions, and discuss design preferences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  )
}

function FaqSection() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/floor-tile-installation"),
    name: "Aesthetic Tile Floor Installation FAQs",
    faqs: FLOOR_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FLOOR_FAQS.map((faq) => (
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
          alt="Porcelain floor tile installation enhancing a dark wood kitchen in Orlando, FL home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Upgrade Your Floors?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your floor tile installation project. Professional craftsmanship, competitive
              pricing, and exceptional service guaranteed.
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

