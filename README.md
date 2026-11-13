# Konstantinos Oikonomou: portfolio

Personal portfolio of Konstantinos Oikonomou, Frontend & Full-Stack Engineer based in Thessaloniki.
Live at https://oikonomou-portfolio.web.app

Single-page site in English (`/`) and Greek (`/?lang=el`).

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS
- i18next (EN / EL)
- react-helmet-async for per-language meta tags
- Firebase Hosting

## Development

```sh
npm install      # or: bun install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run lint
```

## Project structure

```
src/
  components/     page sections (Hero, Selected Work, Experience, ...)
  i18n/           translations for English and Greek, and language detection from ?lang=
  lib/site.ts     site address, CV link, contact links
  assets/         project screenshots and photos
public/
  images/                       hero photo (preloaded from index.html)
  og-image.jpg                  link preview image (1200x630)
  Konstantinos-Oikonomou-CV.pdf downloadable CV: replace the file, keep the name
  404.html                      real 404 page served by Firebase
cv/
  Konstantinos-Oikonomou-CV.html  source of the CV PDF
```

Text content lives in `src/i18n/translations.ts`. Both languages share the same keys.

## SEO

- **Site address:** `VITE_SITE_URL` in `.env`. It feeds the canonical URL, Open Graph and Twitter tags,
  the JSON-LD structured data in `index.html`, and the generated `sitemap.xml` and `robots.txt`.
  When moving to a custom domain, change it there and rebuild.
- **Head tags:** English defaults are static in `index.html` for crawlers and link previews.
  `src/pages/Index.tsx` swaps the language-specific ones (title, description, canonical, og:locale) at runtime.
- **Structured data:** `Person`, `ProfilePage`, `WebSite` and the portrait `ImageObject`, in `index.html`.
  Update the credentials or employer there when they change.
- **Sitemap and robots:** generated at build time by the `seo-files` plugin in `vite.config.ts`.
- **Languages:** each language has its own URL, linked with `hreflang` in `index.html` and the sitemap.
- **Hosting (`firebase.json`):** no catch-all rewrite, so unknown URLs return a real 404.
  Hashed assets are cached for a year. The CV PDF is sent with `X-Robots-Tag: noindex`.
- **Preview image:** `public/og-image.jpg`. If the title or numbers change, regenerate it at 1200x630.

After deploying, submit `https://oikonomou-portfolio.web.app/sitemap.xml` in Google Search Console
and Bing Webmaster Tools.

## CV

`public/Konstantinos-Oikonomou-CV.pdf` is printed from `cv/Konstantinos-Oikonomou-CV.html`.
It is styled but still built for applicant tracking systems: one reading order (no side columns), standard
section headings, selectable text, no tables, photo or text inside images. The header band, icons and timeline
are decoration only. Keep it to two A4 pages, keep letter-spacing small and avoid `position` in its CSS: both
scramble the text that parsers extract.

To regenerate it, edit the HTML and print it with Chrome (Git Bash, from the project root):

```sh
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --no-pdf-header-footer   --virtual-time-budget=15000 --print-to-pdf="$(pwd -W)/public/Konstantinos-Oikonomou-CV.pdf"   "file:///$(pwd -W)/cv/Konstantinos-Oikonomou-CV.html"
```

Or open the HTML in Chrome, then Print > Save as PDF (A4, default margins, "Background graphics" on,
"Headers and footers" off). Keep the file name, since the site links to it, then rebuild and deploy.
The download links carry a fingerprint of the file (`?v=...`, computed in `vite.config.ts`), so visitors
get the new CV right away instead of a cached copy.

## Deploy

```sh
npm run build
firebase deploy --only hosting
```
