import React from 'react';
import { Paragraph } from '../../../styles/typography ';
import * as S from './styled';

function Options(): JSX.Element {
  return (
    <S.Wrapper>
      <Paragraph>5 items left</Paragraph>
      <div>aqui </div>
      <button className="clearButton">Clear Completed</button>
    </S.Wrapper>
  );
}

export default Options;
