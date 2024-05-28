import { Link, Outlet } from "react-router-dom";
import './Styles_Cabecalho.css';

function Cabecalho() {
    return (
        <div className="background-image">
            <div className="header-content">
                <h1>RICK AND MORTY</h1>
                <br />
                <Link to={'/consulta-ram'} style={{ color: 'silver', textDecoration: 'none' }}>
                    Consulta Rick and Morty
                </Link>
                <Link to={'/'} style={{ color: 'silver', textDecoration: 'none', marginLeft: '20px' }}>
                    Página Inicial
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Cabecalho;
