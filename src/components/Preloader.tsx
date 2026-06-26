"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 800);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0704",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo */}
      <div
        style={{
          marginBottom: "40px",
          animation: "preloader-rise 0.9s ease forwards",
          opacity: 0,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-ivory)",
          }}
        >
          EMBER
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            textAlign: "center",
            marginTop: "6px",
          }}
        >
          House of Drinks
        </p>
      </div>

      {/* Loading bar */}
      <div
        style={{
          width: "120px",
          height: "1px",
          background: "rgba(255,255,255,0.1)",
          position: "relative",
          overflow: "hidden",
          animation: "preloader-rise 0.9s ease 0.2s forwards",
          opacity: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--color-gold)",
            transformOrigin: "left",
            animation: "preloader-bar 2s ease forwards",
          }}
        />
      </div>

      {/* Loading text */}
      <p
        style={{
          marginTop: "20px",
          fontFamily: "var(--font-sans)",
          fontSize: "9px",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(245,240,232,0.3)",
          animation: "preloader-rise 0.9s ease 0.4s forwards",
          opacity: 0,
        }}
      >
        Loading
      </p>
    </div>
  );
}
