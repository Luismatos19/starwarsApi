import React from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import './PlanetInfo.css';



class PlanetInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetInfo: [],
      isLoading: true,

    };
  }



  async componentDidMount() {

    // pega o id filme guardado no localStorage

    let valor = localStorage.getItem('planetId');
    const api = `https://swapi.dev/api/planets/${(valor)}`



    await fetch(api)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          planetInfo: res, isLoading: false
        })
      });

  }

  render() {

    const planetInfo = this.state.planetInfo;
    //cria um objeto atribuindo valorres as descriçoes ( ja que o array que vem da api tem outros links)
    const description = {
      'Population:': `${planetInfo.population}`,
      'Gravity:': `${planetInfo.gravity}`,
      'Terrain': `${planetInfo.terrain}`,
      'Surface Water': `${planetInfo.surface_water}`,
      'Rotation period': `${planetInfo.rotation_period}`,
      'Orbital period': `${planetInfo.orbital_period}`,
      'Gravity': `${planetInfo.gravity}`,
      'Climed': `${planetInfo.climed}`,
      'Diameter': `${planetInfo.diameter}`,

    }


    return (

      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div className="content-planets" >
              <h1 id="title-info" > {planetInfo.name} </h1>
              {Object.keys(description).map((visit, index) => <h2 key={index}>{visit} : {description[visit]}</h2>)}


            </div>
            <Footer />
          </div>

        </>
    )

  }

}

export default PlanetInfo;
