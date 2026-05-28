"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { posRef, startListening, stopListening } = useMousePosition();
  const reduced = useReducedMotion();
  const hasPointer = useMediaQuery("(hover: hover) and (pointer: fine)");

  useEffect(() => {
    if (!hasPointer || reduced) return;
    startListening();

    let frame: number;
    const glow = glowRef.current;
    if (!glow) return;

    const update = () => {
      const x = posRef.current.x;
      const y = posRef.current.y;
      glow.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
      stopListening();
    };
  }, [hasPointer, reduced, posRef, startListening, stopListening]);

  if (!hasPointer || reduced) return null;

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-50 opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.12) 30%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
