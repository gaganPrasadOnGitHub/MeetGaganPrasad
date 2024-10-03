import React from "react";
import { Hero } from "./Hero";
import { SkillsSlider } from "./SkillsSlider";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { About } from "./About";

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <SkillsSlider />
      <Projects />
      <About />
      <Experience />
      <SkillsSlider />
    </div>
  );
};
