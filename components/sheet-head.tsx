import { Reveal } from "./reveal";

/** Section header set as a drawing-sheet title: sheet number, rule, title. */
export function SheetHead({
  code,
  title,
  intro,
  tone = "dark-on-light",
}: {
  code: string;
  title: string;
  intro?: string;
  tone?: "dark-on-light" | "light-on-dark";
}) {
  const dark = tone === "light-on-dark";
  return (
    <Reveal className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span
          className={`font-draft text-[0.6875rem] tracking-[0.14em] uppercase ${
            dark ? "text-limestone/60" : "text-graphite"
          }`}
        >
          {code}
        </span>
        <span className={`h-px flex-1 ${dark ? "bg-limestone/20" : "bg-cypress/18"}`} aria-hidden="true" />
      </div>
      <h2 className="font-display text-[length:var(--text-title)] leading-[1.02] font-light tracking-[-0.015em]">
        {title}
      </h2>
      {intro ? (
        <p
          className={`max-w-[58ch] text-[1.0625rem] leading-relaxed ${
            dark ? "text-limestone/75" : "text-cypress/75"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
