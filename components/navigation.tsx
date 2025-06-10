"use client"

import type React from "react"

import { Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Expertise", href: "#expertise" },
  //{ name: "Cases", href: "#cases" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)

    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[#1F2839] backdrop-blur transition-all">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-[#f5f5ef]" />
          <span className="text-xl text-[#f5f5ef] font-semibold">Abir Ahamed Sijar</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-[#f5f5ef] hover:text-gray-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-5 w-5 transition-transform", mobileMenuOpen && "transform rotate-90")}
          >
            {mobileMenuOpen ? (
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
              />
            ) : (
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            )}
          </svg>
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
