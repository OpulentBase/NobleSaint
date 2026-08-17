import { Reveal } from "./reveal";
import { PaperTooth } from "./marks";
import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

const lines = [
  { word: "Landscapes", note: "grade, drainage, planting" },
  { word: "Hardscapes", note: "stone, masonry, structure" },
  { word: "Pools", note: "gunite, tile, water" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex flex-col overflow-hidden pt-28 sm:pt-36 lg:min-h-svh">
      <PaperTooth />

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-24">
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
            A father and his oldest son, building outdoor space across {site.regionLong} for nearly thirty
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

    </section>
  );
}
