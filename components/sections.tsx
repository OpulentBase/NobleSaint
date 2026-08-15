import { Reveal } from "./reveal";
import { SheetHead } from "./sheet-head";
import { GlyphHardscape, GlyphLandscape, GlyphPool, PaperTooth, Crest } from "./marks";
import { services, sequence, standards, site } from "@/lib/site";

const glyphs = [GlyphLandscape, GlyphHardscape, GlyphPool];

/* ---------------------------------------------------------------- */

const band = [
  "New construction",
  "Full rear yard renovation",
  "Gunite pools & spas",
  "Pool resurfacing",
  "Travertine & porcelain",
  "Drainage & grading",
  "Retaining walls",
  "Outdoor kitchens",
  "Landscape lighting",
  "Motor courts",
  "Fire features",
  "Specimen planting",
];

export function Band() {
  return (
    <section className="relative isolate overflow-hidden bg-cypress py-5 text-limestone">
      <div className="flex w-max drift">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {band.map((item) => (
              <li key={item} className="flex items-center gap-6 px-6">
                <Crest className="h-3.5 w-auto shrink-0 text-brass" />
                <span className="font-draft text-[0.7rem] tracking-[0.16em] whitespace-nowrap text-limestone/80 uppercase">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function Scope() {
  return (
    <section id="scope" className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
      <SheetHead
        code="L-1.0 — Scope of work"
        title="Three trades, one crew."
        intro="Most yards need all three. Keeping them under one contract is what keeps the grade, the stone and the water line working together instead of against each other."
      />

      <div className="mt-16 grid gap-px border-t border-cypress/15 sm:mt-20 lg:grid-cols-3">
        {services.map((s, i) => {
          const Glyph = glyphs[i];
          return (
            <Reveal
              key={s.code}
              delay={i * 120}
              className="group relative flex flex-col gap-7 border-b border-cypress/15 py-10 lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="sheet-label pt-1">{`${s.code} — 0${i + 1}`}</span>
                <Glyph className="h-14 w-auto text-cypress/70 transition-colors duration-500 group-hover:text-patina" />
              </div>

              <h3 className="font-display text-4xl leading-none font-light tracking-[-0.01em]">{s.title}</h3>
              <p className="max-w-[38ch] leading-relaxed text-cypress/75">{s.lede}</p>

              <ul className="mt-auto flex flex-col gap-2.5 pt-2">
                {s.scope.map((line) => (
                  <li key={line} className="flex items-baseline gap-3 text-[0.9rem] text-cypress/80">
                    <span className="h-px w-3 shrink-0 translate-y-[-0.28em] bg-patina" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function Firm() {
  return (
    <section id="firm" className="relative isolate overflow-hidden bg-cypress text-limestone">
      <PaperTooth className="opacity-[0.28]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
        <SheetHead code="L-2.0 — The firm" title="It started with my father." tone="light-on-dark" />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7 lg:col-start-1">
            <div className="flex flex-col gap-6 text-[1.0625rem] leading-[1.75] text-limestone/78">
              <p>
                My father began this business over twenty years ago. Being his oldest son, I felt the
                responsibility of helping him take our family business to the next level. I have been
                learning from him since I was a kid, starting with the fundamentals of the home
                improvement industry.
              </p>
              <p>
                Today we put his experience and knowledge together with my taste, and that is how we
                arrive at the design. We are still a team, stronger than ever, with our work standing
                in some of the most beautiful neighborhoods in Southern California.
              </p>
              <p className="text-limestone/95">
                It has never been easy. We will never settle, and we will keep improving so our clients
                get the treatment and the quality they deserve. We are here to serve and elevate our
                community, one property at a time.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <span className="h-px w-14 bg-brass" aria-hidden="true" />
              <div>
                <p className="font-display text-2xl font-light">{site.contact.person}</p>
                <p className="sheet-label mt-1 text-limestone/55">Second generation · {site.legalName}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="lg:col-span-5 lg:col-start-8">
            <Timeline />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** A drafted datum line: the two generations, plotted against real years. */
function Timeline() {
  const marks = [
    { year: "2004", label: "Father breaks ground on the first job" },
    { year: "2011", label: "Pool construction added to the scope" },
    { year: "2019", label: "Second generation takes on design" },
    { year: "Today", label: "Still one crew, still one name" },
  ];

  return (
    <div className="border border-limestone/15 p-7 sm:p-9">
      <p className="sheet-label text-limestone/55">Datum · Company history</p>
      <ol className="mt-8 flex flex-col">
        {marks.map((m, i) => (
          <li key={m.year} className="relative flex gap-6 pb-9 last:pb-0">
            {i < marks.length - 1 ? (
              <span
                className="absolute top-2.5 bottom-0 left-[3.5px] w-px bg-limestone/20"
                aria-hidden="true"
              />
            ) : null}
            <span
              className={`relative mt-1.5 h-[7px] w-[7px] shrink-0 rotate-45 ${
                i === marks.length - 1 ? "bg-brass" : "border border-limestone/50"
              }`}
              aria-hidden="true"
            />
            <div className="-mt-1">
              <p className="font-draft text-[0.78rem] tracking-[0.12em] text-brass tabular-nums">{m.year}</p>
              <p className="mt-1.5 text-[0.95rem] leading-snug text-limestone/72">{m.label}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function Sequence() {
  return (
    <section id="sequence" className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
      <SheetHead
        code="L-4.0 — Sequence of construction"
        title="How a job actually runs."
        intro="Order matters more than anything in this trade. Here is the sequence every project follows, and where you will hear from us in each one."
      />

      <ol className="mt-16 border-t border-cypress/15 sm:mt-20">
        {sequence.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 80}
            className="group grid gap-4 border-b border-cypress/15 py-9 transition-colors hover:bg-cypress/[0.035] sm:grid-cols-12 sm:gap-8"
          >
            <span className="font-draft text-[0.78rem] tracking-[0.14em] text-patina tabular-nums sm:col-span-1">
              {step.n}
            </span>
            <h3 className="font-display text-2xl leading-tight font-light sm:col-span-4 sm:text-[1.75rem]">
              {step.title}
            </h3>
            <p className="leading-relaxed text-cypress/75 sm:col-span-7">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function Standards() {
  return (
    <section id="standards" className="relative mx-auto w-full max-w-[1440px] px-5 pb-plate sm:px-8 lg:px-12">
      <SheetHead code="L-5.0 — General notes" title="What we hold to." />

      <div className="mt-14 grid gap-px sm:grid-cols-2">
        {standards.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 100}
            className="flex flex-col gap-3 border-t border-cypress/15 py-8 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
          >
            <span className="sheet-label">{`Note ${String(i + 1).padStart(2, "0")}`}</span>
            <h3 className="font-display text-2xl leading-snug font-light">{s.title}</h3>
            <p className="max-w-[46ch] leading-relaxed text-cypress/75">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
