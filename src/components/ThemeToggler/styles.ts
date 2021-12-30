import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 4.8rem;
  right: 2.4rem;

  font-size: 1.6em;
  width: 2em;
  height: 2em;
  display: grid;
  place-items: center;
  border: none;

  border-radius: 0.2em;
  background: transparent;
  transition: all 0.2s ease-out;

  z-index: 100;

  border-radius: 0.2em;
  transition: all 0.2s ease-out;

  &:active {
    transform: scale(0.95);
  }
`;
Button.displayName = 'Button';

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

export const Icon = styled.img`
  animation: ${grow} 0.2s ease-out forwards;
`;
Icon.displayName = 'Icon';

export const SunIcon = styled.img`
  animation: ${rotate} 0.2s ease-out forwards;
`;
SunIcon.displayName = 'SunIcon';
