"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const FRAME_PATH = (n: number) =>
  `/hero%20section%20scroll/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

const STORY_SCENES = [
  {
    from: 60, to: 110,
    label: "The Atmosphere",
    text: "Every corner of Ember is lit with intention — warm, amber, unhurried.",
    align: "right" as const,
  },
  {
    from: 130, to: 180,
    label: "The Craft",
    text: "Each drink is a deliberate act. Built slowly, tasted carefully, served with pride.",
    align: "left" as const,
  },
  {
    from: 200, to: 248,
    label: "The People",
    text: "Come for the cocktails. Stay for the feeling of being exactly where you should be.",
    align: "right" as const,
  },
  {
    from: 260, to: 299,
    label: "The Evening",
    text: "When the city slows down, Ember comes alive. Book your table for tonight.",
    align: "left" as const,
  },
];

function preloadImages(): Promise<HTMLImageElement[]> {
  const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
  let loaded = 0;
  return new Promise((resolve) => {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i + 1);
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) resolve(images);
      };
      images[i] = img;
    }
  });
}

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef({ index: 0 });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeStoryRef = useRef(-1);
  const [storyIdx, setStoryIdx] = useState(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameRef.current.index);
    }

    function drawFrame(index: number) {
      if (!canvas || !ctx) return;
      const img = imagesRef.current[index];
      if (!img?.complete || !img.naturalWidth) return;
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    }

    window.addEventListener("resize", resize);
    resize();

    // Draw first frame as it loads
    const firstImg = new Image();
    firstImg.src = FRAME_PATH(1);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      drawFrame(0);
    };

    // Background preload rest
    preloadImages().then((images) => {
      imagesRef.current = images;
      drawFrame(frameRef.current.index);
    });

    // Scroll-driven frame advance
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate(self) {
        const next = Math.min(TOTAL_FRAMES - 1, Math.floor(self.progress * (TOTAL_FRAMES - 1)));
        if (next !== frameRef.current.index) {
          frameRef.current.index = next;
          drawFrame(next);
        }
        const frame = next + 1;
        const newIdx = STORY_SCENES.findIndex((s) => frame >= s.from && frame <= s.to);
        if (newIdx !== activeStoryRef.current) {
          activeStoryRef.current = newIdx;
          setStoryIdx(newIdx);
        }
      },
    });

    // Fade hero overlay out as scroll starts
    if (overlay) {
      gsap.to(overlay, {
        opacity: 0,
        y: -40,
        ease: "power2.in",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "8% top",
          scrub: true,
        },
      });
    }

    return () => {
      window.removeEventListener("resize", resize);
      st.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />


        {/* Subtle left gradient for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.12) 45%, transparent 100%)" }}
        />

        {/* Subtle bottom vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 35%)" }}
        />

        {/* Hero overlay — fades on scroll */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex flex-col justify-center z-10 hero-text-overlay"
          style={{ paddingTop: "80px", paddingLeft: "6vw", paddingRight: "48%" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-7">
            <div style={{ width: 28, height: 1, background: "var(--color-gold)" }} />
            <p style={{
              color: "var(--color-gold)",
              fontFamily: "var(--font-sans)",
              fontSize: "9px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
            }}>
              House of Drinks
            </p>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              color: "#fff",
              fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "1.6rem",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Where Every Sip<br />
            Tells a <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Story</em>
          </h1>

          {/* Thin gold rule */}
          <div style={{ width: 48, height: 1, background: "var(--color-gold)", marginBottom: "1.4rem", opacity: 0.8 }} />

          {/* Subtitle */}
          <p
            className="hero-subtitle"
            style={{
              color: "rgba(245,240,232,0.65)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              lineHeight: 1.85,
              maxWidth: "340px",
              marginBottom: "2.4rem",
              letterSpacing: "0.03em",
            }}
          >
            Every sip, every plate, every moment —<br />
            crafted with intention. Ember is a sanctuary<br />
            for those who savour the slow.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap" style={{ marginBottom: "3rem" }}>
            <button
              className="hero-btn"
              style={{
                padding: "13px 34px",
                background: "var(--color-gold)",
                color: "#1a1208",
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 700,
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(201,169,110,0.35)",
              }}
            >
              Book Dining
            </button>
            <button
              className="hero-btn"
              style={{
                padding: "13px 34px",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "rgba(245,240,232,0.9)",
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 500,
                border: "1px solid rgba(245,240,232,0.22)",
                borderRadius: "2px",
                cursor: "pointer",
              }}
            >
              Explore Menu
            </button>
          </div>

          {/* Scroll dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: i === 0 ? 22 : 7,
                  height: 7,
                  borderRadius: 99,
                  background: i === 0 ? "var(--color-gold)" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Story panels — appear during scroll */}
        {storyIdx >= 0 && (() => {
          const s = STORY_SCENES[storyIdx];
          return (
            <div
              key={storyIdx}
              className="absolute pointer-events-none z-20 story-panel"
              style={{
                bottom: "12%",
                ...(s.align === "right" ? { right: "5vw" } : { left: "5vw" }),
                maxWidth: "320px",
                animation: "story-fade-in 0.6s ease forwards",
              }}
            >
              <p style={{
                color: "var(--color-gold)",
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                marginBottom: "10px",
                textAlign: s.align,
              }}>
                {s.label}
              </p>
              <div style={{
                width: 28,
                height: 1,
                background: "var(--color-gold)",
                opacity: 0.6,
                marginBottom: "12px",
                marginLeft: s.align === "right" ? "auto" : 0,
              }} />
              <p style={{
                color: "rgba(245,240,232,0.85)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                fontWeight: 400,
                lineHeight: 1.6,
                textAlign: s.align,
                textShadow: "0 2px 20px rgba(0,0,0,0.6)",
              }}>
                {s.text}
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
