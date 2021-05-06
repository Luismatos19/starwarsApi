import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Characters from '../pages/characters';
import Planets from '../pages/planets';
import Ships from '../pages/ships';
import App from './AppComponent/App';
import Film from '../pages/Film';
import People from '../components/People';
import PlanetInfo from '../components/PlanetInfo';
import ShipInfo from '../components/ShipInfo';
import Vehicles from '../components/Vehicles';
import VehicleInfo from '../components/VehicleInfo';
import Species from '../components/Species';
import SpecieInfo from '../components/SpecieInfo';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/characters" component={Characters} />
    <Route exact path="/planets" component={Planets} />
    <Route exact path="/ships" component={Ships} />
    <Route exact path="/Vehicles" component={Vehicles} />
    <Route exact path="/species" component={Species} />
    <Route exact path="/film" component={Film} />
    <Route exact path="/people" component={People} />
    <Route path="/planets/info" component={PlanetInfo} />
    <Route path="/ship/info" component={ShipInfo} />
    <Route path="/vehicles/info" component={VehicleInfo} />
    <Route path="/specie/info" component={SpecieInfo} />

  </BrowserRouter>
);

export default Routes;
