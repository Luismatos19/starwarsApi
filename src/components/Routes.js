import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Characters from '../pages/characters';
import Planets from '../pages/planets';
import Ships from '../pages/ships';
import App from './AppComponent/App';
import Movie from '../pages/movie';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/charaters" component={Characters} />
    <Route exact path="/planets" component={Planets} />
    <Route exact path="/ships" component={Ships} />
    <Route exact path="/film" component={Movie} />
  </BrowserRouter>
);

export default Routes;
