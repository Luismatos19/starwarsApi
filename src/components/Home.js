import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posters from './Posters';
import './Home.css';

function Home() {
  local

  const [films, setFilm] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/').then((res) => {
      setFilm(res.data.results.map((film) => film.title));
    });
  }, []);



  return (
    <>
      <div className="body">
        <div className="cards">
          <div className="card">
            <a href="/film" onClick={() => { localStorage.setItem('@starwars/0', '1') }}>
              <img className="card_image" src={Posters[0]} alt="poster film" />
            </a>
            <h1>
              {films[0]}
            </h1>
          </div>
          <div className="card">
            <a href="/film" onClick={() => { localStorage.setItem('@starwars/0', '2') }}>
              <img className="card_image" src={Posters[1]} alt="poster film" />
            </a>
            <h1>
              {films[1]}
            </h1>
          </div>
          <div className="card">
            <a href="/film" onClick={() => { localStorage.setItem('@starwars/0', '3') }}>
              <img className="card_image" src={Posters[2]} alt="poster film" />
            </a>
            <h1>
              {films[2]}
            </h1>
          </div>
          <div className="card">
            <a href="/film" onClick={() => { localStorage.setItem('@starwars/0', '4') }}>
              <img className="card_image" src={Posters[3]} alt="poster film" />
            </a>
            <h1>
              {films[3]}
            </h1>
          </div>
          <div className="card">
            <a href="/film" onClick={() => { localStorage.setItem('@starwars/0', '5') }}>
              <img className="card_image" src={Posters[4]} alt="poster film" />
            </a>
            <h1>
              {films[4]}
            </h1>
          </div>
          <div className="card">
            <a href="/film" onClick={() => { localStorage.setItem('@starwars/0', '6') }}>
              <img className="card_image" src={Posters[5]} alt="poster film" />
            </a>
            <h1>
              {films[5]}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
