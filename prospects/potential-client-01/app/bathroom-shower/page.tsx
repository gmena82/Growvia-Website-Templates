import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"
import { absoluteUrl, buildMetadata, createFaqJsonLd, createServiceJsonLd } from "../_lib/seo"

export const metadata = buildMetadata({
  title: "Bathroom & Shower Tile Installation | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "Expert bathroom remodeling and shower tile installation in Groveland, Clermont, Minneola, and Orlando. Robust waterproofing, custom layouts, and owner-led craftsmanship.",
  path: "/bathroom-shower",
  image: "/images/img/bathroom-shower.png",
})

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const BATHROOM_FAQS = [
  {
    question: "Do you remodel bathrooms in Clermont, FL?",
    answer:
      "Yes—Clermont baths and showers are a big part of our weekly schedule.",
  },
  {
    question: "Is professional waterproofing really necessary?",
    answer:
      "Absolutely—proper membranes and flood‑testing prevent hidden leaks and mold.",
  },
  {
    question: "What's a typical shower timeline?",
    answer:
      "Demo to grout typically ranges a few days to a week+ depending on scope and cure times.",
  },
  {
    question: "Can you build curbless or \"wet‑room\" showers?",
    answer:
      "Yes—sloped pans, linear drains, and layout planning make curbless safe and beautiful.",
  },
  {
    question: "What dust‑control and surface‑protection steps do you use during bathroom demo (barriers, negative air, floor protection)?",
    answer:
      "We use plastic barriers to contain dust, protect floors and fixtures with drop cloths, and run HEPA vacuums or negative air machines when needed to keep your home clean during demolition.",
  },
  {
    question: "Can you plan niche/bench locations and lay out tile around valves and glass for a balanced look?",
    answer:
      "Yes—we template niche and bench placement, center tile on focal walls, and plan cuts around valves, drains, and glass enclosures so everything aligns and looks intentional.",
  },
]

export default function BathroomShowerPage() {
  const serviceJsonLd = createServiceJsonLd({
    url: absoluteUrl("/bathroom-shower"),
    name: "Bathroom & Shower Tile Installation",
    description:
      "Spa-level bathroom remodels and custom shower tile installations featuring waterproofing systems, niches, and owner-led craftsmanship.",
    serviceType: "Bathroom Remodeling and Shower Tile Installation",
    areaServed: ["Groveland, FL", "Clermont, FL", "Minneola, FL", "Winter Garden, FL", "Orlando, FL"],
  })

  return (
    <>
      <div className="space-y-16 pb-24">
        <HeroSection />
        <MainContentSection />
        <WaterproofingAndServicesSection />
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
          alt="Custom walk-in shower tile installation with built-in niche in Clermont, FL bathroom by Aesthetic Tile"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Bathroom & Shower Tile Installation in Clermont & Groveland, FL
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/90">
          Aesthetic Tile delivers expert bathroom and shower installations across Clermont, Groveland, and Lake County. Whether you're remodeling a master bath or building a new walk-in shower, we prioritize waterproofing, proper slope, and clean tile layouts that perform beautifully for decades. Our owner-led crew uses Schluter and Wedi systems to prevent leaks, coordinates niche placement and trim details, and installs tile with precision cuts around fixtures. Florida humidity demands robust prep—we deliver installations built to last in Central Florida's climate.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-600"
          >
            Schedule Your Bathroom Consultation
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
            src="/images/gallery/bathroom-remodel-tile.webp"
            alt="Waterproofing membrane system installed before bathroom shower tile installation in Groveland, FL home"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Transform Your Bathroom into a Sanctuary</h2>
          <p className="text-base leading-7 text-slate-600">
            Your bathroom should be a personal retreat, and the right tile is essential for creating that atmosphere.
            We specialize in transforming bathrooms with beautiful, durable tile work, from elegant floors and walls to
            stunning, fully-waterproofed walk-in showers.
          </p>
          <p className="text-base leading-7 text-slate-600">
            Our expert craftsmanship ensures every detail is perfect, especially the critical waterproofing needed for
            wet areas. We combine precision installation with high-quality materials to deliver a luxurious and
            long-lasting finish that adds significant value and comfort to your home.
          </p>
          <p className="text-base leading-7 text-slate-600">
            Owner-installed oversight means the same trusted professionals who estimate your project will handle the
            installation. Our team stays current with TCNA updates, continuing education, and manufacturer-led
            waterproofing workshops so we can recommend the best approach for your budget and lifestyle.
          </p>
        </div>
      </div>
    </section>
  )
}

function WaterproofingAndServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Bathroom & Shower Expertise</h2>
          <p className="mt-3 text-lg text-slate-600">Waterproofing, custom features, and flawless finishes</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Waterproofing & Foundation */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                Leak-Proof Foundation
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Professional Waterproofing</h3>
              
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Waterproofing is the most critical step. We follow TCNA guidelines and specify proven systems like Schluter® or Wedi® with careful detailing at corners and penetrations.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Proper Slope</h4>
                    <p className="mt-1 text-sm text-slate-600">Shower pans pitched correctly to drain, preventing standing water</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Flood Test</h4>
                    <p className="mt-1 text-sm text-slate-600">Timed flood test of pan before tile setting</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Membrane Detailing</h4>
                    <p className="mt-1 text-sm text-slate-600">Seams, niches, and benches waterproofed and reinforced</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Quality Materials</h4>
                    <p className="mt-1 text-sm text-slate-600">High-quality mortars, mold-resistant grouts, sealed stone</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 rounded-xl bg-gradient-to-r from-purple-50/50 to-transparent p-4">
                <h4 className="font-semibold text-slate-900">Waterproofing Systems We Use</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    Schluter®-KERDI systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    Wedi® building panels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    RedGard® liquid membranes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    Custom steam shower enclosures
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-slate-500/10 p-4">
                <p className="text-center text-sm font-medium text-slate-700">
                  💧 Florida humidity requires expert waterproofing—we've got it covered
                </p>
              </div>
            </div>
          </div>

          {/* Services & Features */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute left-0 top-0 h-32 w-32 -translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 blur-2xl transition-transform group-hover:scale-150" />
            
            <div className="relative">
              <div className="mb-6 flex justify-end">
                <div className="inline-flex items-center gap-3 rounded-full bg-slate-500/10 px-4 py-2 text-sm font-semibold text-slate-700">
                  <span>Full Service</span>
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                  </svg>
                </div>
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Complete Bathroom Solutions</h3>
              
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                From complete renovations to targeted upgrades—tub surrounds, shower stalls, bathroom flooring, wainscoting, and accent walls with large format tile or mosaics.
              </p>

              <div className="mb-6 space-y-3 rounded-xl bg-gradient-to-r from-purple-50/50 to-transparent p-4">
                <h4 className="font-semibold text-slate-900">Custom Shower Features</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    Built-in niches and shelving
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    Built-in benches and seats
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    Curbless (zero-entry) showers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    Linear drains and low-profile pans
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">1</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Tub-to-Shower Conversions</h5>
                    <p className="mt-1 text-xs text-slate-600">Perfect for rentals or aging-in-place</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-transparent p-3 transition-colors hover:from-purple-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">2</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Master Bath Remodels</h5>
                    <p className="mt-1 text-xs text-slate-600">Spa-quality showers and soaking tubs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">3</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Design Support & Trims</h5>
                    <p className="mt-1 text-xs text-slate-600">Schluter profiles, bullnose, large format handling</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-slate-500/10 p-4">
                <p className="text-center text-sm font-medium text-slate-700">
                  🏠 Tidy jobsite, minimal disruption, informed at every stage
                </p>
              </div>
            </div>
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
      description: "Scope, materials, and scheduling for your bathroom renovation or master bath remodel.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Preparation",
      description: "Surface evaluation, protection of adjacent finishes, and dust control.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Waterproofing",
      description: "Membrane application and inspections; documentation as requested.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Tile Setting",
      description: "Layout planning to avoid awkward cuts; precise cuts around valves and outlets.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      ),
    },
    {
      number: 5,
      title: "Grouting & Sealing",
      description: "Mold resistant grout and sealers where appropriate.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      number: 6,
      title: "Final Walkthrough",
      description: "Quality inspection, cleanup verification, and care instructions for your new bathroom.",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">Our Bathroom Installation Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            From consultation to final walkthrough, we deliver professional bathroom remodels with precision and care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
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
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40"
          >
            Request a Detailed Remodeling Estimate
            <svg className="ml-2 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
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
    url: absoluteUrl("/bathroom-shower"),
    name: "Aesthetic Tile Bathroom & Shower FAQs",
    faqs: BATHROOM_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {BATHROOM_FAQS.map((faq) => (
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
          alt="Bathroom and shower tile installation service consultation backdrop in Groveland, FL"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready for Your Dream Bathroom?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your bathroom or shower tile project. Professional craftsmanship, competitive
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

