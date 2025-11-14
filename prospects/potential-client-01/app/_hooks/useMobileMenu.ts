"use client"

import { useCallback, useEffect, useState } from "react"

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.classList.toggle("overflow-hidden", isOpen)
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return { isOpen, open, close, toggle }
}

