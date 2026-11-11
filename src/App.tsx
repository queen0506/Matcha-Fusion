import { useState, useEffect } from "react";
import greenLogo from "@/imports/green_logo.png";
import whiteLogo from "@/imports/white_logo.png";
import matchaD from "@/imports/matcha-d.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Matcha", href: "#our-matcha" },
  { label: "Branding", href: "#branding" },
  { label: "About Us", href: "#about" },
];

const PRODUCTS = [
  {
    name: "Strawberry Matcha",
    description: "Sweet strawberry purée layered with cold milk and whisked matcha. Fruity, fresh, and beautifully balanced.",
    image: "https://images.unsplash.com/photo-1751033390078-b605c8727fa4?w=400&h=400&fit=crop&auto=format",
    alt: "Layered strawberry matcha drink",
  },
  {
    name: "Matcha Latte",
    description: "Smooth green tea mixed with cold milk. Simple, earthy, and perfectly balanced.",
    image: "https://images.unsplash.com/photo-1631308491952-040f80133535?w=400&h=400&fit=crop&auto=format",
    alt: "Classic matcha latte",
  },
  {
    name: "Ube Matcha",
    description: "Rich ube milk topped with vibrant green tea. Sweet, nutty, and velvety smooth.",
    image: "https://images.unsplash.com/photo-1751033390130-cdc5a6082089?w=400&h=400&fit=crop&auto=format",
    alt: "Layered ube matcha drink",
  },
  {
    name: "Dirty Matcha",
    description: "A bold shot of espresso mixed with earthy matcha and cold milk. Deep, rich, and energizing.",
    image: "https://images.unsplash.com/photo-1727850005779-1e24cac382d4?w=400&h=400&fit=crop&auto=format",
    alt: "Dirty matcha with espresso",
  },
];

function Logo({ size = 56, variant = "green" }: { size?: number; variant?: "green" | "white" }) {
  return (
    <img
      src={variant === "white" ? whiteLogo : greenLogo}
      alt="Matcha Fusion logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const landingEl = document.getElementById("landing");
    const onScroll = () => {
      const landingHeight = landingEl ? landingEl.offsetHeight : window.innerHeight;
      setVisible(window.scrollY >= landingHeight - 10);
      setScrolled(window.scrollY > landingHeight + 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,248,245,0.92)" : "rgba(250,248,245,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(91,112,52,0.12)" : "none",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(-8px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#landing" className="flex items-center gap-2 group">
          <Logo size={52} />
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
          <span className="block w-6 h-0.5 bg-charcoal transition-all" style={{ background: "#2D2D2D", transform: menuOpen ? "rotate(45deg) translate(3px, 5px)" : "none" }} />
          <span className="block w-6 h-0.5 bg-charcoal transition-all" style={{ background: "#2D2D2D", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-charcoal transition-all" style={{ background: "#2D2D2D", transform: menuOpen ? "rotate(-45deg) translate(3px, -5px)" : "none" }} />
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: "rgba(250,248,245,0.97)" }}>
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
  );
}

function TickerBanner() {
  const content = Array(8).fill(null);
  return (
    <div className="overflow-hidden" style={{ background: "#D85A27", padding: "14px 0" }}>
      <div className="ticker-track">
        {content.map((_, i) => (
          <span key={i} className="flex items-center gap-6 px-6 whitespace-nowrap">
            <span className="font-script text-white text-2xl">Matcha Fusion</span>
            <Logo size={28} variant="white" />
            <span className="font-script text-white text-2xl">A World of Flavor in Every Sip</span>
            <Logo size={28} variant="white" />
          </span>
        ))}
      </div>
    </div>
  );
}

function LandingSection() {
  return (
    <section
      id="landing"
      className="relative min-h-screen flex flex-col"
      style={{ background: "#1a1a1a" }}
    >
      <img
        src="https://images.unsplash.com/photo-1704079698754-5e621edb610b?w=1600&h=1000&fit=crop&auto=format"
        alt="Matcha powder texture"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.75 }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)" }} />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="mb-6">
          <Logo size={90} variant="white" />
        </div>
        <h1 className="font-script text-white mb-3" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
          Matcha Fusion
        </h1>
        <p className="font-josefin text-white text-base tracking-widest uppercase mb-6" style={{ letterSpacing: "0.25em", opacity: 0.9 }}>
          A World of Flavor in Every Sip
        </p>
        <p className="font-josefin text-white text-base max-w-lg mb-10 leading-relaxed" style={{ opacity: 0.88 }}>
          Experience Japanese matcha tradition infused with bold global flavors. Crafting unique drinks that bring culture, creativity, and connection to every cup.
        </p>
        <a
          href="#home"
          className="inline-block font-josefin font-600 text-sm tracking-widest uppercase px-10 py-4 rounded-full transition-all duration-200 hover:scale-105"
          style={{
            background: "white",
            color: "#2D2D2D",
            letterSpacing: "0.18em",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}
        >
          Get Started
        </a>
      </div>
      <div className="relative z-10">
        <TickerBanner />
      </div>
    </section>
  );
}

function HomeSection() {
  return (
    <section id="home" className="pt-0" style={{ background: "#FAF8F5" }}>
      <div
        className="w-full overflow-hidden"
        style={{ height: "clamp(240px, 40vw, 420px)", background: "#2d3a1a" }}
      >
        <img
          src={matchaD}
          alt="Liquid matcha texture swirling"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </div>
      <div className="max-w-3xl mx-auto text-center px-6 py-16">
        <h2 className="font-script mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#D85A27" }}>
          A World of Flavor in Every Sip
        </h2>
        <p className="font-josefin text-base leading-loose" style={{ color: "#2D2D2D", opacity: 0.82 }}>
          Where culture and creativity blend in every cup. Inspired by Japan's timeless matcha traditions, Matcha Fusion brings you unique signature drinks crafted with vibrant global flavors. Experience a journey of taste and connection with every sip.
        </p>
      </div>
    </section>
  );
}

function OurMatchaSection() {
  return (
    <section id="our-matcha" className="py-20 px-6" style={{ background: "#FAF8F5" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-script mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#5B7034" }}>
            Crafted Matcha Series
          </h2>
          <p className="font-josefin text-base max-w-xl mx-auto leading-loose" style={{ color: "#2D2D2D", opacity: 0.78 }}>
            Your daily dose of green, elevated. Savor premium whisked matcha paired with creamy milk and signature flavor blends, crafted to keep you refreshed all day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="flex items-start gap-7 group">
              <div
                className="flex-shrink-0 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                style={{ width: 160, height: 160, background: "#e0ead0", boxShadow: "0 8px 32px rgba(91,112,52,0.12)" }}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="font-josefin font-700 text-lg mb-3 tracking-wide" style={{ color: "#D85A27" }}>
                  {product.name}
                </h3>
                <p className="font-josefin text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.78, maxWidth: 260 }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandingSection() {
  return (
    <section id="branding" className="py-20 px-6" style={{ background: "#FAF8F5" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-script mb-14" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#D85A27" }}>
          Branding
        </h2>

        {/* Logo + Fonts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Logo column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Logo size={120} />
              </div>
              <div>
                <h3 className="font-josefin font-700 text-xl mb-3" style={{ color: "#2D2D2D" }}>Logo</h3>
                <p className="font-josefin text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D", opacity: 0.78 }}>
                  The <span style={{ color: "#D85A27" }} className="font-600">Matcha Fusion</span> logo pairs earthy green and warm orange tones with a traditional Japanese whisk to represent nature, vitality, and authentic craftsmanship.
                </p>
                <p className="font-josefin text-sm leading-relaxed" style={{ color: "#2D2D2D", opacity: 0.75 }}>
                  Below it, a globe-shaped bowl, a circular frame, the tagline{" "}
                  <span style={{ color: "#D85A27" }}>"A World of Flavor in Every Sip,"</span>{" "}
                  and a curved brand banner combine to symbolize cultural unity and the fusion of global flavors.
                </p>
              </div>
            </div>
          </div>

          {/* Fonts column */}
          <div>
            <h3 className="font-josefin font-700 text-xl mb-6 text-right" style={{ color: "#2D2D2D" }}>Fonts Used</h3>
            <div className="h-px mb-6" style={{ background: "#5B7034", opacity: 0.2 }} />
            <div className="flex flex-col gap-6 items-end text-right">
              <div>
                <p className="font-josefin tracking-widest text-xl font-700" style={{ color: "#2D2D2D", letterSpacing: "0.3em" }}>
                  JOSEFIN SANS
                </p>
                <p className="font-josefin text-xs tracking-widest mt-1" style={{ color: "#2D2D2D", opacity: 0.5, letterSpacing: "0.15em" }}>BODY & NAVIGATION</p>
              </div>
              <div>
                <p className="font-script text-3xl" style={{ color: "#2D2D2D" }}>
                  Great Vibes
                </p>
                <p className="font-josefin text-xs tracking-widest mt-1" style={{ color: "#2D2D2D", opacity: 0.5, letterSpacing: "0.15em" }}>DISPLAY HEADINGS</p>
              </div>
              <div>
                <p className="font-script text-2xl" style={{ color: "#5B7034" }}>
                  Formale Script
                </p>
                <p className="font-josefin text-xs tracking-widest mt-1" style={{ color: "#2D2D2D", opacity: 0.5, letterSpacing: "0.15em" }}>ACCENT SCRIPT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-14" style={{ background: "#D85A27", opacity: 0.35 }} />

        {/* Booth row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-josefin font-700 text-2xl mb-5" style={{ color: "#2D2D2D" }}>Booth</h3>
            <p className="font-josefin text-sm leading-loose" style={{ color: "#2D2D2D", opacity: 0.78 }}>
              Welcome to <span style={{ color: "#D85A27" }} className="font-600">Matcha Fusion</span>, where we've crafted a physical store design that brings our brand's vibrant identity straight to life. Wrapped in our signature olive-green exterior, the kiosk features a striking wrap-around serving window with a clear glass guard and a crisp white countertop, giving you a front-row view as we craft your favorite global tea blends. Pops of vibrant orange lighting and bold 3D silver signage illuminate the shop, while rich, ribbed wood paneling wraps around the base to give the modern structure a warm, grounded feel.
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#c5d4a0", minHeight: 280, boxShadow: "0 12px 48px rgba(91,112,52,0.15)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1757507423608-ae47cddef75f?w=700&h=480&fit=crop&auto=format"
              alt="Japanese tea house — kiosk storefront reference"
              className="w-full h-full object-cover"
              style={{ minHeight: 280 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6" style={{ background: "#FAF8F5" }}>
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-script mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#5B7034" }}>
          How We Started
        </h2>
        <p className="font-josefin text-base leading-loose" style={{ color: "#2D2D2D", opacity: 0.82 }}>
          Matcha Fusion began in Olongapo City with a shared passion for authentic Japanese green tea and a desire to bring creative, modern flavors to Zambales. What started as simple kitchen experiments has grown into a vibrant local spot dedicated to serving freshly whisked, innovative matcha creations to our community.
        </p>
      </div>
      <div
        className="w-full overflow-hidden"
        style={{ borderRadius: 0, background: "#2d3a1a", maxHeight: 480 }}
      >
        <img
          src="https://images.unsplash.com/photo-1757507423608-ae47cddef75f?w=1400&h=500&fit=crop&auto=format"
          alt="Japanese tea ceremony — Olongapo City landmark reference"
          className="w-full object-cover"
          style={{ maxHeight: 480, objectPosition: "center 20%" }}
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 text-center border-t" style={{ borderColor: "rgba(91,112,52,0.15)", background: "#FAF8F5" }}>
      <div className="flex justify-center mb-4">
        <Logo size={44} />
      </div>
      <p className="font-script text-2xl mb-1" style={{ color: "#5B7034" }}>Matcha Fusion</p>
      <p className="font-josefin text-xs tracking-widest" style={{ color: "#2D2D2D", opacity: 0.45, letterSpacing: "0.2em" }}>
        A WORLD OF FLAVOR IN EVERY SIP
      </p>
      <p className="font-josefin text-xs mt-4" style={{ color: "#2D2D2D", opacity: 0.35 }}>
        © 2026 Matcha Fusion · Olongapo City, Zambales
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: "#FAF8F5" }}>
      <Navbar />
      <LandingSection />
      <HomeSection />
      <OurMatchaSection />
      <BrandingSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
