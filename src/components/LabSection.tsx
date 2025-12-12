import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Star, GitBranch, ExternalLink } from "lucide-react";

export const LabSection = () => {
  const { t } = useTranslation();

  const repos = [
    { key: "repo1", stars: 42, forks: 12, tech: 'Python', link: 'https://github.com/kostasoiko4/Python/tree/main/Street%20Sign%20Recognition%20Genetic%20CFNN' },
    { key: "repo2", stars: 28, forks: 8, tech: 'Java', link: 'https://github.com/kostasoiko4/Java/blob/main/Yu-Gi-Oh!%20Memory%20Card%20Game.7z' },
    { key: "repo3", stars: 35, forks: 15, tech: 'Vue - Quasar', link: 'https://github.com/kostasoiko4/Vue-Quasar-Reservation-App-Client' },
  ];

  return (
    <section id="lab" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">{t("lab.title")}</h2>
          <p className="section-subheading mx-auto">{t("lab.subtitle")}</p>
        </motion.div>

        {/* Repos Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="repo-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  <span className="text-xs text-muted-foreground">{repo.tech}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-gold" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch size={14} />
                    {repo.forks}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t(`lab.repos.${repo.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {t(`lab.repos.${repo.key}.description`)}
              </p>

              <button className="flex items-center gap-2 text-sm text-silver hover:text-gold transition-colors">
                <a 
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex" 
                  style={{alignItems: 'center', gap: '.5rem'}}
                >
                  <span>View Code</span>
                  <ExternalLink size={14} />
                </a>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://github.com/kostasoiko4?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary rounded-lg inline-flex"
          >
            {t("lab.viewAll")}
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
