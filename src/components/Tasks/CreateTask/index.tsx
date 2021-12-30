import React from 'react';
import * as S from './styled';

function CreateTask(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Button />
      <S.Create placeholder="Create a new todo..." type="text" />
    </S.Wrapper>
  );
}

export default CreateTask;
