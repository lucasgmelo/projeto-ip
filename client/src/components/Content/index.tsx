import React from "react";
import Chart from "../Chart";

import { ChartList, Container, Description, Subtitle } from "./styles";

const Content = () => {
  return (
    <Container>
      <h1>Pessoas com deficiência</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga provident
        ea magni quas ullam aliquid magnam distinctio unde qui, rem sequi
        tempore nam, quam dolore nobis enim eius esse quos?
      </p>
      <ChartList>
        <Subtitle>Nicho analisado</Subtitle>
        <Chart type="pie" />
      </ChartList>
      <Description>Essa é a descrição do gráfico.</Description>
      <ChartList>
        <Chart type="bar" />
      </ChartList>
      <Description>Essa é a descrição do gráfico.</Description>
    </Container>
  );
};

export default Content;
