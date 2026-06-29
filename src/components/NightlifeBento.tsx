"use client";

import { useState } from "react";

const CARDS = [
  {
    img: "/designed%20for%20better%20experinece/3e02681ec91f4def8d883c0fa6aa5004.jpg",
    label: "DJ & Live Sets",
    desc: "World-class DJs spinning sets as the ocean stretches endlessly around you.",
    gridColumn: "1 / 3", gridRow: "1 / 3",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/4c9891b57000195c116d067e45754251.jpg",
    label: "Drinks With A View",
    desc: "Crafted cocktails served where the horizon never ends.",
    objectPosition: "center bottom",
  },
  {
    img: "/designed%20for%20better%20experinece/5cc854dc50aebc5c63e6d6867e5421cc.jpg",
    label: "Dance Floor",
    desc: "An open-air dancefloor under the stars, every night.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/18b95c852446fd37894db1c36d2d6d67.jpg",
    label: "Music Floor",
    desc: "Live saxophone, jazz sessions, and acoustic sets on deck.",
    objectPosition: "center bottom",
  },
  {
    img: "/designed%20for%20better%20experinece/50d89a6f2d4183e0c3ec3dbfec284390.jpg",
    label: "Sea Views",
    desc: "Every corner of the ship frames a breathtaking panorama.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/a4b48f8ec4ef12eb164d5be6d08074ff.jpg",
    label: "Music",
    desc: "The soundtrack to your voyage, curated for every mood.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/cd7c3c71ea73800270349aef08f89ffc.jpg",
    label: "Cocktails",
    desc: "Bespoke cocktail menus crafted by award-winning mixologists.",
    objectPosition: "center center",
  },
  {
    img: "/designed%20for%20better%20experinece/2c94fa773b4e02d052f067666bb68e33.jpg",
    label: "Rooftop Lounge",
    desc: "Golden hour drinks as the ship sails into the sunset.",
    gridColumn: "3 / 5",
    objectPosition: "center 65%",
  },
];

export default function NightlifeBento() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "290px 290px 220px",
      gap: "10px",
    }}>
      {CARDS.map((card, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            gridColumn: card.gridColumn,
            gridRow: card.gridRow,
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {/* Image */}
          <img
            src={card.img}
            alt={card.label}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: card.objectPosition,
              transform: hovered === i ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
            }}
          />

          {/* Base dark gradient */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: hovered === i
              ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
            transition: "background 0.4s ease",
          }} />

          {/* Purple tint on hover */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(99,60,180,0.28) 0%, transparent 60%)",
            opacity: hovered === i ? 1 : 0,
            transition: "opacity 0.4s ease",
          }} />

          {/* Label — always visible */}
          <span style={{
            position: "absolute",
            bottom: hovered === i ? "auto" : 16,
            top: hovered === i ? "auto" : "auto",
            left: 16,
            color: "#fff",
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.9,
            transition: "bottom 0.3s ease",
            ...(hovered === i ? { bottom: 56 } : { bottom: 16 }),
          }}>
            {card.label}
          </span>

          {/* Description — slides in on hover */}
          <div style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            right: 16,
            opacity: hovered === i ? 1 : 0,
            transform: hovered === i ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
          }}>
            <p style={{
              color: "rgba(220,230,255,0.75)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              lineHeight: 1.7,
              margin: 0,
            }}>
              {card.desc}
            </p>
          </div>

          {/* Top-right arrow — appears on hover */}
          <div style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered === i ? 1 : 0,
            transform: hovered === i ? "scale(1)" : "scale(0.7)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}>
            <span style={{ color: "#fff", fontSize: "13px" }}>↗</span>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes nightlife-label-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
