import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { skillsData } from "../../data/SkillsData";
import { useTranslation } from "react-i18next";

export const SkillsSlider: React.FC = () => {
  const CAROUSEL_OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: true,
    align: "start",
  };
  const AUTO_PALY_OPTIONS = {
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };
  const [emblaRef] = useEmblaCarousel(CAROUSEL_OPTIONS, [
    Autoplay(AUTO_PALY_OPTIONS),
  ]);
  const { t } = useTranslation();

  return (
    <section className="m-auto my-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {skillsData.map((skill) => (
            <div
              className="flex-none w-28 min-w-[100px] cursor-grab active:cursor-grabbing"
              key={skill.id}
            >
              <div className="flex flex-col items-center justify-center gap-4 h-24 rounded-lg select-none">
                <span className="skill-image">{skill.icon}</span>
                <small>{t(`skills.${skill.id}`)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
