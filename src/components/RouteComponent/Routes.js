import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Characters from '../CharacterComponent/Characters';
import Planets from '../PlanetsComponent/planets';
import Ships from '../ShipsComponent/ships';
import App from '../AppComponent/App';
import Film from '../FilmComponent/Film';
import People from '../PeopleComponent/People';
import PlanetInfo from '../PlanetInfoComponent/PlanetInfo';
import ShipInfo from '../ShipInfoComponent/ShipInfo';
import Vehicles from '../VehiclesComponent/Vehicles';
import VehicleInfo from '../VehicleInfoComponent/VehicleInfo';
import Species from '../SpeciesComponent/Species';
import SpecieInfo from '../SpecieIndoComponent/SpecieInfo';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/characters" component={Characters} />
    <Route exact path="/planets" component={Planets} />
    <Route exact path="/ships" component={Ships} />
    <Route exact path="/Vehicles" component={Vehicles} />
    <Route exact path="/species" component={Species} />
    <Route exact path="/film" component={Film} />
    <Route exact path="/people/:id" component={People} />
    <Route path="/planets/" component={PlanetInfo} />
    <Route path="/ship/info" component={ShipInfo} />
    <Route path="/vehicles/info" component={VehicleInfo} />
    <Route path="/specie/info" component={SpecieInfo} />

  </BrowserRouter>
);

export default Routes;
