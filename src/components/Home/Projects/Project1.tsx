import React from "react";
import { featuredProjectsData } from "../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { PinContainer } from "../../ui/3d-pin";
import { PopcornBrandLogo } from "./PopcornBrandLogo";
import mainPopcorn from "../../../assets/images/4700bc/mainPopcorn.png";
import cheesePopcorn from "../../../assets/images/4700bc/cheesePopcorn.png";
import { useTranslation } from "react-i18next";
import { FeaturedProjectTranslation } from "../../../utils/ProjectsInterface";

export const Project1: React.FC = () => {
  const { t } = useTranslation();
  const project = featuredProjectsData.find(
    (project) => project.id === "4700bc",
  );

  const translation = t(`featuredProjects.${project?.id}`, {
    returnObjects: true,
  }) as FeaturedProjectTranslation;

  if (!project) return <div></div>;
  return (
    <ProjectCard project={project}>
      <PinContainer
        title={translation.name || project.name}
        href={project.websiteLink || project.githubLink}
      >
        <img
          className="h-full w-full rounded-xl object-cover transition-all"
          src={mainPopcorn}
          loading="lazy"
          alt="4700BC"
        />
      </PinContainer>
      <div className="absolute z-50 left-10 -top-16 flex">
        <PopcornBrandLogo />
      </div>

      <img
        className="max-w-52 md:max-w-60 absolute z-50 -right-0 -bottom-24 -rotate-[15deg]"
        src={cheesePopcorn}
        loading="lazy"
        alt="Cheese Bowl"
      />
    </ProjectCard>
  );
};
