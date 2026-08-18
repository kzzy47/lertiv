"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SplitReveal({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  wordDelay = 0.045,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px", amount: 0 });
  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => {
        const italic = word.startsWith("*") && word.endsWith("*") && word.length > 1;
        const clean = italic ? word.slice(1, -1) : word;
        return (
          <span key={i} className="inline-block overflow-hidden pb-1 align-bottom mr-[0.25em] last:mr-0">
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.7,
                delay: delay + i * wordDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block motion-reduce:transition-none"
            >
              {italic ? <em className="italic">{clean}</em> : clean}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
