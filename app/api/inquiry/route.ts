import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  scope?: string[];
  timeline?: string;
  budget?: string;
  notes?: string;
  /** Honeypot. Real people never see this field, so anything in it is a bot. */
  company?: string;
};

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad-request" }, { status: 400 });
  }

  // Silently accept and discard bot submissions.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  if (!name || !phone) {
    return NextResponse.json({ ok: false, reason: "missing-fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM;
  // Without credentials the site still works: the client falls back to opening
  // the visitor's mail app, so a missing key degrades rather than fails.
  if (!apiKey || !from) {
    return NextResponse.json({ ok: false, reason: "not-configured" }, { status: 501 });
  }

  const email = clean(body.email, 160);
  const city = clean(body.city, 120);
  const scope = Array.isArray(body.scope) ? body.scope.map((s) => clean(s, 60)).filter(Boolean) : [];

  const lines = [
    `Name:      ${name}`,
    `Phone:     ${phone}`,
    `Email:     ${email || "—"}`,
    `Property:  ${city || "—"}`,
    "",
    `Scope:     ${scope.length ? scope.join(", ") : "Not specified"}`,
    `Timeline:  ${clean(body.timeline, 60) || "—"}`,
    `Budget:    ${clean(body.budget, 60) || "—"}`,
    "",
    "Notes:",
    clean(body.notes, 4000) || "—",
    "",
    `— Sent from ${site.url}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [process.env.INQUIRY_TO || site.contact.email],
        reply_to: email || undefined,
        subject: `Project inquiry — ${name}${city ? `, ${city}` : ""}`,
        text: lines,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, reason: "send-failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, reason: "send-failed" }, { status: 502 });
  }
}
