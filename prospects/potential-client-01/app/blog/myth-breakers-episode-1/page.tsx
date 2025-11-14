import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "../../_components/ContactForm"
import { absoluteUrl, buildMetadata, createArticleJsonLd } from "../../_lib/seo"

const ARTICLE_PUBLISHED_DATE = "2025-09-30"

export const metadata = buildMetadata({
  title: "Myth Breakers Ep. 1: Are Tile Remodels Too Expensive? | Aesthetic Tile Blog",
  description:
    "Watch Myth Breakers Episode 1 to see why tile remodels don't have to be expensive. Get cost breakdowns, budget strategies, and pro tips filmed at The Tile Shop in Orlando.",
  path: "/blog/myth-breakers-episode-1",
  image: "/images/Tile-Shop-Photoshoot.webp",
  type: "article",
})

export default function MythBreakersEpisode1() {
  const articleJsonLd = createArticleJsonLd({
    url: absoluteUrl("/blog/myth-breakers-episode-1"),
    headline: "Myth Breakers, Episode 1: Are Tile Remodels Too Expensive?",
    description:
      "Myth Breakers Episode 1 breaks down the cost of tile remodels with budget strategies and expert tips filmed at The Tile Shop in Orlando.",
    image: "/images/Tile-Shop-Photoshoot.webp",
    datePublished: ARTICLE_PUBLISHED_DATE,
    authorName: "Aesthetic Tile Team",
  })

  return (
    <>
      <div className="pb-24">
      <article className="mx-auto max-w-4xl px-6 pt-24">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Myth Breakers, Episode 1: Are Tile Remodels Too Expensive?
          </h1>
          <div className="text-sm text-slate-600">Published on September 30, 2025 | By the Aesthetic Tile Team</div>
        </header>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-purple-600 hover:prose-a:text-purple-700">
          <p>
            It's finally here. All that planning and hard work the last two months paid off. We promised you something
            big was coming and here it is. We were allowed to film on location at The Tile Shop in Orlando, and what a
            great experience it was—aisles of inspiration, helpful staff, and room after room of design ideas.
          </p>
          <p>
            So here it is: the first of many segments we'll be bringing you from The Tile Shop. We're kicking things
            off with Episode 1 of Myth Breakers, our new series where we take on the biggest myths in remodeling.
            Today's myth: "Tile remodels are too expensive."
          </p>

          <div className="my-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/Tile-Shop-Photoshoot.webp"
              alt="Brad from Aesthetic Tile presenting tile selections during a photoshoot at The Tile Shop in Orlando, FL"
              width={800}
              height={533}
              className="w-full"
            />
            <p className="mt-2 text-center text-sm text-slate-500">
              Myth Breakers Episode 1 was filmed on location at The Tile Shop in Orlando.
            </p>
          </div>

          <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/XEpKyKCcM8I"
                title="Myth Breakers Episode 1: Are Tile Remodels Too Expensive?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="my-8 rounded-xl bg-purple-50 p-6 border border-purple-200">
            <p className="m-0">
              <strong>Need help designing your remodel?</strong> Call or text{" "}
              <Link href="tel:+15026507014">(502) 650-7014</Link> or email{" "}
              <Link href="mailto:office@aesthetictile.com">office@aesthetictile.com</Link>. Mention "Discount" and
              we'll qualify you for a 15% Tile Shop discount whether you DIY or hire us.
            </p>
          </div>

          <h2>What you'll learn</h2>
          <ul>
            <li>Cost breakdown: materials vs. labor vs. waste</li>
            <li>Floor-first budgeting (save where durability matters most)</li>
            <li>Wall-tile sweet spot: value lines that still look designer</li>
            <li>Where premium really pays off (accents that pop)</li>
            <li>Pro tips for value projects that look professional</li>
          </ul>

          <h2>Myth: "Tile remodels are too expensive"</h2>
          <p>
            We hear this all the time. And we get it—if your only frame of reference is those Pinterest-perfect
            bathrooms with slab walls and full-room mosaics, it looks expensive. But cost isn't just a single number;
            it's the sum of choices. When you understand where each dollar goes—materials, labor, and waste—you gain
            control. You make strategic decisions. And suddenly "too expensive" turns into "totally doable."
          </p>

          <h2>Ready to start your project?</h2>
          <p>
            If you're in Central Florida and ready to turn this inspiration into action,{" "}
            <Link href="/contact">request a free consultation</Link>. We'll walk you through the entire process, from
            design to installation, ensuring your remodel fits both your style and your budget.
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

