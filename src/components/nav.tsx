"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#patterns", label: "Collections" },
  { href: "#gallery", label: "Artistry" },
  { href: "#process", label: "Heritage" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      id="main-nav"
      className={`fixed top-0 w-full z-50 px-5 md:px-8 py-4 md:py-6 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/80 backdrop-blur-xl border-b border-gold/20"
          : "border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L15 10H22L17 15L19 23L12 18L5 23L7 15L2 10H9L12 2Z" />
          </svg>
        </div>
        <span className="font-serif text-tertiary-fixed tracking-widest text-lg hidden md:block">
          Heritage Rugs
        </span>
      </div>

      <nav className="hidden md:flex gap-12">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link relative pb-1 text-xs tracking-[0.15em] font-semibold uppercase text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="px-6 py-2.5 text-xs tracking-[0.15em] font-semibold uppercase border border-tertiary/40 hover:bg-tertiary/5 transition-all"
      >
        Inquire
      </a>
    </motion.header>
  );
}
