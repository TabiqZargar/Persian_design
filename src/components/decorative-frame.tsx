export function DecorativeFrame() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Top frame line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      {/* Bottom frame line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      {/* Left frame line */}
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      {/* Right frame line */}
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      {/* Corner ornaments */}
      <svg className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="rgba(200,168,78,0.15)" />
        <path d="M10 10 L10 30 M10 10 L30 10" stroke="rgba(200,168,78,0.3)" strokeWidth="0.5" />
        <circle cx="10" cy="10" r="4" stroke="rgba(200,168,78,0.25)" strokeWidth="0.5" />
      </svg>

      <svg className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
        <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="rgba(200,168,78,0.15)" />
        <path d="M10 10 L10 30 M10 10 L30 10" stroke="rgba(200,168,78,0.3)" strokeWidth="0.5" />
        <circle cx="10" cy="10" r="4" stroke="rgba(200,168,78,0.25)" strokeWidth="0.5" />
      </svg>

      <svg className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleY(-1)" }}>
        <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="rgba(200,168,78,0.15)" />
        <path d="M10 10 L10 30 M10 10 L30 10" stroke="rgba(200,168,78,0.3)" strokeWidth="0.5" />
        <circle cx="10" cy="10" r="4" stroke="rgba(200,168,78,0.25)" strokeWidth="0.5" />
      </svg>

      <svg className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scale(-1)" }}>
        <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="rgba(200,168,78,0.15)" />
        <path d="M10 10 L10 30 M10 10 L30 10" stroke="rgba(200,168,78,0.3)" strokeWidth="0.5" />
        <circle cx="10" cy="10" r="4" stroke="rgba(200,168,78,0.25)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
