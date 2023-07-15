import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
  }

  html {
    font-size: 62.5%; 
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
  }

  body {
    width: 100vw;
    height: 100vh;

    font-size: 1.6rem;

    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme.white};

    overflow: hidden;

    border: 1px solid green;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
  }




`
