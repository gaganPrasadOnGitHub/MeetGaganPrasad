import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../ui/CarouselArrowButtons";
import ReactMarkdown from "react-markdown";
import { projectsData } from "../../data/projectsData";
import { PinContainer } from "../ui/3d-pin";
import { useTranslation } from "react-i18next";

interface ProjectTranslation {
  name: string;
  shortDescription: string;
}

export const ProjectsSlider: React.FC = () => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: true,
    align: "start",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { t } = useTranslation();

  return (
    <section className="max-w-full mx-auto mt-16">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold">... /{t("checkMoreProjects")} ...</h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {projectsData.map((project) => {
            const translation = t(`projectList.${project.id}`, {
              returnObjects: true,
            }) as ProjectTranslation;
            return (
              <div
                className="flex-none max-w-[100%] min-w-[100%] sm:min-w-[50%] transform translate-x-0"
                key={project.id}
              >
                <div className="relative md:m-4 rounded-[32px]">
                  <PinContainer
                    title={translation.name || project.name}
                    href={project.websiteLink || project.githubLink}
                  >
                    <img
                      src={project.imageLink}
                      className="w-full h-full absolute z-[-1] object-cover object-center rounded-[20px]"
                      alt={translation.name || project.name}
                      loading="lazy"
                    />
                    <div className="bg-[linear-gradient(45deg,black,#00000084)] backdrop-blur-1 w-full rounded-xl rounded-b-none flex flex-col items-center justify-center absolute left-0 -bottom-1 px-4 py-3">
                      {!project.logo && (
                        <p className="font-bold self-start h-6">
                          {translation.name || project.name}
                        </p>
                      )}
                      {project.logo && (
                        <img
                          loading="lazy"
                          className="self-start max-h-5 mb-2"
                          src={project.logo}
                          alt={project.name}
                        />
                      )}
                      <ReactMarkdown className="markdown-description text-sm ml-2 md:ml-4">
                        {translation.shortDescription ||
                          project.shortDescription}
                      </ReactMarkdown>
                    </div>
                  </PinContainer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <PrevButton onClick={onPrevButtonClick} />
        <NextButton onClick={onNextButtonClick} />
      </div>
    </section>
  );
};
