import React, { createContext, useContext, useState } from "react";

const ChartContext = createContext();

export function ChartProvider({ children }) {
  const [activeTab, setActiveTab] = useState("IN_DEFICIENCIA");

  const chartData = [
    {
      id: "IN_DEFICIENCIA",
      title: "Pessoas com deficiência",
      description: "Essa é uma análise importante porque influencia",
    },
    {
      id: "WOMAN",
      title: "Presença de mulheres na tecnologia",
      charts: [
        {
          title: "Mulheres em Ciência da Computação",
          type: "pie",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias consectetur iure commodi repellendus, voluptas in quis.",
          titleChart: "woman",
          labels: ["a", "b"],
          values: [40, 60],
        },
        {
          title: "Mulheres em Ciência da Computação",
          type: "pie",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias consectetur iure commodi repellendus, voluptas in quis.",
          titleChart: "woman",
          labels: ["a", "b"],
          values: [40, 60],
        },
      ],
    },
    {
      id: "IN_DEFICIENCIA2",
      title: "Pessoas com deficiência 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias consectetur iure commodi repellendus, voluptas in quis.",
    },
    {
      id: "WOMAN2",
      title: "Presença de mulheres na tecnologia 2",
      description: "Essa é uma análise importante porque influencia",
    },
  ];

  return (
    <ChartContext.Provider
      value={{
        activeTab,
        setActiveTab,
        chartData,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
}

export function useChart() {
  const context = useContext(ChartContext);

  return context;
}
