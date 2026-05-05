# PROTEUM

> **Rise beyond your biology.**
> The precision intelligence platform for clinical-grade peptides — decoding
> the molecules redefining performance, recovery, and longevity.

PROTEUM is an educational and recommendation platform for peptide research.
Visitors take a structured assessment, receive personalized peptide briefs
grounded in the literature, and are routed to vetted vendor partners — every
outbound vendor link is an affiliate link, so the platform earns regardless of
which vendor a visitor chooses.

PROTEUM is **not** a medical service and **not** a peptide retailer. All content
is informational. Peptides are framed in research-and-education contexts.

---

## Phase A — what's built (this repo, today)

- Next.js 14 App Router project with strict TypeScript and Tailwind
- PROTEUM design system (color palette, display fonts, scroll reveal)
- Marketing homepage with all 9 sections:
  Hero, Thesis, Pillars, How it works, Built for, Trust & rigor, FAQ,
  Final CTA, Footer
- Assessment shell — intro page with 18+ age gate, dynamic step pages, results
  placeholder, **3 placeholder questions** (Phase B replaces with the real schema)
- Quiz responses persist anonymously to Supabase (`quiz_sessions`, `quiz_answers`)
- Four legal pages with real, professional copy: Disclaimer, Research use,
  Terms of use, Privacy policy
- Netlify deployment configuration with security headers
- Supabase initial migration with row-level security for anonymous inserts

## Phase B / C / D — what's coming next

| Phase | Scope |
| --- | --- |
| **B** | Real assessment schema, recommendation engine, peptide brief content model |
| **C** | Vendor/affiliate database, link routing, attribution, vendor-detail pages |
| **D** | Content engine — long-form briefs, mechanism explainers, SEO infrastructure |

These phases are out of scope here. Don't build them in this repo until the
corresponding phase prompt has been issued.

---

## Local development

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer
- A Supabase project (free tier is fine for development)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy and fill in the environment variables
cp .env.example .env.local
# edit .env.local with values from your Supabase project
# (Settings → API → URL + anon public key)

# 3. Apply the database migration in your Supabase project
# Open Supabase Studio → SQL Editor and paste the contents of:
#   supabase/migrations/0001_init.sql
# Run it once. This creates the quiz_sessions and quiz_answers tables
# and the row-level-security policies the app expects.

# 4. Start the dev server
npm run dev
```

The app runs at <http://localhost:3000>.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint the project |
| `npm run typecheck` | Run the TypeScript compiler in `--noEmit` mode |

---

## Deployment (Netlify + Supabase)

PROTEUM is configured for Netlify (not Vercel).

1. **Push the repo to GitHub** — already done if you're reading this.
2. **Connect the repo to Netlify**
   - In Netlify, choose "Add new site → Import an existing project" and pick
     this GitHub repository.
   - Netlify will auto-detect Next.js. The build command (`npm run build`),
     publish directory (`.next`), and the `@netlify/plugin-nextjs` plugin are
     already configured in `netlify.toml`.
3. **Add environment variables** in Netlify (Site settings → Environment variables):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Set the production branch to `main`** in Netlify (Site settings → Build &
   deploy → Branches and deploy contexts).
5. **Run the Supabase migration** in your production Supabase project's SQL
   editor (`supabase/migrations/0001_init.sql`).

Netlify will build and deploy on every push to `main`.

---

## Folder structure

```
app/
  (marketing)/          marketing layout (Nav + Footer)
    page.tsx              homepage (composes the 9 sections)
    layout.tsx
  assessment/           quiz flow
    page.tsx              intro page with age gate
    [step]/page.tsx       dynamic step page
    results/page.tsx      results placeholder (Phase B target)
    layout.tsx            quiz shell + QuizProvider
  disclaimer/page.tsx
  research-use/page.tsx
  terms/page.tsx
  privacy/page.tsx
  layout.tsx            root layout (fonts, metadata)
  globals.css

components/
  ui/                   primitives — Button, Card, Container, Section, etc.
  layout/               Nav, Footer, LegalPage
  marketing/            one component per homepage section
  assessment/           QuizProvider, QuizShell, QuizQuestion, QuizProgress, results, intro

lib/
  supabase/             browser + server clients, generated types
  constants/            site config and nav definitions
  utils/                cn helper

content/
  quiz-questions.ts     placeholder Phase A question set

supabase/
  migrations/0001_init.sql

netlify.toml            Netlify build + security headers
.env.example            documented env vars
```

---

## Known Phase A limitations

These are deliberate placeholders that Phase B/C/D will replace. They are not
bugs.

- **Assessment uses three placeholder questions.** The production schema (with
  real medical-context questions, validated answer types, conditional logic,
  and scoring weights) ships in Phase B.
- **Results page is a placeholder.** It echoes the user's answers and
  acknowledges Phase B will populate it with real recommendations. There is no
  recommendation engine yet.
- **No clinical advisors are listed.** The Trust & rigor section says so
  explicitly — the advisory panel is announced as "coming pre-launch."
- **No vendor partners are listed.** Phase C will introduce the vendor schema,
  the inclusion criteria UI, and the affiliate link routing layer.
- **No analytics tooling.** Per the Phase A brief, this lands in a later phase
  (Plausible or PostHog candidates).
- **No email collection anywhere.** The platform is intentionally
  anonymous-first; if email features ship later they will be opt-in and
  disclosed at the point of collection.

If you find a placeholder that *isn't* listed above, that's a defect — not an
intentional gap.

---

## License

© 2026 PROTEUM. All rights reserved. Educational content only. Not medical advice.
