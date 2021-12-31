import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 87.2vw;
  max-width: 540px;
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: 5px 5px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
