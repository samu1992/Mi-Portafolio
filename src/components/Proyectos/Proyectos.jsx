import elegant from '../../imagenes/elegant.gif';
import faunaUrbana from '../../imagenes/faunaUrbana.gif';
import portfolio from '../../imagenes/portfolio.gif';
import Proyecto from '../Proyecto/Proyecto';


const Proyectos = () => {
    return (
        <main className='container--Proyectos'>
            <aside className='proyectos--Lista'>
            <section className='proyectos--Titulo'>
                <h2>PROYECTOS</h2>
                <p>A quien pueda interesar mis conocimientos<br /> adquiridos hasta el momento  <i className="fa-solid fa-arrow-down"></i></p>
                <h3><a target='_blank' rel="noreferrer" href='https://github.com/samu1992'>Ver mas Proyectos ↗</a></h3>
            </section>
            <Proyecto 
            title="Elegant"
            description="E-commerce: Desarrollo de tienda online 100% funcional."
            text="Me encargué de implementar las funcionalidades del carrito de compras, integrando con una base de datos en Firebase y utilizando las librerías de React ja, React Router DOM, entre otras."
            img={elegant}
            site='https://proyecto-final-ruddy.vercel.app/'
            code='https://github.com/samu1992/Elegant'/>
            <Proyecto
            title="Fauna Urbana"
            description="Desarrollo de sitio web para una organización benéfica
            dedicada al rescate de perros en situación de calle y abandono."
            text="Utilizando React JS, Bootstrap
            y React Router DOM, con una base de datos sencilla y local. Me enfocué en crear una interfaz
            amigable y fácil de usar, y en implementar un sistema de búsqueda y filtrado de perros
            disponibles para adoptar."
            img={faunaUrbana}
            site='https://fauna-urbana.vercel.app/'
            code='https://github.com/samu1992/Fauna-Urbana'/>
            <Proyecto
            title="Proyecto en Equipo"
            description="Desarrollo de proyecto freelance utilizando React JS,
            Bootstrap y React Router DOM."
            text="Con UI diseñada por Soley Flores.Como parte del equipo, trabajé en
            la implementación de la lógica y las funcionalidades del sitio, así como en la integración con la UI.
            diseñada por mi compañera."
            img={portfolio}
            site='https://www.soleyflores.link/'
            code='https://github.com/samu1992/PortfolioSoley'/>
            </aside>
                
        </main>
    )
}

export default Proyectos