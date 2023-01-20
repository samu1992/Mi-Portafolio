import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container_NavBar">
      <div className="NavBar--logo"><h1><Link to='/'>SC</Link></h1></div>
      <div className="NavBar--links">
        <ul>
          <li><Link to='/About'>Sobre mi</Link></li>
          <li><a href='.'>Resumen</a></li>
          <li><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/samuel-carrizo-844980176/'>LinkedIn</a></li>
          <li><a target='_blank' rel="noreferrer"  href='https://github.com/samu1992'>Github</a></li>
        </ul>
      </div>
      <i  class="fa-solid fa-grip-lines lines"/>
      <div className="Navbar--responsive">
        <ul>
        <li><Link to='/About'>Sobre mi</Link></li>
          <li><a target='_blank' rel="noreferrer"  href='.'>Resumen</a></li>
          <li><a target='_blank' rel="noreferrer"  href='https://www.linkedin.com/in/samuel-carrizo-844980176/'>LinkedIn</a></li>
          <li><a target='_blank' rel="noreferrer"  href='https://github.com/samu1992'>Github</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar