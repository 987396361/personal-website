"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VideoModalProps } from "@/types";

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    videoRef.current?.play()?.catch(() => {});
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, handleKeyDown]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 glass-heavy"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-glass-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <video
              ref={videoRef}
              src={item.videoSrc}
              controls
              preload="auto"
              className="w-full max-h-[85vh] bg-black"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              <span className="text-xs text-accent font-medium tracking-wide uppercase">
                {item.category}
              </span>
              <h3 className="text-lg font-medium text-white mt-1">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
