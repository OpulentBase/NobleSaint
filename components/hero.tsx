import { Reveal } from "./reveal";
import { NorthArrow, PaperTooth } from "./marks";
import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

const lines = [
  { word: "Landscapes", note: "grade, drainage, planting" },
  { word: "Hardscapes", note: "stone, masonry, structure" },
  { word: "Pools", note: "gunite, tile, water" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col overflow-hidden pt-24 sm:pt-32">
      <PaperTooth />

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pb-[26vh] sm:px-8 sm:pb-[34vh] lg:px-12">
        <Reveal className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <span className="sheet-label text-cypress/70">{site.region}</span>
          <span className="h-px w-6 bg-brass sm:w-8" aria-hidden="true" />
          <span className="sheet-label">Family owned since {site.founded}</span>
        </Reveal>

        <h1 className="mt-6 sm:mt-10">
          <span className="sr-only">
            Noble Saint builds landscapes, hardscapes and pools in Orange County and Los Angeles.
          </span>
          {lines.map((l, i) => (
            <Reveal key={l.word} delay={160 + i * 130} className="block">
              <span aria-hidden="true" className="flex items-baseline gap-4 border-t border-cypress/15 pt-2 sm:gap-8">
                <span className="font-display text-[length:var(--text-hero)] leading-[0.88] font-light tracking-[-0.02em]">
                  {l.word}
                </span>
                <span className="ml-auto hidden shrink-0 pb-2 font-draft text-[0.66rem] tracking-[0.14em] text-graphite uppercase sm:block">
                  {l.note}
                </span>
              </span>
            </Reveal>
          ))}
        </h1>

        <Reveal delay={560} className="mt-8 flex max-w-[62ch] flex-col gap-6 sm:mt-9 sm:gap-7">
          <p className="text-[length:var(--text-sub)] leading-relaxed text-cypress/80">
            A father and his oldest son, building outdoor space across {site.regionLong} for twenty
            years. New front yards, whole rear yards, pools brought back from the dead, all drawn and
            built by the same two names that answer the phone.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.contact.phoneHref}
              className="flex items-center justify-center gap-3 bg-cypress px-6 py-4 text-limestone transition-colors hover:bg-patina sm:justify-start sm:py-3.5"
            >
              <PhoneGlyph className="h-4 w-4" />
              <span className="text-[0.98rem] tracking-wide">
                Call <span className="tabular-nums">{site.contact.phone}</span>
              </span>
            </a>
            <a
              href={site.contact.smsHref}
              className="flex items-center justify-center gap-3 border border-cypress/30 px-6 py-4 text-[0.98rem] tracking-wide transition-colors hover:border-cypress hover:bg-cypress/5 sm:justify-start sm:py-3.5"
            >
              <TextGlyph className="h-4 w-4" />
              Text us a photo
            </a>
          </div>

          <p className="-mt-2 text-[0.85rem] text-cypress/60">
            Free on-site estimates across {site.regionLong}.
          </p>
        </Reveal>
      </div>

      <Reveal
        threshold={0}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[27vh] min-h-[190px] w-full sm:h-[44vh] sm:min-h-[300px] text-cypress"
      >
        <SiteSection />
      </Reveal>

      <div className="absolute right-5 bottom-6 z-20 flex items-end gap-5 sm:right-8 lg:right-12">
        <span className="sheet-label hidden lg:block">Section A-A · 1:100</span>
        <NorthArrow className="hidden h-11 w-auto text-cypress/60 sm:block" />
      </div>
    </section>
  );
}

/**
 * Section A–A: house wall, terrace, pool shell, planting, ridge line.
 * Drawn as a cut section so the earth and the shell — the parts of the job
 * that actually decide whether it lasts — are the things on display.
 */
function SiteSection() {
  return (
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {/* distant ridge */}
      <path
        className="ink"
        style={{ ["--len" as string]: 1800, ["--ink-delay" as string]: "300ms" }}
        d="M900 196c46-30 78 8 118-16s62-40 108-30 74 44 128 34 108-30 186-6"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.32"
      />
      <path
        className="ink"
        style={{ ["--len" as string]: 1800, ["--ink-delay" as string]: "420ms" }}
        d="M760 214c60-22 96 6 150-10s86-26 142-16 96 30 158 22 116-16 190 4"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.22"
      />

      {/* earth mass below grade */}
      <path d="M0 232h1440v168H0z" fill="url(#stipple-bed)" className="wash" style={{ ["--wash-opacity" as string]: 0.55 }} />

      {/* finished grade */}
      <path
        className="ink"
        style={{ ["--len" as string]: 1500, ["--ink-delay" as string]: "120ms" }}
        d="M0 232h468"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        className="ink"
        style={{ ["--len" as string]: 1500, ["--ink-delay" as string]: "200ms" }}
        d="M900 232h540"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* house wall + eave, left */}
      <path
        className="ink"
        style={{ ["--len" as string]: 900, ["--ink-delay" as string]: "0ms" }}
        d="M0 232V48h214v184M-26 48 107 6 240 48"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        className="ink"
        style={{ ["--len" as string]: 700, ["--ink-delay" as string]: "260ms" }}
        d="M62 232v-88h54v88M150 144h46v42h-46z"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* terrace paving + base course */}
      <path d="M214 216h254v16H214z" fill="url(#hatch-paving)" className="wash" style={{ ["--wash-opacity" as string]: 0.9 }} />
      <path
        className="ink"
        style={{ ["--len" as string]: 900, ["--ink-delay" as string]: "340ms" }}
        d="M214 216h254M214 232h254"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.65"
      />

      {/* pool shell, cut */}
      <path
        className="ink"
        style={{ ["--len" as string]: 1600, ["--ink-delay" as string]: "460ms" }}
        d="M468 232v-14h64v14M468 232v72c0 26 22 48 48 48h336c26 0 48-22 48-48v-72M900 232v-14h-64v14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* shell thickness */}
      <path
        className="ink"
        style={{ ["--len" as string]: 1600, ["--ink-delay" as string]: "620ms" }}
        d="M456 232v72c0 33 27 60 60 60h336c33 0 60-27 60-60v-72"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />

      {/* water body */}
      <path
        className="wash"
        style={{ ["--wash-opacity" as string]: 0.16, ["--wash-delay" as string]: "1200ms" }}
        d="M468 246v58c0 26 22 48 48 48h336c26 0 48-22 48-48v-58H468Z"
        fill="url(#water-fill)"
      />
      <g className="wash" style={{ ["--wash-opacity" as string]: 1, ["--wash-delay" as string]: "1300ms" }}>
        <path
          className="ink swell"
          style={{ ["--len" as string]: 500, ["--ink-delay" as string]: "1200ms" }}
          d="M480 246c22 0 22 5 44 5s22-5 44-5 22 5 44 5 22-5 44-5 22 5 44 5 22-5 44-5 22 5 44 5 22-5 44-5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          className="ink swell-slow"
          style={{ ["--len" as string]: 500, ["--ink-delay" as string]: "1400ms" }}
          d="M484 268c22 0 22 4 44 4s22-4 44-4 22 4 44 4 22-4 44-4 22 4 44 4 22-4 44-4 22 4 44 4"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path className="glint" d="M600 240h84M760 240h44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* waterline tile band */}
      <path
        className="ink"
        style={{ ["--len" as string]: 900, ["--ink-delay" as string]: "820ms" }}
        d="M468 240h432"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="4 3"
        opacity="0.65"
      />

      {/* specimen olive + massing, right */}
      <g className="wash" style={{ ["--wash-opacity" as string]: 1, ["--wash-delay" as string]: "1000ms" }}>
        <path d="M1052 232v-84" stroke="currentColor" strokeWidth="1.4" />
        <path d="M1052 176c-16-8-26-22-28-38M1052 168c14-8 24-20 27-36" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <circle cx="1052" cy="122" r="46" stroke="currentColor" strokeWidth="1" />
        <circle cx="1052" cy="122" r="30" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
        <circle cx="1052" cy="122" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <circle cx="1178" cy="206" r="26" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
        <circle cx="1222" cy="200" r="32" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
        <circle cx="1268" cy="204" r="28" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
        <circle cx="1312" cy="198" r="34" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
        <circle cx="1360" cy="207" r="25" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
      </g>

      {/* dimension string */}
      <g
        className="wash"
        style={{ ["--wash-opacity" as string]: 0.55, ["--wash-delay" as string]: "1500ms" }}
        stroke="currentColor"
        strokeWidth="0.7"
      >
        <path d="M214 384h254M214 378v12M468 378v12" />
        <path d="M468 384h432M900 378v12" />
        <path d="M900 384h300M1200 378v12" />
      </g>
    </svg>
  );
}
