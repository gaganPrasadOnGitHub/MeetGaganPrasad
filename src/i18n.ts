import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationHI from "./locales/hi.json";

const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
};

const storedLanguage = sessionStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
