# Jeju Mornings: Calm Focus Gummies — Landing Page

A premium, single-page landing built with **React + Vite + Tailwind**.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
# open the URL that Vite prints (e.g., http://localhost:5173)

# 3) Build production
npm run build
npm run preview
```

## Deploy (Free)

- **Vercel** (recommended): import this folder; or run `npm i -g vercel && vercel`.
- **Netlify**: set build command `npm run build`, publish dir `dist/`.
- **GitHub Pages**: `npm run build` then push `dist` to `gh-pages` branch.

## Customize

- Edit copy in `src/App.jsx` (headlines, testimonials, bullets).
- Replace images in `public/` (`product-hero.png`, `founder.png`).
- Colors are in Tailwind theme `jeju.*` inside `tailwind.config.js`.
- Change the SHOP NOW link (`href`) to your product page or checkout.

## Notes

- Fonts: **Inter** via Google Fonts in `index.html`.
- Tracking (optional): Add analytics snippet (GA4, Meta, etc.) in `index.html`.
- SEO: Add meta description, Open Graph tags in `index.html`.
