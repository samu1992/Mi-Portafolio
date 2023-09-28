import React from 'react';
import { useEffect, useState } from 'react';
import NavbarResponsive from './components/NavbarResponsive/NavbarResponsive';


const NavBar = () => {
  const [navbarClass, setNavbarClass] = useState('');


  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) {
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

  return (
    <header className={`navbar-container ${navbarClass}`}>
      <div className='container--Redes'>
        <div><a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/samuel-carrizo-844980176/"><i className=" fab fa-linkedin"></i></a></div>
        <div><a target="_blank" rel='noreferrer' href="."><i className=" fab fa-instagram"></i></a></div>
        <div><a target="_blank" rel='noreferrer' href="https://github.com/samu1992"><i className="fab fa-github"></i></a></div>
        <div><a target="_blank" rel='noreferrer' href="https://github.com/samu1992/Mi-Portafolio"><i className="fa fa-code"></i></a></div>
      </div>
      <nav className="navbar--Links">
        <ul>
          <li><a href='#sobre-mi'>Sobre mi</a></li>
          <li><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1gPzb9hwdtN4UYSWCufVjLSUEX5n0pv3N/view?usp=sharing'>Resume</a></li>
          <li><a href='#proyectos'>Proyectos</a></li>
          {/* <li><Link to='/'>Inicio</Link></li> */}
        </ul>
      </nav>
      <NavbarResponsive/>
    </header>
  )
}

export default NavBar