"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
  format = true,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  format?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const spring = useSpring(motionValue, {
    duration: prefersReducedMotion ? 0 : 1600,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest);
        ref.current.textContent = `${prefix}${format ? rounded.toLocaleString() : rounded}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, format]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
