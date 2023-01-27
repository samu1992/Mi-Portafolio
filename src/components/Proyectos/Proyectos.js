import './Proyectos.css';
import elegant from '../../imagenes/elegant.gif';
import faunaUrbana from '../../imagenes/faunaUrbana.gif';
import portfolio from '../../imagenes/portfolio.gif';

const Proyectos = () => {
return (
    <main className='container_proyectos'>
        <section className='proyectos--titulo'>
            <h1>PROYECTOS</h1>
            <p>A quien pueda interesar mis conocimientos<br/> adquiridos hasta el momento  <i className="fa-solid fa-arrow-right"></i></p>
            <div className='titulo--h3'>
                <h3><a target='_blank' rel="noreferrer" href='https://github.com/samu1992'>Ver mas Proyectos ↗</a></h3>
            </div>
        </section>
        <aside className='proyectos--lista'>
            <article className='proyecto'>
                <div><img alt='' src={elegant}/></div>
                <p><strong>Elegant</strong><br/>Ecommerce desarrollado con React js <br/> otras tecnologias.<br/><a target='_blank' rel="noreferrer" href='https://proyecto-final-ruddy.vercel.app/'>Ir al sitio ↗</a><br/></p>
                <a target='_blank' rel="noreferrer" href='https://github.com/samu1992/Elegant'>Ver codigo</a>
            </article>
            <article className='proyecto'>
                <div><img alt='' src={faunaUrbana}/></div>
                <p><strong>Fauna Urbana</strong><br/>Organizacion, desarrollada con React js<br/>y otras tecnologias.<br/><a target='_blank' rel="noreferrer" href='https://fauna-urbana.vercel.app/'>Ir al sitio ↗</a><br/></p>
                <a target='_blank' rel="noreferrer" href='https://github.com/samu1992/Fauna-Urbana'>Ver codigo</a>
            </article>
            <article className='proyecto'>
                <div><img alt='' src={portfolio}/></div>
                <p><strong>Portafolio</strong><br/>Portafolio, desarrollada con React js<br/>y otras tecnologias.<br/><a target='_blank' rel="noreferrer" href='https://portfolio-soley.vercel.app/'>Ir al sitio ↗</a><br/></p>
                <a target='_blank' rel="noreferrer" href='https://github.com/samu1992/PortfolioSoley'>Ver codigo</a>
            </article>
        </aside>
    </main>
)
}

export default Proyectos