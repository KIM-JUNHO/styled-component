import React, { Fragment } from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Fragment>
      <Button danger>Hello</Button>
      <Button>Hello</Button>
    </Fragment>
  );
}

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default App;
