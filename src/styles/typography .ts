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

  @media (min-width: 1024px) {
    margin-left: 31.180555555555557vw;
    top: 7.7rem;
    font-size: 4.2rem;
    line-height: 4.2rem;
    letter-spacing: 0.32em;
  }
`;

export const FooterText = styled.p`
  font-size: 1.35rem;
  line-height: 1.35rem;

  color: ${({ theme }) => theme.textSecundary};
`;

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: 1.16rem;
  line-height: 1.2rem;

  @media (min-width: 1024px) {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
`;
