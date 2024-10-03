import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = sessionStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    sessionStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <select
      className="bg-black cursor-pointer border-0 focus:outline-none focus-active:outline-none focus-visible:outline-none appearance-none"
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      <option value="en">En</option>
      <option value="hi">हिंदी</option>
    </select>
  );
};

export default LanguageSelector;
