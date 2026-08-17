import { WordmarkStacked } from "./marks";
import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cypress/12 bg-dg">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6">
            <WordmarkStacked className="text-cypress" />
            <p className="max-w-[34ch] text-[0.95rem] leading-relaxed text-cypress/70">
              {site.tagline} Serving {site.regionLong} since {site.founded}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="sheet-label">Talk to us</p>
            <a
              href={site.contact.phoneHref}
              className="font-display text-[2rem] leading-none font-light tabular-nums transition-colors hover:text-patina sm:text-[2.5rem]"
            >
              {site.contact.phone}
            </a>
            <div className="mt-1 flex flex-wrap gap-2.5">
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-2.5 bg-cypress px-5 py-3 text-[0.9rem] text-limestone transition-colors hover:bg-patina"
              >
                <PhoneGlyph className="h-3.5 w-3.5" />
                Call
              </a>
              <a
                href={site.contact.smsHref}
                className="flex items-center gap-2.5 border border-cypress/30 px-5 py-3 text-[0.9rem] text-cypress transition-colors hover:bg-cypress/5"
              >
                <TextGlyph className="h-3.5 w-3.5" />
                Text
              </a>
            </div>
            <p className="sheet-label mt-1">{site.contact.person}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cypress/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="sheet-label">
            © {year} {site.legalName}
            {site.license ? ` · CSLB #${site.license}` : ""}
          </p>
          <p className="sheet-label">Landscapes · Hardscapes · Pools · {site.region}</p>
        </div>
      </div>
    </footer>
  );
}
