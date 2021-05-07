import React from 'react';
import axios from 'axios';
import Header from '../HeaderComponent/Header';

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      isLoading: true,
      getId: []
    };
  }



  async componentDidMount() {

    // pega o id filme guardado no localStorage
    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);



    //pega todo os planetas de um determinado filme
    const planet = response.data.planets;

    //.map  pra fazer request de um array de links
    let char = await planet.map((c) => fetch(c).then(res => res.json()));


    const data = [];
    //pega o nome de cada planeta e colocar no array guardado no localstorage
    await Promise.all(char).then(res => { localStorage.setItem('plans', JSON.stringify(res)) })


    //pega o objeto q ta no localstorage e coloca ele num array
    const chars = JSON.parse(localStorage.getItem('plans'));


    chars.map(r => { data.push(r.name) });


    // pega o id do filme do link dele
    const getId = planet.map(l => (l.replace(/\D/g, '')))


    //guarda o array no estate pra usar no render
    this.setState({ planets: data, isLoading: false, getId: getId });

  }

  render() {


    const plan = this.state.planets;

    //pega o id retirado do link e transforma ele eme numero
    const getId = this.state.getId;
    const number = getId.map(c => (Number(c)));


    return (
      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div>
              <h1>PLANETS</h1>
              <a href={'/planets/info'} onClick={() => { localStorage.setItem('planetId', '1') }}>
                <h1>{plan[0]}</h1>
              </a>
              <a href="/planets/info" onClick={() => { localStorage.setItem('planetId', `${number[1]}`) }}>
                <h1>{plan[1]}</h1>
              </a>
              <a href="/planets/info" onClick={() => { localStorage.setItem('planetId', `${number[2]}`) }}>
                <h1>{plan[2]}</h1>
              </a>
              <a href="/planets/info" onClick={() => { localStorage.setItem('planetId', `${number[3]}`) }}>
                <h1>{plan[3]}</h1>
              </a>
              <a href="/planets/info" onClick={() => { localStorage.setItem('planetId', `${number[4]}`) }}>
                <h1>{plan[4]}</h1>
              </a>

            </div>
          </div>
        </>
    )
  }
}
export default Planets;
