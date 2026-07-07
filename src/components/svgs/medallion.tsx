"use client";

export function Medallion({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="95" stroke="#C8A84E" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="80" stroke="#C8A84E" strokeWidth="0.5" opacity="0.2" />
      <path
        d="M100 10 L115 60 L165 75 L125 105 L135 155 L100 130 L65 155 L75 105 L35 75 L85 60 Z"
        stroke="#A02030"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <circle cx="100" cy="100" r="25" stroke="#C8A84E" strokeWidth="0.6" opacity="0.4" />
      <circle cx="100" cy="100" r="12" stroke="#A02030" strokeWidth="0.8" opacity="0.3" />
      <circle cx="100" cy="100" r="4" fill="#C8A84E" opacity="0.4" />
      <path d="M100 25 L100 175" stroke="#C8A84E" strokeWidth="0.3" opacity="0.15" />
      <path d="M25 100 L175 100" stroke="#C8A84E" strokeWidth="0.3" opacity="0.15" />
      <path d="M47 47 L153 153" stroke="#C8A84E" strokeWidth="0.3" opacity="0.1" />
      <path d="M153 47 L47 153" stroke="#C8A84E" strokeWidth="0.3" opacity="0.1" />
      <path
        d="M100 10 Q130 50 165 75 Q130 100 100 130 Q70 100 35 75 Q70 50 100 10 Z"
        stroke="#C8A84E"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <path
        d="M25 100 Q70 80 100 55 Q130 80 175 100 Q130 120 100 145 Q70 120 25 100 Z"
        stroke="#C8A84E"
        strokeWidth="0.3"
        opacity="0.15"
      />
    </svg>
  );
}

export function MedallionLarge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 800" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="400" cy="400" r="380" stroke="#C8A84E" strokeWidth="0.5" opacity="0.15" />
      <circle cx="400" cy="400" r="300" stroke="#C8A84E" strokeWidth="0.5" opacity="0.1" />
      <g opacity="0.25" transform="translate(400, 400)">
        <path
          d="M0 -250 L65 -110 L215 -125 L125 0 L215 125 L65 110 L0 250 L-65 110 L-215 125 L-125 0 L-215 -125 L-65 -110 Z"
          fill="none"
          stroke="#C8A84E"
          strokeWidth="2"
        />
        <path
          d="M0 -180 L45 -80 L155 -90 L90 0 L155 90 L45 80 L0 180 L-45 80 L-155 90 L-90 0 L-155 -90 L-45 -80 Z"
          fill="none"
          opacity="0.6"
          stroke="#A02030"
          strokeWidth="1.5"
        />
      </g>
      <path
        d="M400 50 Q 600 200 400 400 T 400 750"
        fill="none"
        opacity="0.12"
        stroke="#1A2B5C"
        strokeWidth="0.5"
      />
      <path
        d="M400 50 Q 200 200 400 400 T 400 750"
        fill="none"
        opacity="0.12"
        stroke="#1A2B5C"
        strokeWidth="0.5"
      />
    </svg>
  );
}
