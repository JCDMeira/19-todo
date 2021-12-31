import React from 'react';
import CardTask from '../CardTask';
import * as S from './styled';

function CardsConteiner(): JSX.Element {
  const test = [
    {
      task: '1',
      isCompleted: true,
    },
    {
      task: '2',
      isCompleted: false,
    },
    {
      task: '3',
      isCompleted: false,
    },
    {
      task: '3',
      isCompleted: false,
    },
    {
      task: '3',
      isCompleted: false,
    },
    {
      task: '3',
      isCompleted: false,
    },
  ];
  return (
    <S.Wrapper>
      {test.map((task, index) => (
        <CardTask
          key={index}
          dataTask={task}
          isFirst={index === 0 ? 'first' : 'notFirst'}
        />
      ))}
    </S.Wrapper>
  );
}

export default CardsConteiner;
