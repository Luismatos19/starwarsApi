/*import { useEffect, useState } from 'react';

function Characters() {
  const [films, setFilms] = useState([]);
  let valor = localStorage.getItem('@starwars/0');
  const api = `https://swapi.dev/api/films/${valor}`


  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then((result) => { setFilms(result.characters) })
  }, []);

  let char = films.map((c) => fetch(c).then(res => res.json()));

  Promise.all(char).then(res => { localStorage.setItem('chars', JSON.stringify(res)) })


}

export default Characters;



import React from 'react';
import axios from 'axios';


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
    };
  }

  async componentDidMount() {
    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);
    //const data = await response.json();

    const person = response.data.characters;
    console.log(person)
  }


  render() {

    const chars = JSON.parse(localStorage.getItem('chars'));
    console.log(chars);



    import React, { useEffect, useState } from 'react';
    import Header from '../components/Header';

    function Characters() {
      const [films, setFilms] = useState([]);
      let valor = localStorage.getItem('@starwars/0');
      const api = `https://swapi.dev/api/films/${valor}`


      useEffect(() => {
        fetch(api)
          .then(res => res.json())
          .then((result) => { setFilms(result.characters) })
      }, []);

      let char = films.map((c) => fetch(c).then(res => res.json()));

      Promise.all(char).then(res => { localStorage.setItem('chars', JSON.stringify(res)) })

      const pqp = [];

      const chars = JSON.parse(localStorage.getItem('chars'));
      chars.map(r => { pqp.push(r.name) });

      console.log(pqp)


      return (
        <>
          <div>
            <h1>
              {pqp.map((r) => (
                <p key={r}>{r}</p>
              ))}
            </h1>
          </div>
          <div>
          </div>
        </>
      )

    }

    export default Characters;
