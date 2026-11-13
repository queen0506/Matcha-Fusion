import BrandLogo from "@/components/common/BrandLogo"

import Navbar from "@/components/layout/Navbar"

import matchaD from "@/assets/images/matcha-d.png"
import boothPicture from "@/assets/images/booth_picture.jpg"

const PRODUCTS = [
  {
    name: "Strawberry Matcha",

    description:
      "Sweet strawberry purée layered with cold milk and whisked matcha. Fruity, fresh, and beautifully balanced.",

    image:
      "https://images.unsplash.com/photo-1751033390078-b605c8727fa4?w=400&h=400&fit=crop&auto=format",

    alt: "Layered strawberry matcha drink",
  },

  {
    name: "Matcha Latte",

    description:
      "Smooth green tea mixed with cold milk. Simple, earthy, and perfectly balanced.",

    image:
      "https://images.unsplash.com/photo-1631308491952-040f80133535?w=400&h=400&fit=crop&auto=format",

    alt: "Classic matcha latte",
  },

  {
    name: "Ube Matcha",

    description:
      "Rich ube milk topped with vibrant green tea. Sweet, nutty, and velvety smooth.",

    image:
      "https://images.unsplash.com/photo-1751033390130-cdc5a6082089?w=400&h=400&fit=crop&auto=format",

    alt: "Layered ube matcha drink",
  },

  {
    name: "Dirty Matcha",

    description:
      "A bold shot of espresso mixed with earthy matcha and cold milk. Deep, rich, and energizing.",

    image:
      "https://images.unsplash.com/photo-1727850005779-1e24cac382d4?w=400&h=400&fit=crop&auto=format",

    alt: "Dirty matcha with espresso",
  },
]

function TickerBanner() {
  const content = Array(8).fill(null)

  return (
    <div
      className="overflow-hidden"
      style={{ background: "#D85A27", padding: "14px 0" }}
    >
      <div className="ticker-track">
        {content.map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 whitespace-nowrap"
          >
            <span className="font-script text-white text-2xl">
              Matcha Fusion
            </span>
            <BrandLogo size={28} variant="white" />
            <span className="font-script text-white text-2xl">
              A World of Flavor in Every Sip
            </span>
            <BrandLogo size={28} variant="white" />
          </span>
        ))}
      </div>
    </div>
  )
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="mb-6">
          <BrandLogo size={90} variant="white" />
        </div>
        <h1
          className="font-script text-white mb-3"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          Matcha Fusion
        </h1>
        <p
          className="font-josefin text-white text-base tracking-widest uppercase mb-6"
          style={{ letterSpacing: "0.25em", opacity: 1 }}
        >
          A World of Flavor in Every Sip
        </p>
        <p
          className="font-josefin text-white text-base max-w-lg mb-10 leading-relaxed"
          style={{ opacity: 1 }}
        >
          Experience Japanese matcha tradition infused with bold global flavors.
          Crafting unique drinks that bring culture, creativity, and connection
          to every cup.
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
  )
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
        <h2
          className="font-script mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#D85A27" }}
        >
          A World of Flavor in Every Sip
        </h2>
        <p
          className="font-josefin text-base leading-loose"
          style={{ color: "#2D2D2D", opacity: 0.82 }}
        >
          Where culture and creativity blend in every cup. Inspired by Japan's
          timeless matcha traditions, Matcha Fusion brings you unique signature
          drinks crafted with vibrant global flavors. Experience a journey of
          taste and connection with every sip.
        </p>
      </div>
    </section>
  )
}

function OurMatchaSection() {
  return (
    <section
      id="our-matcha"
      className="py-20 px-6"
      style={{ background: "#FAF8F5" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-script mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#5B7034" }}
          >
            Crafted Matcha Series
          </h2>
          <p
            className="font-josefin text-base max-w-xl mx-auto leading-loose"
            style={{ color: "#2D2D2D", opacity: 0.78 }}
          >
            Your daily dose of green, elevated. Savor premium whisked matcha
            paired with creamy milk and signature flavor blends, crafted to keep
            you refreshed all day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="flex items-start gap-7 group">
              <div
                className="flex-shrink-0 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                style={{
                  width: 160,
                  height: 160,
                  background: "#e0ead0",
                  boxShadow: "0 8px 32px rgba(91,112,52,0.12)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2">
                <h3
                  className="font-josefin font-700 text-lg mb-3 tracking-wide"
                  style={{ color: "#D85A27" }}
                >
                  {product.name}
                </h3>
                <p
                  className="font-josefin text-sm leading-relaxed"
                  style={{ color: "#2D2D2D", opacity: 0.78, maxWidth: 260 }}
                >
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandingSection() {
  return (
    <section
      id="branding"
      className="py-20 px-6"
      style={{ background: "#FAF8F5" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-script mb-14"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#D85A27" }}
        >
          Branding
        </h2>

        {/* Logos */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h3
            className="font-josefin font-700 text-xl mb-3"
            style={{ color: "#2D2D2D" }}
          >
            Logo
          </h3>
          <div
            className="mx-auto mb-5 h-1 w-12 rounded-full"
            style={{ background: "#D85A27" }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="flex min-h-[180px] items-center justify-center">
            <BrandLogo size={120} variant="green" />
          </div>
          <div className="flex min-h-[180px] items-center justify-center">
            <BrandLogo size={120} variant="colored" />
          </div>
          <div className="flex min-h-[180px] items-center justify-center">
            <BrandLogo size={120} variant="orange" />
          </div>
        </div>

        <div className="mx-auto mb-16 max-w-3xl text-center">
          
          <p
            className="font-josefin text-sm leading-relaxed mb-3"
            style={{ color: "#2D2D2D", opacity: 0.78 }}
          >
            The{" "}
            <span style={{ color: "#D85A27" }} className="font-600">
              Matcha Fusion
            </span>{" "}
            logo pairs earthy green and warm orange tones with a traditional
            Japanese whisk to represent nature, vitality, and authentic
            craftsmanship.
          </p>
          <p
            className="font-josefin text-sm leading-relaxed"
            style={{ color: "#2D2D2D", opacity: 0.75 }}
          >
            Below it, a globe-shaped bowl, a circular frame, the tagline{" "}
            <span style={{ color: "#D85A27" }}>
              "A World of Flavor in Every Sip,"
            </span>{" "}
            and a curved brand banner combine to symbolize cultural unity and
            the fusion of global flavors.
          </p>
        </div>

        {/* Fonts */}
        <div className="mb-16">
          <h3
            className="font-josefin font-700 text-xl mb-6 text-center"
            style={{ color: "#2D2D2D" }}
          >
            Fonts Used
          </h3>
          <div
            className="mx-auto mb-8 h-1 w-12 rounded-full"
            style={{ background: "#D85A27", opacity: 0.75 }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex min-h-[144px] flex-col items-center justify-center px-5 py-8">
              <p
                className="font-josefin tracking-widest text-xl font-700"
                style={{ color: "#2D2D2D", letterSpacing: "0.3em" }}
              >
                JOSEFIN SANS
              </p>
              <p
                className="font-josefin text-xs tracking-widest mt-1"
                style={{
                  color: "#2D2D2D",
                  opacity: 0.5,
                  letterSpacing: "0.15em",
                }}
              >
                BODY & NAVIGATION
              </p>
            </div>
            <div className="flex min-h-[144px] flex-col items-center justify-center px-5 py-8">
              <p
                className="font-script text-3xl"
                style={{ color: "#2D2D2D" }}
              >
                Great Vibes
              </p>
              <p
                className="font-josefin text-xs tracking-widest mt-1"
                style={{
                  color: "#2D2D2D",
                  opacity: 0.5,
                  letterSpacing: "0.15em",
                }}
              >
                DISPLAY HEADINGS
              </p>
            </div>
            <div className="flex min-h-[144px] flex-col items-center justify-center px-5 py-8">
              <p
                className="font-script text-2xl"
                style={{ color: "#5B7034" }}
              >
                Formale Script
              </p>
              <p
                className="font-josefin text-xs tracking-widest mt-1"
                style={{
                  color: "#2D2D2D",
                  opacity: 0.5,
                  letterSpacing: "0.15em",
                }}
              >
                ACCENT SCRIPT
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-14"
          style={{ background: "#D85A27", opacity: 0.35 }}
        />

        {/* Booth row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className="font-josefin font-700 text-2xl mb-5"
              style={{ color: "#2D2D2D" }}
            >
              Booth
            </h3>
            <p
              className="font-josefin text-sm leading-loose"
              style={{ color: "#2D2D2D", opacity: 0.78 }}
            >
              Welcome to{" "}
              <span style={{ color: "#D85A27" }} className="font-600">
                Matcha Fusion
              </span>
              , where we've crafted a physical store design that brings our
              brand's vibrant identity straight to life. Wrapped in our
              signature olive-green exterior, the kiosk features a striking
              wrap-around serving window with a clear glass guard and a crisp
              white countertop, giving you a front-row view as we craft your
              favorite global tea blends. Pops of vibrant orange lighting and
              bold 3D silver signage illuminate the shop, while rich, ribbed
              wood paneling wraps around the base to give the modern structure a
              warm, grounded feel.
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#c5d4a0",
              minHeight: 280,
              boxShadow: "0 12px 48px rgba(91,112,52,0.15)",
            }}
          >
            <img
              src={boothPicture}
              alt="Japanese tea house — kiosk storefront reference"
              className="w-full h-full object-cover"
              style={{ minHeight: 280 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{ background: "#FAF8F5" }}
    >
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2
          className="font-script mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#5B7034" }}
        >
          How We Started
        </h2>
        <p
          className="font-josefin text-base leading-loose"
          style={{ color: "#2D2D2D", opacity: 0.82 }}
        >
          Matcha Fusion began in Olongapo City with a shared passion for
          authentic Japanese green tea and a desire to bring creative, modern
          flavors to Zambales. What started as simple kitchen experiments has
          grown into a vibrant local spot dedicated to serving freshly whisked,
          innovative matcha creations to our community.
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
  )
}

function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center border-t"
      style={{ borderColor: "rgba(91,112,52,0.15)", background: "#FAF8F5" }}
    >
      <div className="flex justify-center mb-4">
        <BrandLogo size={44} />
      </div>
      <p className="font-script text-2xl mb-1" style={{ color: "#5B7034" }}>
        Matcha Fusion
      </p>
      <p
        className="font-josefin text-xs tracking-widest"
        style={{ color: "#2D2D2D", opacity: 0.45, letterSpacing: "0.2em" }}
      >
        A WORLD OF FLAVOR IN EVERY SIP
      </p>
      <p
        className="font-josefin text-xs mt-4"
        style={{ color: "#2D2D2D", opacity: 0.35 }}
      >
        © 2026 Matcha Fusion · Olongapo City, Zambales
      </p>
    </footer>
  )
}

export default function HomePage() {
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
  )
}
