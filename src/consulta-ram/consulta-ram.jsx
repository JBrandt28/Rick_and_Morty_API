import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function ConsultaRAM() {
    const [personagens, setPersonagens] = useState([]);
    const [pagina, setPagina] = useState(1);
    // const [pagina, setPagina] = useState(() => {
    //     const savedPage = localStorage.getItem("pagina");
    //     return savedPage ? parseInt(savedPage, 10) : 1;
    // });
    const [totalPaginas, setTotalPaginas] = useState(0);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            .then((response) => response.json())
            .then((resultadoConsulta) => {
                setPersonagens(resultadoConsulta.results);
                setTotalPaginas(resultadoConsulta.info.pages);
            });
    
    localStorage.setItem("pagina", pagina);
    window.scrollTo(0, 0);

    }, [pagina]);

    const proximaPagina = () => {
        if (pagina < totalPaginas) {
            setPagina(pagina + 1);
        }
    };

    const paginaAnterior = () => {
        if (pagina > 1) {
            setPagina(pagina - 1);
        }
    };

    const paginaEspecifica = (pageNumber) => {
        setPagina(pageNumber);
    };

    const renderizarPaginacao = () => {
        const paginas = [];
        for (let i = 1; i <= totalPaginas; i++) {
            if (i === pagina) {
                paginas.push(
                    <li className="page-item active" key={i}>
                        <button className="page-link">{i}</button>
                    </li>
                );
            } else if (i === 1 || i === totalPaginas || (i >= pagina - 1 && i <= pagina + 1)) {
                paginas.push(
                    <li className="page-item" key={i}>
                        <button className="page-link" onClick={() => paginaEspecifica(i)}>{i}</button>
                    </li>
                );
            } else if (i === 2 || i === totalPaginas - 1) {
                paginas.push(
                    <li className="page-item" key={i}>
                        <button className="page-link disabled">...</button>
                    </li>
                );
            }
        }
        return paginas;
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                {personagens.map(personagem => (
                    <div key={personagem.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card mb-3">
                            <Link to={`/consulta-ram/${personagem.id}`}>
                                <img src={personagem.image} className="card-img-top" alt={personagem.name} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{personagem.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${pagina === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={paginaAnterior}>Anterior</button>
                    </li>
                    {renderizarPaginacao()}
                    <li className={`page-item ${pagina === totalPaginas ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={proximaPagina}>Próximo</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ConsultaRAM;
