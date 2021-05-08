import React from 'react';
import axios from 'axios';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';


class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      isLoading: true,
      getSpecies: []
    };
  }


  async componentDidMount() {

    // pega a referencia guardado no localStorage
    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);


    const specie = response.data.species;

    // faz as requisiçao de uma array de links

    let links = await specie.map((c) => fetch(c).then(res => res.json()));

    await Promise.all(links).then(res => { localStorage.setItem('specieTemp', JSON.stringify(res)) })

    const data = [];

    //guarda o retorno de cada link num array no localstorage
    const chars = JSON.parse(localStorage.getItem('specieTemp'));
    chars.map(r => { data.push(r.name) });

    // função pra pegar o id da nave no link dele (função retorna apenas os numeros do link que é o id)
    const getIndex = specie.map(l => (l.replace(/\D/g, '')))


    this.setState({ species: data, isLoading: false, getSpecies: getIndex });


  }
  render() {
    const species = this.state.species;

    //pega o id da nave e tranforma ele em numbers
    const getSpecies = this.state.getSpecies;
    const number = getSpecies.map(c => (Number(c)));

    return (
      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div className="content">
              <div className="list">
                <h1>SPECIES</h1>
              </div>
              <div className="itens">
                {species.map((r, id) => (
                  <a href={'/specieinfo'} key={r} onClick={() => { localStorage.setItem('specieId', `${number[id]}`) }}>
                    <h2 key={r} >{r}</h2>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
  }
}

export default Species;
