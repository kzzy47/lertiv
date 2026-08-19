"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("lertiv-intro-seen")) {
      return;
    }
    sessionStorage.setItem("lertiv-intro-seen", "1");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#221f18]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/brand/lertiv-mark-paper.png"
              alt="LERTIV"
              width={1201}
              height={318}
              priority
              className="h-9 w-auto object-contain md:h-11"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
