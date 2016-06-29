import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Base, Home, About, NotFound } from './pages';

const routes = (
  <Route path='/' component={Base} >
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;
