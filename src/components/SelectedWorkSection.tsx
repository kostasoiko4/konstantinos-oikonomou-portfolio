import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Lock } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";
import patrasHomeImage from "@/assets/projects/patras-home.jpg";
import patrasMobilityImage from "@/assets/projects/patras-mobility.jpg";
import patrasCleaningImage from "@/assets/projects/patras-cleaning.jpg";
import vourlaHomeImage from "@/assets/projects/kv-home.jpg";
import vourlaEnvironmentImage from "@/assets/projects/kv-environment.jpg";
import vourlaWasteImage from "@/assets/projects/kv-waste.jpg";
import cityEventsImage from "@/assets/projects/city-events.jpg";
import sync2mycityImage from "@/assets/projects/sync2mycity.jpg";
import act4mycityImage from "@/assets/projects/act4mycity.jpg";
import ektHomeImage from "@/assets/projects/ekt-data.jpg";
import ektSearchImage from "@/assets/projects/ekt-search.jpg";
import ektDatasetImage from "@/assets/projects/ekt-dataset.jpg";

type Installation = { place: string; url: string };
type InstallationGroup = { product: string; installations: Installation[] };
type Shot = { label: string; image: string };

type CaseStudy = {
  key: string;
  id: string;
  /** Screenshots shown as a cascading stack, back to front. */
  shots: Shot[];
  stack: string[];
  site?: { url: string; host: string };
  groups?: InstallationGroup[];
  /** Not public: shows a login note instead of links. */
  internal?: boolean;
};

const cases: CaseStudy[] = [
  {
    key: "patras",
    id: "case-patras",
    internal: true,
    // Pages chosen to differ from the Kamena Vourla case, since both are KED platforms
    shots: [
      { label: "kedpatras · home", image: patrasHomeImage },
      { label: "kedpatras · mobility", image: patrasMobilityImage },
      { label: "kedpatras · cleaning", image: patrasCleaningImage },
    ],
    stack: ["React 19", "Ant Design", "Leaflet", "MapLibre", "Chart.js", "styled-components", "Vite", "Docker"],
  },
  {
    key: "vourla",
    id: "case-vourla",
    internal: true,
    shots: [
      { label: "kamena-vourla · environment", image: vourlaEnvironmentImage },
      { label: "kamena-vourla · waste", image: vourlaWasteImage },
      { label: "kamena-vourla · home", image: vourlaHomeImage },
    ],
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "PostGIS", "MapLibre", "Chart.js", "Zod", "Vitest", "Playwright", "Docker"],
  },
  {
    key: "monorepo",
    id: "case-monorepo",
    // The three products, in the order they were built
    shots: [
      { label: "schools.cityofkozani.gov.gr", image: sync2mycityImage },
      { label: "veria.act4my.city", image: act4mycityImage },
      { label: "oropos.city-events.gr", image: cityEventsImage },
    ],
    stack: ["React 19", "Vite", "npm workspaces", "Redux Toolkit", "Ant Design", "MapLibre", "Bitbucket Pipelines"],
    groups: [
      {
        product: "sync2mycity",
        installations: [
          { place: "kallithea", url: "https://kallithea.sync2my.city" },
          { place: "kozani", url: "https://schools.cityofkozani.gov.gr" },
          { place: "konitsa", url: "https://schools-konitsa.sync2my.city" },
          { place: "pydna", url: "https://schools-pydna.sync2my.city" },
        ],
      },
      {
        product: "cityEvents",
        installations: [
          { place: "argostoli", url: "https://argostoli.city-events.gr" },
          { place: "oropos", url: "https://oropos.city-events.gr" },
          { place: "paionia", url: "https://paionia.city-events.gr" },
        ],
      },
      {
        product: "act4mycity",
        installations: [
          { place: "veroia", url: "https://veria.act4my.city" },
          { place: "kalamaria", url: "https://kalamaria.act4my.city" },
          { place: "centralMacedonia", url: "https://pkm.act4my.city" },
        ],
      },
    ],
  },
  {
    key: "ekt",
    id: "case-ekt",
    shots: [
      { label: "data.ekt.gr/search_results", image: ektSearchImage },
      { label: "data.ekt.gr/search_results/…", image: ektDatasetImage },
      { label: "data.ekt.gr", image: ektHomeImage },
    ],
    site: { url: "https://data.ekt.gr", host: "data.ekt.gr" },
    stack: ["React 19", "Plain CSS", "Redux Toolkit", "Chart.js", "CKAN", "Node.js", "nginx", "Docker"],
  },
];

const chipClass =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-gold/50 hover:text-gold";

/** A small browser-style window with an address bar label. */
const Frame = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="w-full overflow-hidden rounded-md border border-border bg-[hsl(0_0%_5%)] shadow-[0_24px_48px_-24px_rgb(0_0_0/0.7)]">
    <div className="flex items-center gap-1.5 border-b border-border bg-[hsl(0_0%_6%)] px-3 py-2" aria-hidden="true">
      <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
      <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
      <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
      <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground">{label}</span>
    </div>
    {children}
  </div>
);

/** Screenshots stacked like overlapping windows; the front one is shown at full strength. */
const ShotStack = ({ items, title }: { items: Shot[]; title: string }) => (
  <div className="relative aspect-[4/5] w-full">
    {items.map((shot, index) => (
      <div
        key={shot.label}
        className="absolute w-[82%]"
        style={{ top: `${index * 27}%`, left: `${index * 9}%`, zIndex: index }}
      >
        <Frame label={shot.label}>
          <img
            src={shot.image}
            alt={`${title} · ${shot.label}`}
            loading="lazy"
            className={`block h-auto w-full ${index < items.length - 1 ? "opacity-80" : ""}`}
          />
        </Frame>
      </div>
    ))}
  </div>
);

const Label = ({ children }: { children: string }) => (
  <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{children}</p>
);

export const SelectedWorkSection = () => {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as unknown as string[];

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeader index="01" label={t("nav.work")} title={t("work.title")} subtitle={t("work.subtitle")} />

        <div className="space-y-8">
          {cases.map((study, index) => {
            const visualRight = index % 2 === 1;
            return (
              <Reveal key={study.key}>
                <article id={study.id} className="panel grid grid-cols-1 overflow-hidden lg:grid-cols-2">
                  {/* Visual */}
                  <div
                    className={`flex min-w-0 items-center border-b border-border bg-[hsl(0_0%_7%)] p-5 sm:p-8 lg:border-b-0 lg:p-10 ${
                      visualRight ? "lg:order-last lg:border-l" : "lg:border-r"
                    }`}
                  >
                    <ShotStack items={study.shots} title={t(`work.cases.${study.key}.title`)} />
                  </div>

                  {/* Story */}
                  <div className="flex min-w-0 flex-col p-6 md:p-10">
                    <p className="mb-2 font-mono text-xs text-gold/80">{t(`work.cases.${study.key}.kind`)}</p>
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
                      {t(`work.cases.${study.key}.title`)}
                    </h3>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label>{t("work.labels.challenge")}</Label>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {t(`work.cases.${study.key}.challenge`)}
                        </p>
                      </div>
                      <div>
                        <Label>{t("work.labels.role")}</Label>
                        <p className="text-sm leading-relaxed text-muted-foreground">{t(`work.cases.${study.key}.role`)}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Label>{t("work.labels.built")}</Label>
                      <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
                        {list(`work.cases.${study.key}.built`).map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {study.stack.map((tech) => (
                        <li key={tech} className="tag px-2 py-0.5 text-[11px]">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 border-t border-border pt-5">
                      {study.internal && (
                        <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                          <Lock size={13} />
                          {t("work.labels.internal")}
                        </p>
                      )}

                      {study.site && (
                        <a
                          href={study.site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-gold"
                        >
                          {t("work.labels.visit")}
                          <span className="font-mono text-xs text-muted-foreground">{study.site.host}</span>
                          <ArrowUpRight size={15} />
                        </a>
                      )}

                      {study.groups && (
                        <>
                          <Label>{t("work.labels.installations")}</Label>
                          <div className="space-y-3">
                            {study.groups.map((group) => (
                              <div key={group.product} className="flex flex-wrap items-center gap-2">
                                <span className="mr-1 w-full text-xs font-medium text-foreground sm:w-28">
                                  {t(`work.products.${group.product}`)}
                                </span>
                                {group.installations.map((installation) => (
                                  <a
                                    key={installation.place}
                                    href={installation.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={chipClass}
                                  >
                                    {t(`places.${installation.place}`)}
                                    <ArrowUpRight size={12} />
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
