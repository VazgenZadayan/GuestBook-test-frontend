import React from 'react';

import { Toolbar } from '@material-ui/core';

import Header from './components/Header';
import Comments from './components/Comments';

function App() {
  return (
    <>
      <Header />
      <Toolbar id="anchor" />
      <Comments />
    </>
  );
}

export default App;
