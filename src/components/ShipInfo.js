import React, { useState, useEffect } from 'react';
import Header from './Header';



const ShipInfo = () => {

  const [shipInfo, setId] = useState([]);

  let valor = localStorage.getItem('shipId');
  const api = `https://swapi.dev/api/starships/${(valor)}`


  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => { setId(res) })

  }, [])


  //cria um objeto atribuindo valorres as descriçoes ( ja que o array que vem da api tem outros links)
  const description = {
    'Model:': `${shipInfo.model}`,
    'Manufacturer:': `${shipInfo.manufacturer}`,
    'Cost in credits': `${shipInfo.cost_in_credits}`,
    'Length': `${shipInfo.length}`,
    'Max atmosphering speed': `${shipInfo.max_atmosphering_speed}`,
    'Crew': `${shipInfo.crew}`,
    'Passengers': `${shipInfo.passengers}`,
    'Cargo capacity': `${shipInfo.cargo_capacity}`,
    'Consumables': `${shipInfo.consumables}`,
    'Hyperdrive rating': `${shipInfo.hyperdrive_rating}`,
    'MGLT': `${shipInfo.MGLT}`,
    'Starship class': `${shipInfo.starship_class}`,

  }


  return (
    <>
      <Header />
      <div className="body">
        <div>
          <h1> {shipInfo.name} </h1>
          {Object.keys(description).map((visit, index) => <h2 key={index}>{visit} : {description[visit]}</h2>)}


        </div>
      </div>
    </>
  )

}

export default ShipInfo;
