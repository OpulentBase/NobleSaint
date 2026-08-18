"use client";

import { useEffect, useState } from "react";
import { PhoneGlyph, TextGlyph } from "./nav";
import { site } from "@/lib/site";

/**
 * Phones only, and only once the hero has scrolled away. While the hero is on
 * screen its own Call and Text buttons are doing the work, so showing the bar
 * as well is just redundancy covering the photograph.
 */
export function CallBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!shown}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-cypress/12 bg-dg/95 backdrop-blur-md transition-transform duration-400 ease-out lg:hidden ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5 px-4 py-3">
        <a
          href={site.contact.phoneHref}
          tabIndex={shown ? 0 : -1}
          className="flex items-center justify-center gap-2.5 bg-cypress py-3.5 text-[0.95rem] tracking-wide text-limestone active:bg-patina"
        >
          <PhoneGlyph className="h-4 w-4" />
          Call now
        </a>
        <a
          href={site.contact.smsHref}
          tabIndex={shown ? 0 : -1}
          className="flex items-center justify-center gap-2.5 border border-cypress/30 py-3.5 text-[0.95rem] tracking-wide text-cypress active:bg-cypress/5"
        >
          <TextGlyph className="h-4 w-4" />
          Text us
        </a>
      </div>
    </div>
  );
}
