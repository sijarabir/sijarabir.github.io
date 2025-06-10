"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
  bgColor?: string
}

export function Section({ id, className, children, bgColor = "bg-white" }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-16 transition-opacity duration-1000",
        bgColor,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
    >
      {children}
    </section>
  )
}
