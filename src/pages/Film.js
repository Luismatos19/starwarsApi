import React, { useEffect, useState } from 'react';
import './Film.css';
import Header from '../components/Header';



function Film() {
  const [films, setFilms] = useState([]);
  let valor = localStorage.getItem('@starwars/0');
  const api = `https://swapi.dev/api/films/${valor}`




  useEffect(() => {


    fetch(api)
      .then(res => res.json())
      .then((result) => { setFilms(result) })
  }, [])


  return (
    <>
      <Header />
      <div className="body">
        <div className="content">
          <h1>
            {films.title}
          </h1>
          <p>
            {films.opening_crawl}
          </p>
          <h2> Director:</h2>
          <p>{films.director}</p>
          <h2> Producer:</h2>
          <p>{films.producer}</p>
          <h2> Release Date:</h2>
          <p>{films.release_date}</p>
        </div>
        <div className="cards2">
          <div className="card2">
            <a href="/characters" className="click">
              <h1>CHARACTERS</h1>
            </a>
          </div>
          <div className="card2">
            <a href="/planets">
              <h1>PLANETS</h1>
            </a>
          </div>
          <div className="card2">
            <a href="/characters">
              <h1>STARSHIPS</h1>
            </a>
          </div>
          <div className="card2">
            <a href="/characters">
              <h1>VEHICLES</h1>
            </a>
          </div>
          <div className="card2">
            <a href="/characters">
              <h1>SPECIES</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Film;
