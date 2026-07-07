"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { StarMotif, RectMotif, DiamondMotif, FlowerMotif } from "@/components/svgs/motifs";

function GlowOrb({
  className,
  color,
  duration = 25,
  reverse = false,
}: {
  className?: string;
  color: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ background: `radial-gradient(circle, ${color}, transparent)`, filter: "blur(120px)", opacity: 0.4 }}
      animate={{
        x: reverse ? ["0%", "15%", "0%"] : ["0%", "15%", "0%"],
        y: reverse ? ["0%", "15%", "0%"] : ["0%", "-10%", "0%"],
      }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
  );
}

function FloatingMotif({
  children,
  className,
  baseX = 0,
  baseY = 0,
}: {
  children: React.ReactNode;
  className?: string;
  baseX?: number;
  baseY?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0.5);
  const mouseY = useRef(0.5);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.current = e.clientX / window.innerWidth;
      mouseY.current = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useAnimationFrame(() => {
    if (!ref.current) return;
    const x = (mouseX.current - 0.5) * baseX;
    const y = (mouseY.current - 0.5) * baseY;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  });

  return (
    <motion.div
      ref={ref}
      className={`absolute pointer-events-none text-gold ${className}`}
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      style={{ color: "#C8A84E" }}
    >
      {children}
    </motion.div>
  );
}

export function BackgroundLayers() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Carpet SVG background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full max-w-[1600px] max-h-[1100px] opacity-[0.15] md:opacity-[0.28]"
          style={{ animation: "breath 14s ease-in-out infinite" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#0F0C0A" width="1200" height="800" />
          <g opacity="0.25" transform="translate(600, 400)">
            <path
              d="M0 -250 L65 -110 L215 -125 L125 0 L215 125 L65 110 L0 250 L-65 110 L-215 125 L-125 0 L-215 -125 L-65 -110 Z"
              fill="none"
              stroke="#C8A84E"
              strokeWidth="2"
            >
              <animate attributeName="opacity" dur="14s" repeatCount="indefinite" values="0.3;0.6;0.3" />
            </path>
            <path
              d="M0 -180 L45 -80 L155 -90 L90 0 L155 90 L45 80 L0 180 L-45 80 L-155 90 L-90 0 L-155 -90 L-45 -80 Z"
              fill="none"
              opacity="0.6"
              stroke="#A02030"
              strokeWidth="1.5"
            />
          </g>
          <g fill="none" opacity="0.25" stroke="#C8A84E" strokeWidth="1">
            <path d="M0 0 L120 0 L0 120 Z" transform="translate(40, 40)" />
            <path d="M0 0 L-120 0 L0 120 Z" transform="translate(1160, 40)" />
            <path d="M0 0 L120 0 L0 -120 Z" transform="translate(40, 760)" />
            <path d="M0 0 L-120 0 L0 -120 Z" transform="translate(1160, 760)" />
          </g>
          <g fill="none" opacity="0.15" stroke="#1A2B5C" strokeWidth="0.5">
            <circle cx="600" cy="400" r="350" />
            <circle cx="600" cy="400" r="300" />
            <path d="M600 50 Q 800 200 600 400 T 600 750" />
            <path d="M600 50 Q 400 200 600 400 T 600 750" />
          </g>
        </svg>
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at center, transparent 55%, rgba(15, 12, 10, 0.92) 100%)" }}
      />

      {/* Glow orbs */}
      <GlowOrb className="w-[60%] h-[60%] top-[-10%] left-[-10%]" color="rgba(160,32,48,0.4)" />
      <GlowOrb className="w-[50%] h-[50%] bottom-[-10%] right-[-10%]" color="rgba(200,168,78,0.3)" reverse />
      <GlowOrb className="w-[40%] h-[40%] top-[20%] right-[10%]" color="rgba(26,43,92,0.3)" duration={22} />

      {/* Floating motifs */}
      <FloatingMotif className="w-32 h-32 md:w-48 md:h-48 top-[15%] left-[5%] opacity-30 md:opacity-40" baseX={50} baseY={50}>
        <StarMotif className="w-full h-full" />
      </FloatingMotif>
      <FloatingMotif className="w-40 h-40 md:w-64 md:h-64 bottom-[20%] right-[8%] opacity-20 md:opacity-30" baseX={-80} baseY={-80}>
        <DiamondMotif className="w-full h-full" />
      </FloatingMotif>
      <FloatingMotif className="w-24 h-24 md:w-36 md:h-36 top-[60%] left-[2%] opacity-20" baseX={40} baseY={-30}>
        <RectMotif className="w-full h-full" />
      </FloatingMotif>
      <FloatingMotif className="w-20 h-20 md:w-28 md:h-28 top-[30%] right-[3%] opacity-20" baseX={-40} baseY={60}>
        <FlowerMotif className="w-full h-full" />
      </FloatingMotif>
    </div>
  );
}
