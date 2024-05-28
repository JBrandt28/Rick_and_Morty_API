import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetalhesEpisodios() {
    const { id } = useParams();
    const [episodio, setEpisodio] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(response => response.json())
            .then(data => setEpisodio(data));
    }, [id]);

    if (!episodio) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>{episodio.name}</h2>
            <p><strong>Data de exibição:</strong> {episodio.air_date}</p>
            <p><strong>Episódio:</strong> {episodio.episode}</p>
            <h3>Personagens</h3>
            <ul>
                {episodio.characters && episodio.characters.map(characterUrl => {
                    const characterId = characterUrl.split('/').pop();
                    return (
                        <li key={characterId}>
                            <Link to={`/consulta-ram/${characterId}`}>
                                {characterUrl}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default DetalhesEpisodios;
