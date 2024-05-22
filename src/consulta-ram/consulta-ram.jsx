import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ConsultaRAM() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        console.log('Consultar API');
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((resultadoConsulta) => {
                setPersonagens(resultadoConsulta.results);
            });
    }, []);

    return (
        <>
            {personagens.map(personagem => (
                <div key={personagem.id}>
                    <br></br>
                    <Link to={`/consulta-ram/${personagem.id}`}>
                        <img src={personagem.image} alt={personagem.name} />
                    </Link>
                    <br></br>
                </div>
            ))}
        </>
    );
}

export default ConsultaRAM;
