export function PhotonMark({ className = "h-8 w-8" }) {
  return (
    <span className={`relative inline-grid place-items-center ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-full">
        <defs>
          <linearGradient id="pm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F0A06B" />
            <stop offset="0.6" stopColor="#E9743D" />
            <stop offset="1" stopColor="#D9B25F" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="19" fill="none" stroke="url(#pm)" strokeWidth="1.5" opacity="0.5" />
        <path d="M20 8 L29 28 L11 28 Z" fill="url(#pm)" />
        <path d="M20 8 L20 28 L11 28 Z" fill="#F3EDE4" opacity="0.18" />
        <circle cx="20" cy="8" r="2.4" fill="#F3EDE4" />
      </svg>
    </span>
  );
}

export function Logo({ dark = false }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <PhotonMark className="h-8 w-8 transition-transform duration-500 group-hover:rotate-180" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[19px] font-medium tracking-tight ${dark ? "text-ink" : "text-bone"}`}>
          Photon
        </span>
        <span className="font-mono text-[8.5px] uppercase tracking-[0.24em] text-ember">
          by Aftershoot
        </span>
      </span>
    </a>
  );
}
