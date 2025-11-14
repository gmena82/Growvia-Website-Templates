import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "../_components/CheckIcon"
import { ContactForm } from "../_components/ContactForm"
import { absoluteUrl, buildMetadata, createFaqJsonLd } from "../_lib/seo"

export const metadata = buildMetadata({
  title: "Aesthetic Tile Blog | Tile Tips & Inspiration | Groveland, FL",
  description:
    "Explore the Aesthetic Tile blog for expert tile tips, design inspiration, and project highlights from Groveland, Clermont, and Central Florida.",
  path: "/blog",
  image: "/images/Tile-Shop-Feature.png",
})

const BLOG_POSTS = [
  {
    slug: "myth-breakers-episode-1",
    title: "Myth Breakers Ep. 1 — Are Tile Remodels Too Expensive?",
    excerpt:
      "Break down the real cost of tile remodels with Episode 1 of Myth Breakers—filmed at The Tile Shop in Orlando with budget plans, pricing, and a 15% savings offer.",
    date: "September 30, 2025",
    image: "/images/Tile-Shop-Photoshoot.webp",
    imageAlt: "Aesthetic Tile filming Myth Breakers inside The Tile Shop in Orlando",
    cta: "Watch Myth Breakers Episode 1",
  },
  {
    slug: "pre-mixed-grout",
    title: "Tile Tips Ep. 1 — Why Pre Mixed Grout Is a Smart Upgrade",
    excerpt:
      "Learn when pre mixed grout outperforms cement grout, where to be cautious, and how to get flawless results with pro-tested installation tips.",
    date: "September 20, 2025",
    image: "/images/Premixed-grout.webp",
    imageAlt: "Professional installer applying pre-mixed grout to a mosaic kitchen backsplash tile installation in Central Florida",
    cta: "Read Our Pre Mixed Grout Guide",
  },
  {
    slug: "marketing-success",
    title: "Investing in Our Future: A Marketing Success Story",
    excerpt:
      "We're thrilled to share how our investment in professional marketing and video content creation is transforming our business and attracting higher-quality projects.",
    date: "September 15, 2025",
    image: "/images/Tile-Shop-Feature.png",
    imageAlt: "Professional video production set inside the Aesthetic Tile showroom in Groveland, FL",
    cta: "Read Our Marketing Success Story",
  },
  {
    slug: "groveland-location-announcement",
    title: "We're Growing: Aesthetic Tile Is Coming to Groveland",
    excerpt:
      "We're opening our second location in Groveland, Florida, and inviting our newest neighbors to stop by, share their projects, and grow with us.",
    date: "August 15, 2025",
    image: "/images/Groveland.webp",
    imageAlt: "Aesthetic Tile team celebrating the new Groveland, FL location announcement",
    cta: "Read About Our Groveland Expansion",
  },
]

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"]

const BLOG_FAQS = [
  {
    question: "Do your tips apply to Clermont homes?",
    answer:
      "Yes—our advice accounts for Central Florida humidity, substrates, and local suppliers.",
  },
  {
    question: "How often do you post new articles?",
    answer:
      "Periodically—project highlights, maintenance guides, and material myth‑busting.",
  },
  {
    question: "Can I request a topic?",
    answer:
      "Absolutely—send questions and we'll consider them for a post.",
  },
  {
    question: "Where can I see projects mentioned in articles?",
    answer:
      "We link to our Gallery and include before/after photos when possible.",
  },
  {
    question: "Can I share your blog posts with my contractor or designer?",
    answer:
      "Yes! Feel free to share any content that helps with your project planning or decision-making.",
  },
  {
    question: "Do you offer video content in addition to blog posts?",
    answer:
      "Yes—check out our Myth Breakers and Tile Tips series for video guides on installation and design.",
  },
]

export default function BlogPage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <IntroSection />
      <BlogGridSection />
      <CallToActionSection />
      <FaqSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Tile-Shop-Feature.png"
          alt="Tile selection display inside the Aesthetic Tile showroom in Groveland, FL"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col items-center justify-center px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 text-lg leading-7 text-white/90">
          Insights, Tips, and Inspiration from Our Tile Experts.
        </p>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
        <h2 className="text-center text-3xl font-semibold text-slate-900">From Our Workshop to Your Home</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-slate-600">
          Welcome to the Aesthetic Tile blog! Here, we share our passion for craftsmanship, design inspiration for your
          next project, and practical advice on tile care and maintenance. Explore our articles to stay updated on the
          latest trends and see behind-the-scenes looks at our work.
        </p>
      </div>
    </section>
  )
}

function BlogGridSection() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-8 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-3">
              <p className="text-sm font-semibold text-purple-600">{post.date}</p>
              <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
              <p className="text-base text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-600"
              >
                {post.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Beautiful dark wood kitchen with porcelain tile backsplash installation in Central Florida home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Start Your Next Project?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing,
              and exceptional service guaranteed.
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

function FaqSection() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/blog"),
    name: "Aesthetic Tile Blog FAQs",
    faqs: BLOG_FAQS,
  })

  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_FAQS.map((faq) => (
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

