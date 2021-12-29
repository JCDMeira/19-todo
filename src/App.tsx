import React from 'react';

// # my styles components
import { Conteiner, GlobalStyle } from './styles/Global';

// # my theme files
import { ThemeProvider } from 'styled-components';
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
