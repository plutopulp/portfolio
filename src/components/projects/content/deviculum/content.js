import { tree } from "./implementationTree";

export const content = {
  title: "Deviculum",
  meta: "Curriculum learning outcome analysis",
  description:
    "A web application to help educators and academics develop curricula." +
    "Users associate learning outcomes/objectives to curriculum modules which are parsed using a natural language processing toolkit in order to identify verbs and return a complexity breakdown of the curriculum within their chosen taxonomy.",
  technologies: {
    brief: ["Django", "JavaScript"],
    backend: ["Python", "Django", "Celery", "RabbitMQ", "spaCy", "PostgreSQL"],
    frontend: ["HTML-5", "CSS-3", "JavaScript", "Bootstrap", "chartjs", "d3js"],
  },
  learnings: [
    "Authentication",
    "Django ORM",
    "OOP designs",
    "Creating Mixins",
    "Class-Based Views",
    "Creating an API",
    "Form Validation",
    "Asynchronous Work-Flows",
    "Making AJAX calls",
    "DOM-manipulation",
    "CSS Grids + Flexbox",
    "Chord Charts",
  ],
  implementationTree: tree,
  anchors: [
    { name: "Frontend", href: null, type: "github" },
    {
      name: "Backend",
      href: "https://github.com/Aviemusca/curriculum-dev",
      type: "github",
    },
    {
      name: "Live Site",
      href: "https://deviculum.herokuapp.com/",
      type: "website",
    },
  ],
  tileImage: null,
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
    { source: "../media/videos/deviculum.mp4", type: "video", padding: "5%" },
  ],
};
