import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";

/**
 * The language lives in the URL (`/?lang=el`), so each version has its own address
 * that search engines can index and people can share. English is the default at `/`.
 */
const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const initialLanguage = urlLanguage === "el" ? "el" : "en";

i18n.use(initReactI18next).init({
  resources: translations,
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = initialLanguage;

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language;
  const url = new URL(window.location.href);
  if (language === "en") url.searchParams.delete("lang");
  else url.searchParams.set("lang", language);
  window.history.replaceState(window.history.state, "", url);
});

export default i18n;
