import React from 'react';
import { Conteiner, GlobalStyle } from './styles/Global';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <h1>hello</h1>
      </Conteiner>
    </>
  );
}

export default App;
