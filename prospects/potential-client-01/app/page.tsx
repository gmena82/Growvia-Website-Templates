import Image from "next/image"

import { CheckIcon } from "./_components/CheckIcon"
import { ContactForm } from "./_components/ContactForm"
import { TestimonialsCarousel } from "./_components/TestimonialsCarousel"
import { absoluteUrl, buildMetadata, createFaqJsonLd, createServiceJsonLd } from "./_lib/seo"

const HERO_FEATURES = [
  "Buy | Sell | Repair Apple & Samsung",
  "Same-day diagnostics with certified techs",
  "Trade-ins, cash offers & payment plans",
]

const TESTIMONIALS = [
  {
    quote:
      "I brought in my MacBook for a screen repair, and the experience was great from start to finish. They gave me an estimate right away, which I appreciated. The only delay was in locating the right part, which depended on where it was shipping from — but they kept me informed the whole time. Once the part arrived, the repair was done the same day! The staff was friendly, helpful, and professional throughout the entire process. Highly recommend this shop for any electronic repairs.",
    author: "Bill Tabora",
  },
  {
    quote:
      "Recently did business with this gentlemen - was very helpful and honest. He even sent me videos of item working when my sister went to pick it up. Price was good and he was cordial when we texted. When my sister went to pick up he was also cordial with her. Item worked great and just as described. Saved him for future reference in case I'm looking for more electronics.",
    author: "Lazaro Hernandez",
  },
  {
    quote:
      "We bought 2 iPhone 12 max from them today & the experience was great! Quick easy service & they gave us a great price for phones, screen protectors & otterboxes. Definitely recommend them if you're shopping for new electronics!",
    author: "Ciara Sichler",
  },
]

export const SERVICE_CARDS = [
  {
    label: "Latest Apple & Samsung Drops",
    image: "/images/electronics-house-hero-alt.png",
    cta: "Browse featured inventory",
  },
  {
    label: "Certified Repairs & Diagnostics",
    image: "/images/electronics-house-hero.jpg",
    cta: "Same-day fixes + OEM parts",
  },
  {
    label: "Trade-Ins & Flexible Payments",
    image: "/images/electronics-house-showroom.png",
    cta: "Cash offers + financing options",
  },
]

export const CTA_FEATURES = [
  "Instant diagnostics & honest repair quotes",
  "Certified Apple & Samsung technicians",
  "Trade-ins, cash offers, and payment plans",
]

const HOME_FAQS = [
  {
    question: "What brands do you buy, sell, and repair?",
    answer:
      "We focus on Apple and Samsung devices including iPhone, Galaxy, iPad, Tab, Apple Watch, and Galaxy Watch models. Need something else? We can special-order Google Pixel, Microsoft Surface, and other premium devices on request.",
  },
  {
    question: "How fast can you fix my device?",
    answer:
      "Most screen swaps and battery replacements are turned around the same day thanks to in-stock parts and certified technicians. Board-level repairs or data recovery may require an overnight stay - we will confirm timelines during check-in.",
  },
  {
    question: "Do you offer trade-ins or cash for devices?",
    answer:
      "Yes. Bring in your Apple or Samsung device, we will test it on the spot, and you can choose instant cash or store credit toward an upgrade.",
  },
  {
    question: "Can I finance a purchase or large repair?",
    answer:
      "Yes. Electronics House offers in-store financing and split-pay options for both new devices and repairs, so you can leave with the gear you need today.",
  },
  {
    question: "Where is the showroom and what are the hours?",
    answer:
      "Visit us in Orlando off Colonial Drive near Downtown. We are open Monday through Saturday, 10am–7pm, with after-hours pickups available by appointment.",
  },
  {
    question: "Do repairs come with a warranty?",
    answer:
      "Every repair includes a 90-day workmanship guarantee covering both the labor and the high-quality parts we install.",
  },
]

export const metadata = buildMetadata({
  title: "Electronics House | Buy, Sell & Repair Apple + Samsung Devices in Orlando",
  description:
    "Electronics House is Orlando's one-stop shop for the newest Apple & Samsung gadgets, certified repairs, trade-ins, and easy payment options. Call (321) 352-1167.",
  path: "/",
  image: "/images/electronics-house-hero-alt.png",
})

export default function Home() {
  const serviceJsonLd = createServiceJsonLd({
    url: absoluteUrl("/"),
    name: "Electronics House",
    description:
      "Premier electronics store in Orlando, FL providing Apple & Samsung sales, certified repairs, trade-ins, and flexible payments.",
    serviceType: "Electronics retail and repair",
    areaServed: ["Orlando, FL", "Winter Park, FL", "Kissimmee, FL", "Altamonte Springs, FL"],
  })

  return (
    <>
      <div className="space-y-12 pb-6">
        <HeroSection />
        <VideoSection />
        <ExpertiseSection />
        <ServicesSection />
        <TestimonialsSection />
        <CallToActionSection />
        <FaqSection />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
    </>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/electronics-house-hero-alt.png"
          alt="Apple and Samsung devices displayed together inside Electronics House"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-8 px-6 py-20 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur shadow-lg shadow-purple-400/20">
          <span>Electronics House</span>
          <span className="text-white/60">&bull;</span>
          <span>Orlando, FL</span>
        </div>

        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Buy, Sell & Repair Apple + Samsung in Orlando
          </h1>
          <p className="text-lg leading-7 text-white/90">
            Electronics House is Orlando's premier destination for the latest Apple and Samsung gadgets, certified repairs, and top-dollar trade-ins. Whether you're upgrading your daily driver or repairing a lifeline device, our experts keep the process fast, transparent, and affordable.
          </p>
          <p className="text-lg leading-7 text-white/80">
            Shop the newest drops, score verified pre-owned devices, or let our technicians tackle cracked screens, dead batteries, logic board work, and more. Ask about in-store financing and split-pay options so you never have to pause your workflow.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex cursor-default items-center justify-center rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30">
              Call (321) 352-1167
            </div>
            <div className="inline-flex cursor-default items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white">
              Get a Repair Quote
            </div>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur shadow-lg shadow-purple-400/20">
              {HERO_FEATURES.map((feature, index) => (
                <span key={feature} className="flex items-center gap-2">
                  {feature}
                  {index < HERO_FEATURES.length - 1 && <span className="text-white/50">&bull;</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-8 py-3">
        <div className="mx-auto max-w-6xl px-6 text-center text-lg font-semibold text-white md:text-xl">
          Serving Orlando, Winter Park, Kissimmee, Altamonte Springs & nearby communities
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Visit Our Orlando Showroom</h2>
          <p className="mt-3 text-lg font-semibold text-slate-700">
            Experience our full range of Apple and Samsung devices, plus expert repair services in our modern Orlando location.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <div className="relative aspect-video">
            <Image
              src="/images/electronics-house-showroom.png"
              alt="Electronics House showroom display with highlighted YouTube demo devices"
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6">
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/electronics-house-workbench.png"
            alt="Electronics technician repairing a device at a workbench in Orlando"
            width={720}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-purple-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700">
            Orlando's device concierge
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">
            Buy, Sell, and Service Under One Roof
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Electronics House combines high-demand inventory with certified repair benches so Orlando customers can upgrade, trade in, and
            fix devices in a single visit. Every gadget is inspected, data-wiped, and packaged with the same care we give our repair workflow.
          </p>
          <p className="inline-flex items-center justify-center rounded-full border border-purple-500 px-5 py-2 text-sm font-semibold text-purple-600">
            Walk-ins welcome daily &mdash; demos updated weekly.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="size-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      label: "Latest Apple & Samsung Drops",
      description: "Browse featured inventory",
      details: "New releases, pre-owned gems & exclusive bundle deals",
    },
    {
      icon: (
        <svg className="size-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Certified Repairs & Diagnostics",
      description: "Same-day fixes + OEM parts",
      details: "Screen replacements, battery swaps & logic board repairs",
    },
    {
      icon: (
        <svg className="size-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Trade-Ins & Flexible Payments",
      description: "Cash offers + financing options",
      details: "Instant quotes, split-pay plans & buy-back guarantees",
    },
  ]

  return (
    <section id="services" className="bg-gradient-to-b from-white via-purple-50/30 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">What We Help You Do</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            From sourcing the latest Apple & Samsung releases to pro repairs and financing, consider this your Orlando tech concierge.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="group relative"
            >
              <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-purple-200">
                {/* Icon with gradient background */}
                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-4 text-white shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.label}
                </h3>
                <p className="text-sm font-semibold text-purple-600 mb-3">
                  {service.description}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.details}
                </p>

                {/* Decorative element */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="animate-quote-pulse relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-purple-400/70 bg-gradient-to-b from-white/95 via-white/85 to-white/65 px-10 py-4 text-lg font-semibold text-purple-600 shadow-xl shadow-purple-400/30 backdrop-blur-sm before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-60 transition-transform hover:scale-105"
          >
            <span className="relative z-10">Chat with a Specialist</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-slate-900">What Orlando Customers Are Saying</h2>
        <div className="mt-10">
          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-base font-semibold text-purple-600">
            Reviews verified in-store via our Google kiosk.
            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/electronics-house-hero-alt.png"
          alt="Electronics House showroom with Apple and Samsung devices in Orlando, FL"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Need a Device or Repair Fast?</h2>
            <p className="text-base leading-7 text-white/80">
              Tell us what you’re shopping for or describe the repair you need. We’ll confirm availability, turnaround time, and payment
              options so you can get back online without the guesswork.
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

          <ContactForm subject="Electronics House - Prospect Form Submission" className="backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/"),
    name: "Electronics House Home Page FAQs",
    faqs: HOME_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {HOME_FAQS.map((faq) => (
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
