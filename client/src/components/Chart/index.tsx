import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

const data = {
  pie: {
    labels: ["a", "b"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#b47df2", "#7146EA"],
        borderColor: ["#b47df2", "#7146EA"],
      },
    ],
  },
  bar: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
};

type ChartProps = {
  type: "pie" | "bar";
};

const Chart = ({ type }: ChartProps) => (
  <>
    <span>Titulo do grafico</span>
    {type === "pie" && (
      <Doughnut
        data={data[type]}
        options={{
          cutoutPercentage: 50,
          responsive: true,
        }}
      />
    )}
    {type === "bar" && (
      <Bar
        data={data[type]}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    )}
  </>
);

export default Chart;
