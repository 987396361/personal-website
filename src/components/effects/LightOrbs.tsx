"use client";

import { useRef, useEffect, useCallback } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

const ORB_COLORS = [
  "99, 102, 241", // indigo
  "139, 92, 246", // violet
  "34, 211, 238", // cyan
  "217, 70, 239", // fuchsia
  "59, 130, 246", // blue
];

function createOrb(w: number, h: number): Orb {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: 150 + Math.random() * 350,
    color: ORB_COLORS[Math.floor(Math.random() * ORB_COLORS.length)]!,
    opacity: 0.15 + Math.random() * 0.2,
  };
}

export default function LightOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const animFrameRef = useRef<number>(0);
  const { posRef, startListening, stopListening } = useMousePosition();
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const count = isMobile ? 2 : 4;
    orbsRef.current = Array.from({ length: count }, () => createOrb(canvas.width, canvas.height));
  }, [isMobile]);

  useEffect(() => {
    resize();
    startListening();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;

    const animate = () => {
      if (!running) return;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const mouse = posRef.current;
      const orbs = orbsRef.current;

      for (const orb of orbs) {
        if (!reduced) {
          orb.x += orb.vx;
          orb.y += orb.vy;

          if (orb.x < -orb.radius) orb.x = width + orb.radius;
          if (orb.x > width + orb.radius) orb.x = -orb.radius;
          if (orb.y < -orb.radius) orb.y = height + orb.radius;
          if (orb.y > height + orb.radius) orb.y = -orb.radius;

          const dx = mouse.x * (window.devicePixelRatio || 1) - orb.x;
          const dy = mouse.y * (window.devicePixelRatio || 1) - orb.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 600) {
            const force = (600 - dist) / 600 * 0.02;
            orb.vx += dx * force * 0.001;
            orb.vy += dy * force * 0.001;
          }

          const speed = Math.sqrt(orb.vx * orb.vx + orb.vy * orb.vy);
          if (speed > 0.5) {
            orb.vx = (orb.vx / speed) * 0.5;
            orb.vy = (orb.vy / speed) * 0.5;
          }
        }

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.opacity * 1.2})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
      } else {
        running = true;
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", resize);
      stopListening();
    };
  }, [resize, reduced, posRef, startListening, stopListening]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
