import CanvasWrapper from "@/components/CanvasWrapper";
import CookingCanvasWrapper from "@/components/CookingCanvasWrapper";
import SiteAnimationsWrapper from "@/components/SiteAnimationsWrapper";
import ExpandingGallery from "@/components/ExpandingGallery";
import BentoSection from "@/components/BentoSection";
import SpaceMarquee from "@/components/SpaceMarquee";
import Preloader from "@/components/Preloader";

const NAV_LEFT = ["About Us", "Menu", "Event"];
const NAV_RIGHT = ["Reservation", "Contact Us"];

const FEATURES = [
  { src: "/designed%20for%20better%20experinece/IMG_8019.JPG.jpeg", title: "Crafted Cocktails", desc: "Balanced flavors, quality ingredients" },
  { src: "/designed%20for%20better%20experinece/IMG_8020.JPG.jpeg", title: "Ambience", desc: "Warm lighting & intimate seating" },
  { src: "/designed%20for%20better%20experinece/IMG_8036.JPG.jpeg", title: "Music", desc: "Sound that complements the mood" },
  { src: "/designed%20for%20better%20experinece/IMG_8041.JPG.jpeg", title: "Service", desc: "Attentive and easy" },
];

const COCKTAILS = [
  {
    src: "/cocktails/4a0039fc91aff60a1fbf4c34a04d658a.jpg",
    name: "Golden Hour",
    ingredients: "Vodka, passion fruit, honey",
    recipe: [
      { item: "Vodka", amount: "45 ml" },
      { item: "Passion fruit juice", amount: "30 ml" },
      { item: "Honey syrup", amount: "15 ml" },
      { item: "Lime juice", amount: "10 ml" },
    ],
  },
  {
    src: "/cocktails/96ef2eab464e70d926c2d70dd5db9956.jpg",
    name: "Rose Petal",
    ingredients: "Gin, rose, elderflower",
    recipe: [
      { item: "Gin", amount: "45 ml" },
      { item: "Rose water", amount: "10 ml" },
      { item: "Elderflower cordial", amount: "15 ml" },
      { item: "Lemon juice", amount: "20 ml" },
    ],
  },
  {
    src: "/cocktails/342f30010defa1ba34fe573279c0f7a7.jpg",
    name: "Amber Dusk",
    ingredients: "Whisky, peach, ginger",
    recipe: [
      { item: "Bourbon whisky", amount: "50 ml" },
      { item: "Peach nectar", amount: "25 ml" },
      { item: "Ginger syrup", amount: "10 ml" },
      { item: "Angostura bitters", amount: "2 dashes" },
    ],
  },
  {
    src: "/cocktails/ac58925a5d82dfe149bd6e08199bec6a.jpg",
    name: "Berry Smash",
    ingredients: "Vodka, mixed berry, rosemary",
    recipe: [
      { item: "Vodka", amount: "50 ml" },
      { item: "Mixed berry puree", amount: "30 ml" },
      { item: "Rosemary syrup", amount: "10 ml" },
      { item: "Lemon juice", amount: "15 ml" },
    ],
  },
];

const SPACE_IMAGES = [
  "/the%20space/IMG_8014.JPG.jpeg",
  "/the%20space/IMG_8024.JPG.jpeg",
  "/the%20space/IMG_8025.JPG.jpeg",
  "/the%20space/IMG_8026.JPG.jpeg",
  "/the%20space/IMG_8027.JPG.jpeg",
  "/the%20space/IMG_8028.JPG.jpeg",
  "/the%20space/IMG_8035.PNG",
];

const FOOD_IMAGES = [
  "/food/621e873050f36fd458bd491185a71b8c.jpg",
  "/food/4970af37dd9d02df2f3218af9d1caab5.jpg",
  "/food/a093a5c743e451a09e110f6daafbcde6.jpg",
  "/food/IMG_8015.JPG.jpeg",
  "/food/IMG_8017.JPG.jpeg",
  "/food/IMG_8018.JPG.jpeg",
  "/food/IMG_8021.JPG.jpeg",
  "/food/IMG_8043.JPG.jpeg",
  "/food/IMG_8046.JPG.jpeg",
  "/food/479fc44ad67cd7508cf2d07fc39a5690.jpg",
];

export default function Home() {
  return (
    <main style={{ background: "var(--color-charcoal)" }}>
      <Preloader />
      <SiteAnimationsWrapper />

      {/* ── Fixed Nav ───────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-4"
        style={{
          background: "rgba(10,7,4,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Logo */}
        <div>
          <span
            className="text-base tracking-[0.28em] uppercase"
            style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif)", fontWeight: 700 }}
          >
            EMBER
          </span>
          <span
            className="ml-2 text-[9px] tracking-[0.22em] uppercase"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-sans)" }}
          >
            House of Drinks
          </span>
        </div>

        {/* Center nav */}
        <ul
          className="hidden md:flex items-center gap-8"
          style={{ padding: "0 28px" }}
        >
          {["Home", "Menu", "About", "Gallery", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                style={{ color: "#ffffff", fontFamily: "var(--font-sans)", fontWeight: 600 }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span style={{ color: "var(--color-gold)", fontSize: "10px" }}>✦</span>
          <button
            className="px-5 py-2 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
            style={{
              border: "1px solid rgba(201,169,110,0.5)",
              color: "var(--color-gold)",
              borderRadius: "4px",
              fontFamily: "var(--font-sans)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
            }}
          >
            Reserve a Table
          </button>
          <span style={{ color: "var(--color-gold)", fontSize: "10px" }}>✦</span>
        </div>

        <button className="md:hidden flex flex-col gap-1.5" aria-label="Menu">
          <span className="block w-5 h-px" style={{ background: "var(--color-ivory)" }} />
          <span className="block w-5 h-px" style={{ background: "var(--color-ivory)" }} />
          <span className="block w-3 h-px" style={{ background: "var(--color-ivory)" }} />
        </button>
      </nav>

      {/* ── Hero Scroll Canvas ───────────────────────────────────────── */}
      <CanvasWrapper />

      {/* ── Offer Ticker — fixed bottom ─────────────────────────────── */}
      <div
        className="overflow-hidden fixed bottom-0 left-0 right-0 z-50"
        style={{ background: "var(--color-gold)", height: "34px", display: "flex", alignItems: "center" }}
      >
        <div className="ticker-track">
          {[
            "✦  Happy Hours 7 PM – 9 PM — 20% off all cocktails",
            "✦  Free dessert with every table booking this weekend",
            "✦  Live Jazz every Friday & Saturday night",
            "✦  Chef's special tasting menu — Book in advance",
            "✦  Birthday celebrations? Ask us about our exclusive package",
            "✦  Happy Hours 7 PM – 9 PM — 20% off all cocktails",
            "✦  Free dessert with every table booking this weekend",
            "✦  Live Jazz every Friday & Saturday night",
            "✦  Chef's special tasting menu — Book in advance",
            "✦  Birthday celebrations? Ask us about our exclusive package",
          ].map((text, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#1a1208",
                paddingRight: "80px",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Features ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 reveal-3d" style={{ background: "var(--color-ivory)" }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            className="text-4xl md:text-5xl mb-5 italic"
            style={{ fontFamily: "var(--font-serif)", color: "#1a1208", fontWeight: 400 }}
          >
            Designed for a better night experience
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#5a5040", fontFamily: "var(--font-sans)" }}
          >
            EMBER brings together crafted drinks, warm ambience, and a relaxed social setting.
            Every detail is shaped to create a smooth and memorable evening.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto cards-3d-group">
          {FEATURES.map(({ src, title, desc }) => (
            <div key={title} className="flex flex-col card-3d-item tilt-card">
              <div className="aspect-[4/5] overflow-hidden mb-4" style={{ borderRadius: "2px" }}>
                <img src={src} alt={title} className="w-full h-full object-cover" />
              </div>
              <h3
                className="text-sm font-semibold mb-1 text-center"
                style={{ color: "#1a1208", fontFamily: "var(--font-serif)" }}
              >
                {title}
              </h3>
              <p
                className="text-xs text-center leading-relaxed"
                style={{ color: "#7a6e60", fontFamily: "var(--font-sans)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bento Showcase ──────────────────────────────────────────── */}
      <BentoSection />

      {/* ── Signature Cocktails ──────────────────────────────────────── */}
      <section
        className="py-20 px-6 md:px-16 relative overflow-hidden reveal-3d"
        style={{ background: "#cc1a1a" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0.06 }}
        >
          <span
            className="text-[20vw] font-bold tracking-tight"
            style={{ color: "#fff", fontFamily: "var(--font-serif)" }}
          >
            E
          </span>
        </div>

        <div className="relative text-center mb-12">
          <h2
            className="text-4xl md:text-5xl mb-3"
            style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Signature Cocktails
          </h2>
          <p
            className="text-sm"
            style={{ color: "rgba(245,240,232,0.7)", fontFamily: "var(--font-sans)" }}
          >
            A focused selection of house creations and classics
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-5 max-w-3xl mx-auto cards-3d-group cocktail-grid">
          {COCKTAILS.map(({ src, name, ingredients, recipe }) => (
            <div key={name} className="flex flex-col card-3d-item tilt-card group">
              <div className="relative aspect-[4/3] overflow-hidden mb-4" style={{ borderRadius: "2px" }}>
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Recipe overlay — slides up on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ background: "rgba(8,5,3,0.93)", padding: "18px 16px" }}
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.28em] mb-3"
                    style={{ color: "var(--color-gold)", fontFamily: "var(--font-sans)" }}
                  >
                    Recipe
                  </p>
                  {recipe.map(({ item, amount }) => (
                    <div key={item} className="flex items-center justify-between mb-2 last:mb-0">
                      <span
                        className="text-xs"
                        style={{ color: "rgba(245,240,232,0.6)", fontFamily: "var(--font-sans)" }}
                      >
                        {item}
                      </span>
                      <span
                        className="text-xs font-medium tracking-wide"
                        style={{ color: "var(--color-ivory)", fontFamily: "var(--font-sans)" }}
                      >
                        {amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start justify-between px-1 gap-2">
                <span
                  className="italic text-sm"
                  style={{ color: "var(--color-gold-light)", fontFamily: "var(--font-serif)" }}
                >
                  {name}
                </span>
                <span
                  className="text-xs text-right"
                  style={{ color: "rgba(245,240,232,0.6)", fontFamily: "var(--font-sans)" }}
                >
                  {ingredients}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex justify-center mt-12">
          <button
            className="px-8 py-3 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
            style={{
              border: "1px solid var(--color-ivory)",
              color: "var(--color-ivory)",
              fontFamily: "var(--font-sans)",
              background: "transparent",
            }}
          >
            Explore Full Menu
          </button>
        </div>
      </section>

      {/* ── Clean & Neat Cooking ────────────────────────────────────── */}
      <CookingCanvasWrapper />

      {/* ── Dining ──────────────────────────────────────────────────── */}
      <section className="py-20 reveal-3d" style={{ background: "var(--color-charcoal)" }}>
        <div className="text-center mb-12 px-6">
          <p
            className="text-xs uppercase tracking-[0.28em] mb-4"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-sans)" }}
          >
            Food & Drinks
          </p>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Dining at Ember
          </h2>
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(245,240,232,0.5)", fontFamily: "var(--font-sans)" }}
          >
            A concise kitchen menu — honest plates built around clean ingredients and careful prep.
          </p>
        </div>

        <ExpandingGallery
          cards={[
            { src: FOOD_IMAGES[0], label: "Candlelit Dining" },
            { src: FOOD_IMAGES[1], label: "Brunch Table" },
            { src: FOOD_IMAGES[2], label: "Espresso Bar" },
            { src: FOOD_IMAGES[3], label: "Pour Over" },
            { src: FOOD_IMAGES[4], label: "Morning Plate" },
            { src: FOOD_IMAGES[5], label: "Coffee Selection" },
            { src: FOOD_IMAGES[6], label: "Craft Beer" },
            { src: FOOD_IMAGES[7], label: "Chef's Plate" },
            { src: FOOD_IMAGES[8], label: "Kitchen Craft" },
            { src: FOOD_IMAGES[9], label: "Evening Dining" },
          ]}
        />
      </section>

      {/* ── The Space ───────────────────────────────────────────────── */}
      <SpaceMarquee />

      {/* ── The Idea Behind EMBER ───────────────────────────────────── */}
      <section
        className="reveal-3d ember-idea-grid"
        style={{ position: "relative", display: "grid", gridTemplateColumns: "2fr 3fr", minHeight: "540px" }}
      >
        <div
          className="flex flex-col justify-center px-8 md:px-14 py-16 md:py-20"
          style={{ background: "#3d4a2a" }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: 24, height: 1, background: "var(--color-gold)", opacity: 0.7 }} />
            <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Our Story
            </span>
          </div>

          <h2
            className="mb-5 leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#fff" }}
          >
            The Idea<br />Behind <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>EMBER</em>
          </h2>

          <div style={{ width: 36, height: 1, background: "var(--color-gold)", opacity: 0.5, marginBottom: "1.4rem" }} />

          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)", maxWidth: "320px" }}>
            EMBER means warmth. The concept of glow shapes the space, the service, and the overall experience — creating a setting where conversations feel natural and time moves slowly.
          </p>

          <button
            style={{
              alignSelf: "flex-start",
              padding: "12px 28px",
              background: "var(--color-gold)",
              color: "#1a1208",
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 700,
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Know More About Us
          </button>
        </div>

        <div className="relative overflow-hidden ember-idea-image" style={{ minHeight: "380px" }}>
          <img
            src="/the%20space/IMG_8023.PNG"
            alt="Ember interior"
            className="absolute w-full object-cover parallax-img"
            style={{ height: "calc(100% + 80px)", top: "-40px", left: 0, objectPosition: "center 30%" }}
          />

          {/* Green S-curve overlay on left edge of image */}
          <svg
            viewBox="0 0 100 500"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "80px",
              zIndex: 5,
              pointerEvents: "none",
            }}
          >
            <path
              d="M 0 0 L 60 0 C 120 166, -20 334, 60 500 L 0 500 Z"
              fill="#3d4a2a"
            />
          </svg>

        </div>
      </section>

      {/* ── Plan Your Visit ─────────────────────────────────────────── */}
      <section className="reveal-3d plan-visit-section" style={{ background: "var(--color-ivory)", padding: "100px 80px" }}>
        <div style={{ marginBottom: "72px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--color-gold-dark)", marginBottom: "14px" }}>
            Come & Find Us
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#1a1208" }}>
            Plan Your Visit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 plan-cols" style={{ gap: "80px" }}>
          {[
            {
              label: "Hours & Location",
              lines: [
                { text: "7:00 PM — 1:00 AM", style: { color: "#1a1208", fontSize: "1rem", fontWeight: 600, fontFamily: "var(--font-serif)" } },
                { text: "Open every day of the week", style: { color: "#a09080", fontSize: "0.8rem", fontFamily: "var(--font-sans)" } },
                { text: "14A, 3rd Floor, Coastal Avenue", style: { color: "#6b5e50", fontSize: "0.82rem", fontFamily: "var(--font-sans)", marginTop: "12px" } },
                { text: "Indiranagar, Bengaluru — 560038", style: { color: "#6b5e50", fontSize: "0.82rem", fontFamily: "var(--font-sans)" } },
              ]
            },
            {
              label: "Get in Touch",
              lines: [
                { text: "+91 98765 43210", style: { color: "#1a1208", fontSize: "1rem", fontWeight: 600, fontFamily: "var(--font-serif)" } },
                { text: "hello@emberhouseofdrinks.in", style: { color: "#a09080", fontSize: "0.8rem", fontFamily: "var(--font-sans)" } },
                { text: "We respond within a few hours", style: { color: "#6b5e50", fontSize: "0.8rem", fontFamily: "var(--font-sans)", marginTop: "12px" } },
              ]
            },
            {
              label: "Reservations",
              lines: [
                { text: "Booking recommended", style: { color: "#1a1208", fontSize: "1rem", fontWeight: 600, fontFamily: "var(--font-serif)" } },
                { text: "Walk-ins welcome on availability", style: { color: "#a09080", fontSize: "0.8rem", fontFamily: "var(--font-sans)" } },
                { text: "Private events & groups of 6+ — please call ahead", style: { color: "#6b5e50", fontSize: "0.8rem", fontFamily: "var(--font-sans)", marginTop: "12px", lineHeight: "1.7" } },
              ]
            },
          ].map(({ label, lines }) => (
            <div key={label}>
              <p style={{ color: "var(--color-gold-dark)", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "16px" }}>
                {label}
              </p>
              <div style={{ width: 20, height: 1, background: "var(--color-gold)", opacity: 0.6, marginBottom: "20px" }} />
              {lines.map((line, i) => (
                <p key={i} style={{ lineHeight: 1.8, ...line.style }}>
                  {line.text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Reserve Your Table ──────────────────────────────────────── */}
      <section className="relative overflow-hidden reveal-3d" style={{ minHeight: "420px" }}>
        <img
          src="/the%20space/IMG_8027.JPG.jpeg"
          alt=""
          className="absolute w-full object-cover parallax-img"
          style={{ height: "calc(100% + 80px)", top: "-40px", left: 0 }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,7,5,0.28)" }} />
        <div className="relative flex flex-col items-center justify-center h-full min-h-[420px] text-center px-6 py-20">
          <h2
            className="reserve-heading text-4xl md:text-6xl mb-3"
            style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Reserve Your Table
          </h2>
          <p
            className="text-sm mb-10"
            style={{ color: "rgba(245,240,232,0.65)", fontFamily: "var(--font-sans)" }}
          >
            Secure your spot for the evening
          </p>
          <button
            className="px-8 py-3 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
            style={{
              border: "1px solid var(--color-ivory)",
              color: "var(--color-ivory)",
              fontFamily: "var(--font-sans)",
              background: "transparent",
            }}
          >
            Book Now
          </button>
        </div>
      </section>

    </main>
  );
}
