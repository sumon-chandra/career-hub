import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Assignment 01",
    "Assignment 02",
    "Assignment 03",
    "Assignment 04",
    "Assignment 05",
    "Assignment 06",
    "Assignment 07",
  ],
  datasets: [
    {
      label: "Marks",
      data: [60, 60, 30, 43, 38, 60, 60],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(54, 162, 235, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <div className="w-[400px] mx-auto pt-8">
      <Pie data={data} />
    </div>
  );
};

export default Chart;
