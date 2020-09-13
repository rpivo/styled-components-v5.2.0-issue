import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  color: #333;
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
  min-height: calc(100vh - 16px);
`;

const App = () => <Style className='app'>hello</Style>;

export default App;
