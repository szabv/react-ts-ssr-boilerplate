import * as React from 'react';
import { Router } from './router';
import { HeaderBar } from './components/header';

const App = () => (
  <>
    <HeaderBar />
    <Router />
  </>
);

export default App;
