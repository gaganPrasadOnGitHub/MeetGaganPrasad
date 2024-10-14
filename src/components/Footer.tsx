import { Link } from "react-router-dom";
import { SocialConnect } from "./ui/SocialConnect";
import { useTranslation } from "react-i18next";
import { MoveToTop } from "./ui/MoveToTop";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative flex items-center justify-between flex-col-reverse md:flex-row mt-auto  pt-12 mb-4  ">
      <MoveToTop />
      <div>
        <Link to="/">
          <h1 className="text-6xl md:text-7xl lg:text-[80px] mb-4 font-bold font-fira">
            {t("developerFirstName")}
          </h1>
        </Link>
        <div className="w-full flex gap-4 items-center justify-between">
          <Link to="/">
            {t("frontend")}

            <br />
            {t("developer")}
          </Link>
          <Link to="/">
            <h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold font-fira">
              {t("developerLastName")}
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:self-end mb-6 md:mb-0 ">
        <a href="#about" className="font-bold text-xl mb-2 md:mb-4">
          <h2>... /{t("connectWithMe")} ...</h2>
        </a>
        <SocialConnect />
      </div>
    </footer>
  );
};
