# Noble Saint — one-page site

Landscapes, hardscapes and pools. Orange County & Los Angeles.

A single-page marketing site built with Next.js 16 and Tailwind CSS v4.
**There are no image files in this repository.** Every visual — the logotype,
the hero section drawing, the site plan, the icons, the favicon and the social
share card — is generated from SVG and code.

There is no contact form and no email anywhere on the site. Every call to
action is a phone call or a text message.

---

## Deploy it

You need a [GitHub](https://github.com) account and a [Vercel](https://vercel.com)
account. Vercel's free Hobby plan is enough to launch.

### 1. Push to GitHub

```bash
git add .
git commit -m "Noble Saint website"
git push
```

### 2. Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Choose **Import Git Repository** and pick your repo
3. Leave every setting at its default — Vercel detects Next.js automatically
4. Click **Deploy**

No environment variables are needed. The whole site is static.

### 3. Connect the domain

In Vercel: **Project → Settings → Domains → Add**, enter your domain, and follow
the DNS instructions. Then update `url` in `lib/site.ts` to the real domain and
push — that value feeds the canonical tag, the sitemap and the social card.

From then on, every `git push` to `main` redeploys automatically.

---

## Where to edit things

Almost all copy lives in **`lib/site.ts`**. Change it there and it updates
everywhere, including the structured data Google reads.

| What | File |
|---|---|
| Phone number, name, service area, founding year | `lib/site.ts` → `site` |
| **CSLB license number** | `lib/site.ts` → `site.license` |
| The pre-filled text message | `lib/site.ts` → `site.contact.smsHref` |
| The three service lists | `lib/site.ts` → `services` |
| The five construction stages | `lib/site.ts` → `sequence` |
| The four "how we work" notes | `lib/site.ts` → `standards` |
| Your father-and-son story | `components/sections.tsx` → `Firm` |
| Company timeline years | `components/sections.tsx` → `Timeline` |
| The trust strip (20+ yrs, OC & LA…) | `components/sections.tsx` → `Proof` |
| The scrolling band of trades | `components/sections.tsx` → `band` |
| Colors and type scale | `app/globals.css` → `@theme` |
| Page title and description for Google | `app/layout.tsx` → `metadata` |

### Two things to set before you launch

1. **Your CSLB license number.** Open `lib/site.ts` and fill in `license: ""`.
   Leave it empty and nothing is shown — the site makes no licensing claim
   until you supply the number.
2. **The timeline years** in `components/sections.tsx` → `Timeline` are
   placeholders (2004, 2011, 2019). Set them to the real dates.

---

## How the phone and text links work

- **Call** — `tel:+17145856835`, set in `lib/site.ts`
- **Text** — `sms:+17145856835?&body=…` with a pre-filled opening message.
  The `?&` form is deliberate: it is the one syntax that works on both iOS
  and Android.

On phones a fixed bar at the bottom of the screen carries **Call now** and
**Text us** at every scroll position. It is hidden on desktop, where the phone
number sits in the header instead.

---

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Fonts are fetched from Google Fonts at build time, so the first build needs an
internet connection.

---

## Keeping it secure

This project is pinned to **Next.js 16.3.1** and **React 19.2.8**, which are
patched against the React Server Components RCE disclosed in December 2025
(CVE-2025-55182 / CVE-2025-66478) and its follow-up advisories.

Do not downgrade Next.js below 16.0.7, or below 15.5.7 if you move back to the
15.x line. Every Next.js 15.x and 16.x release before those is vulnerable to an
unauthenticated remote code execution rated CVSS 10.0.

```bash
npm audit
npm outdated
```

If `npm audit` reports something, `npm audit fix` usually resolves it. Commit
the updated `package-lock.json` and push.

---

## Design notes

The page is laid out as a landscape construction drawing set. The hero is a cut
section through a property; the centrepiece is an interactive site plan whose
legend isolates individual layers — paving, water, planting, structures,
drainage, lighting.

- **Palette** comes from the materials: warm limestone, cypress shadow, copper
  patina, unlacquered brass.
- **Type** is Fraunces for display, Archivo for body, IBM Plex Mono for the
  drafting annotations.
- **Motion** is scroll-triggered line work, disabled automatically for visitors
  who have reduced motion turned on.

### Mobile

Roughly 90% of traffic is mobile, so the low end of every `clamp()` in the type
scale is the case that was designed first. The site plan scrolls horizontally at
a legible scale rather than shrinking to an unreadable smudge, tap targets meet
the 44px minimum, and safe-area insets keep the call bar clear of the iPhone
home indicator.

### One thing worth knowing

The social share card renders in a system sans rather than Fraunces, because
loading a custom font into an image generator adds a build-time network
dependency that can fail. The current version is the reliable one.
