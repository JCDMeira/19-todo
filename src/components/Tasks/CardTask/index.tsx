/* eslint-disable no-unused-vars */
import React from 'react';
import { Paragraph } from '../../../styles/typography ';
import * as S from './styled';
import checked from '../../../assets/images/icon-check.svg';
import remove from '../../../assets/images/icon-cross.svg';
import { TaskConsumer } from '../../../Contexts/TaskContext';

interface CardTaskProps {
  dataTask: {
    task: string;
    isCompleted: boolean;
  };
  isFirst: string;
}
function CardTask({ dataTask, isFirst }: CardTaskProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { completeTodo, removeTodo } = TaskConsumer();

  return (
    <S.Wrapper isFirst={isFirst} isCompleted={dataTask.isCompleted}>
      <S.Button
        isCompleted={dataTask.isCompleted}
        value={dataTask.task}
        onClick={() => completeTodo(dataTask)}
      >
        {dataTask.isCompleted && <img src={checked} alt="task is completed" />}
      </S.Button>
      <Paragraph>{dataTask.task}</Paragraph>
      <S.ButtonRemove
        value={dataTask.task}
        onClick={() => removeTodo(dataTask)}
      >
        <img src={remove} alt="button for remove task " />
      </S.ButtonRemove>
    </S.Wrapper>
  );
}

export default CardTask;
