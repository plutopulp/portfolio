export const projectsContent = [
  {
    title: "deviculum",
    meta: "",
    description:
      "A web application to help educators and academics develop curricula." +
      "Users associate learning outcomes/objectives to curriculum modules which are parsed using a natural language processing toolkit in order to identify verbs and return a complexity breakdown of the curriculum within their chosen taxonomy.",
    technologies: {
      backend: ["Python", "Django", "Celery", "RabbitMQ", "spaCy"],
      frontend: [
        "HTML-5",
        "CSS-3",
        "JavaScript",
        "Bootstrap",
        "chartjs",
        "d3js",
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
    urls: {
      repo: {
        frontend: null,
        backend: "https://github.com/Aviemusca/curriculum-dev",
      },
      live: "https://deviculum.herokuapp.com/",
    },
    img: "../media/deviculum.png",
  },
];
