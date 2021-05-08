import React, { useState, useEffect } from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';



const SpecieInfo = () => {

  const [specieInfo, setInfo] = useState([]);

  let valor = localStorage.getItem('specieId');
  const api = `https://swapi.dev/api/species/${(valor)}`


  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => { setInfo(res) })

  }, [])



  //cria um objeto atribuindo valorres as descriçoes ( ja que o array que vem da api tem outros links)
  const description = {
    'Classification:': `${specieInfo.classification}`,
    'Designation:': `${specieInfo.designation}`,
    'Average height:': `${specieInfo.average_height}`,
    'Skin colors:': `${specieInfo.skin_colors}`,
    'Hair colors:': `${specieInfo.hair_colors}`,
    'Eye colors:': `${specieInfo.eye_colors}`,
    'Average lifespan:': `${specieInfo.average_lifespan}`,
    'Language': `${specieInfo.language} `,

  }

  console.log(specieInfo.skin_colors)
  return (
    <>
      <Header />
      <div className="body">
        <div className="content">
          <div className="list">
            <h1> {specieInfo.name} </h1>
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

export default SpecieInfo;
