const borderWidth = 1;

export const labels = [
  "Knowledge",
  "Comprehension",
  "Application",
  "Analysis",
  "Synthesis",
  "Evaluation",
];

export const datasets = [
  {
    data: [18.64, 15.25, 22.03, 11.86, 5.08, 10.17],
    borderWidth,
    backgroundColor: "#AC2CAC90",
    borderColor: "#AC2CACFF",
  },
  {
    data: [20.34, 16.95, 32.2, 18.64, 20.34, 13.56],
    borderWidth,
    backgroundColor: "#4C4CD590",
    borderColor: "#4C4CD5FF",
  },
  {
    data: [6.78, 10.17, 18.64, 6.78, 20.34, 10.17],
    borderWidth,
    backgroundColor: "#25779590",
    borderColor: "#257795FF",
  },
];

export const options = {
  responsive: true,
  tooltips: { enabled: false },
  hover: { mode: null },
  aspectRatio: 1,
  scales: {
    xAxes: [{ stacked: true }],
    yAxes: [
      {
        stacked: true,
        ticks: { beginAtZero: true, callback: (value) => value + "%" },
      },
    ],
  },
  legend: { display: false },
  title: { text: "Learning Outcome Occurences", display: true },
};
