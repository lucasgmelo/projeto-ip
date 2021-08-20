import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --bg: #1B1B22;
  --bg-light: #24232E;
  --gradient: linear-gradient(249.73deg, #f29682 0%, #ee69ac 50%, #cb4bcf 100%);
  --gray: #D7D7D7;
  --info: #BBB;
}

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
}

@media (max-width: 1080px) {
  html {
      font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
      font-size: 87.5%;
  }
}


body {
  font: 16px "Inter", sans-serif;
  color: #f9f9f9;
  background: var(--bg);

  min-height: 100vh;
}

body, input, textarea, select, button {
  font: 400 1rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, label {
    font-size: 1.5rem;
    font-weight: 600;
}
`;
