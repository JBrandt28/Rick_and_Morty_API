import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetalhesPersonagem() {
    const { id } = useParams();
    const [personagem, setPersonagem] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setPersonagem(data));
    }, [id]);

    if (!personagem) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>{personagem.name}</h1>
            <p>Gender: {personagem.gender}</p>
            <p>Species: {personagem.species}</p>
            <p>Status: {personagem.status}</p>
            <img src={personagem.image} alt={personagem.name} />
        </div>
    );
}

export default DetalhesPersonagem;
