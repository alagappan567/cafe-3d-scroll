"use client";

import { useState } from "react";

interface Card {
  src: string;
  label: string;
}

export default function ExpandingGallery({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState(0);

  return (
    <div
      className="flex gap-[6px] px-6 md:px-16 expanding-gallery-wrap"
      style={{ height: "520px" }}
      onMouseLeave={() => setActive(0)}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          onMouseEnter={() => setActive(i)}
          style={{
            flex: active === i ? 5 : 1,
            transition: "flex 0.65s cubic-bezier(0.25, 1, 0.5, 1)",
            borderRadius: "3px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
            minWidth: "48px",
          }}
        >
          {/* Image */}
          <img
            src={card.src}
            alt={card.label}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: active === i ? "brightness(1)" : "brightness(0.75)",
              transition: "filter 0.65s ease, transform 0.65s ease",
              transform: active === i ? "scale(1.04)" : "scale(1)",
            }}
          />

          {/* Dark overlay on inactive */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: active === i ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.35)",
              transition: "background 0.65s ease",
            }}
          />

          {/* Vertical label — always visible */}
          <div
            style={{
              position: "absolute",
              bottom: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(50%) rotate(90deg)",
              opacity: active === i ? 0 : 1,
              transition: "opacity 0.3s ease",
              color: "white",
              fontFamily: "var(--font-serif)",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            {card.label}
          </div>

          {/* Expanded label at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              opacity: active === i ? 1 : 0,
              transform: active === i ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s",
              pointerEvents: "none",
            }}
          >
            <p
              style={{
                color: "var(--color-gold)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Ember
            </p>
            <h3
              style={{
                color: "white",
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
              }}
            >
              {card.label}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
