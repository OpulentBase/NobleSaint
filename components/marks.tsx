/**
 * All artwork on this site is drawn in code. No raster assets, anywhere.
 * The vocabulary is borrowed from a landscape construction drawing set:
 * hairlines, hatches, dimension strings, plan symbols.
 */

export function Crest({ className = "", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 48 56" fill="none" className={className} aria-hidden="true">
      {/* pointed-arch shield: the "noble" half of the name */}
      <path
        d="M24 1.6 46.4 12v20.5c0 10.2-9.1 17.8-22.4 21.9C10.7 50.3 1.6 42.7 1.6 32.5V12L24 1.6Z"
        stroke={stroke}
        strokeWidth="1.2"
      />
      {/* halo — the "saint" half */}
      <circle cx="24" cy="20" r="7.2" stroke={stroke} strokeWidth="1.2" />
      {/* horizon through the halo: land meets water */}
      <path d="M8 32.5h32" stroke={stroke} strokeWidth="1.2" />
      {/* three cypress: father, son, and the work between them */}
      <path d="M17 32.5V26M24 32.5v-9.5M31 32.5V26" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      {/* still water below the horizon */}
      <path
        d="M10 38.5c2.8 0 2.8 2 5.6 2s2.8-2 5.6-2 2.8 2 5.6 2 2.8-2 5.6-2 2.8 2 5.6 2"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-baseline gap-[0.42em] ${className}`}>
      <span className="font-display text-[1.02em] leading-none tracking-[0.24em] uppercase">Noble</span>
      <span className="font-display text-[1.02em] leading-none tracking-[0.24em] uppercase">Saint</span>
    </span>
  );
}

/** Shared <defs> mounted once: paper tooth, hatches, water. */
export function DrawingDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* Mineral grain, referenced by every paper plate on the page. */}
        <filter id="paper-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="3" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.22" />
          </feComponentTransfer>
        </filter>

        {/* 45° hatch — paving */}
        <pattern id="hatch-paving" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="var(--color-cypress)" strokeWidth="0.6" opacity="0.35" />
        </pattern>

        {/* cross hatch — concrete slab / motor court */}
        <pattern id="hatch-concrete" width="9" height="9" patternUnits="userSpaceOnUse">
          <path d="M0 9 9 0M-1 1 1-1M8 10 10 8" stroke="var(--color-cypress)" strokeWidth="0.5" opacity="0.28" />
        </pattern>

        {/* stipple — planting bed / decomposed granite */}
        <pattern id="stipple-bed" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="3" r="0.6" fill="var(--color-cypress)" opacity="0.4" />
          <circle cx="7" cy="8" r="0.6" fill="var(--color-cypress)" opacity="0.4" />
          <circle cx="8.5" cy="2" r="0.45" fill="var(--color-cypress)" opacity="0.3" />
        </pattern>

        <linearGradient id="water-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-pool)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--color-patina)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Full-bleed mineral grain so large flat plates read as paper stock, not screen. */
export function PaperTooth({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full mix-blend-multiply opacity-45 ${className}`}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <rect width="100%" height="100%" filter="url(#paper-grain)" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Service pictograms — drawn as section details, not icon-set glyphs
---------------------------------------------------------------- */

export function GlyphLandscape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 64" fill="none" className={className} aria-hidden="true">
      <path d="M2 50h84" stroke="currentColor" strokeWidth="1" />
      <path d="M2 54h84M2 58h84" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      {/* specimen olive, plan-elevation hybrid */}
      <path d="M30 50V26" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="30" cy="20" r="12" stroke="currentColor" strokeWidth="1" />
      <circle cx="30" cy="20" r="7" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <path d="M30 32c-4-3-6-7-6-10M30 32c4-3 6-7 6-10" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      {/* low massing */}
      <path d="M54 50v-9M62 50v-13M70 50v-8" stroke="currentColor" strokeWidth="1" />
      <circle cx="54" cy="38" r="4.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="62" cy="34" r="5.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="70" cy="39" r="4" stroke="currentColor" strokeWidth="0.8" />
      {/* grade arrow */}
      <path d="M6 44h12M14 41l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function GlyphHardscape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 64" fill="none" className={className} aria-hidden="true">
      {/* running-bond stone field in perspective-free plan */}
      <rect x="4" y="14" width="80" height="36" stroke="currentColor" strokeWidth="1" />
      <path d="M4 26h80M4 38h80" stroke="currentColor" strokeWidth="0.7" />
      <path d="M24 14v12M50 14v12M68 14v12" stroke="currentColor" strokeWidth="0.7" />
      <path d="M16 26v12M38 26v12M60 26v12M76 26v12" stroke="currentColor" strokeWidth="0.7" />
      <path d="M28 38v12M46 38v12M64 38v12" stroke="currentColor" strokeWidth="0.7" />
      {/* base course section below */}
      <path d="M4 54h80" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <rect x="4" y="50" width="80" height="4" fill="url(#stipple-bed)" opacity="0.9" />
      {/* dimension string */}
      <path d="M4 8h80M4 6v4M84 6v4" stroke="currentColor" strokeWidth="0.7" opacity="0.65" />
    </svg>
  );
}

export function GlyphPool({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 64" fill="none" className={className} aria-hidden="true">
      {/* pool shell section with coping returns */}
      <path d="M6 16h18v26a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V16h18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 16v6M82 16v6" stroke="currentColor" strokeWidth="1.2" />
      {/* waterline tile band */}
      <path d="M24 24h40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2.5" opacity="0.8" />
      {/* water */}
      <path
        className="swell"
        d="M24 30c4 0 4 2.4 8 2.4s4-2.4 8-2.4 4 2.4 8 2.4 4-2.4 8-2.4 4 2.4 8 2.4"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        className="swell-slow"
        d="M24 37c4 0 4 2.4 8 2.4s4-2.4 8-2.4 4 2.4 8 2.4 4-2.4 8-2.4 4 2.4 8 2.4"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
        strokeLinecap="round"
      />
      {/* spillway / scupper */}
      <path d="M64 16v-6h10v6" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
    </svg>
  );
}

export function NorthArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 46" fill="none" className={className} aria-hidden="true">
      <circle cx="17" cy="17" r="13" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M17 3 24 27l-7-5-7 5L17 3Z" stroke="currentColor" strokeWidth="0.9" />
      <path d="M17 3v19" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      <text
        x="17"
        y="43"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-draft)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em" }}
      >
        N
      </text>
    </svg>
  );
}
