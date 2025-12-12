import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GraduationCap, Music, Dumbbell, Beer } from "lucide-react";
import presentationImage from "@/assets/profile-presentation.png";

export const AboutSection = () => {
  const { t } = useTranslation();

  const interests = [
    { icon: Music, label: "Music" },
    { icon: Dumbbell, label: "Brazilian Jiu-Jitsu" },
    { icon: Beer, label: "Homebrewing" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal-deep relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={presentationImage}
                alt="Konstantinos presenting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 right-6 bg-card border border-border rounded-lg px-5 py-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Aristotle University</p>
                  <p className="text-xs text-muted-foreground">Computer Science</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-6">{t("about.title")}</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.bio")}
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.interests")}
            </p>

            <div className="flex flex-wrap gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
                >
                  <interest.icon className="w-4 h-4 text-gold" />
                  <span className="text-sm text-foreground">{interest.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
