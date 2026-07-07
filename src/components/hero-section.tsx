"use client";

import { motion } from "framer-motion";
import { Medallion } from "@/components/svgs/medallion";

export function HeroSection() {
  return (
    <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-5 md:px-8 overflow-hidden">
      {/* Background medallion ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] border border-tertiary/30 rounded-full flex items-center justify-center">
          <motion.div
            className="w-[350px] h-[350px] md:w-[600px] md:h-[600px] border border-tertiary/20 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Weaving line */}
      <motion.div
        className="absolute top-1/4 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        style={{ width: "100%", left: "-100%" }}
        animate={{ left: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs tracking-[0.4em] font-semibold uppercase text-tertiary mb-6 block">
            ESTABLISHED 1722
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <Medallion className="w-32 h-32 md:w-48 md:h-48 mx-auto" />
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-[84px] mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The Art of the{" "}
          <br />
          <em className="italic font-serif not-italic">
            <span
              className="bg-gradient-to-r from-gold via-gold-light to-gold bg-[length:200%_auto] bg-clip-text text-transparent"
              style={{ animation: "shimmer 4s linear infinite" }}
            >
              Persian
            </span>{" "}
            Infinite
          </em>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A timeless convergence of nomadic spirit and celestial geometry. Each knot is a breath, each pattern a
          story written in silk and wool.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#patterns"
            className="royal-gradient-btn px-10 py-5 text-xs tracking-[0.2em] font-semibold uppercase text-on-primary shadow-2xl"
          >
            EXPLORE COLLECTION
          </a>
          <a
            href="#process"
            className="px-10 py-5 text-xs tracking-[0.2em] font-semibold uppercase text-tertiary border border-tertiary/40 hover:bg-tertiary/5 transition-all"
          >
            THE HERITAGE
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 md:bottom-12"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
