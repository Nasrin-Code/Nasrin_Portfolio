# Nasrin A — Portfolio

Premium, recruiter-friendly portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber. All content is sourced from the attached resume — see `src/data/resumeData.ts` as the single source of truth.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com/new.
3. No environment variables are required for the build itself.

## Before you go live

- **Contact form**: `src/components/Contact.tsx` currently simulates a send. To make it real, sign up at emailjs.com, then uncomment the `emailjs.send(...)` call and add your Service ID, Template ID, and Public Key (as `NEXT_PUBLIC_EMAILJS_*` env vars is the recommended pattern).
- **Domain**: `src/app/layout.tsx` and `public/sitemap.xml` / `public/robots.txt` use a placeholder domain (`https://nasrina.dev`) for SEO/Open Graph tags — swap in your real domain once you have one.
- **LeetCode stats**: `src/components/LeetCode.tsx` fetches live stats from a public LeetCode stats API at runtime, with a graceful fallback to a profile link if the request fails (no numbers are ever hardcoded/invented).
- **Resume file**: `public/Nasrin_A_Resume.pdf` powers the "Download Resume" button — replace it whenever you update your resume, keeping the same filename (or update the path in `resumeData.ts`).
- **Project links**: GitHub links currently point to the profile (`github.com/Nasrin-Code`) since individual repo URLs weren't provided — update `github`/`demo` fields per project in `resumeData.ts` once repos are public.

## Structure

```
src/
  app/            # layout, page, global styles
  components/      # one component per section
  data/            # resumeData.ts — all resume-sourced content
public/
  profile.jpg      # processed headshot
  Nasrin_A_Resume.pdf
  robots.txt, sitemap.xml
```

Verified with a clean production build (`npm run build`) prior to delivery.
