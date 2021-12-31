import React from 'react';
import CardsConteiner from './CardsConteiner';
import CreateTask from './CreateTask';
import Options from './Options';
import * as S from './styled';

function Tasks(): JSX.Element {
  return (
    <S.Wrapper>
      <CreateTask />
      <CardsConteiner />
      <Options />
    </S.Wrapper>
  );
}

export default Tasks;
