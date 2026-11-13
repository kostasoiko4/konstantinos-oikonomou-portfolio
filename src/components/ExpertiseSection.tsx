import { useTranslation } from "react-i18next";
import { GitBranch, Layers, Monitor, Server, Smartphone } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const groups = [
  {
    key: "frontend",
    icon: Monitor,
    highlight: true,
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "HTML5", "CSS", "Ant Design", "Bootstrap"],
  },
  { key: "backend", icon: Server, items: ["Node.js", "Express.js", "PostgreSQL", "PostGIS", "MongoDB", "Firebase", "SQL"] },
  { key: "mobile", icon: Smartphone, items: ["React Native", "Redux Toolkit", "Android Studio"] },
  { key: "workflow", icon: GitBranch, items: ["Git", "Monorepos", "Docker", "Postman", "pgAdmin", "PM² Agile"] },
  {
    key: "other",
    icon: Layers,
    items: ["Vue.js", "Quasar", "Angular.js", "Python", "PyTorch", "Java", "C", "C++", "OpenGL", "Prolog", "Assembly"],
  },
];

export const ExpertiseSection = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section section-alt">
      <div className="shell">
        <SectionHeader index="04" label={t("nav.skills")} title={t("expertise.title")} subtitle={t("expertise.subtitle")} />

        <Reveal>
          <ul className="border-b border-border">
            {groups.map((group) => (
              <li
                key={group.key}
                className="grid gap-4 border-t border-border py-6 md:grid-cols-[280px_1fr] md:items-center md:gap-10"
              >
                <div className="flex items-center gap-4">
                  <div className="icon-box mb-0 h-10 w-10 shrink-0">
                    <group.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t(`expertise.groups.${group.key}.title`)}</h3>
                    <p className="text-xs text-muted-foreground">{t(`expertise.groups.${group.key}.caption`)}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li key={tech} className={`tag ${group.highlight ? "border-gold/40 text-gold" : ""}`}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
