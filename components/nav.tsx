"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./marks";
import { site } from "@/lib/site";

const sections = [
  { href: "#scope", label: "What we build" },
  { href: "#firm", label: "The firm" },
  { href: "#vision", label: "The vision" },
  { href: "#sequence", label: "How it works" },
];

export function Nav() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        lifted
          ? "border-b border-cypress/10 bg-dg/90 py-3 text-cypress backdrop-blur-md"
          : "border-b border-transparent py-4 text-limestone sm:py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 sm:gap-6 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="shrink-0 transition-opacity hover:opacity-70"
          aria-label={`${site.name}, back to top`}
        >
          <Wordmark className="text-[0.82rem] sm:text-[0.95rem]" />
        </a>

        <ul className="ml-auto hidden items-center gap-8 lg:flex">
          {sections.map((s) => (
            <li key={s.href}>
              <a href={s.href} className={`text-[0.85rem] transition-colors ${lifted ? "text-cypress/70 hover:text-cypress" : "text-limestone/80 hover:text-limestone"}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop: full number. On phones the fixed bottom bar carries this. */}
        <a
          href={site.contact.phoneHref}
          className={`ml-auto hidden shrink-0 items-center gap-2.5 px-5 py-3 text-[0.85rem] tracking-wide whitespace-nowrap transition-colors lg:ml-0 lg:flex ${
            lifted ? "bg-cypress text-limestone hover:bg-patina" : "bg-limestone text-cypress hover:bg-brass"
          }`}
        >
          <PhoneGlyph className="h-3.5 w-3.5" />
          <span className="tabular-nums">{site.contact.phone}</span>
        </a>

        {/* Phones: compact call chip, reachable without scrolling. */}
        <a
          href={site.contact.phoneHref}
          className={`ml-auto flex shrink-0 items-center gap-2 border px-3.5 py-2.5 text-[0.8rem] whitespace-nowrap lg:hidden ${
            lifted ? "border-cypress/25 text-cypress" : "border-limestone/50 text-limestone backdrop-blur-sm"
          }`}
        >
          <PhoneGlyph className="h-3.5 w-3.5" />
          Call
        </a>
      </nav>
    </header>
  );
}

export function PhoneGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M5.2 1.8 6.6 5 5.1 6.5a9 9 0 0 0 4.4 4.4L11 9.4l3.2 1.4v3.4c-6.2 0-12-5.8-12-12h3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 9.5a2 2 0 0 1-2 2H6l-3.5 3v-3H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
