import { tree } from "./implementationTree";
import { technologies as techs } from "../common/technologies";

export const content = {
  title: "BJJpaths",
  meta: "Brazilian Jiu-Jitsu mind mapper",
  description:
    "A mind mapping web application for jiu-jitsu practitioners to connect their game." +
    "",
  technologies: {
    brief: ["Django", "ReactJS"],
    backend: [
      techs.python,
      techs.django,
      techs.restAPI,
      techs.docker,
      techs.postgresql,
    ],
    frontend: [
      techs.html,
      techs.css,
      techs.javascript,
      techs.reactjs,
      techs.semanticUI,
    ],
  },
  learnings: ["Auth0", "Drag & Drop", "Graph Traversal"],
  implementationTree: tree,
  anchors: [
    {
      name: "Source",
      href: "https://github.com/Aviemusca/bjj-digraph",
      type: "github",
      color: "linear-gradient(to right, blue 50%, yellow 50%)",
    },

    { name: "Frontend", href: null, type: "github" },
    {
      name: "Live Site",
      href: "https://bjjpaths.com/",
      type: "globe",
    },
  ],
  tileImage: "../media/images/taskma/taskma.png",
  sliderMedia: [
    {
      source: "../media/images/deviculum/curriculum.png",
      type: "image",
      padding: "22%",
      caption: "A Computer Science curriculum with 2 taxonomy analyses.",
    },

    {
      source: "../media/videos/deviculum.mp4",
      type: "video",
      padding: "5%",
      caption: "Deviculum demo video.",
    },
  ],
};
