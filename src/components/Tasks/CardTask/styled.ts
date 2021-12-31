import styled from 'styled-components';

interface WrapperProps {
  isFirst: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 87.2vw;
  height: 53px;
  background: ${({ theme }) => theme.backgroundCard};
  border-bottom: 1px solid ${({ theme }) => theme.textSecundary};

  border-radius: ${(props) =>
    props.isFirst === 'first' ? '5px 5px 0 0' : '0'};
  display: flex;
  align-items: center;
  padding-left: 2rem;
  color: ${({ theme }) => theme.textPrimary};
  position: relative;
`;

interface ButtonProps {
  isCompleted?: boolean;
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
`;

export const ButtonRemove = styled(Button)`
  border: none;
  position: absolute;
  right: 0;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
