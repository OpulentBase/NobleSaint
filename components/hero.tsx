import Image from "next/image";
import { Reveal } from "./reveal";
import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[80svh] flex-col justify-end overflow-hidden sm:min-h-[86svh] lg:min-h-svh"
    >
      {/* On a phone the frame is far taller than the photo, so cover crops to a
          narrow vertical slice. The focal point is pulled left of centre to keep
          the pool and fire feature in frame rather than the house alone. */}
      <Image
        src="/hero.jpg"
        alt="A finished rear yard at dusk: pool and raised spa, stone terrace, linear fire feature and a covered outdoor kitchen."
        fill
        priority
        quality={82}
        sizes="100vw"
        className="-z-20 object-cover object-[37%_50%] sm:object-[45%_50%] lg:object-center"
      />

      {/* Bottom scrim carries the text. Top scrim keeps the nav readable
          against the bright sky. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-cypress via-cypress/72 to-cypress/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-cypress/65 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-28 pb-11 sm:px-8 sm:pb-16 lg:px-12 lg:pb-24">
        <Reveal className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-draft text-[0.62rem] tracking-[0.18em] text-limestone/85 uppercase sm:text-[0.7rem]">
            {site.region}
          </span>
          <span className="h-px w-5 bg-brass sm:w-8" aria-hidden="true" />
          <span className="font-draft text-[0.62rem] tracking-[0.18em] text-limestone/70 uppercase sm:text-[0.7rem]">
            Since {site.founded}
          </span>
        </Reveal>

        <h1 className="mt-5 text-limestone sm:mt-7">
          <span className="sr-only">
            Noble Saint, design and build. Landscapes, hardscapes and pools in Orange County and Los
            Angeles.
          </span>

          <Reveal delay={140} className="block" aria-hidden="true">
            <span className="flex items-center gap-[0.45em] font-display text-[clamp(1.25rem,5vw,3rem)] leading-none font-light tracking-[0.14em] uppercase">
              Noble Saint
              <span className="font-thin text-brass">|</span>
              <span className="tabular-nums">2026</span>
            </span>
          </Reveal>

          {/* Stacked on phones and tablets — as one row it overflows every
              viewport under 1280px. Row layout only where it actually fits. */}
          <Reveal delay={260} className="mt-2.5 block sm:mt-4" aria-hidden="true">
            <span className="flex flex-col font-display text-[clamp(3.5rem,19vw,7rem)] leading-[0.88] font-light tracking-[0.01em] uppercase lg:flex-row lg:items-center lg:gap-[0.3em] lg:text-[clamp(2.5rem,8vw,8rem)]">
              <span>Design</span>
              <span className="hidden font-thin text-brass lg:inline">|</span>
              <span>Build</span>
            </span>
          </Reveal>
        </h1>

        <Reveal delay={400} className="mt-6 flex max-w-[52ch] flex-col gap-5 sm:mt-8 sm:gap-6">
          <p className="text-[1.0625rem] leading-relaxed text-limestone/85 sm:text-[length:var(--text-sub)]">
            Landscapes, hardscapes and pools across {site.regionLong}.
            <span className="hidden sm:inline">
              {" "}
              A father and his oldest son, building outdoor space for nearly thirty years, drawn and
              built by the same two names that answer the phone.
            </span>
            <span className="sm:hidden"> Father and son, nearly thirty years.</span>
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
            {/* Hidden on phones: the fixed bar at the bottom already carries
                Text, and the extra button only pushes the photo out of frame. */}
            <a
              href={site.contact.smsHref}
              className="hidden items-center justify-center gap-3 border border-limestone/45 px-6 py-4 text-[0.98rem] tracking-wide text-limestone backdrop-blur-sm transition-colors hover:border-limestone hover:bg-limestone/10 sm:flex sm:justify-start sm:py-3.5"
            >
              <TextGlyph className="h-4 w-4" />
              Text us a photo
            </a>
          </div>

          <p className="-mt-1 text-[0.8rem] text-limestone/70 sm:text-[0.85rem]">
            Free on-site estimates. Call or text to get on the schedule.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
