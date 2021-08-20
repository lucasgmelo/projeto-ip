import Content from "../components/Content";
import Menu from "../components/Menu";
import { Body, Container } from "../styles/landing";


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
