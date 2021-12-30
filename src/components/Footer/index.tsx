import React from 'react';
import * as S from './style';
import { FooterText } from '../../styles/typography ';

function Footer(): JSX.Element {
  return (
    <S.Footer>
      <FooterText>Drag and drop to reorder list</FooterText>
    </S.Footer>
  );
}

export default Footer;
