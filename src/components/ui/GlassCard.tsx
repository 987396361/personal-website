"use client";

import { cn } from "@/lib/utils";
import type { GlassCardProps } from "@/types";

export default function GlassCard({ className, children, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass gradient-border rounded-2xl p-6 md:p-8 lg:p-10",
        "shadow-glass",
        hover && "transition-all duration-300 hover:bg-white/[0.06] hover:shadow-glass-lg hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
