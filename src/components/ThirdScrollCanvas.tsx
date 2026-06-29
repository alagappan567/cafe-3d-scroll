"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const FRAME_PATH = (n: number) =>
  `/third%20section%20scroll/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

const STORY_SCENES = [
  {
    from: 1, to: 70,
    label: "Setting Sail",
    heading: "Where the\nHorizon Begins",
    text: "Every great voyage starts with a single moment — when the dock fades and open water stretches endlessly ahead of you.",
    align: "left" as const,
  },
  {
    from: 80, to: 150,
    label: "Life On Board",
    heading: "A World\nWithin a Ship",
    text: "From sunrise yoga on the deck to candlelit dinners under the stars — NAVIS vessels are built to make every hour extraordinary.",
    align: "right" as const,
  },
  {
    from: 160, to: 225,
    label: "The Experience",
    heading: "Crafted for\nThose Who Know",
    text: "Curated interiors, Michelin-inspired menus, and a crew trained to anticipate every need before it's spoken.",
    align: "left" as const,
  },
  {
    from: 235, to: 300,
    label: "Your Vessel",
    heading: "Built Around\nYour Vision",
    text: "No two NAVIS ships are alike. Every detail — from the hull profile to the cabin lighting — is shaped by one person: you.",
    align: "right" as const,
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

export default function ThirdScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef({ index: 0 });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeStoryRef = useRef(-1);
  const [storyIdx, setStoryIdx] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
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
      scrub: 0.6,
      onUpdate(self) {
        const next = Math.min(TOTAL_FRAMES - 1, Math.floor(self.progress * (TOTAL_FRAMES - 1)));
        if (next !== frameRef.current.index) {
          frameRef.current.index = next;
          drawFrame(next);
        }
        const frame = next + 1;
        const newIdx = STORY_SCENES.findIndex((s) => frame >= s.from && frame <= s.to);
        if (newIdx !== -1 && newIdx !== activeStoryRef.current) {
          activeStoryRef.current = newIdx;
          setStoryIdx(newIdx);
        }
      },
    });

    return () => {
      window.removeEventListener("resize", resize);
      st.kill();
    };
  }, []);

  const scene = STORY_SCENES[storyIdx];

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Dark vignette overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)"
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 40%)"
        }} />

        {/* Top section label */}
        <div className="absolute top-10 left-0 right-0 flex items-center justify-center z-20 pointer-events-none">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.4)" }} />
            <p style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-sans)",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
            }}>
              The NAVIS Experience
            </p>
            <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.4)" }} />
          </div>
        </div>

        {/* Story panel */}
        {scene && (
          <div
            key={storyIdx}
            className="absolute z-20 pointer-events-none"
            style={{
              bottom: "14%",
              ...(scene.align === "right" ? { right: "6vw", textAlign: "right" } : { left: "6vw", textAlign: "left" }),
              maxWidth: "380px",
              animation: "third-story-in 0.55s cubic-bezier(0.4,0,0.2,1) forwards",
            }}
          >
            <p style={{
              color: "var(--color-blue-light)",
              fontFamily: "var(--font-sans)",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              {scene.label}
            </p>
            <div style={{
              width: 28, height: 2,
              background: "var(--color-blue-light)",
              marginBottom: "16px",
              marginLeft: scene.align === "right" ? "auto" : 0,
            }} />
            <h2 style={{
              color: "#fff",
              fontFamily: "var(--font-sans)",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "14px",
              textShadow: "0 2px 30px rgba(0,0,0,0.7)",
              whiteSpace: "pre-line",
            }}>
              {scene.heading}
            </h2>
            <p style={{
              color: "rgba(240,244,255,0.7)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              lineHeight: 1.85,
              textShadow: "0 1px 12px rgba(0,0,0,0.5)",
            }}>
              {scene.text}
            </p>
          </div>
        )}

        {/* Progress dots */}
        <div className="absolute z-20 pointer-events-none" style={{
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}>
          {STORY_SCENES.map((_, i) => (
            <div key={i} style={{
              width: i === storyIdx ? 24 : 7,
              height: 7,
              borderRadius: 99,
              background: i === storyIdx ? "var(--color-blue-light)" : "rgba(255,255,255,0.25)",
              transition: "width 0.4s ease, background 0.4s ease",
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes third-story-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
