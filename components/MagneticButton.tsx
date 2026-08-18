"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  type,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });
  const reduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  function handleMove(e: MouseEvent<HTMLElement>) {
    if (reduced.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  if (reduced.current) {
    const Static = href ? "a" : "button";
    return (
      <Static
        href={href}
        type={!href ? type : undefined}
        onClick={onClick}
        className={className}
      >
        {children}
      </Static>
    );
  }

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      type={!href ? type : undefined}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </Component>
  );
}
