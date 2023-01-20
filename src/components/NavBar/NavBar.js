import './NavBar.css';
import { useEffect, useState } from 'react';
import resumen from '../../imagenes/SamuelCarrizo.pdf';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setNavbarClass('scrolled');
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
    <div className={`container_navBar ${navbarClass}`}>
      <div className="navBar--logo"><h1><Link to='/'>SC</Link></h1></div>
      <div className="navBar--links">
        <ul>
          <li><Link to='/About'>Sobre mi</Link></li>
          <li><a target='_blank' rel='noreferrer' href={resumen}>Resume</a></li>
          <li><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/samuel-carrizo-844980176/'>LinkedIn</a></li>
          <li><a target='_blank' rel="noreferrer"  href='https://github.com/samu1992'>Github</a></li>
        </ul>
      </div>
      <button className='lines'>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="navbar--responsive">
        <ul>
        <li><Link to='/About'>Sobre mi</Link></li>
          <li><a target='_blank' rel='noreferrer' href={resumen}>Resume</a></li>
          <li><a target='_blank' rel="noreferrer"  href='https://www.linkedin.com/in/samuel-carrizo-844980176/'>LinkedIn</a></li>
          <li><a target='_blank' rel="noreferrer"  href='https://github.com/samu1992'>Github</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar