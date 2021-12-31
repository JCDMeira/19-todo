import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 4.8rem;
  right: 2.4rem;

  border: none;
  background: transparent;
  transition: all 0.2s ease-out;

  z-index: 100;

  transition: all 0.2s ease-out;

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 1024px) {
    top: 8rem;
    right: 44.8rem;
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
  width: 2rem;
  height: 2rem;
  animation: ${grow} 0.2s ease-out forwards;

  @media (min-width: 1024px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
Icon.displayName = 'Icon';

export const SunIcon = styled.img`
  width: 2rem;
  height: 2rem;
  animation: ${rotate} 0.2s ease-out forwards;
  @media (min-width: 1024px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
SunIcon.displayName = 'SunIcon';
