import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const ExpertiseSection = () => {
  const { t } = useTranslation();

  const primaryStack = [
    "React.js",
    "React Native",
    "Redux Toolkit",
    "JavaScript",
    "TypeScript",
  ];

  const backendStack = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
  ];

  const secondaryStack = [
    "Vue.js",
    "Angular.js",
    "Quasar",
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-charcoal-deep relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">{t("expertise.title")}</h2>
          <p className="section-subheading mx-auto">{t("expertise.subtitle")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Primary Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gold mb-6 text-center">
              {t("expertise.primary")}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {primaryStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="tech-badge-primary text-base px-6 py-3"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="divider-gold" />

          {/* Backend Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-silver mb-6 text-center">
              {t("expertise.backend")}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backendStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="tech-badge px-5 py-2"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="divider-gold" />

          {/* Secondary Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-6 text-center uppercase tracking-wide">
              {t("expertise.secondary")}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {secondaryStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-sm px-4 py-2 rounded-full bg-muted text-muted-foreground"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
