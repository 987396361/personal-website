"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { VideoCardProps } from "@/types";

export default function VideoCard({ item, onPlay }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play()?.catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={() => onPlay(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="glass gradient-border rounded-2xl overflow-hidden shadow-glass-sm transition-shadow duration-300 group-hover:shadow-glass-lg">
        <div className="aspect-video relative bg-surface-light">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            </div>
          )}
          <video
            ref={videoRef}
            src={item.videoSrc}
            poster={item.posterSrc || undefined}
            preload="metadata"
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
            onLoadedData={() => setIsLoaded(true)}
          />
          {!isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:bg-black/0">
              <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-accent font-medium tracking-wide uppercase">
              {item.category}
            </span>
          </div>
          <h3 className="text-base font-medium text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-muted line-clamp-1">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
