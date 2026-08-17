import { Reveal } from "./reveal";
import { PaperTooth } from "./marks";
import { PhoneGlyph, TextGlyph } from "./nav";
import { SheetHead } from "./sheet-head";
import { site } from "@/lib/site";

/**
 * No form and no email. Every path here is a phone call or a text, because
 * a conversation closes a yard and an unanswered inbox does not.
 */
export function Contact() {
  return (
    <section id="inquiry" className="relative isolate overflow-hidden bg-cypress text-limestone">
      <PaperTooth className="opacity-[0.22]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
        <SheetHead
          code="Get started"
          title="Call or text Alfredo."
          tone="light-on-dark"
          intro={`You get Alfredo directly — not a call centre and not a form. Tell him where the property is and what you are thinking, and he will set a time to come look at it. Estimates across ${site.regionLong} are free.`}
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <a
              href={site.contact.phoneHref}
              className="group block border-b border-limestone/20 pb-7 transition-colors hover:border-brass"
            >
              <span className="sheet-label text-limestone/60">Call</span>
              <span className="mt-3 flex items-center gap-4">
                <span className="font-display text-[clamp(2.5rem,10vw,4.5rem)] leading-none font-light tracking-tight tabular-nums transition-colors group-hover:text-brass">
                  {site.contact.phone}
                </span>
              </span>
            </a>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={site.contact.phoneHref}
                className="flex items-center justify-center gap-3 bg-limestone px-6 py-4 text-[1rem] tracking-wide text-cypress transition-colors hover:bg-brass"
              >
                <PhoneGlyph className="h-4 w-4" />
                Call now
              </a>
              <a
                href={site.contact.smsHref}
                className="flex items-center justify-center gap-3 border border-limestone/30 px-6 py-4 text-[1rem] tracking-wide text-limestone transition-colors hover:border-limestone hover:bg-limestone/10"
              >
                <TextGlyph className="h-4 w-4" />
                Send a text
              </a>
            </div>

            <p className="mt-5 text-[0.875rem] leading-relaxed text-limestone/60">
              Texting is often fastest. Send a photo of the yard and roughly what you have in mind,
              and you will usually hear back the same day.
            </p>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-5">
            <dl className="flex flex-col divide-y divide-limestone/15 border-y border-limestone/15">
              <Meta term="Who answers" detail={`${site.contact.person}, second generation.`} />
              <Meta term="Service area" detail={`${site.regionLong}.`} />
              <Meta term="Estimates" detail="Free, on site, no obligation." />
              <Meta term="Typical reply" detail="Same day, most days. Evenings included." />
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Meta({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex flex-col gap-1.5 py-5">
      <dt className="sheet-label text-limestone/60">{term}</dt>
      <dd className="text-[1rem] leading-snug text-limestone/85">{detail}</dd>
    </div>
  );
}
