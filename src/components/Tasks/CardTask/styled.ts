import styled from 'styled-components';

interface WrapperProps {
  isFirst: string;
  isCompleted?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 87.2vw;
  max-width: 540px;
  height: 53px;
  background: ${({ theme }) => theme.backgroundCard};
  border-bottom: 1px solid ${({ theme }) => theme.textSecundary};

  border-radius: ${(props) =>
    props.isFirst === 'first' ? '5px 5px 0 0' : '0'};
  display: flex;
  align-items: center;
  padding-left: 2rem;
  /* color: ${({ theme }) => theme.textPrimary}; */
  color: ${({ theme, ...rest }) =>
    rest.isCompleted ? `${theme.textSecundary}` : `${theme.textPrimary}`};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  position: relative;

  @media (min-width: 1024px) {
    height: ${(props) => (props.isCompleted ? '64px' : '65px')};
  }
`;

interface ButtonProps {
  isCompleted?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = styled.button<ButtonProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) =>
    props.isCompleted
      ? 'linear-gradient(145.01deg, #57DDFF 6.18%, #C058F3 93.82%);'
      : 'transparent'};
  border: 1px solid ${({ theme }) => theme.circleColor};
  margin-right: 1.2rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 2.6rem;
    height: 2.6rem;
    margin-right: 2.6rem;
  }
`;

export const ButtonRemove = styled.button`
  border: none;
  position: absolute;
  right: 0;
  background: transparent;
  margin-right: 1.2rem;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (min-width: 1024px) {
    img {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
`;
