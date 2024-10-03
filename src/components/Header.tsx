import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./ui/LanguageSelector";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();
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
