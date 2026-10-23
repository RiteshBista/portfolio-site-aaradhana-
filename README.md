# Aaradhana Ojha: portfolio

Personal portfolio site built with Next.js (App Router), TypeScript and Tailwind CSS. Statically generated, with no database or backend and no tracking scripts.

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | TypeScript only |

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes, in production | Your public URL, e.g. `https://riteshbista.com`. Used for canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph tags. Falls back to `http://localhost:3000`. |

There are no secrets. The contact page uses email links, so no API keys are needed.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repository. The defaults are correct (framework: Next.js).
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` with your final domain.
4. Deploy. Then add your custom domain under **Settings → Domains** and redeploy if the URL changed.
5. Submit `https://your-domain/sitemap.xml` in Google Search Console.

## Where things are

```
app/
  layout.tsx              Shared layout, fonts, metadata, theme script
  page.tsx                Home
  projects/page.tsx       Project listing, grouped by category
  projects/[slug]/page.tsx  Case study template (one page per project)
  about/ experience/ resume/ contact/
  not-found.tsx           Custom 404
  sitemap.ts robots.ts opengraph-image.tsx icon.svg
components/               Header, footer, theme toggle, project rows, workflow diagram, UI primitives
content/
  site.ts                 Name, email, links, resume PDF path  ← edit first
  experience.ts           Roles, education, certifications, awards, skills
  projects.ts             Projects and full case-study content
lib/types.ts              Content types
public/images/            Portrait (and project screenshots, once added)
```

### Editing content

All content lives in `content/`. You never need to touch page code to update the site.

- **Placeholders.** Anything not yet confirmed is written as `{ todo: "..." }`. These render as amber "To add" notes on the page, so nothing is silently invented. Search the project for `todo:` to find them all. Replace each one with real text, or delete it.
- **Add a project.** Copy an entry in `content/projects.ts`, give it a unique `slug`, and fill in the fields. Its page, the listing, the sitemap and the resume update automatically. Set `featured: true` to show it on the home page. Set `draft: true` to hide it without deleting it.
- **Screenshots.** Put images in `public/images/projects/` and list them in the project's `screenshots` array (`src`, `alt`, optional `caption`).
- **Resume PDF.** Save it as `public/resume/Ritesh-Bista-Resume.pdf` and set `resumePdf: "/resume/Ritesh-Bista-Resume.pdf"` in `content/site.ts`. The buttons then switch from "View my resume" and "Save as PDF" to a real download.
- **GitHub.** Set `github` in `content/site.ts`. The links appear in the footer, contact page, resume and structured data.

## What was checked

These checks were run on the final build:

- `npm run lint` and `npm run typecheck` pass with no warnings.
- `npm run build` succeeds, with all 17 routes statically generated.
- Every page loaded in headless Chromium at 1366px (light and dark) and 375px: no console errors, no horizontal overflow, and every internal link resolves.
- `sitemap.xml`, `robots.txt`, canonical tags, Open Graph tags and the generated OG image all respond correctly.

External links (client sites, koili.tech, LinkedIn) were not clicked through from the build machine. Check them once after deploying.

## Before you publish

**Must do**

- [ ] Set `NEXT_PUBLIC_SITE_URL` on Vercel.
- [ ] Add a real portrait at `public/images/aaradhana-portrait.jpg` (referenced from `content/site.ts`). The homepage and About page will show a broken image until this exists.
- [ ] Add a resume PDF at `public/resume/Aaradhana-Ojha-Resume.pdf` and set `resumePdf` in `content/site.ts`, or leave it `null` to keep the browser "Save as PDF" option.
- [ ] Add your GitHub URL in `content/site.ts` if you have one — links to GitHub stay hidden until you do.
- [ ] Replace every `todo:` in `content/` (the "To add" notes on the site). The most important ones:
  - [ ] **Koili:** your specific contribution, architecture, collaborators, how it's tested, and any beta numbers you can verify.
  - [ ] **Ray Rentals:** your specific contribution on hardware vs. software, and any photos of the prototype.
  - [ ] **Array Codes:** your role across the 50+ projects, and client permission before naming any of them.
  - [ ] **Amplify Digital:** your day-to-day contribution beyond strategy, and team credit.
  - [ ] **CodeRush apps:** name (or describe) the four apps you built, with links if public.
  - [ ] **Himalayan Whitehouse:** specific projects or units you've designed, and any measurable outcomes.
  - [ ] **About → What's next:** the specific degree programme and intake, once you're ready to make it public.
- [ ] Add real screenshots or photos: Ray Rentals prototype, Array Codes or CodeRush projects, teaching/classroom work, awards.
- [ ] `content/gallery.ts` is currently empty — add real photos if you have them (the About page gallery hides itself until then).
- [ ] Read the About page and home intro aloud and rewrite anything that doesn't sound like you.

**Worth considering**

- The site currently states you're "pursuing graduate study in Design" without naming a specific school, since an admissions decision may still be pending. Update this once you're ready to share more.
- `content/experience.ts` has 11 roles pulled straight from your resume — trim or reorder if any feel like clutter next to the stronger entries.
- Certifications are empty (`content/experience.ts` → `certifications`). Add any you've completed, with year and issuing organisation.
