import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import handshakeImage from "@/assets/profile-handshake.png";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-1">
        <img 
          src={handshakeImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/95 to-charcoal-deep/90" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
            {t("footer.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
        >
          {/* Email */}
          <a
            href="mailto:kostasoikonomou4@gmail.com"
            className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
          >
            <Mail className="w-5 h-5 text-gold" />
            <span>kostasoikonomou4@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+306987802777"
            className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
          >
            <Phone className="w-5 h-5 text-gold" />
            <span>+30 6987802777</span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-gold" />
            <span>{t("footer.location")}</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href="https://www.linkedin.com/in/konstantinos-oikonomou-8a8a3b1b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/kostasoiko4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="divider-gold mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Konstantinos Oikonomou. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
