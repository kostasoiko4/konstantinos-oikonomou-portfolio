import { useTranslation } from "react-i18next";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";
import { GITHUB_URL } from "@/lib/site";
import endOfDawnImage from "@/assets/projects/endofdawn.jpg";
import gemLuxuryImage from "@/assets/projects/gemluxury.jpg";
import thesisImage from "@/assets/projects/thesis-architecture.png";

/** Client work not covered by the case studies; `links` are the live sites, `login` marks ones behind a sign-in. */
const projects: { key: string; links: string[]; login?: boolean }[] = [
  {
    key: "smartCity",
    links: [
      "pogoni.smartiscity.gr",
      "zitsa.smartiscity.gr",
      "sithonia.smartiscity.gr",
      "zakynthos.smartiscity.gr",
      "syros.smartiscity.gr",
    ],
  },
  { key: "tremorWatch", links: ["seismoi-trikala.dotsoft.gr"], login: true },
  { key: "pkm", links: ["politis.pkm.gov.gr"] },
  { key: "menr", links: ["menr.etsn.az"] },
  { key: "knossos", links: ["knossospalace.gr"] },
  { key: "eata", links: ["digitaltools.thisisathens.org"] },
  { key: "tee", links: ["teed.repository.gr"] },
  {
    key: "academyAthens",
    links: ["repository.academyofathens.gr", "kendi.academyofathens.gr", "kefak.academyofathens.gr"],
  },
  { key: "apokorona", links: ["apokoronasmuseums.gr"] },
];

const sideProjects = [
  { key: "endofdawn", url: "https://endofdawn.com", host: "endofdawn.com", image: endOfDawnImage },
  { key: "gemluxury", url: "https://gemluxury.eu", host: "gemluxury.eu", image: gemLuxuryImage },
  {
    key: "thesis",
    url: "https://github.com/kostasoiko4/Anomaly-Detection-in-Autonomous-Driving-Agents-Using-World-Models",
    host: "github.com",
    image: thesisImage,
    repo: true,
  },
];

export const MoreProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section section-alt">
      <div className="shell">
        <SectionHeader
          index="02"
          label={t("nav.projects")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <Reveal>
          <ul className="grid gap-x-12 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.key} className="border-t border-border py-6">
                <h3 className="font-semibold text-foreground">{t(`projects.items.${project.key}.title`)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t(`projects.items.${project.key}.description`)}
                </p>
                {project.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                    {project.links.map((host) => (
                      <a
                        key={host}
                        href={`https://${host}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-foreground/85 transition-colors hover:text-gold"
                        title={project.login ? t("work.labels.internal") : undefined}
                      >
                        {host}
                        {project.login && <Lock size={11} aria-label={t("work.labels.internal")} />}
                        <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-gold">{t("projects.sideLabel")}</h3>

          <div className="grid gap-5 md:grid-cols-3">
            {sideProjects.map((project) => (
              <a
                key={project.key}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex flex-col overflow-hidden"
              >
                <div className={`aspect-[16/9] overflow-hidden border-b border-border ${project.repo ? "bg-white" : ""}`}>
                  <img
                    src={project.image}
                    alt={t(`projects.side.${project.key}.title`)}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                      project.repo ? "object-contain p-2" : "object-cover object-top"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-1.5 font-mono text-[11px] text-gold/80">{t(`projects.side.${project.key}.kind`)}</p>
                  <h4 className="text-sm font-semibold leading-snug text-foreground">
                    {t(`projects.side.${project.key}.title`)}
                  </h4>
                  <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {t(`projects.side.${project.key}.description`)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors group-hover:text-gold">
                    {project.repo ? (
                      <>
                        <Github size={13} />
                        {t("projects.source")}
                      </>
                    ) : (
                      <span className="font-mono">{project.host}</span>
                    )}
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <a
            href={`${GITHUB_URL}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t("projects.viewAll")}
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
