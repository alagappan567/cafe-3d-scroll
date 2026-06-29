"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 900);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#070b14",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity: fadeOut ? 0 : 1,
      transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1)",
      pointerEvents: fadeOut ? "none" : "all",
    }}>

      {/* Radial glow bg */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Top rule */}
      <div style={{
        width: "40px",
        height: "1px",
        background: "rgba(255,255,255,0.15)",
        marginBottom: "36px",
        animation: "preloader-rise 0.8s ease 0.1s forwards",
        opacity: 0,
      }} />

      {/* NAVIS wordmark */}
      <div style={{
        animation: "preloader-rise 1s cubic-bezier(0.16,1,0.3,1) 0.15s forwards",
        opacity: 0,
        textAlign: "center",
        marginBottom: "6px",
      }}>
        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(3rem, 8vw, 5.5rem)",
          fontWeight: 700,
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "transparent",
          backgroundImage: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 40%, #fff 60%, rgba(255,255,255,0.55) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "200% 100%",
          animation: "preloader-shimmer 2.5s ease 0.5s infinite, preloader-rise 1s cubic-bezier(0.16,1,0.3,1) 0.15s forwards",
          margin: 0,
          lineHeight: 1,
        }}>
          NAVIS
        </p>
      </div>

      {/* Divider line */}
      <div style={{
        width: "180px",
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)",
        margin: "18px 0",
        animation: "preloader-rise 0.8s ease 0.4s forwards",
        opacity: 0,
      }} />

      {/* Subtitle */}
      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: "9px",
        fontWeight: 600,
        letterSpacing: "0.55em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.35)",
        animation: "preloader-rise 0.8s ease 0.5s forwards",
        opacity: 0,
        margin: 0,
        marginBottom: "48px",
      }}>
        Luxury Cruises
      </p>

      {/* Progress bar */}
      <div style={{
        width: "140px",
        height: "1px",
        background: "rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
        animation: "preloader-rise 0.8s ease 0.6s forwards",
        opacity: 0,
        borderRadius: "1px",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, var(--color-blue), #60a5fa)",
          transformOrigin: "left",
          animation: "preloader-bar 2.2s cubic-bezier(0.4,0,0.2,1) 0.3s forwards",
          transform: "scaleX(0)",
        }} />
      </div>

      {/* Loading label */}
      <p style={{
        marginTop: "16px",
        fontFamily: "var(--font-sans)",
        fontSize: "8px",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.2)",
        animation: "preloader-rise 0.8s ease 0.7s forwards",
        opacity: 0,
      }}>
        Loading
      </p>

      <style>{`
        @keyframes preloader-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}
