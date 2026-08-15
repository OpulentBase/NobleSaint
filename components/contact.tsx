"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./reveal";
import { PaperTooth } from "./marks";
import { SheetHead } from "./sheet-head";
import { site } from "@/lib/site";

const scopes = ["Landscape", "Hardscape", "Pool — new build", "Pool — renovation", "Whole property"];
const timelines = ["As soon as possible", "Next 1–3 months", "3–6 months", "Still planning"];
const budgets = ["Under $25k", "$25k – $75k", "$75k – $150k", "$150k – $400k", "$400k +", "Not sure yet"];

export function Contact() {
  const [scope, setScope] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "handoff">("idle");

  const toggleScope = (s: string) =>
    setScope((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const get = (k: string) => String(form.get(k) ?? "").trim();

    const payload = {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      city: get("city"),
      scope,
      timeline: get("timeline"),
      budget: get("budget"),
      notes: get("notes"),
      company: get("company"),
    };

    setStatus("sending");

    // Try the server first. If no mail credentials are configured (or the send
    // fails), hand off to the visitor's mail app so the lead is never lost.
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        formEl.reset();
        setScope([]);
        return;
      }
    } catch {
      // fall through to the mail-app handoff
    }

    const body = [
      `Name:      ${payload.name}`,
      `Phone:     ${payload.phone}`,
      `Email:     ${payload.email}`,
      `Property:  ${payload.city}`,
      "",
      `Scope:     ${scope.length ? scope.join(", ") : "Not specified"}`,
      `Timeline:  ${payload.timeline}`,
      `Budget:    ${payload.budget}`,
      "",
      "Notes:",
      payload.notes || "—",
      "",
      "— Sent from noblesaintgroup.com",
    ].join("\n");

    const subject = `Project inquiry — ${payload.name || "New lead"}${
      payload.city ? `, ${payload.city}` : ""
    }`;

    window.location.href = `${site.contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("handoff");
  }

  return (
    <section id="inquiry" className="relative isolate overflow-hidden bg-cypress text-limestone">
      <PaperTooth className="opacity-[0.26]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-plate sm:px-8 lg:px-12">
        <SheetHead
          code="L-6.0 — Inquiry"
          title="Tell us about the property."
          tone="light-on-dark"
          intro="Alfredo reads every one of these. If it is easier to talk it through, call — you will get him, not a call center."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* direct lines */}
          <Reveal className="flex flex-col gap-10 lg:col-span-4">
            <div className="flex flex-col gap-7">
              <ContactLine label="Call or text" value={site.contact.phone} href={site.contact.phoneHref} big />
              <ContactLine label="Email" value={site.contact.email} href={site.contact.emailHref} />
            </div>

            <dl className="flex flex-col gap-5 border-t border-limestone/15 pt-8">
              <Meta term="Estimates" detail="On site, at no cost, across Southern California." />
              <Meta term="Service area" detail={`${site.region} — Orange, LA, Riverside and San Diego counties.`} />
              <Meta term="Typical reply" detail="Same day, most days. Evenings included." />
            </dl>
          </Reveal>

          {/* form */}
          <Reveal delay={140} className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="relative flex flex-col gap-9">
              {/* Honeypot: hidden from people, irresistible to bots. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Company
                  <input name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
                <Field name="name" label="Your name" required autoComplete="name" />
                <Field name="phone" label="Phone" type="tel" required autoComplete="tel" />
                <Field name="email" label="Email" type="email" autoComplete="email" />
                <Field name="city" label="Property city" placeholder="Yorba Linda, Newport Beach…" />
              </div>

              <fieldset className="flex flex-col gap-4">
                <legend className="sheet-label text-limestone/55">What are we looking at</legend>
                <div className="flex flex-wrap gap-2.5">
                  {scopes.map((s) => {
                    const on = scope.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleScope(s)}
                        aria-pressed={on}
                        className={`border px-4 py-2 text-[0.875rem] transition-colors ${
                          on
                            ? "border-patina bg-patina text-limestone"
                            : "border-limestone/25 text-limestone/75 hover:border-limestone/60"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
                <Select name="timeline" label="Timeline" options={timelines} />
                <Select name="budget" label="Budget range" options={budgets} />
              </div>

              <Field
                name="notes"
                label="Anything we should know"
                textarea
                placeholder="Lot size, what is there now, what is not working, what you have in mind."
              />

              <div className="flex flex-wrap items-center gap-5 pt-1">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center gap-3 bg-limestone px-7 py-3.5 text-cypress transition-colors hover:bg-brass hover:text-cypress disabled:opacity-60"
                >
                  <span className="tracking-wide">
                    {status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send inquiry"}
                  </span>
                  <svg viewBox="0 0 22 8" className="h-2 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M0 4h20M17 1l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </svg>
                </button>
                <p className="max-w-[36ch] text-[0.8rem] leading-snug text-limestone/60" role="status">
                  {status === "sent"
                    ? "Got it. Alfredo will be in touch — usually the same day."
                    : status === "handoff"
                      ? "Your mail app is open with the details filled in. Hit send and we will get back to you."
                      : "Goes straight to Alfredo. We never share your details."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function ContactLine({
  label,
  value,
  href,
  big = false,
}: {
  label: string;
  value: string;
  href: string;
  big?: boolean;
}) {
  return (
    <div>
      <p className="sheet-label text-limestone/55">{label}</p>
      <a
        href={href}
        className={`mt-2 block font-display font-light break-words text-limestone transition-colors hover:text-brass ${
          big ? "text-4xl tabular-nums sm:text-[2.75rem]" : "text-xl sm:text-2xl"
        }`}
      >
        {value}
      </a>
    </div>
  );
}

function Meta({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="sheet-label text-limestone/55">{term}</dt>
      <dd className="text-[0.95rem] leading-snug text-limestone/75">{detail}</dd>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const shared =
    "w-full border-b border-limestone/25 bg-transparent pt-2 pb-2.5 text-limestone placeholder:text-limestone/30 transition-colors focus:border-patina focus:outline-none";
  return (
    <label className="flex flex-col gap-1.5">
      <span className="sheet-label text-limestone/55">
        {label}
        {required ? <span className="text-brass"> *</span> : null}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={`${shared} resize-y`} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={shared}
        />
      )}
    </label>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: readonly string[] }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="sheet-label text-limestone/55">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="w-full appearance-none border-b border-limestone/25 bg-transparent pt-2 pb-2.5 text-limestone transition-colors focus:border-patina focus:outline-none"
      >
        <option value="" className="bg-cypress">
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-cypress">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
