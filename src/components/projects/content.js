const deviculumContent = {
  title: "Deviculum",
  meta: "",
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
  urls: {
    repo: {
      frontend: null,
      backend: "https://github.com/Aviemusca/curriculum-dev",
    },
    live: "https://deviculum.herokuapp.com/",
  },
  tileImage: null,
  sliderMedia: [
    { source: "../media/images/deviculum.png" },
    { source: "../media/images/deviculum.png" },
    { source: "../media/images/deviculum.png" },
    { source: "../media/images/videos/deviculum.mp4" },
  ],
};

const taskmaContent = {
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
  urls: {
    repo: {
      frontend: "https://github.com/Aviemusca/task-manager-frontend",
      backend: "https://github.com/Aviemusca/task-manager-backend",
    },
    live: "https://tamska.herokuapp.com/",
  },
  tileImage: "../media/images/taskma.png",
  sliderMedia: [
    { source: "../media/images/deviculum.png" },
    { source: "../media/images/deviculum.png" },
    { source: "../media/images/deviculum.png" },
    { source: "../media/videos/taskma.mp4" },
  ],
};

export const projectsContent = [deviculumContent, taskmaContent];
