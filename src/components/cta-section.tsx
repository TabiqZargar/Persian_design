"use client";

import { Medallion } from "@/components/svgs/medallion";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CTASection() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-40 px-5 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-8">
            <Medallion className="w-20 h-20 md:w-28 md:h-28 mx-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-tertiary mb-6">
            The Loom Awaits
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">
            Each piece is commissioned uniquely. Speak with our master weavers and begin your own journey of
            thread, symbol, and legacy.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <a
              href="mailto:studio@heritagerugs.com"
              className="royal-gradient-btn px-10 py-5 text-xs tracking-[0.2em] font-semibold uppercase text-on-primary shadow-2xl"
            >
              REACH OUT
            </a>
            <a
              href="#patterns"
              className="px-10 py-5 text-xs tracking-[0.2em] font-semibold uppercase text-tertiary border border-tertiary/40 hover:bg-tertiary/5 transition-all"
            >
              BROWSE PATTERNS
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
