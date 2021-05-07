import React from 'react';
import axios from 'axios';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import './Characters.css'


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

    // pega a referencia guardado no localStorage
    let valor = localStorage.getItem('@starwars/0');
    const api = `https://swapi.dev/api/films/${valor}`;

    const response = await axios.get(api);

    console.log(response);

    const person = response.data.characters; //array com on llinks dos personagens

    // faz as requisiçao de uma array de links

    let char = await person.map((c) => fetch(c).then(res => res.json()));

    await Promise.all(char).then(res => { localStorage.setItem('chars', JSON.stringify(res)) })

    const data = [];

    //guarda o retorno de cada link num array no localstorage
    const chars = JSON.parse(localStorage.getItem('chars'));
    chars.map(r => { data.push(r.name) });


    // função pra pegar o id do filme no link dele
    const getIndex = person.map(l => (l.replace(/\D/g, '')))

    this.setState({ film: data, isLoading: false, getChar: getIndex });

  }

  render() {
    const char = this.state.film;
    //const isLoading = this.state.isLoading;

    // pega o id do filme e tranforma ele em numbers
    const getChar = this.state.getChar;
    const number = getChar.map(c => (Number(c)));



    return (
      this.state.isLoading ? <div>Loading</div> :
        <>
          <Header />
          <div className="body">
            <div className="content">
              <div className="characters">
                <h1>CHARACTERS</h1>
                <div className="list-char">
                  {char.map((r, id) => (
                    <a href={`/people/${number[id]}`} key={r} onClick={() => { localStorage.setItem('charId', `${number[id]}`) }}>
                      <h2 key={r} >{r}</h2>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
    )
  }
}

export default Characters;
