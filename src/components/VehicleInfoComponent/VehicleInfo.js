import React, { useState, useEffect } from 'react';
import Header from '../HeaderComponent/Header';



const VehicleInfo = () => {

  const [vehicleInfo, setInfo] = useState([]);

  let valor = localStorage.getItem('vehicleId');
  const api = `https://swapi.dev/api/vehicles/${(valor)}`


  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => { setInfo(res) })

  }, [])

  console.log(api)

  //cria um objeto atribuindo valorres as descriçoes ( ja que o array que vem da api tem outros links)
  const description = {
    'Model:': `${vehicleInfo.model}`,
    'Manufacturer:': `${vehicleInfo.manufacturer}`,
    'Cost in credits:': `${vehicleInfo.cost_in_credits}`,
    'Length:': `${vehicleInfo.length}`,
    'Max atmosphering speed:': `${vehicleInfo.max_atmosphering_speed}`,
    'Crew:': `${vehicleInfo.crew}`,
    'Passengers:': `${vehicleInfo.passengers}`,
    'Cargo capacity:': `${vehicleInfo.cargo_capacity}`,
    'Consumables:': `${vehicleInfo.consumables}`,
    'Hyperdrive rating:': `${vehicleInfo.hyperdrive_rating}`,
    'Vehicle class:': `${vehicleInfo.vehicle_class}`,

  }


  return (
    <>
      <Header />
      <div className="body">
        <div>
          <h1> {vehicleInfo.name} </h1>
          {Object.keys(description).map((visit, index) => <h2 key={index}>{visit} : {description[visit]}</h2>)}


        </div>
      </div>
    </>
  )

}

export default VehicleInfo;
