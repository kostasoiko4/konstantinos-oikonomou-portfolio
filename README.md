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
  Konstantinos-Oikonomou-CV.pdf     downloadable CV in English: replace the file, keep the name
  Konstantinos-Oikonomou-CV-el.pdf  downloadable CV in Greek, linked when the site is in Greek
  404.html                          real 404 page served by Firebase
cv/
  Konstantinos-Oikonomou-CV.html     source of the English CV PDF
  Konstantinos-Oikonomou-CV-el.html  source of the Greek CV PDF
  cv.css                             shared design of both, and the rules that keep them ATS-readable
  photo.jpg                          photo used in the CV header
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
  Hashed assets are cached for a year. Both CV PDFs are sent with `X-Robots-Tag: noindex`.
- **Preview image:** `public/og-image.jpg`. If the title or numbers change, regenerate it at 1200x630.

After deploying, submit `https://oikonomou-portfolio.web.app/sitemap.xml` in Google Search Console
and Bing Webmaster Tools.

## CV

There are two CVs with the same design: English and Greek. The site links to the one matching its language
(`getCv` in `src/lib/site.ts`).

| PDF | Printed from |
| --- | --- |
| `public/Konstantinos-Oikonomou-CV.pdf` | `cv/Konstantinos-Oikonomou-CV.html` |
| `public/Konstantinos-Oikonomou-CV-el.pdf` | `cv/Konstantinos-Oikonomou-CV-el.html` |

Both use `cv/cv.css`. When the content changes, update both HTML files so the two versions say the same thing.

They are styled but still built for applicant tracking systems: all text in one column with one reading order,
standard section headings, selectable text, no tables and no text inside images. The dark spine and header band,
the photo (`cv/photo.jpg`), the section badges and the timeline are decoration only and carry no text.
Keep each to two A4 pages (Greek runs longer, so check it after every edit), keep letter-spacing small and
avoid `position` on anything holding text: both scramble the text that parsers extract. Spaces between two
tags must sit inside text, or parsers read the words glued together. The comment at the top of `cv/cv.css`
explains these rules.

To regenerate them, edit the HTML and print both with Chrome (Git Bash, from the project root):

```sh
CHROME="C:/Program Files/Google/Chrome/Application/chrome.exe"
for CV in Konstantinos-Oikonomou-CV Konstantinos-Oikonomou-CV-el; do
  "$CHROME" --headless=new --no-pdf-header-footer --virtual-time-budget=15000 \
    --print-to-pdf="$(pwd -W)/public/$CV.pdf" "file:///$(pwd -W)/cv/$CV.html"
done
```

Or open each HTML in Chrome, then Print > Save as PDF (A4, margins "None", "Background graphics" on,
"Headers and footers" off). Keep the file names, since the site links to them, then rebuild and deploy.
The download links carry a fingerprint of each file (`?v=...`, computed in `vite.config.ts`), so visitors
get the new CV right away instead of a cached copy.

## Deploy

```sh
npm run build
firebase deploy --only hosting
```
