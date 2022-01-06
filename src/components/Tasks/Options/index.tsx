/* eslint-disable no-unused-vars */
import React from 'react';
import { TaskConsumer } from '../../../Contexts/TaskContext';
import { Paragraph } from '../../../styles/typography ';
import * as S from './styled';

type leftProp = number;

function Options(): JSX.Element {
  const { todos, clearCompleted } = TaskConsumer();
  const leftTodos: leftProp = todos.reduce((acc, element) => {
    return element.isCompleted ? acc : acc + 1;
  }, 0);

  return (
    <S.Wrapper>
      <Paragraph>{leftTodos} items left</Paragraph>
      <S.OptionsFilter>
        <div>
          <button style={{ color: '#3A7BFD' }}>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </S.OptionsFilter>
      <button className="clearButton" onClick={() => clearCompleted()}>
        Clear Completed
      </button>
    </S.Wrapper>
  );
}

export default Options;
