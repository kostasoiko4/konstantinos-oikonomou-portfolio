import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Build date, exposed to index.html (structured data) and used for the sitemap.
const buildDate = new Date().toISOString().slice(0, 10);
process.env.VITE_BUILD_DATE = buildDate;

/** Generates robots.txt and sitemap.xml for the configured site address at build time. */
const seoFiles = (siteUrl: string): Plugin => ({
  name: "seo-files",
  apply: "build",
  generateBundle() {
    const pages = [`${siteUrl}/`, `${siteUrl}/?lang=el`];
    const alternates = [
      `<xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/"/>`,
      `<xhtml:link rel="alternate" hreflang="el" href="${siteUrl}/?lang=el"/>`,
      `<xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/"/>`,
    ]
      .map((line) => `    ${line}`)
      .join("\n");

    const sitemap = [
      `<?xml version="1.0" encoding="UTF-8"?>`,
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
      ...pages.map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${buildDate}</lastmod>\n${alternates}\n  </url>`),
      `</urlset>`,
      ``,
    ].join("\n");

    const robots = [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${siteUrl}/sitemap.xml`, ``].join("\n");

    this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemap });
    this.emitFile({ type: "asset", fileName: "robots.txt", source: robots });
  },
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react(), seoFiles(env.VITE_SITE_URL)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
