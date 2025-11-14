import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"
import { absoluteUrl, buildMetadata, createFaqJsonLd, createServiceJsonLd } from "../_lib/seo"

export const metadata = buildMetadata({
  title: "Fireplace Tile Installation & Surrounds | Groveland & Clermont, FL | Aesthetic Tile",
  description:
    "Transform your living space with custom fireplace tile installation by Aesthetic Tile. Serving Groveland, Clermont, and Orlando with statement surrounds, hearths, and feature walls.",
  path: "/fireplaces",
  image: "/images/img/fireplace.png",
})

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const FIREPLACE_FAQS = [
  {
    question: "Do you tile fireplaces in Clermont homes?",
    answer:
      "Yes—surrounds, hearths, and feature walls for gas/electric units or decorative installs.",
  },
  {
    question: "Are there heat or code considerations?",
    answer:
      "We follow manufacturer clearances and use heat‑appropriate setting materials.",
  },
  {
    question: "Can you match my home's style (modern, rustic, Spanish)?",
    answer:
      "We propose patterns and trims that complement architecture and furnishings.",
  },
  {
    question: "Do you work with stone slabs or large‑format panels?",
    answer:
      "Yes—layout planning and specialized handling ensure crisp seams and alignment.",
  },
  {
    question: "Can you install tile around an existing fireplace insert?",
    answer:
      "Absolutely. We measure precisely and work around gas or electric inserts, ensuring proper clearances and a seamless finish.",
  },
  {
    question: "What materials work best for fireplace surrounds?",
    answer:
      "Natural stone, porcelain, and ceramic are popular. For heat-exposed areas, we use materials rated for high temperatures.",
  },
]

export default function FireplacesPage() {
  const serviceJsonLd = createServiceJsonLd({
    url: absoluteUrl("/fireplaces"),
    name: "Fireplace Tile Installation & Surrounds",
    description:
      "Custom fireplace surrounds, hearths, and feature walls featuring tile, stone, and large-format panels installed across Central Florida.",
    serviceType: "Fireplace Tile Installation",
    areaServed: ["Groveland, FL", "Clermont, FL", "Minneola, FL", "Winter Garden, FL", "Orlando, FL"],
  })

  return (
    <>
      <div className="space-y-24 pb-24">
        <HeroSection />
        <MainContentSection />
        <SafetyAndMaterialsSection />
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
          alt="Contemporary tile fireplace feature wall installation in Clermont, FL living room by Aesthetic Tile"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col justify-center px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Fireplace Tile Installation in Clermont & Groveland, FL
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-white/90">
          Aesthetic Tile designs and installs custom fireplace surrounds for homeowners in Clermont, Groveland, and Lake County. Whether you envision a modern porcelain feature wall, a classic stone hearth, or a statement mosaic focal point, our owner-led team transforms your fireplace into a centerpiece that complements your home's style. We handle heat-rated materials, precise layout planning around gas or electric inserts, and seamless integration with mantels and trim. Even in mild Florida winters, a beautifully tiled fireplace adds year-round ambiance and lasting elegance to your living space.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-600"
          >
            Design Your Dream Fireplace
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
            src="/images/gallery/fireplace-project-square-tile.webp"
            alt="Custom porcelain fireplace surround tile installation in Groveland, FL living room by Aesthetic Tile"
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Create a Breathtaking Focal Point</h2>
          <p className="text-base leading-7 text-slate-600">
            A fireplace is the natural heart of a living room, and a custom tile surround can transform it from a
            simple feature into a work of art. We specialize in designing and installing beautiful, heat-resistant tile
            for fireplace surrounds, hearth installation, and feature wall upgrades that enhance your home's style and
            warmth.
          </p>
          <p className="text-base leading-7 text-slate-600">
            From rustic stacked stone to sleek, modern fireplace design elements or intricate mosaics, we work with you
            to select the perfect materials. Our expert installation ensures every tile is perfectly placed for a safe,
            stunning, and durable finish that you'll gather around for years to come.
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

function SafetyAndMaterialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-slate-900">Fireplace Tile Expertise</h2>
          <p className="mt-3 text-lg text-slate-600">Safety-first installation paired with curated materials</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 blur-2xl transition-transform group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-700">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2l6 6-6 6-6-6 6-6z" />
                </svg>
                Safety & Precision
              </div>

              <h3 className="mb-6 text-2xl font-bold text-slate-900">Heat-rated builds with code compliance</h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Every surround is engineered for the firebox it frames. We evaluate framing, substrates, and clearances before tile is set to guarantee longevity in high-heat zones.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M6 3h12v2H6V3zm0 4h12v2H6V7zm0 4h12v2H6v-2zm0 4h12v2H6v-2zm0 4h12v2H6v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Heat-appropriate mortars</h4>
                    <p className="mt-1 text-sm text-slate-600">Rated thinsets, mortars, and grout systems built for radiant output.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Clearance planning</h4>
                    <p className="mt-1 text-sm text-slate-600">Mantel, hearth, and combustible spacing mapped to manufacturer specs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Structural prep</h4>
                    <p className="mt-1 text-sm text-slate-600">Backer board, waterproofing, and deflection control before tile layout.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l1.9 6.1L20 10l-5.1 1.9L12 18l-2.9-6.1L4 10l6.1-1.9L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Trade coordination</h4>
                    <p className="mt-1 text-sm text-slate-600">Electricians, carpenters, and AV pros looped in for seamless sequencing.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-purple-50/50 to-transparent p-4">
                <h4 className="font-semibold text-slate-900">Customization menu</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Hearths (flush, raised, or cantilevered)</li>
                  <li>• Floor-to-ceiling feature walls</li>
                  <li>• Wrapped corners with mitered edges</li>
                  <li>• Mantel integration and lighting niches</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl shadow-slate-900/5 transition-all hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute left-0 top-0 h-32 w-32 -translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 blur-2xl transition-transform group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-500/10 px-4 py-2 text-sm font-semibold text-slate-700">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 2L2 12l10 10 10-10L12 2z" />
                  </svg>
                  Design & Materials
                </div>
              </div>

              <h3 className="mb-6 text-2xl font-bold text-slate-900">Focal points tailored to your room</h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                From modern linear fireplaces to rustic hearth rebuilds, we pair tile, stone, and metal profiles that echo your cabinetry, floors, and furnishings.
              </p>

              <div className="mb-6 space-y-3 rounded-xl bg-gradient-to-r from-purple-50/50 to-transparent p-4">
                <h4 className="font-semibold text-slate-900">Material pairings</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Large-format porcelain with shadowline trim</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Natural stone with waterfall hearth benches</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Ledgestone accents paired with custom mantels</li>
                  <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Hand-glazed ceramics for statement niches</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">1</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Laser-aligned layouts</h5>
                    <p className="mt-1 text-xs text-slate-600">We snap reference lines to center tile on mantels, niches, and AV components.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-transparent p-3 transition-colors hover:from-purple-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white text-sm font-bold">2</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Lighting integration</h5>
                    <p className="mt-1 text-xs text-slate-600">Recessed accent lighting and cable routing planned before tile setting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent p-3 transition-colors hover:from-slate-50">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">3</div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">Finish detailing</h5>
                    <p className="mt-1 text-xs text-slate-600">Mitered edges, sealed grout, and a camera-ready clean down at handoff.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-slate-500/10 p-4">
                <p className="text-center text-sm font-medium text-slate-700">
                  🔥 Book a materials tour - we can meet at your Groveland shop or preferred showroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/fireplaces"),
    name: "Aesthetic Tile Fireplace FAQs",
    faqs: FIREPLACE_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FIREPLACE_FAQS.map((faq) => (
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
          alt="Beautiful dark wood kitchen with porcelain tile backsplash in Central Florida home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready for a Stunning Fireplace?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your fireplace tile project. Professional craftsmanship, competitive pricing, and
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

