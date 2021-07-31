import React from "react";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";

export const t = (str, options) => {
  function T({ str, options }) {
    const { t: translate } = useTranslation();
    return translate(str, options);
  }
  return <T str={str} options={options} />;
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"]
    },
    ns: ["translation", "categories"],
    interpolation: {
      escapeValue: false
    },
    partialBundledLanguages: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      overrideMimeType: true,
      parse: function (data) {
        try {
          const obj = JSON.parse(data);
          return obj;
        } catch {
          return {};
        }
      }
    }
  });

export default i18n;
