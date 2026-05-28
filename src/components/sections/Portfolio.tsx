"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoCard from "@/components/ui/VideoCard";
import VideoModal from "@/components/ui/VideoModal";
import siteConfig from "@/data/content";
import type { PortfolioItem } from "@/types";

const SHOW_COUNT = 3;

function groupByCategory(items: PortfolioItem[]) {
  const map = new Map<string, PortfolioItem[]>();
  for (const item of items) {
    const list = map.get(item.category) ?? [];
    list.push(item);
    map.set(item.category, list);
  }
  return map;
}

function CategoryGrid({
  items,
  isExpanded,
  reduced,
  onPlay,
}: {
  items: PortfolioItem[];
  isExpanded: boolean;
  reduced: boolean;
  onPlay: (item: PortfolioItem) => void;
}) {
  const hasMore = items.length > SHOW_COUNT;
  const visibleItems = hasMore && !isExpanded ? items.slice(0, SHOW_COUNT) : items;
  const gridRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: "100px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const shouldAnimate = inView;

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {visibleItems.map((item, i) => (
        <motion.div
          key={item.id}
          initial={reduced ? undefined : { opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.08 }}
          layout
        >
          <VideoCard item={item} onPlay={onPlay} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const reduced = useReducedMotion();

  const grouped = groupByCategory(siteConfig.portfolioItems);

  const toggleExpand = (category: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <SectionWrapper id="portfolio">
      <SectionHeading
        title="作品展示"
        subtitle="精选游戏广告与AI创意作品集"
      />

      <div className="space-y-16">
        {Array.from(grouped.entries()).map(([category, items]) => {
          const hasMore = items.length > SHOW_COUNT;
          const isExpanded = expanded.has(category);
          const hiddenCount = items.length - SHOW_COUNT;

          return (
            <div key={category}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-foreground">
                  {category}
                  <span className="ml-2 text-sm text-muted font-normal">
                    {items.length} 个作品
                  </span>
                </h3>
              </div>

              <CategoryGrid
                items={items}
                isExpanded={isExpanded}
                reduced={reduced}
                onPlay={setActiveItem}
              />

              {hasMore && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => toggleExpand(category)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                      glass border border-white/[0.08] text-muted
                      hover:text-foreground hover:bg-white/[0.08] transition-all duration-300"
                  >
                    {isExpanded ? "收起" : `展开更多 (+${hiddenCount})`}
                    <motion.svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />
    </SectionWrapper>
  );
}
