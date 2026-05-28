"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import siteConfig from "@/data/content";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden"
    >
      <motion.div
        className="text-center relative z-10"
        variants={container}
        initial={reduced ? undefined : "hidden"}
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-accent text-sm md:text-base font-medium tracking-widest uppercase mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-gradient text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4"
        >
          {siteConfig.title}
        </motion.p>
        <motion.p
          variants={item}
          className="text-muted text-sm md:text-base lg:text-lg max-w-md mx-auto"
        >
          {siteConfig.tagline}
        </motion.p>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
