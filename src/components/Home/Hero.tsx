import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center  max-w-[380px] sm:max-w-[769px] mt-20 mb-10 mx-auto md:my-28 ">
      <div>
        <h1
          className={`${i18n.language === "hi" ? "md:text-left" : "sm:text-left"} relative z-20 font-fira font-bold text-6xl mb-4 sm:text-7xl md:text-[80px] text-center`}
        >
          {t("frontend")}
        </h1>
        <div
          className={`${i18n.language === "hi" ? "md:flex-row" : " sm:flex-row"} flex justify-between flex-col-reverse gap-2 w-full`}
        >
          <div
            className={`${i18n.language === "hi" ? "md:text-left" : " sm:text-left"} self-center text-center text-sm md:text-base max-w-[320px] markdown-description`}
          >
            <ReactMarkdown>{t("heroDescription")}</ReactMarkdown>
          </div>
          <h1
            className={`${i18n.language === "hi" ? "md:self-end" : "sm:self-end"} relative z-20 font-fira font-bold text-6xl sm:text-7xl md:text-[80px] self-center mb-2 sm:mb-0 `}
          >
            {t("developer")}
          </h1>
        </div>
      </div>
      <div className="bg-black w-full md:max-w-[769px] overflow-hidden flex flex-col items-center justify-center mt-4 mx-auto">
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#fff"
          />
          <div className="bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] inset-0 absolute w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};
