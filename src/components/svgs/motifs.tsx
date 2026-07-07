import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function StarMotif(props: Props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M50 5 L61 39 L95 39 L68 60 L77 95 L50 75 L23 95 L32 60 L5 39 L39 39 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

export function RectMotif(props: Props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

export function DiamondMotif(props: Props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

export function FlowerMotif(props: Props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M50 15 L57 43 L85 50 L57 57 L50 85 L43 57 L15 50 L43 43 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}
