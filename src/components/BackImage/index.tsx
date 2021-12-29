import React from 'react';
import * as S from './style';

import darkMobile from '../../assets/images/bg-mobile-dark.jpg';

import lightMobile from '../../assets/images/bg-mobile-light.jpg';

interface BackImageProps {
  theme: string;
}
function BackImage({ theme }: BackImageProps): JSX.Element {
  return (
    <S.Wrapper>
      {theme === 'light' && (
        <S.Image
          className="mobileBackground"
          src={lightMobile}
          alt="mountains image "
        />
      )}
      {theme === 'dark' && (
        <S.Image
          className="mobileBackground"
          src={darkMobile}
          alt="image of a building corridor "
        />
      )}
    </S.Wrapper>
  );
}

export default BackImage;
