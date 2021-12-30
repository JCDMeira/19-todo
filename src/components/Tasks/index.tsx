import React from 'react';
import CardsConteiner from './CardsConteiner';
import CreateTask from './CreateTask';
import * as S from './styled';

function Tasks(): JSX.Element {
  return (
    <S.Wrapper>
      <CreateTask />
      <CardsConteiner />
    </S.Wrapper>
  );
}

export default Tasks;
