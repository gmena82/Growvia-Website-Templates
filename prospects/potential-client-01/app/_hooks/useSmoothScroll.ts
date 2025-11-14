"use client"

import { useCallback } from "react"

export function useSmoothScroll(offset = 0) {
  const scrollToHash = useCallback(
    (hash: string) => {
      if (!hash.startsWith("#")) return
      const target = document.querySelector<HTMLElement>(hash)
      if (!target) return

      const top = target.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({
        top,
        behavior: "smooth",
      })
    },
    [offset],
  )

  return scrollToHash
}

