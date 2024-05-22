import { Link, Outlet } from "react-router-dom";

function Cabecalho() {
    return (
        <>
            <h1>RICK AND MORTY</h1>
            <br></br>
            <Link to={'/consulta-ram'}>Consulta Rick and Morty</Link>
            <Outlet />
        </>
    );
}
export default Cabecalho;