"use client";

import { useRef } from "react";
import gsap from "gsap";

const FAVOURITES = [
  "/food/IMG_8017.JPG.jpeg",
  "/food/IMG_8021.JPG.jpeg",
  "/food/IMG_8046.JPG.jpeg",
];

export default function BentoSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  function enter(ref: React.RefObject<HTMLDivElement>, toY: number) {
    gsap.to(ref.current, {
      rotateY: toY,
      rotateX: 0,
      translateZ: 60,
      scale: 1.03,
      boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 40px rgba(201,169,110,0.12)",
      duration: 0.55,
      ease: "power3.out",
    });
  }

  function leave(ref: React.RefObject<HTMLDivElement>, initialY: number) {
    gsap.to(ref.current, {
      rotateY: initialY,
      rotateX: 0,
      translateZ: 0,
      scale: 1,
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      duration: 0.7,
      ease: "power3.out",
    });
  }

  return (
    <section
      className="py-16 px-6 md:px-16 reveal-3d"
      style={{
        background: "var(--color-charcoal)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric depth background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(120,60,20,0.09) 0%, transparent 55%), radial-gradient(ellipse at 50% 80%, rgba(0,0,0,0.5) 0%, transparent 60%)",
        }}
      />

      {/* Perspective container */}
      <div style={{ perspective: "1400px", perspectiveOrigin: "50% 40%" }}>
        <div
          className="max-w-6xl mx-auto grid gap-3 bento-cards-grid"
          style={{
            gridTemplateColumns: "1fr 1.4fr 1fr",
            height: "600px",
            transformStyle: "preserve-3d",
          }}
        >

          {/* ── Left card ─────────────────────────────────── */}
          <div
            ref={leftRef}
            onMouseEnter={() => enter(leftRef, 0)}
            onMouseLeave={() => leave(leftRef, 10)}
            className="bento-card-item"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              transform: "perspective(1400px) rotateY(10deg)",
              transformStyle: "preserve-3d",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              transition: "none",
              cursor: "pointer",
            }}
          >
            <img
              src="/new%20section%20card/7d29c0c8c9fe562cc1ac21887a15c3a0.jpg"
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.5) 65%, rgba(5,3,2,0.92) 100%)",
              }}
            />
            {/* Top bar */}
            <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
              <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                EMBER
              </span>
              <div style={{ display: "flex", gap: 12 }}>
                {["Home", "Menu", "About"].map((l) => (
                  <span key={l} style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {l}
                  </span>
                ))}
              </div>
            </div>
            {/* Bottom overlay */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px", zIndex: 10 }}>
              <h3 style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.4, marginBottom: 14 }}>
                Ember —<br />a cozy place<br />made with love
              </h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                Our Favourites
              </p>
              <div style={{ display: "flex", gap: 6 }}>
                {FAVOURITES.map((src, i) => (
                  <div key={i} style={{ flex: 1, height: 72, borderRadius: 10, overflow: "hidden" }}>
                    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Center card ───────────────────────────────── */}
          <div
            ref={centerRef}
            onMouseEnter={() => enter(centerRef, 0)}
            onMouseLeave={() => leave(centerRef, 0)}
            className="bento-card-item"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              transform: "perspective(1400px) rotateY(0deg) translateZ(30px)",
              transformStyle: "preserve-3d",
              boxShadow: "0 30px 80px rgba(0,0,0,0.65), 0 0 50px rgba(201,169,110,0.08)",
              cursor: "pointer",
            }}
          >
            <img
              src="/new%20section%20card/8e0d25662a646f0e8d4c438f8fa17c02.jpg"
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%)",
              }}
            />
            <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  background: "rgba(201,169,110,0.92)",
                  color: "#1a1208",
                  borderRadius: 999,
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Order Online
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div style={{ position: "absolute", bottom: 28, left: 24, zIndex: 10 }}>
              <p style={{ color: "var(--color-gold)", fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                The Kitchen
              </p>
              <h2 style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 400, lineHeight: 1.2 }}>
                In the heart<br />of every cup
              </h2>
            </div>
          </div>

          {/* ── Right card ────────────────────────────────── */}
          <div
            ref={rightRef}
            onMouseEnter={() => enter(rightRef, 0)}
            onMouseLeave={() => leave(rightRef, -10)}
            className="bento-card-item"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              transform: "perspective(1400px) rotateY(-10deg)",
              transformStyle: "preserve-3d",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              background: "#1c1712",
              cursor: "pointer",
            }}
          >
            {/* Top image */}
            <div style={{ flex: "1 1 60%", position: "relative", overflow: "hidden" }}>
              <img
                src="/new%20section%20card/e3dbc3c28d1765f946dcefba8fe0e6ce.jpg"
                alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, rgba(10,7,4,0.92) 100%)",
                }}
              />
              <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right", zIndex: 10 }}>
                <h3 style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.35 }}>
                  Of the city,<br />every cup
                </h3>
              </div>
            </div>
            {/* Info panel */}
            <div style={{ flex: "0 0 auto", padding: "18px 20px", background: "#161210", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="#c9a96e" strokeWidth="1"/>
                    <path d="M5 2.5V5L6.5 6.5" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2 }}>Hours</p>
                  <p style={{ color: "var(--color-ivory)", fontFamily: "var(--font-sans)", fontSize: "11px" }}>Mon – Sun &nbsp;7:00 PM – 1:00 AM</p>
                </div>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)", fontSize: "9px", marginBottom: 2 }}>14A, 3rd Floor, Coastal Avenue, Indiranagar, Bengaluru</p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)", fontSize: "9px" }}>+91 98765 43210 · hello@emberhouseofdrinks.in</p>
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "var(--color-gold)",
                  color: "#1a1208",
                  borderRadius: 8,
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Reserve a Table →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
