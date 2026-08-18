import Image from "next/image";
import { Reveal } from "./reveal";
import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden lg:min-h-svh"
    >
      {/* Full-bleed photograph. priority + sizes make this the LCP image and
          stop Next from serving an oversized file to phones. */}
      <Image
        src="/hero.jpg"
        alt="A finished rear yard at dusk: pool and raised spa, stone terrace, linear fire feature and a covered outdoor kitchen."
        fill
        priority
        quality={82}
        sizes="100vw"
        className="-z-20 object-cover object-[62%_50%] sm:object-center"
      />

      {/* Scrim: dark enough at the base to hold text, clear at the top so the
          sky and the house still read. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-cypress via-cypress/70 to-cypress/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-32 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-24">
        <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-draft text-[0.66rem] tracking-[0.18em] text-limestone/80 uppercase sm:text-[0.7rem]">
            {site.region}
          </span>
          <span className="h-px w-6 bg-brass sm:w-8" aria-hidden="true" />
          <span className="font-draft text-[0.66rem] tracking-[0.18em] text-limestone/70 uppercase sm:text-[0.7rem]">
            Family owned since {site.founded}
          </span>
        </Reveal>

        <h1 className="mt-6 text-limestone sm:mt-8">
          <span className="sr-only">
            Noble Saint, design and build. Landscapes, hardscapes and pools in Orange County and Los
            Angeles.
          </span>

          <Reveal delay={140} className="block" aria-hidden="true">
            <span className="flex items-center gap-[0.5em] font-display text-[clamp(1.6rem,6.5vw,3.25rem)] leading-none font-light tracking-[0.12em] uppercase">
              Noble Saint
              <span className="font-thin text-brass">|</span>
              <span className="tabular-nums">2026</span>
            </span>
          </Reveal>

          <Reveal delay={260} className="mt-3 block sm:mt-5" aria-hidden="true">
            <span className="flex items-center gap-[0.34em] font-display text-[clamp(3rem,13vw,8rem)] leading-[0.92] font-light tracking-[0.02em] uppercase">
              Design
              <span className="font-thin text-brass">|</span>
              Build
            </span>
          </Reveal>
        </h1>

        <Reveal delay={400} className="mt-7 flex max-w-[54ch] flex-col gap-6 sm:mt-9">
          <p className="text-[length:var(--text-sub)] leading-relaxed text-limestone/85">
            Landscapes, hardscapes and pools across {site.regionLong}. A father and his oldest son,
            building outdoor space for nearly thirty years, drawn and built by the same two names
            that answer the phone.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.contact.phoneHref}
              className="flex items-center justify-center gap-3 bg-limestone px-6 py-4 text-cypress transition-colors hover:bg-brass sm:justify-start sm:py-3.5"
            >
              <PhoneGlyph className="h-4 w-4" />
              <span className="text-[0.98rem] tracking-wide">
                Call <span className="tabular-nums">{site.contact.phone}</span>
              </span>
            </a>
            <a
              href={site.contact.smsHref}
              className="flex items-center justify-center gap-3 border border-limestone/45 px-6 py-4 text-[0.98rem] tracking-wide text-limestone backdrop-blur-sm transition-colors hover:border-limestone hover:bg-limestone/10 sm:justify-start sm:py-3.5"
            >
              <TextGlyph className="h-4 w-4" />
              Text us a photo
            </a>
          </div>

          <p className="-mt-1 text-[0.85rem] text-limestone/70">
            Free on-site estimates across {site.regionLong}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
