import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --desaturated-dark-cyan: #5BA4A4;
    --light-grayish-cyan: #EFFAFA;
    --grayish-cyan: #EEF6F6;
    --dark-grayish-cyan: #7B8E8E;
    --very-dark-grayish-cyan: #2C3A3A;
    --white: #fff;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: Spartan;
  }
`;

export const Conteiner = styled.div`
  background: var(--desaturated-dark-cyan);
  width: 100%;
`;
