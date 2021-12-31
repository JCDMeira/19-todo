import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 87.2vw;
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
`;

export const OptionsFilter = styled.div`
  width: 87.2vw;
  height: 48px;

  position: absolute;
  left: 0px;
  top: 66px;

  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
