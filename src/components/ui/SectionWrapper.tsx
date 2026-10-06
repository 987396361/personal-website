"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

export default function SectionWrapper({ id, className, children }: SectionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      // 左右边距与导航栏/首屏保持一致（lg 下 300px）
      className={cn("py-20 md:py-28 lg:py-32 px-6 md:px-16 lg:px-[300px]", className)}
      initial={reduced ? undefined : { opacity: 0, y: 40 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      {children}
    </motion.section>
  );
}
