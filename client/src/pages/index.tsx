import { Body, Container } from "../styles/landing";
import Content from "../components/Content";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <Container>
      <Body>
        <Menu />
        <Content />
      </Body>
    </Container>
  );
}
