import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

const Chart = ({ chartData }) => {
  console.log(chartData);

  return (
    <>
      <span>{chartData.titleChart}</span>
      {chartData.type === "pie" && (
        <Doughnut
          data={{
            labels: chartData.labels,
            datasets: [
              {
                data: chartData.values,
                backgroundColor: ["#b47df2", "#7146EA"],
                borderColor: ["#b47df2", "#7146EA"],
              },
            ],
          }}
          options={{
            cutoutPercentage: 50,
            responsive: true,
          }}
        />
      )}
      {chartData.type === "bar" && (
        <Bar
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: chartData.titleChart,
                data: chartData.values,
                backgroundColor: ["#b47df290", "#7146EA90"],
                borderColor: ["#b47df2", "#7146EA"],
                borderWidth: 1,
              },
            ],
          }}
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
};
export default Chart;
