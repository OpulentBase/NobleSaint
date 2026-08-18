"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./reveal";
import { SheetHead } from "./sheet-head";
import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

type Tag = "pools" | "fire" | "front" | "lighting" | "hardscape" | "planting";

const tags: { id: Tag; label: string }[] = [
  { id: "pools", label: "Pools & spas" },
  { id: "fire", label: "Fire features" },
  { id: "hardscape", label: "Hardscape" },
  { id: "lighting", label: "Lighting" },
  { id: "planting", label: "Planting" },
  { id: "front", label: "Front yards" },
];

type Shot = {
  src: string;
  n: string;
  title: string;
  spec: string;
  tags: Tag[];
  /** Editorial rhythm: which cards run tall on the desktop mosaic. */
  tall?: boolean;
};

const shots: Shot[] = [
  {
    src: "/vision/01.jpg",
    n: "01",
    title: "Modern rear yard",
    spec: "Dark plaster pool · linear fire table · large-format porcelain · uplit specimen trees",
    tags: ["pools", "fire", "hardscape", "lighting"],
    tall: true,
  },
  {
    src: "/vision/02.jpg",
    n: "02",
    title: "Contemporary front yard",
    spec: "Large-format driveway · planted runnels · in-grade path and step lighting",
    tags: ["front", "hardscape", "lighting", "planting"],
  },
  {
    src: "/vision/03.jpg",
    n: "03",
    title: "Raised planter & olive",
    spec: "Seat-height masonry planter · olive specimen · low-water underplanting",
    tags: ["planting", "hardscape", "lighting", "front"],
  },
  {
    src: "/vision/04.jpg",
    n: "04",
    title: "Pool & fire terrace",
    spec: "Travertine deck · flush spa · linear fire trough · covered dining",
    tags: ["pools", "fire", "hardscape"],
    tall: true,
  },
  {
    src: "/vision/05.jpg",
    n: "05",
    title: "Pool, spa & fire at dusk",
    spec: "Raised spa with spillway · fire table · riser lights and tree uplighting",
    tags: ["pools", "fire", "lighting", "hardscape"],
    tall: true,
  },
  {
    src: "/vision/06.jpg",
    n: "06",
    title: "Terrace & water wall",
    spec: "Sheet-fall water feature · illuminated risers · outdoor fireplace · clipped hedging",
    tags: ["fire", "lighting", "hardscape", "planting"],
  },
];

export function Vision() {
  const [active, setActive] = useState<Tag | null>(null);

  const matches = (s: Shot) => active === null || s.tags.includes(active);

  return (
    <section id="vision" className="relative isolate overflow-hidden bg-cypress text-limestone">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
        <SheetHead
          code="The vision"
          title="What your property could become."
          tone="light-on-dark"
          intro="Design concepts we work from, showing the materials, lighting and details that go into a build. Filter by what you are thinking about, then call or text and we will talk through what fits your property."
        />

        {/* Filters. Scrolls sideways on phones instead of wrapping into a
            four-line block that pushes the images off the screen. */}
        <Reveal delay={80} className="mt-9 -mx-5 sm:mx-0">
          <div className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 pb-1 sm:flex-wrap sm:overflow-visible sm:px-0">
            <FilterChip label="Everything" on={active === null} onClick={() => setActive(null)} />
            {tags.map((t) => (
              <FilterChip
                key={t.id}
                label={t.label}
                on={active === t.id}
                onClick={() => setActive(active === t.id ? null : t.id)}
              />
            ))}
          </div>
        </Reveal>

        {/* Editorial mosaic. Cards never leave the layout when filtered out —
            they recede, so nothing jumps under the reader's thumb. */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {shots.map((s, i) => (
            <Reveal
              key={s.src}
              delay={(i % 3) * 90}
              threshold={0.05}
              className={`${s.tall ? "lg:row-span-2" : ""} transition-[opacity,filter] duration-500 ${
                matches(s) ? "opacity-100" : "opacity-25 saturate-50"
              }`}
            >
              <figure className="group relative h-full overflow-hidden bg-cypress-70">
                <div className={`relative w-full ${s.tall ? "aspect-[3/4] lg:aspect-[2/3]" : "aspect-[3/4]"}`}>
                  <Image
                    src={s.src}
                    alt={`${s.title}. ${s.spec.replace(/ · /g, ", ")}.`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    quality={78}
                    loading="lazy"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-cypress via-cypress/25 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-4 sm:p-5">
                  <span className="flex items-center gap-2.5">
                    <span className="font-draft text-[0.62rem] tracking-[0.16em] text-brass tabular-nums">
                      {s.n}
                    </span>
                    <span className="h-px w-4 bg-brass/70" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[1.35rem] leading-tight font-light sm:text-[1.5rem]">
                    {s.title}
                  </h3>
                  <p className="font-draft text-[0.6rem] leading-relaxed tracking-[0.08em] text-limestone/70 uppercase sm:text-[0.63rem]">
                    {s.spec}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex flex-col gap-4 border-t border-limestone/15 pt-8 sm:mt-12">
          <p className="max-w-[56ch] text-[0.95rem] leading-relaxed text-limestone/70">
            Concepts shown are design references, not photographs of completed jobs. Send us a photo
            of your space and we will tell you honestly what is possible on it.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <a
              href={site.contact.phoneHref}
              className="flex items-center justify-center gap-3 bg-limestone px-6 py-3.5 text-[0.95rem] tracking-wide text-cypress transition-colors hover:bg-brass sm:justify-start"
            >
              <PhoneGlyph className="h-4 w-4" />
              Call {site.contact.phone}
            </a>
            <a
              href={site.contact.smsHref}
              className="flex items-center justify-center gap-3 border border-limestone/40 px-6 py-3.5 text-[0.95rem] tracking-wide text-limestone transition-colors hover:border-limestone hover:bg-limestone/10 sm:justify-start"
            >
              <TextGlyph className="h-4 w-4" />
              Text us a photo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FilterChip({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`shrink-0 snap-start border px-4 py-2.5 text-[0.85rem] whitespace-nowrap transition-colors ${
        on
          ? "border-brass bg-brass text-cypress"
          : "border-limestone/25 text-limestone/75 hover:border-limestone/60 hover:text-limestone"
      }`}
    >
      {label}
    </button>
  );
}
