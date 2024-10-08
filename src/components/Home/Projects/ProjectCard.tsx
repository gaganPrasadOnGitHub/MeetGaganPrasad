import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import { skillsData } from "../../../data/SkillsData";
import { useTranslation } from "react-i18next";
import { FeaturedProjectTranslation } from "../../../utils/ProjectsInterface";

interface Project {
  id: string;
  name: string;
  skills: string[];
  description1: string;
  description2: string;
  websiteLink?: string;
  githubLink?: string;
  imageLink: string;
}

interface ProjectCardProps {
  project: Project;
  children?: ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  children,
}) => {
  const { t } = useTranslation();
  const translation = t(`featuredProjects.${project.id}`, {
    returnObjects: true,
  }) as FeaturedProjectTranslation;

  if (!project) return <div></div>;
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:odd:flex-row-reverse gap-8 my-14 md:mb-20">
      <div className="flex flex-col gap-4 flex-1">
        <Link
          to={project.websiteLink || project.githubLink || "/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-2xl font-bold">
            {translation.name || project.name}
          </h3>
        </Link>

        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-4 my-4">
            {project.skills.map((skill, index) => {
              const skillItem = skillsData.find((item) => item.name === skill);
              return skillItem ? (
                <small
                  className="text-[#a6a6a6] flex items-center justify-end gap-2 border border-white/[0.1] rounded-sm py-2 px-6"
                  key={index}
                >
                  {skillItem.icon}
                  {t(`skills.${skillItem.id}`)}
                </small>
              ) : null;
            })}
          </div>
        )}
        {project.description1 && (
          <ReactMarkdown className="markdown-description">
            {translation.description1 || project.description1}
          </ReactMarkdown>
        )}
        {project.description2 && (
          <ReactMarkdown className="markdown-description">
            {translation.description2 || project.description2}
          </ReactMarkdown>
        )}
        <div className="flex items-center justify-start gap-4 mt-4">
          {project.websiteLink && (
            <Link
              className="flex items-center justify-center gap-2 transition-all hover:translate-y-[2px]"
              to={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              title={project.websiteLink}
            >
              {t("website")} <RxExternalLink />
            </Link>
          )}
          {project.githubLink && (
            <Link
              className="flex items-center justify-center gap-2 transition-all hover:translate-y-[2px]"
              to={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title={project.githubLink}
            >
              {t("skills.github")} <FaGithub />
            </Link>
          )}
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center flex-1">
        {children}
      </div>
    </div>
  );
};
