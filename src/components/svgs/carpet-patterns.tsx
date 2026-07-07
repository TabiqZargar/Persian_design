import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function GolEMaryam(props: Props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        d="M50 5 L61 35 L95 35 L68 55 L77 90 L50 70 L23 90 L32 55 L5 35 L39 35 Z"
        fill="none"
        stroke="#A02030"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="45" r="10" fill="none" stroke="#C8A84E" strokeWidth="1.5" />
      <circle cx="50" cy="45" r="3" fill="#C8A84E" />
      <path d="M50 15 L55 30 L45 30 Z" fill="#A02030" opacity="0.4" />
      <path d="M70 40 L82 38 L75 50 Z" fill="#A02030" opacity="0.4" />
      <path d="M30 40 L18 38 L25 50 Z" fill="#A02030" opacity="0.4" />
    </svg>
  );
}

export function Gonbad(props: Props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <rect x="10" y="10" width="80" height="80" fill="none" stroke="#1A2B5C" strokeWidth="1.5" />
      <rect x="20" y="20" width="60" height="60" fill="none" stroke="#C8A84E" strokeWidth="1" />
      <rect x="30" y="30" width="40" height="40" fill="none" stroke="#1A2B5C" strokeWidth="1" />
      <rect x="40" y="40" width="20" height="20" fill="#C8A84E" opacity="0.4" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="#1A2B5C" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="10" x2="50" y2="90" stroke="#1A2B5C" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

export function ShahAbbasi(props: Props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z"
        fill="none"
        stroke="#2E8B7B"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#C8A84E" strokeWidth="1" />
      <circle cx="50" cy="50" r="5" fill="#2E8B7B" opacity="0.4" />
      <path d="M50 20 L52 30 L48 30 Z" fill="#2E8B7B" opacity="0.4" />
      <path d="M70 40 L78 38 L75 46 Z" fill="#2E8B7B" opacity="0.4" />
      <path d="M30 40 L22 38 L25 46 Z" fill="#2E8B7B" opacity="0.4" />
      <path d="M50 80 L52 70 L48 70 Z" fill="#2E8B7B" opacity="0.4" />
      <path d="M75 62 L70 56 L78 56 Z" fill="#2E8B7B" opacity="0.4" />
      <path d="M25 62 L30 56 L22 56 Z" fill="#2E8B7B" opacity="0.4" />
    </svg>
  );
}

export function KolahEFarangi(props: Props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <polygon
        points="50,5 63,37 97,37 69,57 78,92 50,73 22,92 31,57 3,37 37,37"
        fill="none"
        stroke="#C05A4A"
        strokeWidth="1.5"
      />
      <polygon
        points="50,20 57,38 76,38 61,50 66,70 50,60 34,70 39,50 24,38 43,38"
        fill="none"
        stroke="#C8A84E"
        strokeWidth="1"
      />
      <circle cx="50" cy="50" r="6" fill="#C05A4A" opacity="0.3" />
    </svg>
  );
}

export function BotehJeh(props: Props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        d="M50 0 L55 20 L75 10 L65 30 L85 30 L65 45 L75 65 L55 55 L50 75 L45 55 L25 65 L35 45 L15 30 L35 30 L25 10 L45 20 Z"
        fill="none"
        stroke="#1A2B5C"
        strokeWidth="1.2"
      />
      <circle cx="50" cy="38" r="8" fill="none" stroke="#C8A84E" strokeWidth="1" />
      <circle cx="50" cy="38" r="3" fill="#C8A84E" opacity="0.6" />
      <path d="M50 50 L50 60" stroke="#1A2B5C" strokeWidth="0.8" />
      <path d="M42 55 L50 60 L58 55" fill="none" stroke="#1A2B5C" strokeWidth="0.6" />
    </svg>
  );
}

export function Toranj(props: Props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <rect x="5" y="5" width="90" height="90" fill="none" stroke="#C8A84E" strokeWidth="0.8" />
      <path d="M25 50 L50 25 L75 50 L50 75 Z" fill="none" stroke="#A02030" strokeWidth="1.2" />
      <path d="M35 50 L50 35 L65 50 L50 65 Z" fill="none" stroke="#C8A84E" strokeWidth="0.8" />
      <path d="M50 5 L50 25" stroke="#A02030" strokeWidth="0.5" opacity="0.4" />
      <path d="M50 75 L50 95" stroke="#A02030" strokeWidth="0.5" opacity="0.4" />
      <path d="M5 50 L25 50" stroke="#A02030" strokeWidth="0.5" opacity="0.4" />
      <path d="M75 50 L95 50" stroke="#A02030" strokeWidth="0.5" opacity="0.4" />
      <circle cx="50" cy="50" r="3" fill="#C8A84E" />
    </svg>
  );
}

export const patternIcons = {
  "gol-e-maryam": GolEMaryam,
  gonbad: Gonbad,
  "shah-abbasi": ShahAbbasi,
  "kolah-e-farangi": KolahEFarangi,
  "boteh-jeh": BotehJeh,
  toranj: Toranj,
} as const;
