"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import siteConfig from "@/data/content";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="关于我"
        subtitle="广告设计师/AI创意设计师"
      />
      {/* 300px 大边距下，头像与文字并排推迟到 xl 断点，避免窄屏桌面文字被挤成细条 */}
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-start">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl glass gradient-border flex items-center justify-center shadow-glass overflow-hidden">
            <span className="text-3xl md:text-4xl font-bold text-accent">
              {siteConfig.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Bio text */}
        <div className="space-y-4">
          {siteConfig.aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-sm md:text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
