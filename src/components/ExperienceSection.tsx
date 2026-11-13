import { useTranslation } from "react-i18next";
import { FileDown } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";
import { CV_URL } from "@/lib/site";

type Role = { key: string; stack: string[]; current?: boolean };

/** Recent roles, shown in full. */
const companies: { key: string; roles: Role[] }[] = [
  {
    key: "dotsoft",
    roles: [
      {
        key: "dotsoftSenior",
        current: true,
        stack: ["Next.js", "TypeScript", "PostgreSQL", "PostGIS", "React.js", "Monorepo", "PM² Agile"],
      },
      { key: "dotsoftMidSenior", stack: ["React 19", "Redux Toolkit", "Ant Design", "Leaflet", "CKAN", "Docker"] },
      { key: "dotsoftMid", stack: ["React.js", "Redux Toolkit", "Bootstrap", "Ant Design"] },
    ],
  },
  {
    key: "weblogic",
    roles: [
      { key: "weblogicLead", stack: ["React Native", "Redux Toolkit"] },
      { key: "weblogicFrontend", stack: ["React.js", "Redux", "Bootstrap"] },
    ],
  },
];

/** Short early roles, one line each. */
const earlierRoles = [
  { company: "instashop", role: "instashop", stack: "Angular.js · Node.js · MongoDB" },
  { company: "renvis", role: "renvis", stack: "React.js · Redux · Node.js · Express · PostgreSQL" },
];

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as unknown as string[];

  return (
    <section id="experience" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-8">
          <SectionHeader
            index="03"
            label={t("nav.experience")}
            title={t("experience.title")}
            subtitle={t("experience.subtitle")}
          />
          <a
            href={CV_URL}
            download
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold md:mb-14"
          >
            <FileDown size={16} className="text-gold" />
            {t("experience.cv")}
          </a>
        </div>

        <Reveal className="space-y-5">
          {companies.map((company) => (
            <article
              key={company.key}
              className="panel grid gap-6 p-6 md:grid-cols-[200px_1fr] md:gap-10 md:p-8 lg:grid-cols-[240px_1fr]"
            >
              <header>
                <h3 className="text-xl font-semibold text-gold">{t(`experience.companies.${company.key}.name`)}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {t(`experience.companies.${company.key}.period`)}
                </p>
              </header>

              <ol className="space-y-8 border-l border-border pl-6">
                {company.roles.map((role) => (
                  <li key={role.key} className="relative">
                    {/* timeline dot, centred on the border line */}
                    <span
                      className={`absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[hsl(0_0%_10%)] ${
                        role.current ? "bg-gold" : "bg-muted-foreground/50"
                      }`}
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="flex flex-wrap items-center gap-2 font-semibold text-foreground">
                        {t(`experience.roles.${role.key}.title`)}
                        {role.current && (
                          <span className="rounded-full border border-gold/40 px-2 py-0.5 font-mono text-[10px] font-normal uppercase tracking-wider text-gold">
                            {t("experience.current")}
                          </span>
                        )}
                      </h4>
                      <p className="font-mono text-xs text-muted-foreground">
                        {t(`experience.roles.${role.key}.period`)}
                      </p>
                    </div>

                    <ul className="mt-3 max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {list(`experience.roles.${role.key}.points`).map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {role.stack.map((tech) => (
                        <li key={tech} className="tag px-2 py-0.5 text-[11px]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </article>
          ))}

          <article className="panel p-6 md:p-8">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {t("experience.earlier")}
            </h3>
            <ul className="divide-y divide-border">
              {earlierRoles.map((item) => (
                <li
                  key={item.company}
                  className="grid gap-1 py-4 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[240px_1fr]"
                >
                  <div>
                    <p className="font-semibold text-gold">{t(`experience.companies.${item.company}.name`)}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {t(`experience.roles.${item.role}.period`)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t(`experience.roles.${item.role}.title`)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t(`experience.roles.${item.role}.summary`)}
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] text-muted-foreground/80">{item.stack}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
};
