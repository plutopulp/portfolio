import { tree } from "./implementationTree";
import { technologies as techs } from "../common/technologies";

export const content = {
  title: "Taskma",
  meta: "Project management",
  description:
    "A task manager web application to help users complete their projects. " +
    "Users build their projects by creating individual tasks within groups of related tasks. " +
    "They can set task statuses, priorities, difficulties and dealines. " +
    "Colour palettes and icons are associated with these fields to help visualise and quickly identify certain tasks. " +
    "Projects include a manager where the user can filter and sort tasks over multiple properties, " +
    "to further target specific tasks. Check out the demo video on the last slide.",
  technologies: {
    brief: ["Django", "ReactJS"],
    backend: [techs.python, techs.django, techs.restAPI, techs.postgresql],
    frontend: [
      techs.html,
      techs.css,
      techs.javascript,
      techs.reactjs,
      techs.semanticUI,
    ],
  },
  learnings: [
    "Designing Rest-APIs",
    "Consuming Rest-APIs",
    "Token Authentication",
    "APIViews and Viewsets",
    "Permission + Authentication Classes",
    "Presentational/Container Component Design",
    "Frontend Form Validation",
    "React Context",
    "Custom Hooks",
  ],
  implementationTree: tree,
  anchors: [
    {
      name: "Backend Source",
      href: "https://github.com/Aviemusca/task-manager-backend",
      type: "github",
    },
    {
      name: "Frontend Source",
      href: "https://github.com/Aviemusca/task-manager-frontend",
      type: "github",
    },
    {
      name: "Live Site",
      href: "https://tamska.herokuapp.com/",
      type: "globe",
    },
  ],

  tileImage: "../media/images/taskma/taskma.png",
  sliderMedia: [
    {
      source: "../media/images/taskma/colorsExTask.png",
      type: "image",
      padding: "5%",
      caption:
        "Left: Task property colours and icons. Right: Example task card in expanded form.",
    },
    {
      source: "../media/images/taskma/project1.png",
      type: "image",
      padding: "5%",
      caption: "Project detail view at initial stage.",
    },
    {
      source: "../media/images/taskma/project2.png",
      type: "image",
      padding: "5%",
      caption:
        "Project detail view at mature stage. Here tasks are sorted by priority, then by difficulty.",
    },
    {
      source: "../media/images/taskma/filterWidgetModal.png",
      type: "image",
      padding: "10%",
      caption: "The task filter widget modal window.",
    },
    {
      source: "../media/images/taskma/sortWidgetModal.png",
      type: "image",
      padding: "10%",
      caption: "The task sort widget modal window.",
    },
    {
      source: "../media/videos/taskma.mp4",
      type: "video",
      padding: "5%",
      caption: "Taskma demo video.",
    },
  ],
};
