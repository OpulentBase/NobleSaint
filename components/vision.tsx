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
  /** Short enough to stay one or two lines on a phone card. */
  spec: string;
  tags: Tag[];
  tall?: boolean;
};

const shots: Shot[] = [
  {
    src: "/vision/01.jpg",
    n: "01",
    title: "Modern rear yard",
    spec: "Dark plaster pool · fire table · uplit trees",
    tags: ["pools", "fire", "hardscape", "lighting"],
    tall: true,
  },
  {
    src: "/vision/02.jpg",
    n: "02",
    title: "Contemporary front yard",
    spec: "Large-format driveway · planted runnels · path lighting",
    tags: ["front", "hardscape", "lighting", "planting"],
  },
  {
    src: "/vision/03.jpg",
    n: "03",
    title: "Raised planter & olive",
    spec: "Seat-height planter · olive specimen · low-water beds",
    tags: ["planting", "hardscape", "lighting", "front"],
  },
  {
    src: "/vision/04.jpg",
    n: "04",
    title: "Pool & fire terrace",
    spec: "Travertine deck · flush spa · linear fire trough",
    tags: ["pools", "fire", "hardscape"],
    tall: true,
  },
  {
    src: "/vision/05.jpg",
    n: "05",
    title: "Pool, spa & fire at dusk",
    spec: "Raised spa with spillway · fire table · riser lights",
    tags: ["pools", "fire", "lighting", "hardscape"],
    tall: true,
  },
  {
    src: "/vision/06.jpg",
    n: "06",
    title: "Terrace & water wall",
    spec: "Sheet-fall water feature · lit risers · outdoor fireplace",
    tags: ["fire", "lighting", "hardscape", "planting"],
  },
];

export function Vision() {
  const [active, setActive] = useState<Tag | null>(null);

  // Filtering removes cards outright. Fading them in place read as broken on a
  // phone, where you scroll past ghost images instead of seeing a shorter set.
  const visible = active === null ? shots : shots.filter((s) => s.tags.includes(active));
  const activeLabel = tags.find((t) => t.id === active)?.label;

  return (
    <section id="vision" className="relative isolate overflow-hidden bg-cypress text-limestone">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
        <SheetHead
          code="Vision"
          title="What your property could become."
          tone="light-on-dark"
        />

        {/* Chips scroll sideways rather than wrapping into a block that pushes
            the images off the first screen. */}
        <Reveal delay={80} className="mt-9 -mx-5 sm:mx-0">
          <div className="flex gap-2.5 overflow-x-auto overscroll-x-contain px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x_pan-y] sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
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

        <div className="mt-5 flex items-center gap-3">
          <p aria-live="polite" className="font-draft text-[0.68rem] tracking-[0.14em] text-limestone/60 uppercase">
            {visible.length} {visible.length === 1 ? "concept" : "concepts"}
            {activeLabel ? ` · ${activeLabel}` : ""}
          </p>
          <span className="h-px flex-1 bg-limestone/15" aria-hidden="true" />
          <p className="font-draft text-[0.68rem] tracking-[0.14em] text-limestone/40 uppercase lg:hidden">
            Swipe
          </p>
        </div>

        {/* Phones get a swipeable lookbook — six tall cards stacked vertically
            was three and a half screens of scrolling. Desktop keeps the mosaic. */}
        <div className="mt-4 -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x_pan-y] sm:mx-0 sm:px-0 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:[touch-action:auto] [&::-webkit-scrollbar]:hidden">
          {visible.map((s, i) => (
            <Reveal
              key={s.src}
              delay={(i % 3) * 90}
              threshold={0.05}
              className={`w-[82vw] shrink-0 snap-center sm:w-[58vw] lg:w-auto lg:shrink ${
                s.tall ? "lg:row-span-2" : ""
              }`}
            >
              <figure className="group relative h-full overflow-hidden bg-cypress-70 select-none">
                <div
                  className={`relative w-full ${
                    s.tall ? "aspect-[4/5] lg:aspect-[2/3]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={s.src}
                    alt={`${s.title}. ${s.spec.replace(/ · /g, ", ")}.`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 58vw, 82vw"
                    quality={78}
                    loading="lazy"
                    draggable={false}
                    className="pointer-events-none object-cover select-none transition-transform duration-[1.2s] ease-out [-webkit-touch-callout:none] [-webkit-user-drag:none] group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-cypress via-cypress/45 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:p-5">
                  <span className="flex items-center gap-2.5">
                    <span className="font-draft text-[0.68rem] tracking-[0.14em] text-brass tabular-nums">
                      {s.n}
                    </span>
                    <span className="h-px w-5 bg-brass/70" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[1.45rem] leading-tight font-light sm:text-[1.6rem]">
                    {s.title}
                  </h3>
                  <p className="text-[0.82rem] leading-snug text-limestone/75 sm:text-[0.85rem]">
                    {s.spec}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-10 flex flex-col gap-2.5 border-t border-limestone/15 pt-8 sm:flex-row sm:items-center"
        >
          <a
            href={site.contact.phoneHref}
            className="flex items-center justify-center gap-3 bg-limestone px-6 py-3.5 text-[0.95rem] tracking-wide text-cypress transition-colors hover:bg-brass"
          >
            <PhoneGlyph className="h-4 w-4" />
            Call {site.contact.phone}
          </a>
          <a
            href={site.contact.smsHref}
            className="flex items-center justify-center gap-3 border border-limestone/40 px-6 py-3.5 text-[0.95rem] tracking-wide text-limestone transition-colors hover:border-limestone hover:bg-limestone/10"
          >
            <TextGlyph className="h-4 w-4" />
            Let&apos;s create your project
          </a>
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
      className={`shrink-0 border px-4 py-2.5 text-[0.85rem] whitespace-nowrap transition-colors ${
        on
          ? "border-brass bg-brass text-cypress"
          : "border-limestone/25 text-limestone/75 hover:border-limestone/60 hover:text-limestone"
      }`}
    >
      {label}
    </button>
  );
}
