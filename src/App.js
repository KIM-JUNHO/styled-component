import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  padding:0;
  margin:0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

export default App;
