import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { ArrowRight, Check, Copy, FileDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";
import { CV_FILENAME, CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); fall back to the mail client.
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const linkClass = "inline-flex items-center gap-2 transition-colors hover:text-gold";

  return (
    <footer id="contact" className="section pb-10 md:pb-10">
      <div className="shell">
        <Reveal className="cta-card px-6 py-16 text-center sm:px-12 md:py-24">
          <Eyebrow index="07" label={t("nav.contact")} centered className="mb-6" />

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            <Trans i18nKey="footer.title" components={{ gold: <span className="text-gold-metal" /> }} />
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/70">{t("footer.tagline")}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${EMAIL}`} className="btn-primary group w-full px-7 py-3.5 text-base sm:w-auto">
              <Mail size={18} />
              {t("footer.cta")}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={t("footer.copy")}
              className="btn-secondary w-full px-5 py-3.5 text-sm sm:w-auto sm:px-7 sm:text-base"
            >
              {copied ? <Check size={18} className="shrink-0 text-gold" /> : <Copy size={18} className="shrink-0" />}
              <span aria-live="polite">{copied ? t("footer.copied") : EMAIL}</span>
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a href="tel:+306987802777" className={linkClass}>
              <Phone size={15} />
              +30 698 780 2777
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Github size={15} />
              GitHub
            </a>
            <a href={CV_URL} download={CV_FILENAME} className={linkClass}>
              <FileDown size={15} />
              {t("hero.cta.secondary")}
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {currentYear} Konstantinos Oikonomou · {t("footer.location")}
          </p>
          <p>{t("footer.built")}</p>
        </div>
      </div>
    </footer>
  );
};
