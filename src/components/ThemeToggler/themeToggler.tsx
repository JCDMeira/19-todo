import React from 'react';
import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets/images/icon-sun.svg';
import * as S from './styles';

interface ThemeTogglerProps {
  theme: string | (() => void);
  toggleTheme: () => void;
}

const ThemeToggler = ({
  theme,
  toggleTheme,
}: ThemeTogglerProps): JSX.Element => {
  const onClick = () => {
    toggleTheme();
  };
  return (
    <>
      <S.Button title="Theme Toggler" onClick={() => onClick()}>
        {theme === 'light' && <S.Icon src={moonIcon} />}
        {theme === 'dark' && <S.SunIcon src={sunIcon} />}
      </S.Button>
    </>
  );
};

export default ThemeToggler;
