"use client";

import { useState } from "react";

const IMAGES = [
  { src: "/the%20space/01.jpg", label: "Ship Pool Deck", desc: "Infinity pools at sea — where luxury meets the horizon.", objectPosition: "center center", gridColumn: "1 / 2", gridRow: "1 / 3" },
  { src: "/the%20space/43f383b09e9d2766d9b3b9bb64425a06.jpg", label: "Cocktails Poolside", desc: "Sip crafted cocktails as the sun sets over open water.", objectPosition: "center center" },
  { src: "/the%20space/55b1db0a67affd185896fd47c56359a0.jpg", label: "Tropical Drinks", desc: "Handcrafted tropical drinks to match the ocean breeze.", objectPosition: "center 60%" },
  { src: "/the%20space/0891f9bc0a60be5edb21cf3bcacad989.jpg", label: "Poolside Lounge", desc: "Lounge in style as the world floats gently by.", objectPosition: "center center" },
  { src: "/the%20space/18334a9f073c6f22ee6662e969e83573.jpg", label: "Fresh Drinks", desc: "Every glass crafted to perfection, every moment.", objectPosition: "center center", gridColumn: "3 / 4" },
  { src: "/the%20space/1dada97c9cae23d569df47d1a2432652.jpg", label: "Rooftop Pool", desc: "Sky-high pool decks with views that go on forever.", objectPosition: "center center", gridColumn: "4 / 5" },
];

export default function PoolGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "270px 270px", gap: "12px" }}>

      {/* Large left — spans 2 rows */}
      {(() => {
        const card = IMAGES[0];
        const i = 0;
        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ gridRow: "1 / 3", borderRadius: "18px", overflow: "hidden", position: "relative", cursor: "pointer" }}
          >
            <img src={card.src} alt={card.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.objectPosition, transform: hovered === i ? "scale(1.06)" : "scale(1)", transition: "transform 0.55s ease" }} />
            <div style={{ position: "absolute", inset: 0, background: hovered === i ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)" : "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)", transition: "background 0.4s ease" }} />
            <span style={{ position: "absolute", left: 18, color: "#fff", fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", transition: "bottom 0.35s ease", ...(hovered === i ? { bottom: 56 } : { bottom: 18 }) }}>{card.label}</span>
            <div style={{ position: "absolute", bottom: 18, left: 18, right: 18, opacity: hovered === i ? 1 : 0, transform: hovered === i ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}>
              <p style={{ color: "rgba(220,230,255,0.8)", fontFamily: "var(--font-sans)", fontSize: "0.78rem", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
            </div>
            <div style={{ position: "absolute", top: 14, right: 14, width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", opacity: hovered === i ? 1 : 0, transform: hovered === i ? "scale(1)" : "scale(0.7)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
              <span style={{ color: "#fff", fontSize: "13px" }}>↗</span>
            </div>
          </div>
        );
      })()}

      {/* Top middle */}
      {[1, 2].map((i) => {
        const card = IMAGES[i];
        return (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ borderRadius: "18px", overflow: "hidden", position: "relative", cursor: "pointer" }}>
            <img src={card.src} alt={card.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.objectPosition, transform: hovered === i ? "scale(1.07)" : "scale(1)", transition: "transform 0.55s ease" }} />
            <div style={{ position: "absolute", inset: 0, background: hovered === i ? "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)" : "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)", transition: "background 0.4s ease" }} />
            <span style={{ position: "absolute", left: 14, color: "#fff", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", transition: "bottom 0.35s ease", ...(hovered === i ? { bottom: 50 } : { bottom: 14 }) }}>{card.label}</span>
            <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, opacity: hovered === i ? 1 : 0, transform: hovered === i ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}>
              <p style={{ color: "rgba(220,230,255,0.8)", fontFamily: "var(--font-sans)", fontSize: "0.72rem", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
            </div>
            <div style={{ position: "absolute", top: 12, right: 12, width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", opacity: hovered === i ? 1 : 0, transform: hovered === i ? "scale(1)" : "scale(0.7)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
              <span style={{ color: "#fff", fontSize: "12px" }}>↗</span>
            </div>
          </div>
        );
      })}

      {/* Bottom middle */}
      {(() => {
        const i = 3;
        const card = IMAGES[i];
        return (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ borderRadius: "18px", overflow: "hidden", position: "relative", cursor: "pointer" }}>
            <img src={card.src} alt={card.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.objectPosition, transform: hovered === i ? "scale(1.07)" : "scale(1)", transition: "transform 0.55s ease" }} />
            <div style={{ position: "absolute", inset: 0, background: hovered === i ? "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)" : "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)", transition: "background 0.4s ease" }} />
            <span style={{ position: "absolute", left: 14, color: "#fff", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", transition: "bottom 0.35s ease", ...(hovered === i ? { bottom: 50 } : { bottom: 14 }) }}>{card.label}</span>
            <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, opacity: hovered === i ? 1 : 0, transform: hovered === i ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}>
              <p style={{ color: "rgba(220,230,255,0.8)", fontFamily: "var(--font-sans)", fontSize: "0.72rem", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
            </div>
            <div style={{ position: "absolute", top: 12, right: 12, width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", opacity: hovered === i ? 1 : 0, transform: hovered === i ? "scale(1)" : "scale(0.7)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
              <span style={{ color: "#fff", fontSize: "12px" }}>↗</span>
            </div>
          </div>
        );
      })()}

      {/* Bottom right — 2 small images */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {[4, 5].map((i) => {
          const card = IMAGES[i];
          return (
            <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ borderRadius: "14px", overflow: "hidden", position: "relative", cursor: "pointer" }}>
              <img src={card.src} alt={card.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.objectPosition, transform: hovered === i ? "scale(1.08)" : "scale(1)", transition: "transform 0.55s ease" }} />
              <div style={{ position: "absolute", inset: 0, background: hovered === i ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)", transition: "background 0.4s ease" }} />
              <span style={{ position: "absolute", left: 10, color: "#fff", fontFamily: "var(--font-sans)", fontSize: "8px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", transition: "bottom 0.35s ease", ...(hovered === i ? { bottom: 44 } : { bottom: 10 }) }}>{card.label}</span>
              <div style={{ position: "absolute", bottom: 10, left: 10, right: 10, opacity: hovered === i ? 1 : 0, transform: hovered === i ? "translateY(0)" : "translateY(8px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}>
                <p style={{ color: "rgba(220,230,255,0.8)", fontFamily: "var(--font-sans)", fontSize: "0.62rem", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
