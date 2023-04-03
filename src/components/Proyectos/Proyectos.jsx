import elegant from '../../imagenes/elegant.png';
import faunaUrbana from '../../imagenes/fondoGit.png';
import portfolio from '../../imagenes/soley.png';
import Proyecto from '../Proyecto/Proyecto';


const Proyectos = () => {
    return (
        <main className='container--Proyectos'>
            <aside className='proyectos--Lista'>
                <section className='proyectos--Titulo'>
                    <h2>TRABAJOS</h2>
                    <p>A quien pueda interesar parte de mis trabajos<br /> realizados hasta el momento  <i className="fa-solid fa-arrow-down"></i></p>
                    <h3><a target='_blank' rel="noreferrer" href='https://github.com/samu1992'>Ver mas Proyectos ↗</a></h3>
                </section>
                <article>
                    <Proyecto
                        title="Elegant"
                        description="E-commerce: Desarrollo de tienda online, con una base de datos creada en firebase"
                        img={elegant}
                        site='https://shop-elegant.vercel.app/'
                        code='https://github.com/samu1992/Shop-Elegant' 
                        tech='#Vite #React #Sass #JavaScript'
                        />
                    <Proyecto
                        title="Fauna Urbana"
                        description="Organización benéfica
            dedicada al rescate de perros en situación de calle y abandono."
                        img={faunaUrbana}
                        site='https://fauna-urbana.vercel.app/'
                        code='https://github.com/samu1992/fauna-urbana'
                        tech='#React #Bootstrap #JavaScript #Vite' />
                    <Proyecto
                        title="Proyecto en Equipo"
                        description="Desarrollo de proyecto freelance utilizando React JS,
            Bootstrap y React Router DOM."
                        img={portfolio}
                        site='https://www.soleyflores.link/'
                        code='https://github.com/samu1992/PortfolioSoley'
                        tech='#Vite #React #Sass #JavaScript' />
                </article>
            </aside>
        </main>
    )
}

export default Proyectos