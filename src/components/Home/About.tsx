import React, { lazy, useEffect, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { globeConfig, globeArcs } from "../../utils/globeConfig";
import { BackgroundBeams } from "../ui/background-beams";
import { SocialConnect } from "../ui/SocialConnect";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

const World = lazy(() =>
  import("../ui/globe").then((m) => {
    return { default: m.World } as { default: React.ComponentType<any> };
  }),
);

export const About: React.FC = () => {
  const [years, setYears] = useState("");
  const { t } = useTranslation();
  const specialization = [
    t("scalable"),
    t("responsive"),
    t("maintainable"),
    t("efficient"),
    t("robust"),
  ];

  useEffect(() => {
    const start = new Date("2020-08-01");
    const current = new Date();
    const months = current.getMonth() - start.getMonth();
    const days = current.getDate() - start.getDate();
    let calculatedYears = current.getFullYear() - start.getFullYear();

    if (months < 0 || (months === 0 && days < 0)) {
      calculatedYears--;
    }

    setYears(calculatedYears.toString());
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center mb-16 md:mb-20">
      <h1
        id="about"
        className="font-fira font-bold text-6xl sm:text-7xl md:text-[80px] self-center md:self-start mb-10 md:mb-20"
      >
        {t("aboutMe")}
      </h1>
      <div className="relative w-full flex items-center justify-start flex-col-reverse md:flex-row gap-8 mb-16">
        <div className="relative text-[#a6a6a6] flex-1">
          <div className="flex flex-col gap-4 mb-8">
            <ReactMarkdown className="bg-black markdown-description">
              {t("aboutDescription1")}
            </ReactMarkdown>
            <ReactMarkdown className="bg-black markdown-description">
              {t("aboutDescription2", { years })}
            </ReactMarkdown>

            <div className="bg-black">
              {t("aboutDescription3")}{" "}
              <span className="text-[#f5f5f5]">
                <FlipWords words={specialization} />
              </span>
              <br />
              <ReactMarkdown className="markdown-description">
                {t("aboutDescription4")}
              </ReactMarkdown>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 self-start border border-white/[0.1] rounded-xl p-8">
            <p className=" ">{t("beyondWork")}</p>
            <ReactMarkdown className="bg-black markdown-description ml-4">
              {t("beyondWorkDescription1")}
            </ReactMarkdown>
            <ReactMarkdown className="bg-black markdown-description ml-4">
              {t("beyondWorkDescription2")}
            </ReactMarkdown>
            <button
              className="flex items-center justify-center gap-2 self-end border cursor-pointer rounded-md border-white/[0.1] transition-all hover:translate-y-1 hover:text-[#f5f5f5] p-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Gagan_Prasad_Resume.pdf";
                link.click();
              }}
            >
              {t("downloadResume")} <FaCloudDownloadAlt />
            </button>
          </div>
        </div>
        {globeArcs && globeConfig && (
          <div className="globe-container relative w-full h-full flex-1 items-center">
            <World data={globeArcs} globeConfig={globeConfig} />
          </div>
        )}
      </div>
      <SocialConnect />
      <BackgroundBeams />
    </div>
  );
};
