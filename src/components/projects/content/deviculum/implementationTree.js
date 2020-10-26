export const tree = [
  {
    name: "Implementation Tree",
    attributes: {},
    children: [
      {
        name: "Backend",
        children: [
          {
            name: "Authentication",
            children: [
              { name: "Password Change + Reset" },
              { name: "Auth + Permission Tests" },
            ],
          },
          {
            name: "OOP Design",
            children: [
              { name: "Class-Based Views" },
              { name: "Custom Mixins" },
            ],
          },
          {
            name: "Async Task Flows",
            children: [
              { name: "Chains" },
              { name: "Groups" },
              { name: "Chords" },
            ],
          },
          {
            name: "API Design",
          },

          { name: "NLP parsing algorithm" },
          {
            name: "Forms",
            children: [
              { name: "Custom Validation" },
              { name: "Profanity Checks" },
            ],
          },
        ],
      },
      {
        name: "Frontend",
        children: [
          {
            name: "Layouts",
            children: [
              { name: "Creating Dashboards" },
              { name: "Dynamic Grids" },
              { name: "Flexbox" },
            ],
          },
          { name: "OOP Design", children: [] },
          {
            name: "Charts",
            children: [
              { name: "Bar Charts" },
              { name: "Stacked Bar Charts" },
              { name: "Chord Charts" },
            ],
          },
        ],
      },
    ],
  },
];
