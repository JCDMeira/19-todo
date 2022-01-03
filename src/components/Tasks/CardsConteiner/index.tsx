import React from 'react';
import { TaskConsumer } from '../../../Contexts/TaskContext';
import CardTask from '../CardTask';
import * as S from './styled';

function CardsConteiner(): JSX.Element {
  const { todos } = TaskConsumer();

  // const test = [
  //   {
  //     task: 'Complete online JavaScript course',
  //     isCompleted: true,
  //   },
  //   {
  //     task: 'Jog around the park 3x',
  //     isCompleted: false,
  //   },
  //   {
  //     task: '10 minutes meditation',
  //     isCompleted: false,
  //   },
  //   {
  //     task: 'Read for 1 hour',
  //     isCompleted: false,
  //   },
  //   {
  //     task: 'Pick up groceries',
  //     isCompleted: false,
  //   },
  //   {
  //     task: 'Complete Todo App on Frontend Mentor',
  //     isCompleted: false,
  //   },
  // ];
  console.log(todos);
  return (
    <S.Wrapper>
      {todos.map((task, index) => (
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
