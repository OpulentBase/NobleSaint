"use client";

import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

/**
 * Phones only. Anchored to the bottom of the viewport so calling or texting is
 * one thumb-reach away at any scroll position — most visitors arrive from a
 * Yelp or Maps listing already intending to make contact.
 *
 * Body carries matching bottom padding (see globals.css) so nothing is covered.
 */
export function CallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cypress/12 bg-dg/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5 px-4 py-3">
        <a
          href={site.contact.phoneHref}
          className="flex items-center justify-center gap-2.5 bg-cypress py-3.5 text-[0.95rem] tracking-wide text-limestone active:bg-patina"
        >
          <PhoneGlyph className="h-4 w-4" />
          Call now
        </a>
        <a
          href={site.contact.smsHref}
          className="flex items-center justify-center gap-2.5 border border-cypress/30 py-3.5 text-[0.95rem] tracking-wide text-cypress active:bg-cypress/5"
        >
          <TextGlyph className="h-4 w-4" />
          Text us
        </a>
      </div>
    </div>
  );
}
