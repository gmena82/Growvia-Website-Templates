import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "../../_components/ContactForm"
import { absoluteUrl, buildMetadata, createArticleJsonLd } from "../../_lib/seo"

const ARTICLE_PUBLISHED_DATE = "2025-09-20"

export const metadata = buildMetadata({
  title: "Tile Tips Ep. 1 — Why Pre Mixed Grout Is a Smart Upgrade | Aesthetic Tile Blog",
  description:
    "Learn when pre mixed grout outperforms cement grout, where to be cautious, and how to get flawless results with pro-tested installation tips.",
  path: "/blog/pre-mixed-grout",
  image: "/images/Premixed-grout.webp",
  type: "article",
})

export default function PreMixedGroutPage() {
  const articleJsonLd = createArticleJsonLd({
    url: absoluteUrl("/blog/pre-mixed-grout"),
    headline: "Tile Tips Ep. 1 — Why Pre Mixed Grout Is a Smart Upgrade",
    description:
      "Understand the pros, cons, and best practices for pre mixed grout, including where it outperforms traditional cement grouts.",
    image: "/images/Premixed-grout.webp",
    datePublished: ARTICLE_PUBLISHED_DATE,
    authorName: "Aesthetic Tile Team",
  })

  return (
    <>
      <div className="pb-24">
      <article className="mx-auto max-w-4xl px-6 pt-24">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Tile Tips Ep. 1 — Why Pre Mixed Grout Is a Smart Upgrade
          </h1>
          <div className="text-sm text-slate-600">Published on September 20, 2025 | By the Aesthetic Tile Team</div>
        </header>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-purple-600 hover:prose-a:text-purple-700">
          <p>
            Pre-mixed grout has become one of our go-to solutions for certain installations, and for good reason. While
            traditional cement-based grout has been the industry standard for decades, pre-mixed alternatives offer
            several advantages that can make your tile project easier and more durable.
          </p>

          <div className="my-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/Premixed-grout.webp"
              alt="Professional installer applying pre-mixed grout to a mosaic kitchen backsplash tile installation in Central Florida"
              width={800}
              height={533}
              className="w-full"
            />
            <p className="mt-2 text-center text-sm text-slate-500">
              Pre-mixed grout being applied to a custom mosaic installation.
            </p>
          </div>

          <h2>When Pre-Mixed Grout Shines</h2>
          <ul>
            <li>
              <strong>Small projects:</strong> For backsplashes and accent walls, pre-mixed grout eliminates mixing
              errors and waste.
            </li>
            <li>
              <strong>Consistent color:</strong> Factory mixing ensures uniform color across your entire project.
            </li>
            <li>
              <strong>Stain resistance:</strong> Most pre-mixed grouts contain built-in sealers and additives that
              resist staining better than standard cement grout.
            </li>
            <li>
              <strong>Flexibility:</strong> The polymer content makes pre-mixed grout more flexible, reducing cracking
              in areas with slight movement.
            </li>
          </ul>

          <h2>When to Stick with Traditional Grout</h2>
          <p>
            While pre-mixed grout is excellent for many applications, there are situations where traditional cement
            grout is still the better choice:
          </p>
          <ul>
            <li>Large floor installations where you need to work quickly</li>
            <li>Areas with heavy foot traffic that require extra-durable grout</li>
            <li>Projects requiring custom color matching</li>
          </ul>

          <h2>Pro Installation Tips</h2>
          <p>
            Whether you're DIYing or working with a professional, here are some key considerations for getting the best
            results with pre-mixed grout:
          </p>
          <ol>
            <li>Always work in small sections to maintain consistent coverage</li>
            <li>Clean excess grout immediately—it's harder to remove once dry</li>
            <li>Allow proper curing time before exposing to water</li>
            <li>Use a quality grout float and clean sponges for professional results</li>
          </ol>

          <h2>Ready to start your tile project?</h2>
          <p>
            At Aesthetic Tile, we help homeowners throughout Central Florida choose the right materials and techniques
            for their specific needs. <Link href="/contact">Contact us</Link> to discuss your project and get expert
            guidance on grout selection, tile installation, and more.
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
          >
            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>

      <section className="mt-24">
        <CallToActionSection />
      </section>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
    </>
  )
}

function CallToActionSection() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Start Your Project?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your tile installation. Professional craftsmanship, competitive pricing, and
              exceptional service guaranteed.
            </p>
          </div>

          <ContactForm subject="Aesthetic Tile — Blog Inquiry" className="bg-white/10 backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}

