import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Monitor, Smartphone, RefreshCw } from "lucide-react";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "webDev",
      icon: Monitor,
    },
    {
      key: "mobile",
      icon: Smartphone,
    },
    {
      key: "legacy",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">{t("services.title")}</h2>
          <p className="section-subheading mx-auto">{t("services.subtitle")}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-enterprise p-8"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {t(`services.items.${service.key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`services.items.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
