import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 87.2vw;
  max-width: 540px;
  height: 50px;

  border-radius: 0px 0px 5px 5px;
  padding: 0 1.6rem 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  background: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.textSecundary};
  font-weight: bold;

  .clearButton {
    border: none;
    cursor: pointer;
    background: transparent;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
  }
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const OptionsFilter = styled.div`
  width: 87.2vw;
  max-width: 540px;
  height: 48px;
  font-size: 1.4rem;

  position: absolute;
  left: 0px;
  top: 66px;

  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 16.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    width: 205px;
    height: 48px;
    position: unset;
    left: auto;
    top: auto;
  }
`;
interface optionsProps {
  tag: string;
  myTag: string;
}

export const Button = styled.div<optionsProps>`
  border: none;
  cursor: pointer;
  background: transparent;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  color: ${(props) =>
    props.tag === props.myTag ? 'var(--bright-blue)' : 'inherit'};
`;
