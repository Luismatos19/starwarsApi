import React, { useState, useEffect } from 'react';
import Header from './Header';



const People = () => {

  const [charInfo, setId] = useState([]);

  let valor = localStorage.getItem('charId');
  const api = `https://swapi.dev/api/people/${(valor)}`

  console.log(api);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => { setId(res) })

  }, [])


  console.log(charInfo);

  return (
    <>
      <Header />
      <div className="body">


        <div className="card_people">
          <h1>
            {charInfo.name}
          </h1>
        </div>
        <div>
          <h2>GENDER: {charInfo.gender}</h2>
        </div>
        <div>
          <h2>MASS: {charInfo.mass}kg</h2>
        </div>
        <div>
          <h2>HEIGHT: {charInfo.height} </h2>
        </div>
        <div>
          <h2>HAIR COLOR: {charInfo.hair_color}</h2>
        </div>
        <div>
          <h2>SKIN COLOR: {charInfo.skin_color}</h2>
        </div>
        <div>
          <h2>EYE COLOR: {charInfo.eye_color}</h2>
        </div>
        <div>
          <h2>BIRTH YEAR: {charInfo.birth_year}</h2>
        </div>
        <div>
          <h2>HOME WORLD: {charInfo.homeworld}</h2>
        </div>
        <div>
          <h2>FILMS: </h2>
        </div>
        <div>
          <h2>STARSHIPS: </h2>
        </div>
        <div>
          <h2>VEHICLES: </h2>
        </div>
      </div>
    </>


  )


}

export default People;
