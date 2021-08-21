import Content from "../components/Content";
import Menu from "../components/Menu";
import { ChartProvider } from "../hooks/useChart";
import { Body, Container } from "../styles/landing";

export default function Home() {
  return (
    <ChartProvider>
      <Container>
        <Body>
          <Menu />
          <Content />
        </Body>
      </Container>
    </ChartProvider>
  );
}
