import React from 'react';
import { useEffect, useState } from 'react';
import NavbarResponsive from './components/NavbarResponsive/NavbarResponsive';
import { useTranslation } from 'react-i18next';


const NavBar = () => {
  const [navbarClass, setNavbarClass] = useState('');
  const [t, i18n] = useTranslation("global");


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
{/*         <button onClick={()=> i18n.changeLanguage("es")}>es</button>
        <button onClick={()=> i18n.changeLanguage("en")}>en</button> */}
      </div>
      <nav className="navbar--Links">
        <ul>
          <li><a href='#sobre-mi'>{t("header.about")}</a></li>
          <li><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1gPzb9hwdtN4UYSWCufVjLSUEX5n0pv3N/view?usp=sharing'>{t("header.resume")}</a></li>
          <li><a href='#proyectos'>{t("header.project")}</a></li>
        </ul>
      </nav>
      <NavbarResponsive/>
    </header>
  )
}

export default NavBar