"use client"

import { useEffect, useState } from "react"

export function useScrollShadow(threshold = 100) {
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setHasShadow(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return hasShadow
}

