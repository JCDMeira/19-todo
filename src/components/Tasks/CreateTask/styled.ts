import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 87.2vw;
  max-width: 540px;
  height: 48px;
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 5px;
  margin-bottom: 1.6rem;

  display: flex;
  align-items: center;
  padding-left: 2rem;

  @media (min-width: 1024px) {
    height: 64px;
    margin-bottom: 2.4rem;
  }
`;

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.circleColor};
  margin-right: 1.2rem;

  @media (min-width: 1024px) {
    width: 2.6rem;
    height: 2.6rem;
    margin-right: 2.6rem;
  }
`;

export const Create = styled.input`
  height: 100%;
  width: 90%;
  background: transparent;
  border: none;
  font-family: 'Josefin Sans';
  color: ${({ theme }) => theme.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.textCreate};
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
`;
