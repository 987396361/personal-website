"use client";

import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
}

const categoryColors: Record<Skill["category"], string> = {
  software: "border-indigo-500/30 text-indigo-300",
  creative: "border-violet-500/30 text-violet-300",
  other: "border-cyan-500/30 text-cyan-300",
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "px-4 py-2.5 rounded-xl text-sm font-medium",
        "bg-white/[0.04] backdrop-blur-[2px]",
        "border",
        categoryColors[skill.category],
        "transition-all duration-300 hover:bg-white/[0.08] hover:scale-105"
      )}
    >
      {skill.name}
    </div>
  );
}
