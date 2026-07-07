"use client";

import { motion } from "framer-motion";
import { regions } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";

function GalleryItem({
  region,
  index,
}: {
  region: (typeof regions)[number];
  index: number;
}) {
  const regionColors: Record<string, string> = {
    isfahan: "from-crimson/20 via-transparent to-transparent",
    tabriz: "from-navy/20 via-transparent to-transparent",
    kashan: "from-turquoise/15 via-transparent to-transparent",
    shiraz: "from-[#C05A4A]/15 via-transparent to-transparent",
    qom: "from-gold/15 via-transparent to-transparent",
  };

  return (
    <motion.div
      className="flex-none w-[80vw] md:w-[45vw] snap-center group"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <div className="relative aspect-[1.79] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${regionColors[region.id] ?? "from-gold/10"} opacity-60`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 120" className="w-3/4 h-3/4 opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="180" height="100" rx="4" stroke="#C8A84E" strokeWidth="0.5" opacity="0.4" />
            <path d="M100 20 L110 50 L140 55 L110 60 L100 90 L90 60 L60 55 L90 50 Z" stroke="#C8A84E" strokeWidth="0.8" opacity="0.5" />
            <circle cx="100" cy="55" r="10" stroke="#C8A84E" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
          <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-tertiary mb-1.5 block">
            {region.subtitle}
          </span>
          <h4 className="font-serif text-2xl md:text-[40px]">{region.name}</h4>
        </div>
      </div>
    </motion.div>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative z-10 py-24 md:py-40 overflow-hidden">
      <div className="px-5 md:px-8 max-w-[1440px] mx-auto mb-12 md:mb-16">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface mb-4">
            The Provincial Legacies
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant">
            Traversing the historical loom from the silk of Qom to the wool of Shiraz.
          </p>
        </ScrollReveal>
      </div>

      <div className="flex gap-8 md:gap-12 overflow-x-auto pb-16 md:pb-20 px-[5vw] scrollbar-hide snap-x">
        {regions.map((region, i) => (
          <GalleryItem key={region.id} region={region} index={i} />
        ))}
      </div>
    </section>
  );
}
