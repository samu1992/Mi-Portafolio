import React from 'react';
import { useEffect, useState } from 'react';
import foto from '../../imagenes/miFoto.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navbarClass, setNavbarClass] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setNavbarClass('navbar--active');
      } else {
        setNavbarClass('');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <header className={`navbar-container ${navbarClass}`}>
      <div className='container--Redes'>
        <div><a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/samuel-carrizo-844980176/"><i className=" fab fa-linkedin"></i></a></div>
        <div><a target="_blank" rel='noreferrer' href="."><i className=" fab fa-instagram"></i></a></div>
        <div><a target="_blank" rel='noreferrer' href="https://github.com/samu1992"><i className="fab fa-github"></i></a></div>
        <div><a target="_blank" rel='noreferrer' href="https://github.com/samu1992/Mi-Portafolio"><i class="fa fa-code"></i></a></div>
      </div>
      <nav className="navbar--Links">
        <ul>
          <li><Link to='/About'>Sobre mi</Link></li>
          <li><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1gPzb9hwdtN4UYSWCufVjLSUEX5n0pv3N/view?usp=share_link'>Resume</a></li>
          <li><Link to='/'>Inicio</Link></li>
        </ul>
      </nav>
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
            <Link to='/About' onClick={handleLinkClick}>
              Sobre mi
            </Link>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1gPzb9hwdtN4UYSWCufVjLSUEX5n0pv3N/view?usp=share_link' onClick={handleLinkClick}>
              Resume
            </a>
          </li>
          <li>
            <Link to='/' onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar