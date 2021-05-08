import React from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';



class VehicleInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleInfo: [],
      isLoading: true,

    };
  }

  async componentDidMount() {
    let valor = localStorage.getItem('vehicleId');
    const api = `https://swapi.dev/api/vehicles/${(valor)}`



    await fetch(api)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          vehicleInfo: res, isLoading: false
        })
      })

  }


  render() {

    const vehicleInfo = this.state.vehicleInfo;

    //cria um objeto atribuindo valorres as descriçoes ( ja que o array que vem da api tem outros links)
    const description = {
      'Model:': `${vehicleInfo.model}`,
      'Manufacturer:': `${vehicleInfo.manufacturer}`,
      'Cost in credits:': `${vehicleInfo.cost_in_credits}`,
      'Length:': `${vehicleInfo.length}`,
      'Max atmosphering speed:': `${vehicleInfo.max_atmosphering_speed}`,
      'Crew:': `${vehicleInfo.crew}`,
      'Passengers:': `${vehicleInfo.passengers}`,
      'Cargo capacity:': `${vehicleInfo.cargo_capacity}`,
      'Consumables:': `${vehicleInfo.consumables}`,
      'Hyperdrive rating:': `${vehicleInfo.hyperdrive_rating}`,
      'Vehicle class:': `${vehicleInfo.vehicle_class}`,

    }


    return (
      <>
        <Header />
        <div className="body">
          <div className="content">
            <div className="list">
              <h1> {vehicleInfo.name} </h1>
            </div>
            <div className="itens">
              {Object.keys(description).map((visit, index) => <h2 key={index}>{visit} : {description[visit]}</h2>)}

            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default VehicleInfo;
