import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
  --bright-blue: #3A7BFD;
  --gradient-initial: #57DDFF;
  --gradient-final: #C058F3;

  /* Light Theme */

  --very-light-gray: #FAFAFA;
  --very-light-grayish: #E4E5F1;
  --light-grayish-blue: #D2D3DB;
  --dark-grayish-blue: #9394A5;
  --very-dark-grayish: #484B6A;

  /* Dark Theme */

  --very-dark-blue: #161722;
  --very-dark-desaturated: #25273C;
  --light-grayish-blue: #CACDE8;
  --light-grayish-blue: #E4E5F1; /*(hover) */
  --vdark-grayish-blue: #777A92;
  --very-grayish: #4D5066;
  --very-grayish-blue: #393A4C;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: 'Josefin Sans';
  }
`;

export const Conteiner = styled.div`
  background: var(--desaturated-dark-cyan);
  width: 100%;
  height: 100vh;
`;
