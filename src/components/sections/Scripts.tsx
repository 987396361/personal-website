"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import siteConfig from "@/data/content";
import type { ScriptCategory, ScriptIntroBlock } from "@/types";

/** 脚本介绍的图文小节列表（标题 + 要点行） */
function IntroBlocks({ blocks }: { blocks?: ScriptIntroBlock[] }) {
  if (!blocks?.length) return null;
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <div key={i}>
          <h4 className="text-sm md:text-base font-semibold text-foreground mb-2.5">
            {block.heading}
          </h4>
          <ul className="space-y-1.5">
            {block.lines.map((line, j) => (
              <li key={j} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                <span className="mt-[0.55em] w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** 脚本创作区：一级分类标签 + 二级标签列表 + 右侧内容展示（视频 / 图文） */
export default function Scripts() {
  const reduced = useReducedMotion();
  const { scripts } = siteConfig;

  const firstCategory = scripts.categories[0];
  const [category, setCategory] = useState<ScriptCategory | undefined>(firstCategory);
  const [tab, setTab] = useState(firstCategory?.tabs[0]);

  if (!category) return null;

  /** 切换一级分类时，默认选中该类别的第一个标签 */
  const switchCategory = (next: ScriptCategory) => {
    setCategory(next);
    setTab(next.tabs[0]);
  };

  return (
    // id 供头图"自制脚本"按钮锚点跳转；scroll-mt 避免被固定导航栏遮挡
    <div id="scripts" className="mt-20 md:mt-28 scroll-mt-24 md:scroll-mt-28">
      {/* 副标题 */}
      <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">
        {scripts.subtitle}
      </h3>
      <div className="mb-8 md:mb-10 h-px w-12 bg-gradient-to-r from-accent to-transparent" />

      {/* 一级标签 */}
      <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
        {scripts.categories.map((c) => (
          <button
            key={c.id}
            onClick={() => switchCategory(c)}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              c.id === category.id
                ? "bg-foreground text-background"
                : "glass border border-white/[0.08] text-muted hover:text-foreground hover:bg-white/[0.06]"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* 二级标签 + 内容区 */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* 二级标签列表 */}
        <div className="flex flex-row flex-wrap lg:flex-col gap-2 lg:w-44 flex-shrink-0">
          {category.tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t)}
              className={cn(
                "text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                t.id === tab?.id
                  ? "bg-white/[0.08] text-foreground font-medium"
                  : "text-muted hover:text-foreground hover:bg-white/[0.04]"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* 内容区：视频或图文 */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category.id}-${tab?.id}`}
              initial={reduced ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tab?.videoSrc ? (
                <div className="aspect-video rounded-2xl overflow-hidden glass border border-white/[0.08] bg-black">
                  {/* 切换标签即自动播放（静音自动播放符合浏览器策略，可手动取消静音） */}
                  <video
                    key={tab.id}
                    className="w-full h-full object-contain bg-black"
                    src={tab.videoSrc}
                    autoPlay
                    muted
                    loop
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
              ) : tab?.intro?.length || tab?.imageSrc ? (
                <div className="rounded-2xl glass border border-white/[0.08] p-5 md:p-8">
                  {tab.introLayout === "top" ? (
                    /* 图上、文下 */
                    <div className="space-y-6 md:space-y-8">
                      {tab.imageSrc && (
                        <img
                          src={tab.imageSrc}
                          alt={tab.label}
                          className="w-full rounded-xl border border-white/[0.06]"
                        />
                      )}
                      <IntroBlocks blocks={tab.intro} />
                    </div>
                  ) : (
                    /* 图左、文右（滚动时图片吸顶） */
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                      {tab.imageSrc && (
                        <div className="w-full md:w-[40%] flex-shrink-0 md:self-stretch">
                          <div className="md:sticky md:top-24">
                            <img
                              src={tab.imageSrc}
                              alt={tab.label}
                              className="w-full rounded-xl border border-white/[0.06]"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <IntroBlocks blocks={tab.intro} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-video rounded-2xl glass border border-white/[0.08] flex items-center justify-center p-8 md:p-12">
                  <p className="text-sm text-muted/70 italic">
                    （此处将展示脚本介绍，内容后续补充）
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
