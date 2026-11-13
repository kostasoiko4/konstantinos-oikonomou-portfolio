import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "el" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={currentLang === "en" ? "Αλλαγή σε Ελληνικά" : "Switch to English"}
      className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30"
    >
      <span className={currentLang === "en" ? "text-foreground" : ""}>EN</span>
      <span className="mx-1 opacity-40">/</span>
      <span className={currentLang === "el" ? "text-foreground" : ""}>ΕΛ</span>
    </button>
  );
};
