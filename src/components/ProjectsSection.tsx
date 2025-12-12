import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Building2, Globe, MapPin, AlertTriangle, Users, Wrench, Home } from "lucide-react";
import teamworkImage from "@/assets/profile-teamwork.png";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    { key: "academyAthens", icon: Building2, tags: ["Repository", "KENDI", "KEFAK"] },
    { key: "ekt", icon: Globe, tags: ["DATA Platform"] },
    { key: "eata", icon: Building2, tags: ["Enterprise Tools"] },
    { key: "faoAzerbaijan", icon: Globe, tags: ["International"] },
    { key: "pkm", icon: MapPin, tags: ["Regional Admin"] },
    { key: "tremorWatch", icon: AlertTriangle, tags: ["Real-time Monitoring"] },
    { key: "act4myCity", icon: Users, tags: ["Citizen Engagement"] },
    { key: "tee", icon: Wrench, tags: ["Professional Services"] },
    { key: "apokorona", icon: Home, tags: ["Municipal Portal"] },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={teamworkImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">{t("projects.title")}</h2>
          <p className="section-subheading mx-auto">{t("projects.subtitle")}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-enterprise p-6 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <project.icon className="w-6 h-6 text-silver group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t(`projects.items.${project.key}.title`)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-gold/10 text-gold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`projects.items.${project.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
