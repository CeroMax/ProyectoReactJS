
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/


import './estilosNavBar.css';
function NavBar (){
    return(
        <>
            <section className='NavBar-Texto'>
                <h1 className='Titulo'>Ferreteria Industrial "Florida"</h1>
            
            </section>
            <div >
                <a className='NavBar-Contenedor' href=''>Inicio</a>
                <a className='NavBar-Contenedor' href=''>Contacto</a>
                <a className='NavBar-Contenedor' href=''>Nosotros</a>
            
            </div>
        </>
    );
}

export default NavBar;