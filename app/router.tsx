import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages';
import { About } from './pages';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={() => <About />} />
      <Redirect to="/" />
    </Switch>
  );
};
