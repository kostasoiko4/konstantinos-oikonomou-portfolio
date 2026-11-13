import { useTranslation } from "react-i18next";
import { ArrowUpRight, Award, Github, GraduationCap } from "lucide-react";
import portrait from "@/assets/profile-window.jpg";
import { Reveal, SectionHeader } from "./Section";

const THESIS_URL = "https://github.com/kostasoiko4/Anomaly-Detection-in-Autonomous-Driving-Agents-Using-World-Models";

const certs = [
  { key: "pm2" },
  { key: "react", url: "https://ude.my/UC-7d9565dd-3442-43b1-9be6-dd1d0e2597b1" },
  { key: "gdpr", url: "https://certificates.eu.sphynxlabs.net/e92b94435c354a28ae3be7778caac78c/validate" },
  { key: "ai" },
];

const BlockLabel = ({ icon: Icon, children }: { icon: typeof Award; children: string }) => (
  <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
    <Icon size={14} className="text-gold" />
    {children}
  </h3>
);

export const AboutSection = () => {
  const { t } = useTranslation();
  const list = (key: string) => t(key, { returnObjects: true }) as unknown as string[];

  return (
    <section id="about" className="section relative isolate overflow-hidden">
      {/* Desktop: photo fills the left third, full section height, fading into the content */}
      <div className="absolute inset-y-0 left-0 -z-10 hidden w-1/3 lg:block">
        <img
          src={portrait}
          alt="Konstantinos Oikonomou"
          width={1000}
          height={1321}
          loading="lazy"
          className="h-full w-full object-cover object-[65%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-45% via-background/80 via-75% to-background" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Mobile: photo as a banner on top of the section */}
      <div className="relative -mt-20 mb-10 h-80 sm:h-96 md:-mt-28 lg:hidden">
        <img
          src={portrait}
          alt="Konstantinos Oikonomou"
          width={1000}
          height={1321}
          loading="lazy"
          className="h-full w-full object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content starts just inside the photo's right edge so it overlaps the gradient */}
      <div className="px-5 sm:px-8 lg:pl-[28vw] lg:pr-[max(4rem,calc((100vw_-_1400px)/2_+_4rem))]">
        <div className="max-w-3xl">
          <SectionHeader index="05" label={t("nav.about")} title={t("about.title")} className="mb-6" />

          <Reveal>
            <p className="mb-5 text-lg leading-relaxed text-foreground/75">{t("about.bio")}</p>
            <p className="mb-4 leading-relaxed text-muted-foreground">{t("about.background")}</p>
            <p className="leading-relaxed text-muted-foreground">{t("about.interests")}</p>

            <div className="mt-10 grid gap-10 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <BlockLabel icon={GraduationCap}>{t("about.educationLabel")}</BlockLabel>
                <p className="font-semibold text-foreground">{t("about.degree")}</p>
                <p className="text-sm text-gold">{t("about.university")}</p>
                <a
                  href={THESIS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-foreground/85 transition-colors hover:text-gold"
                >
                  <Github size={14} />
                  {t("about.thesisLink")}
                  <ArrowUpRight size={13} />
                </a>

                <p className="mb-2 mt-6 text-sm font-medium text-foreground">{t("about.programmesLabel")}</p>
                <ul className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {list("about.programmes").map((programme) => (
                    <li key={programme}>{programme}</li>
                  ))}
                </ul>
              </div>

              <div>
                <BlockLabel icon={Award}>{t("about.certificationsLabel")}</BlockLabel>
                <ul className="space-y-4">
                  {certs.map((cert) => (
                    <li key={cert.key}>
                      <p className="text-sm font-medium leading-snug text-foreground">
                        {t(`about.certs.${cert.key}.title`)}
                      </p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                        <span>
                          {t(`about.certs.${cert.key}.issuer`)} · {t(`about.certs.${cert.key}.date`)}
                        </span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-foreground/85 transition-colors hover:text-gold"
                          >
                            {t("about.verify")}
                            <ArrowUpRight size={11} />
                          </a>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
