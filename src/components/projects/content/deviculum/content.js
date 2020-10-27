import { tree } from "./implementationTree";
import { technologies as techs } from "../common/technologies";

export const content = {
  title: "Deviculum",
  meta: "Curriculum learning outcome analysis",
  description:
    "A web application to help educators and academics develop curricula. " +
    "Users build their curricula by associating learning outcomes/objectives (LOs) to curriculum modules. " +
    "They can then analyse their curriculum using admin-provided or their own custom built verb taxonomies. " +
    "LOs are parsed using an NLP library in order to identify verbs and return a statistical breakdown of the verb categories covered by their curriculum within a chosen taxonomy. " +
    "Each curriculum can have multiple taxonomy analyses. Check out the demo video on the last slide.",

  technologies: {
    brief: ["Django", "JavaScript"],
    backend: [
      techs.python,
      techs.django,
      techs.celery,
      techs.rabbitmq,
      techs.spacy,
      techs.postgresql,
    ],
    frontend: [
      techs.html,
      techs.css,
      techs.javascript,
      techs.bootstrap,
      techs.chartjs,
      techs.d3js,
    ],
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
    {
      name: "Source",
      href: "https://github.com/Aviemusca/curriculum-dev",
      type: "github",
      color: "linear-gradient(to right, blue 50%, yellow 50%)",
    },

    { name: "Frontend", href: null, type: "github" },
    {
      name: "Live Site",
      href: "https://deviculum.herokuapp.com/",
      type: "globe",
    },
  ],
  tileImage: null,
  sliderMedia: [
    {
      source: "../media/images/deviculum/curriculum.png",
      type: "image",
      padding: "22%",
      caption: "A Computer Science curriculum with 2 taxonomy analyses.",
    },
    {
      source: "../media/images/deviculum/taxonomy.png",
      type: "image",
      padding: "18%",
      caption: "An example Blooms taxonomy of verbs.",
    },
    {
      source: "../media/images/deviculum/taxonomy-overlap2.png",
      type: "image",
      padding: "0%",
      caption:
        "A chord diagram representing the verb overlap between Blooms taxonomy categories.",
    },
    {
      source: "../media/videos/deviculum.mp4",
      type: "video",
      padding: "5%",
      caption: "Deviculum demo video.",
    },
  ],
};
