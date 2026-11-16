/** Public address of the site, from VITE_SITE_URL in .env (no trailing slash). */
export const SITE_URL: string = import.meta.env.VITE_SITE_URL;

/**
 * The downloadable CV, one per site language. To update one, replace its file in public/
 * under the same name (the sources are in cv/, see README), then rebuild.
 * `v` is a fingerprint of the file computed at build time (vite.config.ts), so a new CV
 * gets a new URL and browsers can't keep serving an old cached copy.
 */
const CVS = {
  en: { filename: "Konstantinos-Oikonomou-CV.pdf", version: import.meta.env.VITE_CV_VERSION },
  el: { filename: "Konstantinos-Oikonomou-CV-el.pdf", version: import.meta.env.VITE_CV_EL_VERSION },
};

/** The CV for a site language (Greek for "el", English otherwise): its URL and the name it downloads as. */
export const getCv = (language: string) => {
  const cv = language.startsWith("el") ? CVS.el : CVS.en;
  return { url: `/${cv.filename}?v=${cv.version}`, filename: cv.filename };
};

export const EMAIL = "kostasoikonomou4@gmail.com";
export const GITHUB_URL = "https://github.com/kostasoiko4";
export const LINKEDIN_URL = "https://www.linkedin.com/in/konstantinos-oikonomou-a5a2b3225/";
