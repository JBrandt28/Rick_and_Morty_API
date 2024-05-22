import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetalhesPersonagem() {
    const { id } = useParams();
    const [personagem, setPersonagem] = useState(null);
    const [localizacao, setLocalizacao] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setPersonagem(data);
                // Fetch location
                if (data.location.url) {
                    fetch(data.location.url)
                        .then(response => response.json())
                        .then(locationData => setLocalizacao(locationData));
                }
            });
    }, [id]);

    if (!personagem) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <br></br>
            <img src={personagem.image} alt={personagem.name} />
            <h1>{personagem.name}</h1>
            <p><strong>Gênero:</strong> {personagem.gender}</p>
            <p><strong>Espécie:</strong> {personagem.species}</p>
            <p><strong>Status:</strong> {personagem.status}</p>
            <p><strong>Origem:</strong> {personagem.origin.name}</p>
            <p><strong>Localização:</strong> {personagem.location.name}</p>
            {localizacao && (
                <div>
                    <p><strong>Tipo de Localização:</strong> {localizacao.type}</p>
                    <p><strong>Dimensão:</strong> {localizacao.dimension}</p>
                    <p><strong>Residentes:</strong> {localizacao.residents.length}</p>
                </div>
            )}
        </div>
    );
}

export default DetalhesPersonagem;
