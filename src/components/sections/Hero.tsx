"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import siteConfig from "@/data/content";

export default function Hero() {
  const reduced = useReducedMotion();
  const { hero } = siteConfig;

  /** 平滑滚动到目标 section */
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* 背景：全屏视频（videoSrc 留空时显示光晕占位） */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {hero.videoSrc ? (
          <video
            className="w-full h-full object-cover"
            src={hero.videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className="w-full h-full hero-bg-glow" />
        )}
      </div>

      {/* 遮罩：整体轻压暗 + 左侧渐隐（横跨全宽过渡，避免出现分界线） */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-background/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none
          bg-gradient-to-r from-background via-background/60 to-transparent"
        aria-hidden="true"
      />
      {/* 顶部渐隐：让导航栏文字在视频上可读 */}
      <div
        className="absolute top-0 left-0 right-0 z-[2] h-28 md:h-32 pointer-events-none
          bg-gradient-to-b from-background/80 to-transparent"
        aria-hidden="true"
      />

      {/* 左上角：名字（左右边距与导航栏保持一致） */}
      <div className="relative z-10 flex-1 w-full px-6 md:px-16 lg:px-[300px] pt-24 md:pt-28">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {/* 名字：最粗字重，左上角三行排版（字号随视口自适应，预留两侧 300px 边距后仍不裁切；投影提升视频上的可读性） */}
          <h1 className="text-[clamp(4rem,calc(30vw-190px),10rem)] font-black tracking-tight leading-none drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
            {hero.headingLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>

      {/* 左下角：按钮组（左右边距与导航栏保持一致） */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-[300px] pb-10 md:pb-14">
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={reduced ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {hero.ctas.map((cta) => (
            <button
              key={cta.id}
              onClick={() => handleScrollTo(cta.target)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                cta.variant === "primary"
                  ? "bg-foreground text-background hover:bg-white hover:scale-[1.02]"
                  : "bg-white/10 text-foreground border border-white/10 hover:bg-white/15"
              )}
            >
              {cta.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
