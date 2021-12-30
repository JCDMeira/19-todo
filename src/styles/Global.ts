import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
  --bright-blue: #3A7BFD;
  --gradient-initial: #57DDFF;
  --gradient-final: #C058F3;
  --title1: #fff;

  /* Light Theme */

  --background-light: #FAFAFA;
  --white: #fff;
  --very-light-grayish: #E4E5F1;
  --light-grayish-blue: #D2D3DB;
  --dark-grayish-blue: #9394A5;
  --very-dark-grayish: #484B6A;

  /* Dark Theme */

  --background-dark: #161722; /* background -> background */
  --very-dark-desaturated: #25273C; /* background card -> backgroundCard*/
  --light-grayish-blue: #CACDE8; /* text card -> textPrimary*/
  --light-grayish-blue: #E4E5F1; /*(hover) -> hoverText*/
  --vdark-grayish-blue: #777A92; /* text create -> textCreate */
  --very-grayish: #4D5066; /* complete, options e footer -> textSecundary*/
  --very-grayish-blue: #393A4C; /* circle -> circleColor*/
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
  }

  html{
    font-size: 62.5%;
    font-family: 'Josefin Sans';
  }
`;

export const Conteiner = styled.div`
  background: ${({ theme }) => theme.background};
  width: 100%;
  min-height: 730px;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    height: 200px;
    width: 100%;
  }
`;
