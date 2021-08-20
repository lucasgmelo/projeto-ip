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
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 14, 3, 5, 2, 3],
        backgroundColor: [
            "#b47df290", "#7146EA90"
        ],
        borderColor: [
            "#b47df2", "#7146EA"
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
