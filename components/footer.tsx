import { Crest, Wordmark } from "./marks";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cypress/15 bg-dg">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 text-cypress">
              <Crest className="h-12 w-auto text-brass" />
              <Wordmark className="text-base" />
            </div>
            <p className="max-w-[36ch] text-[0.95rem] leading-relaxed text-cypress/70">
              {site.tagline} Serving {site.region} since {site.founded}.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="sheet-label">Direct</p>
            <a href={site.contact.phoneHref} className="font-display text-3xl font-light tabular-nums hover:text-patina">
              {site.contact.phone}
            </a>
            <a href={site.contact.emailHref} className="text-[0.95rem] text-cypress/75 hover:text-patina">
              {site.contact.email}
            </a>
            <p className="sheet-label mt-1">{site.contact.person}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cypress/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="sheet-label">
            © {year} {site.legalName}
          </p>
          <p className="sheet-label">Landscapes · Hardscapes · Pools · Southern California</p>
        </div>
      </div>
    </footer>
  );
}
