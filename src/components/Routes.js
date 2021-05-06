import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Characters from '../pages/characters';
import Planets from '../pages/planets';
import Ships from '../pages/ships';
import App from './AppComponent/App';
import Film from '../pages/Film';
import People from '../components/People'
import PlanetInfo from '../components/PlanetInfo'

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/characters" component={Characters} />
    <Route exact path="/planets" component={Planets} />
    <Route exact path="/ships" component={Ships} />
    <Route exact path="/film" component={Film} />
    <Route exact path="/people" component={People} />
    <Route path="/planets/info" component={PlanetInfo} />
  </BrowserRouter>
);

export default Routes;
