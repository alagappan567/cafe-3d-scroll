"use client";

import { useRef, useState, useCallback } from "react";

const STATS = [
  { value: "60+", label: "Destinations Worldwide" },
  { value: "12", label: "Years at Sea" },
  { value: "98%", label: "Guest Satisfaction" },
  { value: "5★", label: "Luxury Rating" },
];

export default function AboutStats() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (y - 0.5) * -18,
      ry: (x - 0.5) * 18,
      mx: x * 100,
      my: y * 100,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });
  }, []);

  return (
    <section style={{ position: "relative", background: "#0d1117", overflow: "hidden" }}>

      {/* Curved top divider */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "90px" }}>
          <path d="M0,0 C360,90 1080,90 1440,0 L1440,0 L0,0 Z" fill="#07090f" />
        </svg>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "110px 56px 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

        {/* Left — text block */}
        <div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "20px" }}>
            Why Sail With NAVIS
          </p>

          <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "24px" }}>
            The Ocean<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Is Your World.</span>
          </h2>

          <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, maxWidth: "440px", marginBottom: "48px" }}>
            NAVIS is where the sea becomes your sanctuary. From infinity pools above the horizon to candlelit dinners under the stars — every moment aboard is crafted to exceed expectation. This is not just a cruise. This is a lifestyle.
          </p>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "40px", marginBottom: "48px" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: "20px 0", borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none", paddingRight: i % 2 === 0 ? "32px" : "0", paddingLeft: i % 2 === 1 ? "32px" : "0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: "2.2rem", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "9px", color: "rgba(255,255,255,0.38)", letterSpacing: "0.25em", textTransform: "uppercase", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#fff", color: "#0d1117", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", border: "none", borderRadius: "10px", padding: "14px 28px", cursor: "pointer" }}>
            Explore Voyages <span style={{ fontSize: "15px" }}>›</span>
          </button>
        </div>

        {/* Right — 3D card */}
        <div style={{ perspective: "1000px" }}>
          {/* Glow behind */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: "-40px", background: `radial-gradient(ellipse at ${tilt.mx}% ${tilt.my}%, rgba(59,130,246,0.18) 0%, transparent 65%)`, borderRadius: "50%", pointerEvents: "none", transition: "background 0.1s ease" }} />

            {/* 3D card wrapper */}
            <div
              ref={cardRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                transformStyle: "preserve-3d",
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                transition: isHovered ? "transform 0.1s ease, box-shadow 0.3s ease" : "transform 0.6s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease",
                boxShadow: isHovered
                  ? "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)"
                  : "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Image */}
              <img
                src="/ship%20models/4cff0bc2fa0aee808326890d3dff78a3.jpg"
                alt="NAVIS vessel"
                style={{ width: "100%", height: "520px", objectFit: "cover", objectPosition: "center center", display: "block", transform: isHovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.55s ease" }}
              />

              {/* Bottom gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,17,23,0.65) 0%, transparent 50%)" }} />

              {/* Shine layer follows mouse */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.10) 0%, transparent 55%)`,
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }} />

              {/* Floating badge — lifted in 3D */}
              <div style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "14px",
                padding: "14px 20px",
                transform: "translateZ(30px)",
                transformStyle: "preserve-3d",
              }}>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1rem", color: "#fff", letterSpacing: "-0.01em" }}>5-Star · All Inclusive</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "8px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "3px" }}>Award-Winning Cruise Line</div>
              </div>

              {/* Top-right corner tag */}
              <div style={{
                position: "absolute",
                top: 18,
                right: 18,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
                padding: "6px 12px",
                transform: "translateZ(30px)",
                transformStyle: "preserve-3d",
              }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>NAVIS Fleet</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Curved bottom divider */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "90px" }}>
          <path d="M0,90 C360,0 1080,0 1440,90 L1440,90 L0,90 Z" fill="#0a0e1a" />
        </svg>
      </div>

    </section>
  );
}
