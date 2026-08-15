# Noble Saint — one-page site

Landscapes, hardscapes and pools. Orange County & Southern California.

A single-page marketing site built with Next.js 15 and Tailwind CSS v4.
**There are no image files in this repository.** Every visual — the crest, the
hero section drawing, the site plan, the icons, the favicon and the social
share card — is generated from SVG and code.

---

## Deploy it

You need a [GitHub](https://github.com) account and a [Vercel](https://vercel.com)
account. Vercel's free Hobby plan is enough to launch.

### 1. Push to GitHub

```bash
cd noble-saint
git init
git add .
git commit -m "Noble Saint website"
```

Create a new **empty** repository on GitHub (no README, no .gitignore — this
project already has both), then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/noble-saint.git
git branch -M main
git push -u origin main
```

### 2. Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Choose **Import Git Repository** and pick `noble-saint`
3. Leave every setting at its default — Vercel detects Next.js automatically
4. Click **Deploy**

First build takes about a minute. You get a live `*.vercel.app` URL immediately.

### 3. Connect the domain

In Vercel: **Project → Settings → Domains → Add**, enter your domain, and follow
the DNS instructions it gives you. Then update `url` in `lib/site.ts` to the real
domain and push — that value feeds the canonical tag, the sitemap and the social
card.

From then on, every `git push` to `main` redeploys automatically.

---

## Where to edit things

Almost all copy lives in **`lib/site.ts`**. Change it there and it updates
everywhere on the page, including the structured data Google reads.

| What | File |
|---|---|
| Phone, email, name, service area, founding year | `lib/site.ts` → `site` |
| The three service lists (Landscapes / Hardscapes / Pools) | `lib/site.ts` → `services` |
| The five construction steps | `lib/site.ts` → `sequence` |
| The four "general notes" | `lib/site.ts` → `standards` |
| Your father-and-son story | `components/sections.tsx` → `Firm` |
| Company timeline years | `components/sections.tsx` → `Timeline` |
| The scrolling band of trades | `components/sections.tsx` → `band` |
| Form dropdown options (budget, timeline, scope) | `components/contact.tsx` |
| Colors and type scale | `app/globals.css` → `@theme` |
| Page title and description for Google | `app/layout.tsx` → `metadata` |

**The timeline years in `Timeline` are placeholders** — 2004, 2011, 2019. Set
them to the real dates before you launch.

---

## The inquiry form

Out of the box the form needs no configuration. When someone submits it, the
site tries the server first; if no email credentials are set it falls back to
opening the visitor's own mail app with every field already filled in and
addressed to you. Nothing is lost either way.

To have submissions arrive in your inbox **without** the visitor having to press
send in their mail app:

1. Create a free account at [resend.com](https://resend.com) and verify your
   sending domain
2. In Vercel, go to **Project → Settings → Environment Variables** and add:

| Name | Value |
|---|---|
| `RESEND_API_KEY` | your Resend API key |
| `INQUIRY_FROM` | a verified address, e.g. `website@yourdomain.com` |
| `INQUIRY_TO` | optional — defaults to `noblesaintgroup@gmail.com` |

3. Redeploy

`INQUIRY_FROM` must be on a domain you've verified with Resend. It cannot be a
Gmail address. `INQUIRY_TO` can be any address, including Gmail.

The form already includes a hidden honeypot field that silently discards bot
submissions.

---

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

The fonts are fetched from Google Fonts at build time, so the first build needs
an internet connection.

---

## Design notes

The page is laid out as a **landscape construction drawing set**. Sections carry
L-series sheet numbers (L-1.0 Scope, L-2.0 The firm, L-3.0 Site plan, and so on)
because that is how a real landscape set is organised, and because the technical
register is the argument: for a large build, the thing a client is actually
buying is competence.

- **Palette** is drawn from the materials: decomposed granite, limestone,
  cypress shadow, copper patina, unlacquered brass.
- **Type** is Fraunces for display, Archivo for body, IBM Plex Mono for the
  drafting annotations on the drawings.
- **The signature element** is the interactive site plan in L-3.0. It draws
  itself in on scroll, and the legend isolates individual layers — paving,
  water, planting, structures, drainage, lighting.
- **Motion** is scroll-triggered line work: paths lay down along their length,
  fills wash in behind them, water drifts continuously. All of it is disabled
  automatically for visitors who have reduced-motion turned on.

### Accessibility and performance

- Fully static and prerendered; ~108 kB of JavaScript on first load
- Keyboard focus is visible throughout; the plan legend is operable by keyboard
- Skip link to the inquiry form
- The site plan carries a text description for screen readers
- `LandscapingBusiness` structured data, sitemap and robots.txt are generated

### One thing worth knowing

The social share card (`app/opengraph-image.tsx`) renders in a system sans
rather than Fraunces, because loading a custom font into an image generator
adds a build-time network dependency that can fail. If you want brand type on
the share card, that's a small change — but the current version is the reliable
one.
