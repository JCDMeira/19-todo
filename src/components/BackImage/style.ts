import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  z-index: 1;
`;
Wrapper.displayName = 'Wrapper';

const grow = keyframes`
  from{
    transform: scale(0.5)
  }
  to{
    transform: scale(1)
  }
`;

export const Image = styled.img`
  animation: ${grow} 0.2s ease-out forwards;
  position: inherit;
  width: 100%;
  height: 200px;
`;
Image.displayName = 'Image';
