"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ScrollIndicator() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      initial={reduced ? undefined : { opacity: 0, y: -10 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <span className="text-xs tracking-widest uppercase">Scroll</span>
      <motion.div
        className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
        animate={reduced ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-2 bg-accent rounded-full" />
      </motion.div>
    </motion.div>
  );
}
