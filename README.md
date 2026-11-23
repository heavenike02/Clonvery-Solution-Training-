# Clonervy Training Solutions — website

One-page marketing site for **Clonervy Training Solutions** (Cavan, Ireland — *Train • Prepare • Save Lives*), built with **Next.js 15 (App Router)** and Meta's **[Astryx design system](https://github.com/meta/astryx)**, deployed on **Vercel**.

## Stack
- Next.js 15 + React 19 + TypeScript
- `@astryxdesign/core` components with a custom **Clonervy theme** (navy `#0c2340` + gold `#d4af37`)
  - Light mode for the page; navy brand bands (header, hero, contact card, footer) use the theme's dark mode via `<BrandBand>`
- Tailwind v4 utilities bridged to Astryx tokens (`@astryxdesign/core/tailwind-theme.css`)
- Enquiry form → Next.js Server Action → **Resend** email (with phone / mailto fallback)
- Vercel Analytics, Open Graph image, sitemap, robots, JSON-LD (`EducationalOrganization` + course catalogue)

## Project layout
```
src/app/            layout, page, providers (theme), actions.ts (enquiry email), SEO routes
src/components/
  brand/Crest.tsx   crest logo SVGs
  sections/         Header, Hero, Courses, Delivery, Faq, Contact, Footer
  booking/          BookingContext ("Book This Course" → pre-fills form), BookingForm
src/content/        all copy: site details, courses, FAQs, features  ← edit text here
themes/clonervy/    Astryx theme source (edit with the theme editor, see below)
src/themes/         generated theme build (do not edit)
```

## Develop
```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

## Theme
The theme was made with the Astryx theme editor. To change colours, fonts or spacing:
```bash
npx astryx experimental theme editor how "<what you want>"
npx astryx experimental theme editor set clonervy <thing> <value> [--mode light|dark]
npx astryx experimental theme editor show clonervy --png   # look at the result
```

## Checks
```bash
npm run build
npx astryx doctor --built .
```

## Deploy (Vercel)
Set `RESEND_API_KEY` (and optionally `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`) in the Vercel project's environment variables.
