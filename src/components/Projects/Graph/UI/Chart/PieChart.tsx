import React from "react";
import { TEChart } from "tw-elements-react";

const PieChart = (): JSX.Element => {
  const chartData = {
    labels: ["Monday", "Tuesday", "Wednesday"],
    datasets: [
      {
        label: "Traffic",
        data: [2112, 2343, 2545],
        backgroundColor: [
          "rgba(228, 130, 19, 0.5)",
          "rgba(77, 182, 172, 0.5)",
          "rgba(243, 209, 16, 0.5)",
        ],
      },
    ],
  };

  return <TEChart type="pie" data={chartData} />;
};

export default PieChart;
