import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 100%;
  border-right: 1px solid rgba(126, 125, 138, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.75rem 1.5rem;

  svg {
    margin: 40px auto 40px;
    width: 40px;
    height: 40px;
    fill: #7146EA;
  }

  h2 {
    margin-top: 30px;
    text-transform: uppercase;
    color: #eee;
    opacity: 0.8;
    font-size: 15px;
    font-weight: 400;

    margin-left: 5px;
    text-align: left;
    width: 100%;
  }
`;

type ItemProps = {
  isActive: boolean;
};

const ListModifiers = {
  isActive: () => css`
    background: #1c1d24;
    opacity: 1;

    p {
      background: -webkit-linear-gradient(left, #b47df2, #7146EA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  `,
};

export const List = styled.ul`
  list-style: none;
  width: 100%;

  margin-top: 20px;
`;

export const Item = styled.li<ItemProps>`
  ${({ isActive }) => css`

    margin-bottom: 5px;

    border-radius: 4px;

    p {
      color: #7E7D8A;
    }

    padding: 15px 10px;
    cursor: pointer;

    transition: .3s;

    &:hover {
        ${!isActive && ListModifiers.isActive()}
    }

    ${isActive && ListModifiers.isActive()}
  `}
`;
