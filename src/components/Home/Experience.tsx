import { ExperienceData } from "../../data/ExperienceData";
import ReactMarkdown from "react-markdown";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ExperienceTranslation {
  name: string;
  designation: string;
  experience: string;
  location: string;
  description1: string;
  description2: string;
}

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="relative w-full flex flex-col items-center justify-center mb-16 md:mb-20 "
    >
      <h1 className="font-fira font-bold text-6xl sm:text-7xl md:text-[80px] self-center md:self-start mb-12 md:mb-20">
        {t("experience")}
      </h1>
      <BackgroundBeamsWithCollision>
        <div className="bg-box relative -z-10 max-w-7xl w-full h-full flex flex-col items-center mx-auto pb-4">
          {ExperienceData.map((experience, index) => {
            const translation = t(`experiences.${experience.id}`, {
              returnObjects: true,
            }) as ExperienceTranslation;
            return (
              <div
                className="max-w-[820px] text-[#a6a6a6] flex items-start flex-col md:flex-row justify-center gap-4 md:gap-16 mb-12 md:mb-16 last:mb-0"
                key={index}
              >
                <div className="flex flex-[0.6] flex-col items-start">
                  <Link
                    to={experience.website}
                    className="bg-black cursor-pointer transition-all hover:scale-[1.05]"
                  >
                    <p className="font-bold text-2xl mb-1 text-[#f5f5f5] hidden md:inline-block">
                      {translation.name}
                    </p>
                    <img
                      className={`${index === 2 ? "max-w-[140px]" : "max-w-[120px]"} mb-4 inline-block md:hidden`}
                      src={experience.logo}
                      alt={translation.name}
                      loading="lazy"
                    />
                  </Link>

                  <p className="mb-2">{translation.designation}</p>
                  <small className="mb-1">{translation.location}</small>
                  <small className="mb-1">{translation.experience}</small>
                </div>
                <div className="flex-[1.4] self-center">
                  <img
                    className={`${index === 2 ? "max-w-[140px]" : "max-w-[120px]"} bg-black mb-4 hidden md:block`}
                    src={experience.logo}
                    alt={translation.name}
                    loading="lazy"
                  />
                  <ReactMarkdown className="markdown-description mb-4">
                    {translation.description1}
                  </ReactMarkdown>
                  <ReactMarkdown className="markdown-description">
                    {translation.description2}
                  </ReactMarkdown>
                </div>
              </div>
            );
          })}
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};
