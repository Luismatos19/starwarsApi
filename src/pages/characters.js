import React from 'react';
import axios from 'axios';
import Header from '../components/Header';


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      isLoading: true
    };
  }


  async componentDidMount() {

    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);

    const person = response.data.characters;

    let char = person.map((c) => fetch(c).then(res => res.json()));

    Promise.all(char).then(res => { localStorage.setItem('chars', JSON.stringify(res)) })

    const pqp = [];

    const chars = JSON.parse(localStorage.getItem('chars'));
    chars.map(r => { pqp.push(r.name) });

    this.setState({ film: pqp, isLoading: false });

  }

  render() {
    const pqp = this.state.film;
    //const isLoading = this.state.isLoading;

    return (
      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div className="card3">
              <h1>CHARACTERS</h1>
              <div>
                {pqp.map((r) => (
                  <a href={'/'} key={r}>
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
