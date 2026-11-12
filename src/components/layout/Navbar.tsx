import { useEffect, useState } from "react"

import BrandLogo from "@/components/common/BrandLogo"

const NAV_LINKS = [
  { label: "Home", href: "#home" },

  { label: "Our Matcha", href: "#our-matcha" },

  { label: "Branding", href: "#branding" },

  { label: "About Us", href: "#about" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const [visible, setVisible] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const landingEl = document.getElementById("landing")

    const onScroll = () => {
      const landingHeight = landingEl
        ? landingEl.offsetHeight
        : window.innerHeight

      setVisible(window.scrollY >= landingHeight - 10)

      setScrolled(window.scrollY > landingHeight + 20)
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(250,248,245,0.92)"
          : "rgba(250,248,245,0.0)",

        backdropFilter: scrolled ? "blur(12px)" : "none",

        borderBottom: scrolled ? "1px solid rgba(91,112,52,0.12)" : "none",

        opacity: visible ? 1 : 0,

        pointerEvents: visible ? "auto" : "none",

        transform: visible ? "translateY(0)" : "translateY(-8px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#landing" className="flex items-center gap-2 group">
          <BrandLogo size={52} />
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-josefin text-sm tracking-widest uppercase text-charcoal hover:text-matcha transition-colors duration-200"
              style={{ color: "#2D2D2D", letterSpacing: "0.12em" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-charcoal transition-all"
            style={{
              background: "#2D2D2D",
              transform: menuOpen
                ? "rotate(45deg) translate(3px, 5px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 bg-charcoal transition-all"
            style={{ background: "#2D2D2D", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-charcoal transition-all"
            style={{
              background: "#2D2D2D",
              transform: menuOpen
                ? "rotate(-45deg) translate(3px, -5px)"
                : "none",
            }}
          />
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(250,248,245,0.97)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-josefin text-sm tracking-widest uppercase"
              style={{ color: "#2D2D2D" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
