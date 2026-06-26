"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const FRAME_PATH = (n: number) =>
  `/third%20section%20scroll/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

const SCENES = [
  {
    from: 40, to: 85,
    dot: { x: 44, y: 58 },
    side: "left" as const,
    label: "PREP",
    title: "Mise en Place",
    body: "Every ingredient measured, trimmed and positioned before the first flame is lit. Clean prep is the foundation of clean food.",
  },
  {
    from: 86, to: 130,
    dot: { x: 55, y: 52 },
    side: "right" as const,
    label: "TECHNIQUE",
    title: "The Cut",
    body: "Confident, deliberate knife work. Uniform pieces cook uniformly — no guesswork, no waste left on the board.",
  },
  {
    from: 131, to: 175,
    dot: { x: 46, y: 60 },
    side: "left" as const,
    label: "HEAT",
    title: "Controlled Temperature",
    body: "Low and patient. We let the pan decide the pace. The right crust forms when it's ready — not when we're impatient.",
  },
  {
    from: 176, to: 220,
    dot: { x: 56, y: 50 },
    side: "right" as const,
    label: "TASTE",
    title: "Season & Adjust",
    body: "Tasted at every stage. Salt draws out, acid brightens. We season before we plate — never after.",
  },
  {
    from: 221, to: 262,
    dot: { x: 45, y: 55 },
    side: "left" as const,
    label: "RESET",
    title: "Clean Station",
    body: "Board cleared. Surfaces wiped between each step. A neat kitchen is a clear mind — and a clear mind makes honest food.",
  },
  {
    from: 263, to: 300,
    dot: { x: 54, y: 48 },
    side: "right" as const,
    label: "PLATE",
    title: "Intentional Plating",
    body: "Each element placed with purpose. Nothing unnecessary on the plate. The final edit — restrained and deliberate.",
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

export default function CookingScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef({ index: 0 });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeSceneIdxRef = useRef(-1);
  const [sceneIdx, setSceneIdx] = useState(-1);

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

    const firstImg = new Image();
    firstImg.src = FRAME_PATH(1);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      drawFrame(0);
    };

    preloadImages().then((images) => {
      imagesRef.current = images;
      drawFrame(frameRef.current.index);
    });

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
        const newIdx = SCENES.findIndex((s) => frame >= s.from && frame <= s.to);
        if (newIdx !== activeSceneIdxRef.current) {
          activeSceneIdxRef.current = newIdx;
          setSceneIdx(newIdx);
        }
      },
    });

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

  const scene = sceneIdx >= 0 ? SCENES[sceneIdx] : null;

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Left gradient for text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)" }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)" }}
        />

        {/* Hero overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex flex-col items-start justify-center z-10 cooking-text-overlay"
          style={{ paddingLeft: "6vw", paddingRight: "50%", paddingTop: "64px" }}
        >
          <p
            className="text-xs uppercase tracking-[0.28em] mb-5"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-sans)" }}
          >
            The Kitchen
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400, color: "var(--color-ivory)" }}
          >
            Clean flavours,<br />precise craft,<br />honest ingredients
          </h2>
          <div className="w-12 h-px mb-6" style={{ background: "var(--color-gold)", opacity: 0.7 }} />
          <p
            className="text-sm max-w-sm leading-relaxed cooking-subtitle"
            style={{ color: "rgba(245,240,232,0.7)", fontFamily: "var(--font-sans)" }}
          >
            Every plate is built with restraint — no excess, no clutter.
            Just clean technique and ingredients that speak for themselves.
          </p>
        </div>

        {/* Scene annotation */}
        {scene && (
          <div key={sceneIdx} className="absolute inset-0 pointer-events-none z-20" style={{ animation: "scene-in 0.5s ease forwards" }}>

            {/* Pulsing dot on the action point */}
            <div
              style={{
                position: "absolute",
                left: `${scene.dot.x}%`,
                top: `${scene.dot.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="cook-dot" />
            </div>

            {/* Text panel */}
            <div
              className="cooking-scene-panel"
              style={{
                position: "absolute",
                top: `${Math.max(18, Math.min(65, scene.dot.y - 12))}%`,
                ...(scene.side === "left"
                  ? { left: "4%" }
                  : { right: "4%" }),
                width: "230px",
                animation: "scene-text-in 0.6s ease 0.15s both",
              }}
            >
              {/* Connector line */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
                flexDirection: scene.side === "left" ? "row" : "row-reverse",
              }}>
                <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.8 }} />
                <span style={{
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}>
                  {scene.label}
                </span>
              </div>

              <h3 style={{
                color: "white",
                fontFamily: "var(--font-serif)",
                fontSize: "1.45rem",
                fontWeight: 400,
                lineHeight: 1.25,
                marginBottom: "10px",
                textAlign: scene.side === "left" ? "left" : "right",
              }}>
                {scene.title}
              </h3>

              <p style={{
                color: "rgba(245,240,232,0.65)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                lineHeight: 1.75,
                textAlign: scene.side === "left" ? "left" : "right",
              }}>
                {scene.body}
              </p>
            </div>


          </div>
        )}

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          style={{ color: "var(--color-ivory-400)" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-sans)" }}>
            Scroll
          </span>
          <div className="w-px h-8 bg-current opacity-40 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
