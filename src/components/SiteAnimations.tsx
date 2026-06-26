"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SiteAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 3D section reveals ───────────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".reveal-3d").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 90, rotateX: 16, transformPerspective: 1000 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // ── Staggered 3D card entrances ──────────────────────────────
      gsap.utils.toArray<HTMLElement>(".cards-3d-group").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(".card-3d-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 60, rotateY: -16, scale: 0.92, transformPerspective: 800 },
          {
            opacity: 1, y: 0, rotateY: 0, scale: 1,
            duration: 0.9, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 84%", once: true },
          }
        );
      });

      // ── Parallax on background images ────────────────────────────
      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
        gsap.to(img, {
          y: -70, ease: "none",
          scrollTrigger: {
            trigger: img.closest("section") ?? img.parentElement,
            start: "top bottom", end: "bottom top", scrub: true,
          },
        });
      });

    });

    // ── Mouse hover tilt on cards ────────────────────────────────
    const tiltEls = document.querySelectorAll<HTMLElement>(".tilt-card");
    const off: Array<() => void> = [];

    tiltEls.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, {
          rotateY: x * 20, rotateX: -y * 20, scale: 1.05,
          transformPerspective: 700, duration: 0.3, ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(card, {
          rotateY: 0, rotateX: 0, scale: 1,
          duration: 0.7, ease: "elastic.out(1, 0.75)",
        });
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      off.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      ctx.revert();
      off.forEach((fn) => fn());
    };
  }, []);

  return null;
}
