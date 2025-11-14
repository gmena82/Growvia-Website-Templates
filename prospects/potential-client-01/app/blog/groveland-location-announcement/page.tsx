import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "../../_components/ContactForm"
import { absoluteUrl, buildMetadata, createArticleJsonLd } from "../../_lib/seo"

const ARTICLE_PUBLISHED_DATE = "2025-08-15"

export const metadata = buildMetadata({
  title: "We're Growing: Aesthetic Tile Is Coming to Groveland | Aesthetic Tile Blog",
  description:
    "We're opening our second location in Groveland, Florida, and inviting our newest neighbors to stop by, share their projects, and grow with us.",
  path: "/blog/groveland-location-announcement",
  image: "/images/Groveland.webp",
  type: "article",
})

export default function GrovelandLocationAnnouncementPage() {
  const articleJsonLd = createArticleJsonLd({
    url: absoluteUrl("/blog/groveland-location-announcement"),
    headline: "We're Growing: Aesthetic Tile Is Coming to Groveland",
    description:
      "Aesthetic Tile is expanding to Groveland, Florida with a new location to better serve homeowners across Lake County and Central Florida.",
    image: "/images/Groveland.webp",
    datePublished: ARTICLE_PUBLISHED_DATE,
    authorName: "Aesthetic Tile Team",
  })

  return (
    <>
      <div className="pb-24">
        <article className="mx-auto max-w-4xl px-6 pt-24">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              We're Growing: Aesthetic Tile Is Coming to Groveland
            </h1>
            <div className="text-sm text-slate-600">Published on August 15, 2025 | By the Aesthetic Tile Team</div>
          </header>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-purple-600 hover:prose-a:text-purple-700">
            <p>
              We have exciting news to share with our community: Aesthetic Tile is expanding to Groveland, Florida! This
              milestone represents years of hard work, dedication to our craft, and the trust you've placed in our
              family-owned business. We're thrilled to bring our three generations of tile expertise to Lake County and
              serve even more homeowners across Central Florida.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/Groveland.webp"
                alt="Aesthetic Tile team celebrating the new Groveland, FL location announcement for tile installation services"
                width={800}
                height={533}
                className="w-full"
              />
              <p className="mt-2 text-center text-sm text-slate-500">Celebrating our expansion to Groveland, Florida.</p>
            </div>

            <h2>Why Groveland?</h2>
            <p>
              Groveland and the surrounding Lake County area represent everything we love about Central Florida: a
              tight-knit community, beautiful homes, and homeowners who value quality craftsmanship. The region's growth
              has been remarkable, and we're excited to be part of that momentum.
            </p>

            <p>
              Our new location at <strong>1195 Greenley Ave, Groveland, FL 34736</strong> positions us perfectly to
              serve Groveland, Clermont, Minneola, Winter Garden, and the greater Orlando area with even faster response
              times and more personalized service.
            </p>

            <h2>What This Means for You</h2>
            <p>
              For our existing customers, nothing changes—we'll continue providing the same meticulous tile installation
              and exceptional service you've come to expect. For those in the Groveland area meeting us for the first
              time, we welcome you to experience the difference that three generations of expertise can make in your
              home.
            </p>

            <h2>Our Services in Groveland</h2>
            <p>We're bringing our full range of tile installation services to Lake County:</p>
            <ul>
              <li>
                <Link href="/kitchen-backsplashes">Kitchen Backsplashes</Link> — From classic subway tile to custom
                mosaics
              </li>
              <li>
                <Link href="/bathroom-shower">Bathroom & Shower Tile</Link> — Complete renovations with professional
                waterproofing
              </li>
              <li>
                <Link href="/floor-tile-installation">Floor Tile Installation</Link> — Durable, beautiful flooring for
                any room
              </li>
              <li>
                <Link href="/fireplaces">Fireplace Surrounds</Link> — Statement-making focal points for your living
                space
              </li>
              <li>
                <Link href="/special-projects">Special Projects</Link> — Custom designs and unique installations
              </li>
            </ul>

            <h2>Join Us on This Journey</h2>
            <p>
              We couldn't have reached this milestone without the support of our customers, partners, and the entire
              Central Florida community. Thank you for trusting us with your homes and for spreading the word about our
              work.
            </p>

            <p>
              To our new Groveland neighbors: we can't wait to meet you! Whether you're planning a complete remodel or a
              simple backsplash refresh, we're here to help bring your vision to life with the same attention to detail
              and craftsmanship that's been our hallmark for three generations.
            </p>

            <h2>Ready to work with us?</h2>
            <p>
              Call us at <Link href="tel:+15026507014">(502) 650-7014</Link> or email{" "}
              <Link href="mailto:office@aesthetictile.com">office@aesthetictile.com</Link> to schedule a consultation.
              We offer free estimates and would love to discuss your next tile project!
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

