"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircularCarousel from "@/components/ui/CircularCarousel";
import VideoModal from "@/components/ui/VideoModal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import siteConfig from "@/data/content";
import type { PortfolioItem } from "@/types";

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  // 当前转到最前方的作品序号（初始为第一个作品）
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();

  // 所有作品统一放入一个轮播：卡片为视频首帧 + 中央播放图标，点击卡片打开播放器弹窗
  const items = siteConfig.portfolioItems;
  const activeCategory = items[activeIndex]?.category ?? "";

  return (
    <SectionWrapper id="portfolio">
      <SectionHeading
        title="作品展示"
        subtitle="精选游戏广告与AI创意作品集"
      />

      {/* 圆形 3D 轮播：全部视频围绕成环，可拖拽甩动浏览 */}
      <div className="relative w-full h-[clamp(420px,65vw,640px)]">
        <CircularCarousel
          items={items.map((item) => ({
            src: item.videoSrc,
            alt: item.description,
            title: item.title,
            subtitle: item.description,
          }))}
          preset="orbit"
          intro="rise"
          cardWidth={200}
          aspectRatio={0.68}
          gap={20}
          spread={1}
          speed={12}
          tilt={-12}
          fadeColor="#06060e"
          showPlayIcon
          onChange={setActiveIndex}
          onItemClick={(_, index) => setActiveItem(items[index])}
        />
      </div>

      {/* 当前最前方视频的分类文字，随转动实时切换 */}
      <div className="mt-6 flex justify-center h-9">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeCategory}
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-xl md:text-2xl font-semibold tracking-wide text-foreground"
          >
            {activeCategory}
          </motion.span>
        </AnimatePresence>
      </div>

      <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />
    </SectionWrapper>
  );
}
