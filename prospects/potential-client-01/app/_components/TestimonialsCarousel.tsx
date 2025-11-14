"use client"

import { useEffect, useRef, useState } from "react"

interface Testimonial {
  quote: string
  author: string
  title?: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const totalSlides = testimonials.length
  const baseIndex = totalSlides
  const [visibleCards, setVisibleCards] = useState(3)
  const cardGapRem = 0

  const [currentIndex, setCurrentIndex] = useState(baseIndex)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const trackRef = useRef<HTMLDivElement | null>(null)

  // Truncate long testimonials to match Ben Fabish's length (approx 280 characters)
  const MAX_QUOTE_LENGTH = 280
  const truncateQuote = (quote: string) => {
    if (quote.length <= MAX_QUOTE_LENGTH) return quote
    return quote.slice(0, MAX_QUOTE_LENGTH).trim() + "..."
  }

  // Create a continuous loop by duplicating testimonials
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  if (totalSlides === 0) {
    return null
  }

  // Reset base index if testimonial count changes
  useEffect(() => {
    setCurrentIndex(baseIndex)
  }, [baseIndex, visibleCards])

  useEffect(() => {
    if (typeof window === "undefined") return

    const updateVisibleCards = () => {
      const width = window.innerWidth
      if (width < 768) {
        setVisibleCards(1)
      } else if (width < 1280) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)
    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  // Seamlessly loop back when reaching the ends
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    if (currentIndex >= baseIndex + totalSlides) {
      track.style.transition = "none"
      setCurrentIndex((prev) => prev - totalSlides)
      requestAnimationFrame(() => {
        track.style.removeProperty("transition")
      })
      return
    }

    if (currentIndex < baseIndex) {
      track.style.transition = "none"
      setCurrentIndex((prev) => prev + totalSlides)
      requestAnimationFrame(() => {
        track.style.removeProperty("transition")
      })
    }
  }, [currentIndex, baseIndex, totalSlides])

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const translatePercentage = (100 / visibleCards) * currentIndex
  const translateGap = cardGapRem * currentIndex
  const widthClass =
    visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-1/2" : "w-1/3"

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          data-carousel-track
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(-${translatePercentage}% - ${translateGap}rem))` }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div key={index} className={`${widthClass} flex-shrink-0 px-3`}>
              <article className="flex h-full flex-col rounded-3xl border border-white bg-white p-6 shadow-lg shadow-slate-900/5">
                <div className="text-lg" aria-label="5 out of 5 stars">
                  <span className="text-amber-400">★★★★★</span>
                </div>
                <p className="mt-4 grow text-sm leading-6 text-slate-700">"{truncateQuote(testimonial.quote)}"</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                  {testimonial.title && (
                    <p className="mt-1 text-xs text-slate-600">{testimonial.title}</p>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goToPrevious}
          className="flex size-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 shadow-md transition hover:border-purple-500 hover:text-purple-600 hover:shadow-lg"
          aria-label="Previous testimonials"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => {
            const isActive = currentIndex % testimonials.length === index
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurrentIndex(testimonials.length + index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`size-3 transition-all ${
                  isActive
                    ? "border-2 border-purple-600 bg-transparent"
                    : "border-2 border-slate-300 bg-transparent hover:border-slate-400"
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
                aria-current={isActive}
              />
            )
          })}
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="flex size-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 shadow-md transition hover:border-purple-500 hover:text-purple-600 hover:shadow-lg"
          aria-label="Next testimonials"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

