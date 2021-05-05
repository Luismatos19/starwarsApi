import React from 'react';
import axios from 'axios';
import Header from '../components/Header';


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      isLoading: true,
      getChar: []
    };
  }



  async componentDidMount() {

    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);

    console.log(response);

    const person = response.data.characters;

    let char = person.map((c) => fetch(c).then(res => res.json()));

    Promise.all(char).then(res => { localStorage.setItem('chars', JSON.stringify(res)) })

    const pqp = [];

    const chars = JSON.parse(localStorage.getItem('chars'));
    chars.map(r => { pqp.push(r.name) });



    const getIndex = person.map(l => (l.replace(/\D/g, '')))

    this.setState({ film: pqp, isLoading: false, getChar: getIndex });

  }

  render() {
    const pqp = this.state.film;
    //const isLoading = this.state.isLoading;
    const getChar = this.state.getChar;
    const number = getChar.map(c => (Number(c)));
    console.log(number);


    return (
      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div className="card3">
              <h1>CHARACTERS</h1>
              <div>
                {pqp.map((r, id) => (
                  <a href={'/people'} key={r} onClick={() => { localStorage.setItem('charId', `${number[id]}`) }}>
                    <h2 key={r} >{r}</h2>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
    )
  }
}

export default Characters;
