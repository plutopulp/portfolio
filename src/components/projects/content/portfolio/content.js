import { tree } from "./implementationTree";
import { technologies as techs } from "../common/technologies";

export const content = {
  title: "Portfolio",
  meta: "My portfolio website",
  description: "A portfolio website showcasing my projects and skills.",
  technologies: {
    brief: ["ReactJS"],
    backend: [techs.docker],
    frontend: [
      techs.html,
      techs.css,
      techs.javascript,
      techs.reactjs,
      techs.semanticUI,
    ],
  },
  learnings: ["CSS animations"],
  implementationTree: tree,
  anchors: [
    {
      name: "Source",
      href: "https://github.com/Aviemusca/portfolio",
      type: "github",
      color: "linear-gradient(to right, blue 50%, yellow 50%)",
    },

    { name: "Frontend", href: null, type: "github" },
    {
      name: "Live Site",
      href: "https://yvanbuggy.com/",
      type: "globe",
    },
  ],
  tileImage: "../media/images/portfolio/portfolio-scaled.png",
  sliderMedia: [
    {
      source: "../media/images/portfolio/portfolio.png",
      type: "image",
      padding: "5%",
      caption: "Landing page created with CSS animations",
    },
  ],
};
