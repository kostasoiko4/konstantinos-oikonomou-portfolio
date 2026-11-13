/** Public address of the site, from VITE_SITE_URL in .env (no trailing slash). */
export const SITE_URL: string = import.meta.env.VITE_SITE_URL;

/** Name the downloaded CV is saved under. */
export const CV_FILENAME = "Konstantinos-Oikonomou-CV.pdf";

/**
 * The downloadable CV. To update it, replace public/Konstantinos-Oikonomou-CV.pdf
 * with the new file under the same name, then rebuild; every "Download CV" link points here.
 * `v` is a fingerprint of the file computed at build time (vite.config.ts), so a new CV
 * gets a new URL and browsers can't keep serving an old cached copy.
 */
export const CV_URL = `/${CV_FILENAME}?v=${import.meta.env.VITE_CV_VERSION}`;

export const EMAIL = "kostasoikonomou4@gmail.com";
export const GITHUB_URL = "https://github.com/kostasoiko4";
export const LINKEDIN_URL = "https://www.linkedin.com/in/konstantinos-oikonomou-a5a2b3225/";
