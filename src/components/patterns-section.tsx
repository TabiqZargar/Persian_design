"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { patterns } from "@/lib/data";
import { patternIcons } from "@/components/svgs/carpet-patterns";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function PatternCard({
  pattern,
  index,
}: {
  pattern: (typeof patterns)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);
  const Icon = patternIcons[pattern.id as keyof typeof patternIcons];

  return (
    <motion.div
      ref={cardRef}
      className="glass-card group p-6 md:p-8 cursor-default"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        className="h-48 md:h-64 mb-6 md:mb-8 rounded-lg overflow-hidden relative flex items-center justify-center"
        style={{ background: `radial-gradient(circle at 50% 50%, ${pattern.color}, transparent)` }}
      >
        {Icon && <Icon className="w-24 h-24 md:w-32 md:h-32 opacity-80" />}
      </div>
      <h3 className="font-serif text-2xl md:text-[40px] text-tertiary mb-3">{pattern.title}</h3>
      <p className="text-sm md:text-base text-on-surface-variant mb-5 leading-relaxed">{pattern.description}</p>
      <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] font-semibold uppercase text-tertiary-fixed cursor-pointer group-hover:gap-4 transition-all">
        VIEW DESIGN
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M5 12h14m-4-4l4 4-4 4" />
        </svg>
      </span>
    </motion.div>
  );
}

export function PatternsSection() {
  return (
    <section id="patterns" className="relative z-10 py-24 md:py-40 px-5 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-6xl text-tertiary mb-6">Sacred Geometry</h2>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {patterns.map((pattern, i) => (
            <PatternCard key={pattern.id} pattern={pattern} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
