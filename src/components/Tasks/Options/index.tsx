/* eslint-disable no-unused-vars */
import React from 'react';
import { TaskConsumer } from '../../../Contexts/TaskContext';
import { Paragraph } from '../../../styles/typography ';
import * as S from './styled';

type leftProp = number;

function Options(): JSX.Element {
  const { todos, clearCompleted, tagFilter, setTagFilter } = TaskConsumer();
  const leftTodos: leftProp = todos.reduce((acc, element) => {
    return element.isCompleted ? acc : acc + 1;
  }, 0);

  return (
    <S.Wrapper>
      <Paragraph>{leftTodos} items left</Paragraph>
      <S.OptionsFilter>
        <div>
          <S.Button
            tag={tagFilter}
            myTag="all"
            onClick={() => setTagFilter('all')}
          >
            All
          </S.Button>
          <S.Button
            myTag="active"
            tag={tagFilter}
            onClick={() => setTagFilter('active')}
          >
            Active
          </S.Button>
          <S.Button
            myTag="completed"
            tag={tagFilter}
            onClick={() => setTagFilter('completed')}
          >
            Completed
          </S.Button>
        </div>
      </S.OptionsFilter>
      <button className="clearButton" onClick={() => clearCompleted()}>
        Clear Completed
      </button>
    </S.Wrapper>
  );
}

export default Options;
