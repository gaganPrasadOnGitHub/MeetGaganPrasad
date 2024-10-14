import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./ui/LanguageSelector";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    ReactGA.initialize("G-0R4PGR37EN");
  }, []);

  return (
    <header className="flex items-center justify-between mt-4">
      <Link to="/" className="flex flex-col items-center ">
        <span>{t("developerFirstName")}</span>
        <span>{t("developerLastName")}</span>
      </Link>
      <LanguageSelector />
    </header>
  );
};
