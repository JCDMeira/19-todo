import React from 'react';

// # my styles components
import { Conteiner, GlobalStyle } from './styles/Global';

// # my theme files
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes/themes';
import ThemeToggler from './components/ThemeToggler/themeToggler';
import { useTheme } from './hooks/useTheme.hook';

// # my components
import BackImage from './components/BackImage/index';
import { Title1 } from './styles/typography ';
import Tasks from './components/Tasks';

function App(): JSX.Element {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Conteiner>
        <header>
          <ThemeToggler theme={theme} toggleTheme={() => toggleTheme()} />
          <BackImage theme={theme} />
          <Title1>Todo</Title1>
        </header>
        <Tasks />
      </Conteiner>
    </ThemeProvider>
  );
}

export default App;
