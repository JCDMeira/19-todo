import styled from 'styled-components';

export const Title1 = styled.h1`
  font-weight: bold;
  font-size: 2.6rem;
  line-height: 2.6rem;
  letter-spacing: 0.4em;

  color: var(--title1);
  text-transform: uppercase;

  position: relative;
  z-index: 10;

  top: 4.8rem;
  margin-left: 2.5rem;
`;

export const FooterText = styled.p`
  font-size: 1.35rem;
  line-height: 1.35rem;

  color: ${({ theme }) => theme.textSecundary};
`;
