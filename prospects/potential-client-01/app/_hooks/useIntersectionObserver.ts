"use client"

import { useCallback, useEffect, useRef } from "react"

type ObserverCallback = (entry: IntersectionObserverEntry) => void

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

export function useIntersectionObserver(
  callback: ObserverCallback,
  options: IntersectionObserverInit = DEFAULT_OPTIONS,
) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => callbackRef.current(entry))
    }, options)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [options])

  const observe = useCallback((element: Element | null) => {
    if (!element) return
    observerRef.current?.observe(element)
  }, [])

  const unobserve = useCallback((element: Element | null) => {
    if (!element) return
    observerRef.current?.unobserve(element)
  }, [])

  return { observe, unobserve }
}

