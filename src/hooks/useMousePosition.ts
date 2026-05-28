"use client";

import { useRef, useCallback } from "react";

export function useMousePosition() {
  const posRef = useRef({ x: -1000, y: -1000 });

  const handleMove = useCallback((e: MouseEvent) => {
    posRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const startListening = useCallback(() => {
    window.addEventListener("mousemove", handleMove, { passive: true });
  }, [handleMove]);

  const stopListening = useCallback(() => {
    window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return { posRef, startListening, stopListening };
}
