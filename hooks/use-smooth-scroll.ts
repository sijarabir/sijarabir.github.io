"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    // Get the header height to offset the scroll position
    const header = document.querySelector("header")
    const headerHeight = header ? header.getBoundingClientRect().height : 0

    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }, [])

  return { scrollToSection }
}
