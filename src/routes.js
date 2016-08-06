import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { Base, Home, About, NotFound } from './pages';

const routes = (
  <Route path='/' component={Base} >
    <IndexRoute component={Home} />
    <IndexRedirect to='/home' />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;
