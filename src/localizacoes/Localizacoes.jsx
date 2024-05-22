import { useEffect, useState } from 'react';

function Localizacoes() {
    const [localizacoes, setLocalizacoes] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
            .then(response => response.json())
            .then(data => setLocalizacoes(data.results));
    }, []);

    return (
        <div>
            <h2>Localizações</h2>
            <ul>
                {localizacoes.map(localizacao => (
                    <li key={localizacao.id}>{localizacao.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Localizacoes;
