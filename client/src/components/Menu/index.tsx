import { Container, Item, List } from "./styles";

export const Menu = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 12h2v9H3v-9zm16-4h2v13h-2V8zm-8-6h2v19h-2V2z" />
      </svg>
      <h2>Análises disponíveis</h2>
      <List>
        <Item isActive={true} >Pessoas com deficiência</Item>
        <Item isActive={false}>Presença de mulheres na tecnologia</Item>
        <Item isActive={false} >Pessoas com deficiência</Item>
        <Item isActive={false}>Presença de mulheres na tecnologia</Item>
      </List>
    </Container>
  );
};

export default Menu;
