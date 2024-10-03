import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaDocker,
  FaNode,
  FaJenkins,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiJquery,
  SiOpenai,
  SiShopify,
  SiFirebase,
  SiHeroku,
  SiRender,
  SiFigma,
  SiAdobephotoshop,
  SiVite,
  SiWebpack,
  SiExpress,
  SiJest,
  SiJira,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { MdOutlineWaterDrop } from "react-icons/md";

interface Skill {
  id: string;
  name: string;
  icon: JSX.Element;
}

export const skillsData: Skill[] = [
  { id: "html", name: "HTML", icon: <FaHtml5 /> },
  { id: "css", name: "CSS", icon: <FaCss3Alt /> },
  { id: "sass", name: "Sass", icon: <FaSass /> },
  { id: "tailwind", name: "Tailwind", icon: <RiTailwindCssFill /> },
  { id: "bootstrap", name: "Bootstrap", icon: <FaBootstrap /> },
  { id: "javascript", name: "JavaScript", icon: <FaJsSquare /> },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
  { id: "jquery", name: "JQuery", icon: <SiJquery /> },
  { id: "vue", name: "Vue", icon: <FaVuejs /> },
  { id: "vuex", name: "Vuex", icon: <FaVuejs /> },
  { id: "react", name: "React", icon: <FaReact /> },
  { id: "redux", name: "Redux", icon: <SiRedux /> },
  { id: "openai", name: "Open AI", icon: <SiOpenai /> },
  { id: "liquid", name: "Liquid", icon: <MdOutlineWaterDrop /> },
  { id: "shopify", name: "Shopify", icon: <SiShopify /> },
  { id: "nodejs", name: "Node JS", icon: <FaNode /> },
  { id: "express", name: "Express", icon: <SiExpress /> },
  { id: "threejs", name: "Three.js", icon: <TbBrandThreejs /> },
  { id: "jest", name: "Jest", icon: <SiJest /> },
  { id: "git", name: "Git", icon: <FaGitAlt /> },
  { id: "github", name: "GitHub", icon: <FaGithub /> },
  { id: "bitbucket", name: "Bitbucket", icon: <FaBitbucket /> },
  { id: "jenkins", name: "Jenkins", icon: <FaJenkins /> },
  { id: "jira", name: "Jira", icon: <SiJira /> },
  { id: "firebase", name: "Firebase", icon: <SiFirebase /> },
  { id: "heroku", name: "Heroku", icon: <SiHeroku /> },
  { id: "render", name: "Render", icon: <SiRender /> },
  { id: "figma", name: "Figma", icon: <SiFigma /> },
  { id: "photoshop", name: "Photoshop", icon: <SiAdobephotoshop /> },
  { id: "vite", name: "Vite", icon: <SiVite /> },
  { id: "webpack", name: "Webpack", icon: <SiWebpack /> },
  { id: "docker", name: "Docker", icon: <FaDocker /> },
];
