import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "../_components/ContactForm"
import { absoluteUrl, buildMetadata, createFaqJsonLd } from "../_lib/seo"

const CONTACT_FAQS = [
  {
    question: "Do you offer free estimates in Clermont?",
    answer:
      "Yes—submit the form with photos; we'll confirm scope and schedule a site visit.",
  },
  {
    question: "What info should I include to get an accurate quote?",
    answer:
      "Room photos, rough dimensions, tile type/size, patterns, and special features.",
  },
  {
    question: "How far out are you booking?",
    answer:
      "It varies by scope and material lead times; we'll share the next available start date.",
  },
  {
    question: "Can you work with my designer or builder?",
    answer:
      "Yes—coordinating with your team early helps lock layouts and trims before ordering.",
  },
  {
    question: "What's the best way to reach you for urgent questions?",
    answer:
      "Call (502) 650-7014 during business hours (Monday–Friday, 9am–5pm) for the fastest response.",
  },
  {
    question: "Do you provide written estimates?",
    answer:
      "Yes—after the site visit, we provide a detailed written estimate with scope, materials, and timeline.",
  },
]

const CONTACT_POINTS = [
  {
    label: "(502) 650-7014",
    href: "tel:+15026507014",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
        />
      </svg>
    ),
  },
  {
    label: "office@aesthetictile.com",
    href: "mailto:office@aesthetictile.com",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 5.55a1 1 0 001.2 0L20 8.24V18H4z"
        />
      </svg>
    ),
  },
  {
    label: "1195 Greenley Ave, Groveland, FL 34736",
    href: "https://maps.app.goo.gl/tGSwsiVTzfVxk2jf8",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        />
      </svg>
    ),
  },
]

export const metadata = buildMetadata({
  title: "Contact Aesthetic Tile | Free Quote | Groveland, FL",
  description:
    "Reach out to Aesthetic Tile for Central Florida tile projects. Call, email, or submit our contact form for a free estimate on your next installation.",
  path: "/contact",
  image: "/images/contact-bg.webp",
})

export default function ContactPage() {
  return (
    <div className="space-y-24 pb-24">
      <ContactHero />
      <ContactSection />
      <QualitySection />
      <MapSection />
      <FaqSection />
    </div>
  )
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Contact Aesthetic Tile for a free tile installation quote in Clermont and Groveland, FL"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center gap-6 px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-semibold sm:text-5xl">Contact Us About Your Central Florida Project</h1>
        <p className="text-lg text-white/80">Ready to start your project? Let’s talk.</p>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/10 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Get in Touch</h2>
          <p className="text-base leading-7 text-slate-600">
            Have a question or need a quote? Fill out the form and we’ll get back to you shortly. You can also reach us directly by phone or email.
          </p>
          <div className="space-y-4 text-sm text-slate-600">
            {CONTACT_POINTS.map((point) => (
              <Link
                key={point.label}
                href={point.href}
                target={point.href.startsWith("http") ? "_blank" : undefined}
                rel={point.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition hover:border-purple-400 hover:text-purple-600"
              >
                {point.icon}
                <span>{point.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <ContactForm subject="Aesthetic Tile — New Contact Form Submission" className="shadow-md" />
      </div>
    </section>
  )
}

function QualitySection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/admiring-backsplash.webp"
            alt="Homeowner admiring a newly installed kitchen tile backsplash in Central Florida home"
            width={800}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Quality is Everything</h2>
          <p className="text-base leading-7 text-slate-600">
            When it comes to your home, quality is the one thing that truly matters. From meticulous surface preparation to the final grout line, our commitment to craftsmanship is unwavering. Your home is an investment, and we honor that with tile work that stands the test of time.
          </p>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Find Us in Groveland</h2>
        <p className="mt-2 text-base text-slate-600">
          Serving Groveland, Clermont, Minneola, Winter Garden, Orlando & nearby communities
        </p>
      </div>
      <div className="text-right text-sm">
        <Link
          href="https://share.google/BoKTlz7U9j7PFCO4s"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          Open our Google Business Profile
        </Link>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.323952458428!2d-81.8412!3d28.5683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e788c1b3ac3e5d%3A0x6e7b5e4f2a71343c!2s1195%20Greenley%20Ave%2C%20Groveland%2C%20FL%2034736%2C%20USA!5e0!3m2!1sen!2sus!4v1662586733364!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[450px] w-full"
        />
      </div>
    </section>
  )
}

function FaqSection() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/contact"),
    name: "Contact Aesthetic Tile FAQs",
    faqs: CONTACT_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CONTACT_FAQS.map((faq) => (
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

