import React from 'react';
import axios from 'axios';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';


class Vehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      isLoading: false,
      getVehicle: []
    };
  }


  async componentDidMount() {

    // pega a referencia guardado no localStorage
    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);


    const vehicle = response.data.vehicles;


    // faz as requisiçao de uma array de links

    let links = await vehicle.map((c) => fetch(c).then(res => res.json()));

    //guarda o retorno de cada link num array no localstorage
    await Promise.all(links).then(res => { localStorage.setItem('vehichesTemp', JSON.stringify(res)) })

    const data = [];

    //pega o array no localstorage e coloca num outro array pra mando pra state
    const arr = JSON.parse(localStorage.getItem('vehichesTemp'));
    arr.map(r => { data.push(r.name) });

    // função pra pegar o id da nave no link dele (função retorna apenas os numeros do link que é o id)
    const getIndex = vehicle.map(l => (l.replace(/\D/g, '')))


    this.setState({ vehicles: data, isLoading: false, getVehicle: getIndex });


  }


  render() {
    const vehicles = this.state.vehicles;

    //pega o id da nave e tranforma ele em number pra ser usado como referencia quando for pra page de descrição
    const getVehicles = this.state.getVehicle;
    const number = getVehicles.map(c => (Number(c)));


    return (
      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div className="content">
              <div className="list">
                <h1>VEHICLES</h1>
              </div>
              <div className="itens">
                {vehicles.map((r, id) => (
                  <a href={'/vehiclesinfo'} key={r} onClick={() => { localStorage.setItem('vehicleId', `${number[id]}`) }}>
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

export default Vehicles;

