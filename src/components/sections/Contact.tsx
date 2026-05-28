"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import siteConfig from "@/data/content";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="联系方式"
        subtitle="期待与您合作，一起创造令人惊叹的视觉作品"
      />

      <GlassCard className="max-w-lg mx-auto text-center">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted mb-1">邮箱</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lg font-medium text-foreground hover:text-accent-light transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
