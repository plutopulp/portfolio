import { tree } from "./implementationTree";

export const content = {
  title: "Taskma",
  meta: "",
  description: "A task manager web application for managing projects.",
  technologies: {
    brief: ["Django", "React"],
    backend: ["Python", "Django", "Django-Rest-Framework", "PostgreSQL"],
    frontend: ["HTML-5", "CSS-3", "JavaScript", "ReactJS", "Semantic-UI-React"],
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
  hrefs: {
    repo: {
      frontend: "https://github.com/Aviemusca/task-manager-frontend",
      backend: "https://github.com/Aviemusca/task-manager-backend",
    },
    live: "https://tamska.herokuapp.com/",
  },
  tileImage: "../media/images/taskma.png",
  sliderMedia: [
    {
      source: "../media/images/deviculum-curriculum.png",
      type: "image",
      padding: "22%",
    },
    {
      source: "../media/images/deviculum-taxonomy.png",
      type: "image",
      padding: "18%",
    },
    {
      source: "../media/images/deviculum-taxonomy-overlap2.png",
      type: "image",
      padding: "0%",
    },
    { source: "../media/videos/taskma.mp4", type: "video", padding: "5%" },
  ],
};
