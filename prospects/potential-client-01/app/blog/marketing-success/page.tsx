import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "../../_components/ContactForm"
import { absoluteUrl, buildMetadata, createArticleJsonLd } from "../../_lib/seo"

const ARTICLE_PUBLISHED_DATE = "2025-09-15"

export const metadata = buildMetadata({
  title: "Investing in Our Future: A Marketing Success Story | Aesthetic Tile Blog",
  description:
    "We're thrilled to share how our investment in professional marketing and video content creation is transforming our business and attracting higher-quality projects.",
  path: "/blog/marketing-success",
  image: "/images/Tile-Shop-Feature.png",
  type: "article",
})

export default function MarketingSuccessPage() {
  const articleJsonLd = createArticleJsonLd({
    url: absoluteUrl("/blog/marketing-success"),
    headline: "Investing in Our Future: A Marketing Success Story",
    description:
      "Discover how Aesthetic Tile invested in professional marketing and video content to attract higher-quality tile installation projects in Central Florida.",
    image: "/images/Tile-Shop-Feature.png",
    datePublished: ARTICLE_PUBLISHED_DATE,
    authorName: "Aesthetic Tile Team",
  })

  return (
    <>
      <div className="pb-24">
        <article className="mx-auto max-w-4xl px-6 pt-24">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              Investing in Our Future: A Marketing Success Story
            </h1>
            <div className="text-sm text-slate-600">Published on September 15, 2025 | By the Aesthetic Tile Team</div>
          </header>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-purple-600 hover:prose-a:text-purple-700">
            <p>
              We're thrilled to share an exciting update with our community: over the past few months, we've made a
              significant investment in professional marketing and video content creation. This decision represents more
              than just a business strategy—it's a commitment to better serving our customers and showcasing the
              craftsmanship that defines our work.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/Tile-Shop-Feature.png"
                alt="Professional video production set inside the Aesthetic Tile showroom in Groveland, FL"
                width={800}
                height={533}
                className="w-full"
              />
              <p className="mt-2 text-center text-sm text-slate-500">
                Behind the scenes of our video content production at The Tile Shop.
              </p>
            </div>

            <h2>Why We Invested in Marketing</h2>
            <p>
              As a third-generation tile company, we've always relied on word-of-mouth and the quality of our work to
              grow our business. While that foundation remains strong, we recognized that modern homeowners are looking
              for more than just a contractor—they want to understand the process, see examples of work, and connect
              with the people behind the business before making a decision.
            </p>

            <h2>The Impact We're Seeing</h2>
            <p>
              The results have exceeded our expectations. By investing in professional video content, educational blog
              posts, and a stronger online presence, we're now reaching homeowners who truly value craftsmanship and are
              willing to invest in quality work. Our "Myth Breakers" video series, filmed at The Tile Shop in Orlando,
              has particularly resonated with audiences looking for honest, educational content about tile remodeling.
            </p>

            <h2>More Than Just Marketing</h2>
            <p>
              This investment isn't just about attracting more customers—it's about attracting the right customers.
              Homeowners who watch our videos, read our content, and engage with our brand before reaching out are
              better informed, more realistic about timelines and costs, and more appreciative of the level of detail
              that goes into professional tile installation.
            </p>

            <h2>Looking Ahead</h2>
            <p>
              We're committed to continuing this investment and expanding our content offerings. Whether you're
              researching your first tile project or you're a fellow contractor looking for industry insights, we're
              here to share our knowledge and experience.
            </p>

            <p>
              Thank you to our customers, partners, and the entire Central Florida community for your continued support.
              Here's to the next chapter of growth!
            </p>

            <h2>Ready to work with us?</h2>
            <p>
              If you're planning a tile project in Central Florida, <Link href="/contact">reach out</Link> to schedule a
              consultation. We'd love to discuss how we can bring your vision to life with the same attention to detail
              and craftsmanship that's been our hallmark for three generations.
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

