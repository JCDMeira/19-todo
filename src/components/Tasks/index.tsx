import React from 'react';
import CreateTask from './CreateTask';
import * as S from './styled';

function Tasks(): JSX.Element {
  return (
    <S.Wrapper>
      <CreateTask />
    </S.Wrapper>
  );
}

export default Tasks;
