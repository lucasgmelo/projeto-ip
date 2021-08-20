import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;
const jump = keyframes`

  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
`;

const Letter = styled.h2`
  font-size: 4rem;
  font-weight: bold;

  position: relative;
  margin: 0;
  padding: 0;

  span {
    display: inline-block;
    animation: ${jump} 1s ease-in-out infinite;
    position: relative;
    color: #ee69ac;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;

  margin-top: 1rem;
`;

const Button = styled.button`
  border: 0;

  height: 40px;
  max-width: 375px;
  border-radius: 4px;

  background: var(--gradient);
  color: var(--bg-dark);

  margin: 1rem 0;
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default function Home() {
  return (
    <Container>
      <Letter>
        <span>h</span>
        <span style={{ animationDelay: ".1s" }}>e</span>
        <span style={{ marginRight: "1.25rem", animationDelay: ".2s" }}>y</span>
        <span style={{ animationDelay: ".3s" }}>f</span>
        <span style={{ animationDelay: ".4s" }}>o</span>
        <span style={{ animationDelay: ".5s" }}>l</span>
        <span style={{ animationDelay: ".6s" }}>k</span>
      </Letter>
      <Text>this is my fav boilerplate. able to edit anything u want</Text>
      <Button>
        <a target="_blank" href="https://github.com/lucasgmelo/fav-next-boilerplate">
          template on github
        </a>
      </Button>
    </Container>
  );
}
