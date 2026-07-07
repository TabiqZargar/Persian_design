"use client";

import { motion, type Variants } from "framer-motion";
import { processSteps } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";

const iconPaths: Record<string, React.ReactNode> = {
  brush: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path d="M7 21C5 21 3 20 3 17c0-2 2-3 4-4.5C9 11 11 8 13 4c2-4 6-4 6-4s0 4-2 8c-1.5 3-3 5-5 7-1 1-2 2-2 3" />
    </svg>
  ),
  grid_4x4: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  content_cut: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8 16L16 8M16 16L8 8" />
    </svg>
  ),
  wash: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path d="M3 15c0 4 2 6 9 6s9-2 9-6" />
      <path d="M3 9c0 4 2 6 9 6s9-2 9-6" />
      <path d="M3 3c0 4 2 6 9 6s9-2 9-6" />
    </svg>
  ),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 py-24 md:py-40 px-5 md:px-8 bg-surface-container-low/30">
      {/* Animated thread line */}
      <svg
        className="absolute top-1/2 left-0 w-full h-48 md:h-64 pointer-events-none opacity-20 hidden lg:block"
        viewBox="0 0 1440 256"
      >
        <path d="M0 128 C 360 0, 720 256, 1080 128 S 1440 256, 1440 128" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="goldGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#C8A84E" stopOpacity="0" />
            <stop offset="50%" stopColor="#C8A84E" stopOpacity="1" />
            <stop offset="100%" stopColor="#C8A84E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-6xl text-tertiary mb-4">The Sacred Rite</h2>
          <p className="text-base md:text-lg text-on-surface-variant">
            The patient journey of a single masterpiece, spanning decades.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="glass-card p-8 md:p-10 text-center"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-tertiary/20">
                <span className="text-tertiary">{iconPaths[step.icon]}</span>
              </div>
              <h4 className="font-serif text-2xl md:text-3xl mb-4">{step.title}</h4>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
