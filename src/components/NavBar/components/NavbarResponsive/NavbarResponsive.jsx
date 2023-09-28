import foto from '../../../../assets/imagenes/foto-1.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const NavbarResponsive =()=> {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <button className='navbar--MenuButton' onClick={() => setMenuOpen(!menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <nav className={`navbar--Responsive ${menuOpen ? 'navbar--Open' : 'navbar--Closed'}`}>
                <section className='navbar--Avatar'>
                    <div className='avatar'><img alt='error al cargar mi foto' src={foto} /></div>
                    <h2>Samuel Carrizo</h2>
                </section>
                <ul>
                    <li>
                        <a href='#sobre-mi' onClick={handleLinkClick}>
                            Sobre mi
                        </a>
                    </li>
                    <li>
                        <a href='https://drive.google.com/file/d/1gPzb9hwdtN4UYSWCufVjLSUEX5n0pv3N/view?usp=sharing' onClick={handleLinkClick}>
                            Resume
                        </a>
                    </li>
                    <li><a href='#proyectos'>Proyectos</a></li>
                    <li>
                        <Link to='/' onClick={handleLinkClick}>
                            Inicio
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default NavbarResponsive