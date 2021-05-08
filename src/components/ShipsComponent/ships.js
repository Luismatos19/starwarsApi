import React from 'react';
import axios from 'axios';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';


class Ships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: [],
      isLoading: true,
      getShip: []
    };
  }


  async componentDidMount() {

    // pega a referencia guardado no localStorage
    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);


    const ship = response.data.starships;

    // faz as requisiçao de uma array de links

    let links = await ship.map((c) => fetch(c).then(res => res.json()));

    await Promise.all(links).then(res => { localStorage.setItem('shipTemp', JSON.stringify(res)) })

    const data = [];

    //guarda o retorno de cada link num array no localstorage
    const chars = JSON.parse(localStorage.getItem('shipTemp'));
    chars.map(r => { data.push(r.name) });

    // função pra pegar o id da nave no link dele (função retorna apenas os numeros do link que é o id)
    const getIndex = ship.map(l => (l.replace(/\D/g, '')))


    this.setState({ ships: data, isLoading: false, getShip: getIndex });


  }
  render() {
    const char = this.state.ships;

    //pega o id da nave e tranforma ele em numbers
    const getShip = this.state.getShip;
    const number = getShip.map(c => (Number(c)));

    return (
      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div className="content">
              <div className="list">
                <h1>STARSHIPS</h1>
              </div>
              <div className="itens">
                {char.map((r, id) => (
                  <a href={'/shipinfo'} key={r} onClick={() => { localStorage.setItem('shipId', `${number[id]}`) }}>
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

export default Ships;

