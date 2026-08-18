"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

export default function CursorLabel({
  children,
  label = "View Project",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  const [hovering, setHovering] = useState(false);
  const disabled = useRef(
    typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (disabled.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  if (disabled.current) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`relative ${className ?? ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMove}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10"
        style={{ x: springX, y: springY }}
        initial={false}
        animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.85 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-background/95 px-4 py-2 text-[11px] uppercase tracking-[0.1em] text-text-primary shadow-lg backdrop-blur-sm">
          {label}
        </div>
      </motion.div>
    </div>
  );
}
