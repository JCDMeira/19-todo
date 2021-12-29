/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Conteiner, GlobalStyle } from './styles/Global';
import { lightTheme, darkTheme } from './styles/themes/themes';
import ThemeToggler from './components/ThemeToggler/themeToggler';
import { useTheme } from './hooks/useTheme.hook';

function App(): JSX.Element {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Conteiner>
        <ThemeToggler theme={theme} toggleTheme={() => toggleTheme()} />
        <h1>hello</h1>
      </Conteiner>
    </ThemeProvider>
  );
}

export default App;
