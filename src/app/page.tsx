import CanvasWrapper from "@/components/CanvasWrapper";
import Preloader from "@/components/Preloader";
import FeatureCards from "@/components/FeatureCards";
import ThirdCanvasWrapper from "@/components/ThirdCanvasWrapper";
import FifthCanvasWrapper from "@/components/FifthCanvasWrapper";
import OceanSceneWrapper from "@/components/OceanSceneWrapper";
import NightlifeBento from "@/components/NightlifeBento";
import PoolGallery from "@/components/PoolGallery";
import AboutStats from "@/components/AboutStats";

const FEATURE_CARDS = [
  {
    label: "Infinity Pool",
    title: "Pool Deck\nat Sea",
    desc: "Swim above the horizon — our open-air infinity pools offer panoramic ocean views from every angle.",
    img: "/ship%20models/45f5b7ba025092b8c84639f14405bd4c.jpg",
    price: "From $1,299",
    priceNote: "Per person / 7 nights",
  },
  {
    label: "Fine Dining",
    title: "World-Class\nCuisine",
    desc: "Five-star menus crafted by award-winning chefs — served with the ocean as your backdrop, every night.",
    img: "/ship%20models/a9d5ba8d2cdabd4fa7f5b541387b4c67.jpg",
    price: "Included",
    priceNote: "All dining on board",
  },
  {
    label: "Nightlife",
    title: "Nights That\nNever End",
    desc: "Rooftop bars, live DJ sets, open-air dancing and handcrafted cocktails under a canopy of stars.",
    img: "/ship%20models/d8c6ed0956126370c4c524f03720ffd6.jpg",
    price: "Included",
    priceNote: "All entertainment",
  },
  {
    label: "Luxury Cabins",
    title: "Your Suite\nAt Sea",
    desc: "Ocean-view suites designed for rest and indulgence — private balconies, premium linens, 24-hr service.",
    img: "/ship%20models/4cff0bc2fa0aee808326890d3dff78a3.jpg",
    price: "Suite Upgrade",
    priceNote: "From $400 / night",
  },
];

const FEATURES_GRID = [
  {
    icon: "◈",
    title: "Control Your Build",
    desc: "Set milestones, receive real-time alerts, and communicate directly with your project manager through your client portal.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable",
    desc: "Data updated every shift. No delays, no bottlenecks — just accurate progress straight from the shipyard floor.",
  },
  {
    icon: "◎",
    title: "Smart Engineering",
    desc: "Our CAD and simulation systems analyse hull designs and propose optimal solutions before a single cut is made.",
  },
  {
    icon: "⬡",
    title: "Data Security",
    desc: "Your designs and specifications are encrypted and stored securely. We never share your data with third parties.",
  },
];

const STATS = [
  { value: "250+", label: "Vessels delivered worldwide" },
  { value: "42", label: "Countries served" },
  { value: "35 yrs", label: "Of maritime engineering" },
];

export default function Home() {
  return (
    <main style={{ background: "var(--color-navy)" }}>
      <Preloader />

      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-4"
        style={{
          background: "rgba(10,14,26,0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-3">
          <div style={{ width: 32, height: 32, background: "var(--color-blue)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: "14px", fontWeight: 800, fontFamily: "var(--font-sans)" }}>N</span>
          </div>
          <div>
            <span style={{ color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em" }}>NAVIS</span>
            <span style={{ color: "var(--color-ivory-400)", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", marginLeft: "8px", textTransform: "uppercase" }}>Luxury Cruises</span>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {["Home", "Voyages", "Experience", "About", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className="text-[11px] uppercase tracking-[0.18em] hover:text-white transition-colors" style={{ color: "rgba(240,244,255,0.6)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:block px-5 py-2 text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-blue-600"
          style={{
            background: "var(--color-blue)",
            color: "#fff",
            borderRadius: "6px",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Book a Voyage
        </button>
      </nav>

      {/* ── Hero Scroll Canvas ───────────────────────────────────────── */}
      <CanvasWrapper />

      {/* ── Ticker ──────────────────────────────────────────────────── */}
      <div
        className="overflow-hidden fixed bottom-0 left-0 right-0 z-50"
        style={{ background: "var(--color-blue)", height: "34px", display: "flex", alignItems: "center" }}
      >
        <div className="ticker-track">
          {[
            "⬡  Voyages Across 60+ Destinations Worldwide",
            "⬡  5-Star Dining & Award-Winning Chefs On Board",
            "⬡  Infinity Pools, Rooftop Bars & Live Entertainment",
            "⬡  All-Inclusive Luxury From $1,299 Per Person",
            "⬡  Private Balcony Suites & Ocean-View Cabins",
            "⬡  Voyages Across 60+ Destinations Worldwide",
            "⬡  5-Star Dining & Award-Winning Chefs On Board",
            "⬡  Infinity Pools, Rooftop Bars & Live Entertainment",
            "⬡  All-Inclusive Luxury From $1,299 Per Person",
            "⬡  Private Balcony Suites & Ocean-View Cabins",
          ].map((text, i) => (
            <span key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", paddingRight: "80px" }}>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Feature Cards Row ────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0 72px" }}>

        {/* Section heading */}
        <div className="flex items-end justify-between" style={{ padding: "0 56px", marginBottom: "28px" }}>
          <div>
            <p style={{ color: "var(--color-blue)", fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "10px" }}>
              On Board Experience
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#0a0e1a", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Everything You Need<br />At Sea
            </h2>
          </div>
          <p style={{ color: "rgba(10,14,26,0.45)", fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.75, maxWidth: "300px", textAlign: "right" }}>
            Hover over each experience to discover what makes a NAVIS voyage unlike anything else at sea.
          </p>
        </div>

        {/* Cards */}
        <div style={{ padding: "0 56px" }}>
          <FeatureCards cards={FEATURE_CARDS} />
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end items-center gap-2" style={{ padding: "16px 56px 0" }}>
          <button style={{ width: 40, height: 40, borderRadius: "50%", background: "transparent", border: "1.5px solid rgba(10,14,26,0.2)", color: "#0a0e1a", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
          <button style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-blue)", border: "none", color: "#fff", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
        </div>
      </section>

      {/* ── Pool & Lifestyle Gallery ─────────────────────────────────── */}
      <section style={{ background: "var(--color-blue)", padding: "80px 56px 80px" }}>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "10px" }}>
                On Board Experience
              </p>
              <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Swimming Pool &amp; Drinks —<br />Enjoy the Daytime
              </h2>
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, maxWidth: "320px" }}>
              Unwind with handcrafted cocktails by the pool as the open sea stretches around you. Every voyage is a celebration.
            </p>
          </div>

          <PoolGallery />
        </div>
      </section>

      {/* ── Fifth Section Scroll ─────────────────────────────────────── */}
      <FifthCanvasWrapper />

      {/* ── Dining Gallery — Looping Cards ──────────────────────────── */}
      <section style={{ background: "#0a0e1a", padding: "80px 0" }}>

        {/* Heading */}
        <div style={{ padding: "0 56px", marginBottom: "48px" }}>
          <div className="flex items-end justify-between">
            <div>
              <p style={{ color: "var(--color-blue-light)", fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "10px" }}>
                On Board Dining
              </p>
              <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Fine Dining at Sea
              </h2>
            </div>
            <p style={{ color: "rgba(240,244,255,0.4)", fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, maxWidth: "300px", textAlign: "right" }}>
              World-class cuisine crafted by top chefs — served as the ocean stretches endlessly around you.
            </p>
          </div>
        </div>

        {/* Single looping marquee row */}
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "14px", animation: "dining-scroll-left 36s linear infinite", width: "max-content" }}>
            {[
              "3e89e2427357de51493acfd309f1080e",
              "45cebad721dcb1b6693c3c9b7a1b8102",
              "774a6771b7984b80244abae6159f7089",
              "ad26827251b614d261272b2a56a12feb",
              "ae6e894aa43df602520dd4546cad4a56",
              "b670992787657b215ff2bc419cd4e499",
              "dd174e58347bb25aa915950f7f26e429",
              "f88ab03826318f37d084e5f0f81d34b9",
              /* duplicate for seamless loop */
              "3e89e2427357de51493acfd309f1080e",
              "45cebad721dcb1b6693c3c9b7a1b8102",
              "774a6771b7984b80244abae6159f7089",
              "ad26827251b614d261272b2a56a12feb",
              "ae6e894aa43df602520dd4546cad4a56",
              "b670992787657b215ff2bc419cd4e499",
              "dd174e58347bb25aa915950f7f26e429",
              "f88ab03826318f37d084e5f0f81d34b9",
            ].map((file, i) => (
              <div key={i} style={{ width: "320px", height: "240px", borderRadius: "18px", overflow: "hidden", flexShrink: 0, position: "relative" }}>
                <img src={`/food/${file}.jpg`} alt="Dining" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }} />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes dining-scroll-left {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── Nightlife Experience — Bento Grid ───────────────────────── */}
      <section style={{ background: "#07090f", padding: "80px 56px 80px" }}>

        {/* Heading */}
        <div style={{ marginBottom: "44px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <p style={{ color: "#a78bfa", fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "10px" }}>
              On Board Experience
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              The Day Is Yours
            </h2>
          </div>
          <p style={{ color: "rgba(200,200,255,0.35)", fontFamily: "var(--font-sans)", fontSize: "0.8rem", lineHeight: 1.8, maxWidth: "280px", textAlign: "right" }}>
            DJ sets, rooftop parties, live music, curated drinks — every night at sea is an event.
          </p>
        </div>

        <NightlifeBento />
      </section>


      {/* ── About & Stats ───────────────────────────────────────────── */}
      <AboutStats />

      {/* ── Third Section Scroll ─────────────────────────────────────── */}
      <ThirdCanvasWrapper />

      {/* ── Plan Your Visit ──────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 56px 80px" }}>

        {/* Top info row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "40px", paddingBottom: "56px", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>

          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "10px" }}>Departures</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "#111", lineHeight: 1.75 }}>
              Year-round sailings<br />7, 10 & 14 night voyages<br />Private charters available
            </p>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "10px" }}>Home Port</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "#111", lineHeight: 1.75 }}>
              NAVIS Terminal, Pier 7<br />International Cruise Harbour<br />Port City — 560001
            </p>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "10px" }}>Reservations</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "#111", lineHeight: 1.75 }}>
              +91 98765 43210<br />voyages@navis.in
            </p>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "10px" }}>Inclusions</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "rgba(0,0,0,0.5)", lineHeight: 1.75 }}>
              All dining, entertainment & onboard activities included. Shore excursions available.
            </p>
          </div>

        </div>

        {/* Big CTA card */}
        <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", height: "440px", marginTop: "40px" }}>
          <img
            src="/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg"
            alt="Ship"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 70%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.18)" }} />

          {/* Text */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "14px" }}>
              Get Started
            </p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "12px" }}>
              Set Sail With NAVIS
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>
              Reserve your cabin and begin your luxury voyage at sea
            </p>
            <button style={{
              background: "#fff",
              color: "#0a0e1a",
              border: "none",
              borderRadius: "10px",
              padding: "14px 36px",
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}>
              Book a Voyage
            </button>
          </div>
        </div>
      </section>


    </main>
  );
}
