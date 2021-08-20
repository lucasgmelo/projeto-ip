import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5rem 2rem;
  overflow: auto;

  & > h1 {
    margin-bottom: 1rem;
    background: -webkit-linear-gradient(left, #b47df2, #7146ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > p {
    color: #f1f1f1;
    margin-bottom: 35px;
    max-width: 70%;
  }
`;

export const ChartList = styled.section`
  margin-bottom: 20px;
  max-width: 30%;
`;

export const Description = styled.p`
  color: #eee;
  margin-bottom: 35px;
  max-width: 70%;
`;

export const Subtitle = styled.h3`
  color: #eee;
  font-weight: 600;
  margin-bottom: 20px;
`;
