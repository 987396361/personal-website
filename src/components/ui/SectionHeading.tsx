"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="mb-12 md:mb-16"
      initial={reduced ? undefined : { opacity: 0, x: -20 }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-sm md:text-base max-w-xl">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
    </motion.div>
  );
}
