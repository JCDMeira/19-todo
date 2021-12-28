import React from 'react';
import styled, { keyframes } from 'styled-components';
import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets/images/icon-sun.svg';

const Button = styled.button`
  position: absolute;
  top: 1em;
  right: 7em;
  font-size: 1.6em;
  width: 2em;
  height: 2em;
  display: grid;
  place-items: center;
  border: none;
  /* background: ${({ theme }) => theme.cardBg}; */
  background: red;
  border-radius: 0.2em;
  transition: all 0.2s ease-out;

  &:active {
    transform: scale(0.95);
  }
`;
Button.displayName = 'Button';

interface ThemeTogglerProps {
  theme: string | (() => void);
  toggleTheme: () => void;
}

const grow = keyframes`
  from{
    transform: scale(0.5)
  }
  to{
    transform: scale(1)
  }
`;

const rotate = keyframes`
  from{
    transform: scale(0.5) rotate(0deg)
  }
  to{
    transform: scale(1) rotate(360deg)
  }
`;

const Icon = styled.img`
  animation: ${grow} 0.2s ease-out forwards;
`;
Icon.displayName = 'Icon';

const SunIcon = styled.img`
  animation: ${rotate} 0.2s ease-out forwards;
`;
SunIcon.displayName = 'SunIcon';

const ThemeToggler = ({
  theme,
  toggleTheme,
}: ThemeTogglerProps): JSX.Element => {
  const onClick = () => {
    toggleTheme();
  };
  return (
    <>
      <Button title="Theme Toggler" onClick={() => onClick()}>
        {theme === 'light' && <Icon src={moonIcon} />}
        {theme === 'dark' && <SunIcon src={sunIcon} />}
      </Button>
    </>
  );
};

export default ThemeToggler;
