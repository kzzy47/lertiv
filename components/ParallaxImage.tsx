"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxImage({
  src,
  alt,
  priority = false,
  overlay = true,
  kenBurns = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  overlay?: boolean;
  kenBurns?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-[-10%]">
        <motion.div
          initial={kenBurns ? { scale: 1.06 } : undefined}
          animate={kenBurns ? { scale: 1 } : undefined}
          transition={
            kenBurns
              ? { duration: 18, ease: "easeOut" }
              : undefined
          }
          className="relative h-full w-full motion-reduce:scale-100 motion-reduce:transition-none"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/35" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_0px_rgba(0,0,0,0.45)]" />
    </div>
  );
}
