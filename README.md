# 224 House

Portfolio / marketing site for **224 House**, a social media & marketing
agency. Built with React + Vite + Tailwind CSS v4.

The page background cross-fades between the three 224 House brand colors
(dark `#1E1E1E`, white `#FFFFFF`, crimson `#BC0C00`) as you scroll through
sections — the same three colorways as the logo lockups.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Before you launch

- `src/components/Portfolio.tsx` has **placeholder case studies** — swap
  in real client names and results before going live.
- Update social links in `src/components/Contact.tsx` and `Nav.tsx` if
  they change.
- Replace the favicon at `public/favicon.svg` if you want a real logo mark
  instead of the "224" placeholder.

## Deploy on Vercel

1. Push this repo to GitHub (see below).
2. Go to https://vercel.com/new, sign in, and import the GitHub repo.
3. Vercel auto-detects Vite — leave the defaults (Build command
   `npm run build`, Output directory `dist`) and click **Deploy**.
4. Every push to `main` will auto-redeploy.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: 224 House site"
git branch -M main
git remote add origin https://github.com/<your-username>/224-house.git
git push -u origin main
```
