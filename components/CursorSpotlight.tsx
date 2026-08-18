"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      el!.style.setProperty("--x", `${e.clientX}px`);
      el!.style.setProperty("--y", `${e.clientY}px`);
      el!.style.opacity = "1";
    }
    function onLeave() {
      el!.style.opacity = "0";
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] hidden opacity-0 transition-opacity duration-500 md:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(168, 98, 58, 0.08), transparent 70%)",
      }}
    />
  );
}
