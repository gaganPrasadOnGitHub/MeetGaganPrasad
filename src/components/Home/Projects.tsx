import React from "react";
import { Project1 } from "./Projects/Project1";
import { Project2 } from "./Projects/Project2";
import { Project3 } from "./Projects/Project3";
import { ProjectsSlider } from "./ProjectsSlider";
import { TracingBeam } from "../ui/tracing-beam";
import { useTranslation } from "react-i18next";

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TracingBeam>
      <div className="relative my-16 md:my-20">
        <h1 className="font-fira font-bold text-6xl sm:text-7xl md:text-[80px] text-center md:text-left mb-28 md:mb-20">
          {t("projects")}
        </h1>
        <Project1 />
        <Project2 />
        <Project3 />
        <ProjectsSlider />
      </div>
    </TracingBeam>
  );
};
