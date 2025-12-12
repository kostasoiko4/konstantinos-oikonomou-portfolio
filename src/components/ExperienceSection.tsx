import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import codingImage from "@/assets/profile-coding.png";

export const ExperienceSection = () => {
  const { t } = useTranslation();

  const roles = ["dotsoft", "weblogic", "instashop", "renvis"];

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 hidden lg:block">
        <img 
          src={codingImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
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
          <h2 className="section-heading mb-4">{t("experience.title")}</h2>
          <p className="section-subheading mx-auto">{t("experience.subtitle")}</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {roles.map((role, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className="card-enterprise p-6 ml-8 md:ml-0">
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-sm text-muted-foreground">
                      {t(`experience.roles.${role}.period`)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {t(`experience.roles.${role}.company`)}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {t(`experience.roles.${role}.role`)}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`experience.roles.${role}.description`)}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gold border-4 border-background" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
