import React, { useState, useEffect } from 'react';
import Header from './Header';



const PlanetInfo = () => {

  const [planetInfo, setId] = useState([]);

  let valor = localStorage.getItem('planetId');
  const api = `https://swapi.dev/api/planets/${(valor)}`


  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => { setId(res) })

  }, [])


  //cria um objeto atribuindo valorres as descriçoes ( ja que o array que vem da api tem outros links)
  const description = {
    'Population:': `${planetInfo.population}`,
    'Gravity:': `${planetInfo.gravity}`,
    'Terrain': `${planetInfo.terrain}`,
    'Surface Water': `${planetInfo.surface_water}`,
    'Rotation period': `${planetInfo.rotation_period}`,
    'Orbital period': `${planetInfo.orbital_period}`,
    'Gravity': `${planetInfo.gravity}`,
    'Climed': `${planetInfo.climed}`,
    'Diameter': `${planetInfo.diameter}`,

  }


  return (
    <>
      <Header />
      <div className="body">
        <div>
          <h1> {planetInfo.name} </h1>
          {Object.keys(description).map((visit, index) => <h2 key={index}>{visit} : {description[visit]}</h2>)}


        </div>
      </div>
    </>
  )

}

export default PlanetInfo;
