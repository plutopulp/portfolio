import { tree } from "./implementationTree";
import { technologies as techs } from "../common/technologies";

export const content = {
  title: "BJJpaths",
  meta: "Brazilian Jiu-Jitsu mind mapper",
  description:
    "A mind mapping web application for jiu-jitsu practitioners to lay out and connect their game. " +
    "The user has a variety of move categories at their disposal (e.g. Submission, Grip, Transition etc...) " +
    "and each category is represented by its own shape and colour. The user connects up moves depending on their opponent's action/reaction so that the map branches off into different move sequences. ",
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
  tileImage: "../media/images/bjjpaths/bjjpaths.png",
  sliderMedia: [
    {
      source: "../media/images/bjjpaths/bjjpaths-1.gif",
      type: "image",
      padding: "5%",
      caption: "Creating and editing a node.",
    },

    {
      source: "../media/images/bjjpaths/bjjpaths-2.gif",
      type: "image",
      padding: "5%",
      caption: "Creating an edge and arrow head following node contour.",
    },
    {
      source: "../media/images/bjjpaths/bjjpaths-delete-node.gif",
      type: "image",
      padding: "5%",
      caption: "Removing a node and its connecting edges.",
    },
    {
      source: "../media/images/bjjpaths/bjjpaths-3.gif",
      type: "image",
      padding: "5%",
      caption: "Highlighting all the connecting paths between 2 nodes.",
    },
    {
      source: "../media/images/bjjpaths/bjjpaths-layout.gif",
      type: "image",
      padding: "5%",
      caption: "Different layout types.",
    },
  ],
};
