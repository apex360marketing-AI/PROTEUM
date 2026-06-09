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

## Current Capabilities

- **Next.js 14 App Router** project with strict TypeScript and Tailwind
- **PROTEUM design system** (color palette, display fonts, scroll reveal)
- **Marketing homepage** with all 9 sections: Hero, Thesis, Pillars, How it works, Built for, Trust & rigor, FAQ, Final CTA, Footer
- **Assessment shell & flow**: 15-step intake assessment with age gating and dynamic step pages.
- **Recommendation Engine**: Cross-references quiz responses with 32 compound profiles using weighted match signals, diversity rules, and age gating (`lib/recommendations/engine.ts`).
- **Content Engine**: Comprehensive compound database detailing mechanisms, citations, legal status, and study findings.
- **Vendor & Affiliate Layer**: Integrated vendor evaluations and affiliate routing layer. Clicks are logged to Supabase via `/go/[vendorId]/[compoundId]`.
- **Admin Analytics**: A lightweight dashboard for viewing vendor click data and trends, protected by a simple password gate (`/admin/vendors`).
- **Database Persistence**: Quiz sessions, answers, and affiliate clicks persist to Supabase using anonymous RLS inserts (`quiz_sessions`, `quiz_answers`, `affiliate_clicks`).
- **Legal Content**: Disclaimer, Research use, Terms of use, Privacy policy.

---

## Architecture & Routing

| System | Path / Module | Purpose |
| --- | --- | --- |
| **Assessment Flow** | `app/assessment/*` | Intake quiz (15 steps) storing answers in `zustand` (`lib/stores/quiz-store.ts`) and syncing to Supabase. |
| **Recommendations** | `lib/recommendations/engine.ts` | Scores user answers against compound `matchSignals`, producing a ranked protocol shown at `app/assessment/results/page.tsx`. |
| **Knowledge Base** | `content/knowledge-base/*` | Defines all peptides and vitamins. Displayed publicly at `app/compounds/*`. |
| **Vendors** | `content/vendors/*` | Defines vendor evaluations. Displayed publicly at `app/vendors/*`. |
| **Affiliate Routing** | `app/go/[vendorId]/[compoundId]/route.ts` | Server-side redirect. Logs click to `affiliate_clicks` then 302s to vendor. |
| **Admin Dashboard** | `app/admin/*` | Views aggregated click metrics. Requires `ADMIN_PASSWORD` and `SUPABASE_SERVICE_ROLE_KEY`. |

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
#   supabase/migrations/*.sql
# Run them. This creates the required tables and the row-level-security policies.

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
   editor (`supabase/migrations/*.sql`).

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
    results/page.tsx      results recommendations and match dots
    layout.tsx            quiz shell + QuizProvider
  compounds/            knowledge base pages
  vendors/              vendor detail pages
  admin/                analytics and basic auth
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
  compounds/            knowledge base UI components
  vendors/              vendor detail UI components

lib/
  supabase/             browser + server clients, generated types
  recommendations/      scoring algorithm for assessment answers
  constants/            site config and nav definitions
  stores/               zustand quiz state
  utils/                cn helper

content/
  knowledge-base/       peptide and vitamin entries
  vendors/              vendor evaluations
  quiz-questions.ts     the 15-step question schema

supabase/
  migrations/           SQL schemas and RLS policies

netlify.toml            Netlify build + security headers
.env.example            documented env vars
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

## Known limitations

- **No clinical advisors are listed.** The Trust & rigor section says so explicitly — the advisory panel is announced as "coming pre-launch."
- **Vendor placeholders**: The current vendors are placeholders. Ensure you run the `vendor-discovery` skill before launch.
- **No analytics tooling.** Native analytics (e.g. Plausible or PostHog) has not yet been integrated.
- **No email collection anywhere.** The platform is intentionally anonymous-first; if email features ship later they will be opt-in and disclosed at the point of collection.

---

## License

© 2026 PROTEUM. All rights reserved. Educational content only. Not medical advice.
