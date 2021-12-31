import React from 'react';
import { Paragraph } from '../../../styles/typography ';
import * as S from './styled';
import checked from '../../../assets/images/icon-check.svg';
import remove from '../../../assets/images/icon-cross.svg';

interface CardTaskProps {
  dataTask: {
    task: string;
    isCompleted: boolean;
  };
  isFirst: string;
}
function CardTask({ dataTask, isFirst }: CardTaskProps): JSX.Element {
  return (
    <S.Wrapper isFirst={isFirst}>
      <S.Button isCompleted={dataTask.isCompleted}>
        {dataTask.isCompleted && <img src={checked} alt="task is completed" />}
      </S.Button>
      <Paragraph>{dataTask.task}</Paragraph>
      <S.ButtonRemove>
        <img src={remove} alt="button for remove task " />
      </S.ButtonRemove>
    </S.Wrapper>
  );
}

export default CardTask;
