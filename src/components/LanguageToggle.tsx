import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "el" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full border border-border bg-secondary/50 hover:bg-secondary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={currentLang === "en" ? "text-gold" : "text-muted-foreground"}>
        EN
      </span>
      <span className="text-muted-foreground">/</span>
      <span className={currentLang === "el" ? "text-gold" : "text-muted-foreground"}>
        ΕΛ
      </span>
    </motion.button>
  );
};
