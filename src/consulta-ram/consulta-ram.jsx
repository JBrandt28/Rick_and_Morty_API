import { useEffect, useState } from "react";

function ConsultaRAM() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        console.log('Consultar API');
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())//pega o arquivo e transforma em javascript
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results);
        });//pega o conteúdo do arquivo trasnformado em javascript
    }, []);//esses colchetes servem para fazer apenas 1 busca a cada vez que é chamada

    return  <>
                {
                    personagens.map(personagem => {
                        return (
                            <div key={personagem.id}>
                                <h2>{personagem.name}</h2>
                                <p>{personagem.gender}</p>
                                <img src={personagem.image} alt={personagem.name} />
                            </div>
                        );
                    })
                }
            </>
}

export default ConsultaRAM;