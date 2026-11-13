import { Trans, useTranslation } from "react-i18next";
import { ArrowRight, FileDown } from "lucide-react";
import { CV_URL } from "@/lib/site";

const stats = [
  { value: "20+", key: "deployments" },
  { value: "15+", key: "municipalities" },
];

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/*
        Background photo. Mirrored so the subject sits on the right, away from the text.
        Served from public/images with the same srcset that index.html preloads, so it starts downloading before the app runs.
      */}
      <img
        src="/images/hero-1920.jpg"
        srcSet="/images/hero-960.jpg 960w, /images/hero-1920.jpg 1920w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full -scale-x-100 object-cover object-[30%_0%]"
      />

      {/* Readability overlays: darker on the left where the text is, fade into the page at the edges */}
      <div className="absolute inset-0 -z-10 bg-background/70 lg:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-background from-20% via-background/85 via-45% to-background/5 lg:block" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-background to-transparent" />

      <div className="shell py-32">
        {/* No entrance animation: the headline is the page's largest content and should paint immediately */}
        <div className="max-w-2xl">
          {/* The name is part of the h1 so searches for it match the page's main heading */}
          <h1 className="mb-6">
            <span className="mb-5 flex items-center gap-3 font-mono text-sm font-normal tracking-wide text-gold">
              <span className="h-px w-8 bg-gradient-to-r from-gold to-transparent" aria-hidden="true" />
              {t("hero.name")}
            </span>
            <span className="sr-only">, </span>
            <span className="block text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <Trans i18nKey="hero.headline" components={{ gold: <span className="text-gold-metal whitespace-nowrap" /> }} />
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-foreground/70">{t("hero.subhead")}</p>

          <dl className="mb-10 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((stat) => (
              <div key={stat.key} className="border-l border-gold/40 pl-4">
                <dt className="sr-only">{t(`hero.stats.${stat.key}`)}</dt>
                <dd>
                  <span className="text-gold-metal block text-3xl font-semibold leading-none">{stat.value}</span>
                  <span className="mt-1.5 block font-mono text-xs text-muted-foreground">
                    {t(`hero.stats.${stat.key}`)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              {t("hero.cta.primary")}
              <ArrowRight size={16} />
            </a>
            <a href={CV_URL} download className="btn-secondary">
              <FileDown size={16} />
              {t("hero.cta.secondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
