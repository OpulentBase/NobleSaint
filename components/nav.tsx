"use client";

import { useEffect, useState } from "react";
import { Crest, Wordmark } from "./marks";
import { site } from "@/lib/site";

const sheets = [
  { href: "#scope", code: "L-1.0", label: "Scope" },
  { href: "#firm", code: "L-2.0", label: "The firm" },
  { href: "#plan", code: "L-3.0", label: "Site plan" },
  { href: "#sequence", code: "L-4.0", label: "Sequence" },
  { href: "#inquiry", code: "L-6.0", label: "Inquiry" },
];

export function Nav() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        lifted
          ? "border-b border-cypress/12 bg-dg/86 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center gap-6 px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex shrink-0 items-center gap-3 text-cypress" aria-label={`${site.name}, home`}>
          <Crest className="h-9 w-auto text-brass" />
          <Wordmark className="text-[0.78rem] sm:text-[0.86rem]" />
        </a>

        <ul className="ml-auto hidden items-center gap-7 lg:flex">
          {sheets.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="group flex items-baseline gap-2 text-[0.8rem] text-cypress/75 transition-colors hover:text-cypress"
              >
                <span className="font-draft text-[0.62rem] tracking-[0.12em] text-graphite/70 transition-colors group-hover:text-patina">
                  {s.code}
                </span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.contact.phoneHref}
          className="ml-auto flex items-center gap-2.5 border border-cypress/25 px-4 py-2 text-[0.78rem] tracking-wide text-cypress transition-colors hover:border-cypress hover:bg-cypress hover:text-limestone lg:ml-0"
        >
          <span className="hidden font-draft text-[0.66rem] tracking-[0.1em] text-graphite sm:inline">CALL</span>
          <span className="tabular-nums">{site.contact.phone}</span>
        </a>
      </nav>
    </header>
  );
}
