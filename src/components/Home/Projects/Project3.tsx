import React from "react";
import { featuredProjectsData } from "../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { PinContainer } from "../../ui/3d-pin";
import acronisMain from "../../../assets/images/AdvancedAutomation/acronisMain.png";
import acronisSide from "../../../assets/images/AdvancedAutomation/acronisSide.png";
import { useTranslation } from "react-i18next";
import { FeaturedProjectTranslation } from "../../../utils/ProjectsInterface";

export const Project3: React.FC = () => {
  const { t } = useTranslation();

  const project = featuredProjectsData.find(
    (project) => project.id === "advanced-automation",
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
          src={acronisMain}
          loading="lazy"
          alt="Acronis"
        />
      </PinContainer>
      <img
        className="absolute z-50 -bottom-10 md:max-w-60 -right-0 md:-bottom-24 max-w-32 animate-top-down"
        src={acronisSide}
        loading="lazy"
        alt="Scale"
      />
    </ProjectCard>
  );
};
