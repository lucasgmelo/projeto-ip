import React, { useEffect, useState } from "react";
import Chart from "../Chart";

import { useChart } from "../../hooks/useChart";

import { ChartList, Container, Description, Subtitle } from "./styles";

const Content = () => {
  const { chartData, activeTab } = useChart();

  const [currentData, setCurrentData] = useState(activeTab);

  useEffect(() => {
    const filteredTab = chartData.filter((chart) => chart.id === activeTab);
    setCurrentData(filteredTab[0]);
    console.log(currentData.charts);
  }, [activeTab]);

  return (
    <Container>
      <h1>{currentData.title}</h1>
      <p>{chartData.description}</p>
      {currentData.charts?.map((chart) => (
        <>
          <ChartList>
            <Subtitle>{chart.title}</Subtitle>
              <Chart chartData={chart} />
              <Description>{chart.description}</Description>
          </ChartList>
        </>
      ))}
    </Container>
  );
};

export default Content;
