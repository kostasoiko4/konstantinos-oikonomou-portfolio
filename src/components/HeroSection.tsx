import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import heroImage from "@/assets/profile-hero.png";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, hsl(0 0% 7%) 0%, hsl(220 15% 10%) 50%, hsl(0 0% 7%) 100%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-silver/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm text-gold font-medium">Available for Projects</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gold-gradient">{t("hero.headline")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10">
              {t("hero.subhead")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                className="btn-hero-primary rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero.cta.primary")}
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="https://github.com/kostasoiko4?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={18} />
                {t("hero.cta.secondary")}
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent rounded-2xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50">
                <img
                  src={heroImage}
                  alt="Konstantinos Oikonomou - Frontend Engineer"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 md:left-4 bg-card border border-border rounded-lg px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-bold">3+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Years Experience</p>
                    <p className="text-xs text-muted-foreground">Public Sector Focus</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
