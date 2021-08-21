import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 2rem 1.5rem;
`;

export const Body = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: var(--bg-light);

    display: grid;
    grid-template-columns: auto 1fr;
`;