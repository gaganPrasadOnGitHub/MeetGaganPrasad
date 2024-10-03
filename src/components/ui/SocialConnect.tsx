import React from "react";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactComponent as CssBattleIcon } from "../../assets/images/cssBattle.svg";
import { useTranslation } from "react-i18next";

export const SocialConnect: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full gap-3 md:gap-6 lg:gap-8 flex items-center justify-center flex-wrap text-sm">
      <Link
        title="https://cssbattle.dev/player/gagan"
        to="https://cssbattle.dev/player/gagan"
        className="gap-2 py-3 flex items-center justify-start transition-all hover:translate-y-[2px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CssBattleIcon className="h-3 max-w-5" />
        {t("cssBattle")}
      </Link>
      <Link
        title="https://www.linkedin.com/in/gagan-prasad/"
        to="https://www.linkedin.com/in/gagan-prasad/"
        className="gap-2 py-3 flex items-center justify-start transition-all hover:translate-y-[2px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        {t("linkedIn")}
      </Link>
      <Link
        title="https://github.com/gaganPrasadOnGitHub"
        to="https://github.com/gaganPrasadOnGitHub"
        className="gap-2 py-3 flex items-center justify-start transition-all hover:translate-y-[2px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        {t("gitHub")}
      </Link>
      <Link
        title="writetogaganprasad@gmail.com"
        to="mailto:writetogaganprasad@gmail.com"
        className="gap-2 py-3 flex items-center justify-start transition-all hover:translate-y-[2px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail />
        {t("email")}
      </Link>
    </div>
  );
};
