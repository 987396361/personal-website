"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import siteConfig from "@/data/content";

const categoryLabels: Record<string, string> = {
  software: "软件工具",
  creative: "创作技能",
  other: "其他",
};

export default function Skills() {
  const reduced = useReducedMotion();

  const grouped = siteConfig.skills.reduce(
    (acc, skill) => {
      (acc[skill.category] ??= []).push(skill);
      return acc;
    },
    {} as Record<string, typeof siteConfig.skills>
  );

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="技能"
        subtitle="多年积累的专业工具链与创作能力"
      />

      <div className="space-y-10">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xs uppercase tracking-widest text-muted mb-4 ml-1">
              {categoryLabels[category] ?? category}
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
              initial={reduced ? undefined : "hidden"}
              whileInView={reduced ? undefined : "visible"}
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <SkillBadge skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
