"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { NorthArrow, PaperTooth } from "./marks";
import { SheetHead } from "./sheet-head";

type LayerId = "paving" | "water" | "planting" | "structure" | "drainage" | "lighting";

const legend: { id: LayerId; code: string; label: string; note: string }[] = [
  { id: "paving", code: "HS-01", label: "Paving & masonry", note: "Travertine terrace, pool deck, seat wall" },
  { id: "water", code: "PL-01", label: "Pool & spa", note: "Gunite shell, raised spa, Baja shelf" },
  { id: "planting", code: "LS-01", label: "Planting", note: "Olive, hedge line, low-water beds" },
  { id: "structure", code: "ST-01", label: "Structures", note: "Pergola, outdoor kitchen, fire pit" },
  { id: "drainage", code: "CV-01", label: "Drainage & grade", note: "Area drains, 1.5% fall to street" },
  { id: "lighting", code: "EL-01", label: "Lighting", note: "Path, uplight, step and water" },
];

export function PlanView() {
  const [hovered, setHovered] = useState<LayerId | null>(null);
  const [pinned, setPinned] = useState<LayerId | null>(null);
  const active = pinned ?? hovered;

  const layer = (id: LayerId) =>
    `transition-[opacity,color] duration-500 ${
      active === null ? "opacity-100" : active === id ? "text-patina opacity-100" : "opacity-[0.12]"
    }`;

  return (
    <section id="plan" className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
      <SheetHead
        code="L-3.0 — Site plan"
        title="Everything is drawn before anything is dug."
        intro="A representative rear yard at 1:50. You get a plan like this before you sign anything, with materials named and dimensions called out. Move through the layers to see how a yard gets put together."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* The drawing */}
        <Reveal
          delay={100}
          threshold={0.08}
          className="relative isolate overflow-hidden border border-cypress/20 bg-limestone lg:col-span-9"
        >
          <PaperTooth className="opacity-30" />
          <div className="relative overflow-x-auto overscroll-x-contain">
          <svg
            viewBox="0 0 1200 780"
            className="relative block h-auto w-full min-w-[900px] text-cypress"
            fill="none"
            role="img"
            aria-label="Top-down site plan of a rear yard showing a terrace, gunite pool with raised spa, pergola, outdoor kitchen, fire pit, planting beds, drainage and lighting."
          >
            {/* --- property line ------------------------------------ */}
            <path
              d="M34 34v712h1132V34"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeDasharray="14 6 3 6"
              opacity="0.45"
            />

            {/* --- residence ---------------------------------------- */}
            <rect x="96" y="34" width="620" height="168" fill="url(#hatch-concrete)" opacity="0.5" />
            <g className="ink" style={{ ["--len" as string]: 3000 }}>
              <path d="M96 34v168h620V34" stroke="currentColor" strokeWidth="2" />
            </g>
            <g stroke="currentColor" strokeWidth="1.3" opacity="0.85">
              <path d="M300 202h96M300 196v12M396 196v12" />
              <path d="M520 202h84M520 196v12M604 196v12" />
            </g>
            <text x="406" y="128" textAnchor="middle" className="fill-current" style={labelStyle(13)}>
              RESIDENCE
            </text>
            <text x="348" y="230" textAnchor="middle" className="fill-current" style={labelStyle(9)} opacity={0.75}>
              SLIDING DOOR
            </text>

            {/* --- paving ------------------------------------------- */}
            <g className={layer("paving")}>
              {/* upper terrace */}
              <rect x="96" y="202" width="884" height="150" fill="url(#hatch-paving)" opacity="0.85" />
              {/* pool deck */}
              <rect x="232" y="352" width="748" height="320" fill="url(#hatch-paving)" opacity="0.55" />
              <g className="ink" style={{ ["--len" as string]: 3400, ["--ink-delay" as string]: "220ms" }}>
                <path d="M96 202v150h884V202" stroke="currentColor" strokeWidth="1.6" />
                <path d="M232 352v320h748V352" stroke="currentColor" strokeWidth="1.6" />
              </g>
              {/* joint pattern, running bond */}
              <g stroke="currentColor" strokeWidth="0.5" opacity="0.32">
                <path d="M96 252h884M96 302h884" />
                <path d="M200 202v150M340 202v150M480 202v150M620 202v150M760 202v150M900 202v150" />
                <path d="M232 412h748M232 472h748M232 532h748M232 592h748M232 652h748" />
                <path d="M292 352v320M352 352v320M920 352v320" />
              </g>
              {/* seat wall */}
              <path d="M500 672h480" stroke="currentColor" strokeWidth="6" strokeLinecap="square" opacity="0.9" />
              <text x="740" y="662" textAnchor="middle" className="fill-current" style={labelStyle(9)}>
                SEAT WALL — 18&quot; H
              </text>
              <text x="502" y="336" textAnchor="middle" className="fill-current" style={labelStyle(10)}>
                TRAVERTINE — FRENCH PATTERN
              </text>
            </g>

            {/* --- pool & spa --------------------------------------- */}
            <g className={layer("water")}>
              <g className="ink" style={{ ["--len" as string]: 2600, ["--ink-delay" as string]: "540ms" }}>
                <rect x="400" y="410" width="386" height="180" rx="14" stroke="currentColor" strokeWidth="2" />
                <rect x="388" y="398" width="410" height="204" rx="20" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
                <circle cx="878" cy="472" r="72" stroke="currentColor" strokeWidth="2" />
                <circle cx="878" cy="472" r="84" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
              </g>
              <g className="wash" style={{ ["--wash-opacity" as string]: 0.26, ["--wash-delay" as string]: "1150ms" }}>
                <rect x="400" y="410" width="386" height="180" rx="14" fill="url(#water-fill)" />
                <circle cx="878" cy="472" r="72" fill="url(#water-fill)" />
              </g>
              {/* Baja shelf */}
              <path d="M400 410h84v180h-84z" stroke="currentColor" strokeWidth="0.9" strokeDasharray="5 4" opacity="0.75" />
              <text x="442" y="504" textAnchor="middle" className="fill-current" style={labelStyle(9)}>
                BAJA
              </text>
              {/* spillway, spa into pool */}
              <path d="M786 456h20v32h-20z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M792 472h8" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
              {/* ripple */}
              <g className="wash" style={{ ["--wash-opacity" as string]: 0.42, ["--wash-delay" as string]: "1350ms" }}>
                <path
                  className="swell"
                  d="M424 464c26 0 26 8 52 8s26-8 52-8 26 8 52 8 26-8 52-8 26 8 52 8"
                  stroke="currentColor"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
                <path
                  className="swell-slow"
                  d="M424 540c26 0 26 8 52 8s26-8 52-8 26 8 52 8 26-8 52-8 26 8 52 8"
                  stroke="currentColor"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </g>
              <text x="593" y="388" textAnchor="middle" className="fill-current" style={labelStyle(11)}>
                GUNITE POOL — 28&apos;-0&quot; × 15&apos;-0&quot;
              </text>
              <text x="878" y="578" textAnchor="middle" className="fill-current" style={labelStyle(10)}>
                RAISED SPA
              </text>
            </g>

            {/* --- structures --------------------------------------- */}
            <g className={layer("structure")}>
              {/* pergola over the terrace */}
              <rect x="716" y="212" width="246" height="130" stroke="currentColor" strokeWidth="1.6" strokeDasharray="9 5" />
              <g stroke="currentColor" strokeWidth="0.8" opacity="0.55">
                <path d="M738 212v130M760 212v130M782 212v130M804 212v130M826 212v130M848 212v130M870 212v130M892 212v130M914 212v130M936 212v130" />
              </g>
              {[
                [720, 216],
                [958, 216],
                [720, 338],
                [958, 338],
              ].map(([cx, cy]) => (
                <rect key={`p-${cx}-${cy}`} x={cx - 8} y={cy - 8} width="16" height="16" fill="currentColor" opacity="0.85" />
              ))}
              <text x="839" y="374" textAnchor="middle" className="fill-current" style={labelStyle(10)}>
                CEDAR PERGOLA
              </text>

              {/* outdoor kitchen */}
              <path d="M112 214h176v58H112z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M112 272v46h60v-46" stroke="currentColor" strokeWidth="1.6" />
              <g stroke="currentColor" strokeWidth="0.8" opacity="0.7">
                <path d="M150 214v58M212 214v58" />
                <circle cx="181" cy="243" r="13" />
                <path d="M181 230v26M168 243h26" />
              </g>
              <text x="200" y="338" textAnchor="middle" className="fill-current" style={labelStyle(10)}>
                KITCHEN + GRILL
              </text>

              {/* fire pit, set into the west deck */}
              <circle cx="306" cy="590" r="42" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="306" cy="590" r="27" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <path d="M306 563v54M279 590h54" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
              <path
                d="M232 590a74 74 0 0 1 148 0"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 5"
                opacity="0.7"
              />
              <text x="306" y="504" textAnchor="middle" className="fill-current" style={labelStyle(10)}>
                FIRE PIT
              </text>
            </g>

            {/* --- planting ----------------------------------------- */}
            <g className={layer("planting")}>
              <path d="M34 202h62v150h136v394H34z" fill="url(#stipple-bed)" opacity="0.9" />
              <path d="M980 202h186v544H980z" fill="url(#stipple-bed)" opacity="0.9" />
              <path d="M232 672h748v74H232z" fill="url(#stipple-bed)" opacity="0.6" />
              <g
                className="ink"
                style={{ ["--len" as string]: 3200, ["--ink-delay" as string]: "760ms" }}
                stroke="currentColor"
                strokeWidth="1.1"
                opacity="0.8"
              >
                <path d="M232 352v394M980 202v544M34 746h1132" />
              </g>
              {/* specimen olives, plan symbol */}
              {[
                [128, 470, 58],
                [1074, 470, 64],
                [128, 640, 44],
              ].map(([cx, cy, r]) => (
                <g key={`t-${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r={r} stroke="currentColor" strokeWidth="1.2" />
                  <circle cx={cx} cy={cy} r={r * 0.62} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
                  <circle cx={cx} cy={cy} r={2.4} fill="currentColor" />
                  <path
                    d={`M${cx - r} ${cy}h${2 * r}M${cx} ${cy - r}v${2 * r}M${cx - r * 0.7} ${cy - r * 0.7}l${r * 1.4} ${r * 1.4}M${cx - r * 0.7} ${cy + r * 0.7}l${r * 1.4} ${-r * 1.4}`}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.35"
                  />
                </g>
              ))}
              {/* clipped hedge line along the rear */}
              <g stroke="currentColor" strokeWidth="0.9" opacity="0.75">
                {Array.from({ length: 14 }).map((_, i) => (
                  <circle key={`h-${i}`} cx={268 + i * 52} cy={710} r="19" />
                ))}
              </g>
              <text x="1074" y="572" textAnchor="middle" className="fill-current" style={labelStyle(10)}>
                OLIVE — 48&quot; BOX
              </text>
              <text x="110" y="562" textAnchor="middle" className="fill-current" style={labelStyle(9.5)}>
                LOW-WATER BED
              </text>
            </g>

            {/* --- drainage ----------------------------------------- */}
            <g className={layer("drainage")}>
              {[
                [252, 372],
                [960, 372],
                [252, 640],
                [960, 640],
              ].map(([cx, cy]) => (
                <g key={`d-${cx}-${cy}`}>
                  <rect x={cx - 10} y={cy - 10} width="20" height="20" stroke="currentColor" strokeWidth="1.2" />
                  <path d={`M${cx - 10} ${cy}h20M${cx} ${cy - 10}v20`} stroke="currentColor" strokeWidth="0.7" />
                </g>
              ))}
              <g stroke="currentColor" strokeWidth="0.9" strokeDasharray="7 5" opacity="0.7">
                <path d="M252 392v238M960 392v238M272 640h668" />
              </g>
              <path d="M606 616v20M599 630l7 8 7-8" stroke="currentColor" strokeWidth="1" opacity="0.85" />
              <text x="622" y="614" className="fill-current" style={labelStyle(9)}>
                1.5% FALL
              </text>
              <text x="284" y="376" className="fill-current" style={labelStyle(8.5)}>
                AREA DRAIN, TYP.
              </text>
            </g>

            {/* --- lighting ----------------------------------------- */}
            <g className={layer("lighting")}>
              {[
                [64, 290],
                [206, 404],
                [206, 560],
                [206, 706],
                [1040, 300],
                [1040, 600],
                [1040, 706],
                [540, 612],
                [900, 612],
              ].map(([cx, cy]) => (
                <g key={`l-${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="7" stroke="currentColor" strokeWidth="1.1" />
                  <path
                    d={`M${cx} ${cy - 14}v5M${cx} ${cy + 9}v5M${cx - 14} ${cy}h5M${cx + 9} ${cy}h5`}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </g>
              ))}
              <text x="1074" y="736" textAnchor="middle" className="fill-current" style={labelStyle(9)}>
                UPLIGHT, TYP.
              </text>
            </g>

            {/* --- dimension strings -------------------------------- */}
            <g stroke="currentColor" strokeWidth="0.8" opacity="0.5">
              <path d="M34 18h1132M34 10v16M1166 10v16" />
              <path d="M18 34v712M10 34h16M10 746h16" />
            </g>
            <text x="600" y="13" textAnchor="middle" className="fill-current" style={labelStyle(9)} opacity={0.7}>
              92&apos;-0&quot;
            </text>
            <text
              x="13"
              y="390"
              textAnchor="middle"
              transform="rotate(-90 13 390)"
              className="fill-current"
              style={labelStyle(9)}
              opacity={0.7}
            >
              58&apos;-0&quot;
            </text>
          </svg>
          </div>

          <p className="sheet-label relative border-t border-cypress/15 px-5 pt-3 lg:hidden">
            Swipe the drawing to read the full plan
          </p>

          {/* drawing title block */}
          <div className="relative flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cypress/20 px-5 py-4 sm:px-7">
            <NorthArrow className="h-10 w-auto shrink-0 text-cypress/60" />
            <div>
              <p className="sheet-label">Sheet</p>
              <p className="font-draft text-[0.82rem] tracking-[0.08em]">L-3.0 REAR YARD PLAN</p>
            </div>
            <div>
              <p className="sheet-label">Scale</p>
              <p className="font-draft text-[0.82rem] tracking-[0.08em] tabular-nums">1:50 @ 24×36</p>
            </div>
            <div className="hidden sm:block">
              <p className="sheet-label">Drawn</p>
              <p className="font-draft text-[0.82rem] tracking-[0.08em]">A. GUERRERO</p>
            </div>
            <div className="ml-auto flex items-center gap-2.5">
              <span className="sheet-label">0</span>
              <span className="relative block h-2 w-28 border border-cypress/50 sm:w-40">
                <span className="absolute inset-y-0 left-0 w-1/4 bg-cypress/50" />
                <span className="absolute inset-y-0 left-1/2 w-1/4 bg-cypress/50" />
              </span>
              <span className="sheet-label">20&apos;</span>
            </div>
          </div>
        </Reveal>
        {/* Legend — the interactive control */}
        <div className="lg:col-span-3">
          <p className="sheet-label">Legend · select a layer to isolate it</p>
          <ul className="mt-5 flex flex-col border-t border-cypress/15">
            {legend.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setHovered(l.id);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setHovered(null);
                  }}
                  onFocus={() => setHovered(l.id)}
                  onBlur={() => setHovered(null)}
                  onClick={() => {
                    setHovered(null);
                    setPinned((prev) => (prev === l.id ? null : l.id));
                  }}
                  aria-pressed={active === l.id}
                  className={`flex w-full flex-col items-start gap-1 border-b border-cypress/15 py-3.5 text-left transition-colors ${
                    active === l.id ? "text-patina" : "text-cypress hover:text-patina"
                  }`}
                >
                  <span className="flex w-full items-baseline gap-3">
                    <span className="font-draft text-[0.66rem] tracking-[0.1em] text-graphite">{l.code}</span>
                    <span className="text-[0.95rem]">{l.label}</span>
                    <span
                      className={`ml-auto h-2 w-2 shrink-0 rotate-45 border transition-colors ${
                        active === l.id ? "border-patina bg-patina" : "border-cypress/40"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[0.8rem] leading-snug text-cypress/55">{l.note}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.8rem] leading-relaxed text-cypress/55">
            Drawing shown is representative. Your plan is measured on your property.
          </p>
        </div>

      </div>
    </section>
  );
}

function labelStyle(size: number): React.CSSProperties {
  // Longhand rather than the `font` shorthand: the shorthand silently drops
  // the whole declaration in renderers that do not resolve the var().
  return {
    fontFamily: "var(--font-draft)",
    // Call sites use true drafting sizes; this lifts them to stay legible
    // once the 1200-unit drawing is scaled down to fit a screen.
    fontSize: `${(size * 1.18).toFixed(2)}px`,
    fontWeight: 500,
    letterSpacing: "0.12em",
  };
}
