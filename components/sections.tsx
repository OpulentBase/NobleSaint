import { Reveal } from "./reveal";
import { SheetHead } from "./sheet-head";
import { GlyphHardscape, GlyphLandscape, GlyphPool, PaperTooth } from "./marks";
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
                <span className="h-1 w-1 shrink-0 rotate-45 bg-brass" aria-hidden="true" />
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

export function Proof() {
  const points = [
    { k: "Since 1997", v: "Father and son, nearly 30 years" },
    { k: "OC & LA", v: "Orange County and Los Angeles" },
    { k: "Free", v: "On-site estimates, no obligation" },
    { k: "One crew", v: "The team that starts, finishes" },
  ];
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
      <dl className="grid grid-cols-2 gap-x-5 gap-y-8 border-y border-cypress/12 py-8 sm:gap-x-10 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal key={p.k} delay={i * 80} className="flex flex-col gap-1.5">
            <dt className="font-display text-[1.5rem] leading-none font-light sm:text-[1.85rem]">{p.k}</dt>
            <dd className="text-[0.85rem] leading-snug text-cypress/65">{p.v}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function Scope() {
  return (
    <section id="scope" className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
      <SheetHead
        code="Our trades"
        title="Three trades, one crew."
        intro="Most yards need all three. Keeping them under one contract is what keeps the grade, the stone and the water line working together instead of against each other."
      />

      <div className="mt-12 grid gap-px border-t border-cypress/12 sm:mt-16 lg:grid-cols-3">
        {services.map((s, i) => {
          const Glyph = glyphs[i];
          return (
            <Reveal
              key={s.code}
              delay={i * 120}
              className="group relative flex flex-col gap-6 border-b border-cypress/12 py-9 last:border-b-0 sm:gap-7 sm:py-10 lg:border-b-0 lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="sheet-label pt-1">{`0${i + 1}`}</span>
                <Glyph className="h-14 w-auto text-cypress/70 transition-colors duration-500 group-hover:text-patina" />
              </div>

              <h3 className="font-display text-[2.25rem] leading-none font-light tracking-[-0.01em] sm:text-4xl">{s.title}</h3>
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
        <SheetHead code="History" title="It started with my father." tone="light-on-dark" />

        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7 lg:col-start-1">
            <div className="flex flex-col gap-6 text-[1.0625rem] leading-[1.75] text-limestone/78">
              <p>
                My father began this business back in 1997. Being his oldest son, I felt the
                responsibility of helping him take our family business to the next level. I have been
                learning from him since I was a kid, starting with the fundamentals of the home
                improvement industry.
              </p>
              <p>
                Today we put his experience and knowledge together with my taste, and that is how we
                arrive at the design. We are still a team, stronger than ever, with our work standing
                in some of the most beautiful neighborhoods in Orange County and Los Angeles.
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
    { year: "1997", label: "Father breaks ground on the first job" },
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
    <section id="sequence" className="relative isolate overflow-hidden bg-dg-deep">
      <PaperTooth className="opacity-30" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
        <SheetHead
          code="Our process"
          title="Five stages, start to handover."
          intro="Order decides everything in this trade. Here is how a project runs, and where you hear from us in each stage."
        />

        {/* A single brass rail threads the stages together: one continuous
            process rather than five disconnected bullet points. */}
        <ol className="relative mt-14 sm:mt-20">
          <span
            className="absolute top-3 bottom-3 left-[13px] w-px bg-gradient-to-b from-brass/70 via-brass/35 to-transparent sm:left-[17px] lg:left-1/2"
            aria-hidden="true"
          />

          {sequence.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 90}
              className="relative pb-12 pl-11 last:pb-0 sm:pb-14 sm:pl-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0"
            >
              {/* node on the rail */}
              <span
                className="absolute top-2 left-0 flex h-[27px] w-[27px] items-center justify-center rounded-full border border-brass/50 bg-dg-deep sm:h-[35px] sm:w-[35px] lg:left-1/2 lg:-translate-x-1/2"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
              </span>

              <div
                className={
                  i % 2 === 0
                    ? "lg:col-start-1 lg:pr-4 lg:text-right"
                    : "lg:col-start-2 lg:row-start-1 lg:pl-4"
                }
              >
                <p className="font-draft text-[0.68rem] tracking-[0.16em] text-brass uppercase">
                  {step.meta}
                </p>
                <h3 className="mt-3 flex items-baseline gap-4 font-display text-[1.5rem] leading-[1.15] font-light tracking-[0.05em] uppercase sm:text-[2rem] lg:justify-start">
                  <span
                    className={`font-draft text-[0.8rem] tracking-[0.1em] text-cypress/30 tabular-nums ${
                      i % 2 === 0 ? "lg:order-2" : ""
                    }`}
                  >
                    {step.n}
                  </span>
                  <span className={i % 2 === 0 ? "lg:order-1 lg:ml-auto" : ""}>{step.title}</span>
                </h3>
                <p className="mt-3.5 max-w-[46ch] leading-relaxed text-cypress/75 lg:inline-block">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function Standards() {
  return (
    <section id="standards" className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
      <SheetHead code="How we work" title="What we hold to." />

      <div className="mt-12 grid gap-px sm:mt-14 sm:grid-cols-2">
        {standards.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 100}
            className="flex flex-col gap-3 border-t border-cypress/12 py-7 sm:py-8 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
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
