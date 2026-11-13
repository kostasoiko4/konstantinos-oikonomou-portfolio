import { useTranslation } from "react-i18next";
import { ArrowRight, Monitor, RefreshCw, Smartphone } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

/** Each service links to the work that backs it up. */
const services = [
  { key: "webDev", icon: Monitor, proof: "#case-vourla" },
  { key: "mobile", icon: Smartphone, proof: "#experience" },
  { key: "legacy", icon: RefreshCw, proof: "#case-monorepo" },
];

const steps = ["discovery", "build", "launch", "support"];

export const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section section-alt">
      <div className="shell">
        <SectionHeader
          index="06"
          label={t("nav.services")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <Reveal className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.key} className="panel panel-hover flex flex-col p-7 md:p-8">
              <div className="icon-box">
                <service.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {t(`services.items.${service.key}.title`)}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(`services.items.${service.key}.description`)}
              </p>
              <a
                href={service.proof}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-gold"
              >
                {t(`services.items.${service.key}.proof`)}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-gold">{t("services.processTitle")}</h3>
          <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step} className="bg-[hsl(var(--surface))] p-6">
                <p className="font-mono text-xs text-gold">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-semibold text-foreground">{t(`services.process.${step}.title`)}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t(`services.process.${step}.text`)}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};
