import React from "react";
import { featuredProjectsData } from "../../../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { PinContainer } from "../../ui/3d-pin";
import ssnMain from "../../../assets/images/SustainNatureNest/ssnMain.png";
import earth from "../../../assets/images/SustainNatureNest/earth.png";
import { FeaturedProjectTranslation } from "../../../utils/ProjectsInterface";
import { useTranslation } from "react-i18next";

export const Project2: React.FC = () => {
  const { t } = useTranslation();

  const project = featuredProjectsData.find(
    (project) => project.id === "sustain-nature-nest",
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
          src={ssnMain}
          loading="lazy"
          alt="Sustain Nature Nest"
        />
      </PinContainer>
      <img
        className="absolute max-w-20 md:max-w-28 z-50 -bottom-10 right-4 md:-bottom-14 animate-top-down-fast"
        src={earth}
        loading="lazy"
        alt="Earth"
      />
    </ProjectCard>
  );
};
