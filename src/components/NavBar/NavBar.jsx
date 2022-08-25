
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/
import { CartWidget } from '../CarWidget/CartWidget';
import logonuevo2 from '../../assets/fotos/logonuevo2-min.png';
import './estilosNavBar.css';
function NavBar (){
    return(
        <>
            <section className='NavBar-Texto'>
                <img className='Alinear' src={logonuevo2} alt="" srcset="" />
                <h1 className='Titulo'>Ferreteria Industrial "Florida"</h1>
            </section>
            <div className='ver'>
                <section>
                <a className='NavBar-Contenedor' href=''>Inicio</a>
                <a className='NavBar-Contenedor' href=''>Contacto</a>
                <a className='NavBar-Contenedor' href=''>Nosotros</a>
                </section>
                <CartWidget/>
            
            </div>
        </>
    );
}

export default NavBar;