import React from "react";
import Header from "../HeaderComponent/Header";
import "./People.css";
import Footer from "../FooterComponent/Footer";

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charInfo: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    //pega o id do personagem e que esta guaraddo no local storage
    let valor = localStorage.getItem("charId");
    const api = `https://swapi.dev/api/people/${valor}`;

    await fetch(api)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          charInfo: res,
          isLoading: false,
        });
      });
  }

  render() {
    const charInfo = this.state.charInfo;
    //const isLoading = this.state.isLoading;

    return this.state.isLoading ? (
      <div>Loading</div>
    ) : (
      <>
        <Header />
        <div className="body">
          <div className="content-people">
            <h1>{charInfo.name}</h1>
          </div>

          <div className="description-people">
            <h2>GENDER: {charInfo.gender}</h2>

            <h2>MASS: {charInfo.mass}kg</h2>

            <h2>HEIGHT: {charInfo.height} </h2>

            <h2>HAIR COLOR: {charInfo.hair_color}</h2>

            <h2>SKIN COLOR: {charInfo.skin_color}</h2>

            <h2>EYE COLOR: {charInfo.eye_color}</h2>

            <h2>BIRTH YEAR: {charInfo.birth_year}</h2>

            <h2>HOME WORLD: {charInfo.homeworld}</h2>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default People;
