import React from "react";
import Chart from "chart.js";
import styled from "styled-components";

import { labels, datasets, options } from "./settings";

const ChartWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const DeviculumChartContainer = () => {
  const chartRef = React.createRef();

  React.useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    Chart.defaults.global.defaultFontColor = "#444";
    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels,
        datasets,
      },
      options,
    });
  }, [chartRef]);

  return (
    <ChartWrapper>
      <canvas id="myChart" ref={chartRef} />
    </ChartWrapper>
  );
};

export { DeviculumChartContainer as DeviculumChart };
