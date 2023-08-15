import elegant from '../../imagenes/elegant.png';
import faunaUrbana from '../../imagenes/fondoGit.png';
import portfolio from '../../imagenes/soley.png';
import gallery from '../../imagenes/dog-gallery.png';
//import tip from '../../imagenes/tip_calculator.png';
import Proyecto from '../Proyecto/Proyecto';
import todo from '../../imagenes/Todolist.png';
import ai from '../../imagenes/TheAI.png';
import form from '../../imagenes/Form.png'


const Proyectos = () => {
    return (
        <main id='proyectos' className='container--Proyectos'>
            <aside className='proyectos--Lista'>
                <section className='proyectos--Titulo'>
                    <h2>TRABAJOS</h2>
                    <p>A quien pueda interesar parte de mis trabajos<br /> realizados hasta el momento  <i className="fa-solid fa-arrow-down"></i></p>
                    <h3><a target='_blank' rel="noreferrer" href='https://github.com/samu1992'>Ver mas Proyectos ↗</a></h3>
                </section>
                <article>
                    <Proyecto
                        title="Elegant"
                        description="E-commerce: Desarrollo de tienda online, con una base de datos creada en firebase. Proyecto final del curso de React js."
                        img={elegant}
                        site='https://shop-elegant.vercel.app/'
                        code='https://github.com/samu1992/Shop-Elegant' 
                        tech='#Vite #React #Sass #JavaScript'
                        />
                    <Proyecto
                        title="Fauna Urbana"
                        description="Organización benéfica
            dedicada al rescate de perros en situación de calle y abandono. Dicha Website se donara a la organizacion."
                        img={faunaUrbana}
                        site='https://fauna-urbana.vercel.app/'
                        code='https://github.com/samu1992/fauna-urbana'
                        tech='#React #Bootstrap #JavaScript #Vite' />
                    <Proyecto
                        title="Portafolio"
                        description="Desarrollo de proyecto freelance, se trata de un portafolio hecho para un cliente real, el mismo se encuentra en uso. "
                        img={portfolio}
                        site='https://soley-porfolio.vercel.app/'
                        code='https://github.com/samu1992/soley-porfolio'
                        tech='#Vite #React #Sass #JavaScript #Next' />
                    <Proyecto
                        title="Formulario"
                        description="Formulario interactivo. Brinda una experiencia fluida al usuario y demuestra habilidades en desarrollo frontend."
                        img={form}
                        site='https://form-seaclub.vercel.app/'
                        code='https://github.com/samu1992/formSeaclub'
                        tech='React, Next13'/>
                        <Proyecto
                        title="Dogs Gallery"
                        description="Galeria: En proceso de desarrollo, con la finalidad de mostrar habilidades en manejo de datos, en este caso una galeria."
                        img={gallery}
                        site='https://dogs-gallery.vercel.app/'
                        code='https://github.com/samu1992/dogs-gallery'
                        tech='#React Next js #Tailwind'
                        />
                        <Proyecto
                        title='The AI Helper'
                        description='Proyecto en desarrollo, es una Landing Page constantemente estoy subiendo cambios, dentro de poco el mismo estara mas completo.'
                        img={ai}
                        site='https://the-ai-helper.vercel.app/'
                        code='https://github.com/samu1992/the-ai-helper'
                        tech='#React #Vite #Sass #JavaScript'
                        />
                        <Proyecto
                        title="To Do List"
                        description="Lista de tareas: En proceso de desarrollo, con la finalidad de mostrar habilidades en manejo de datos, en este caso una lista de tareas."
                        img={todo}
                        site="https://to-do-sepia-alpha.vercel.app/"
                        code="https://github.com/samu1992/to-do"
                        tech='#React #Vite #JavaScript'
                        />
                        {/* <Proyecto
                        title="Tip Calculator"
                        description="Esta es una calculadora de propina simple hecha con React y Vite. Fue creada con fines educativos como parte de la práctica de desarrollo web."
                        img={tip}
                        site="https://tip-calculator-eosin.vercel.app/"
                        code="https://github.com/samu1992/tip-calculator"
                        tech="#React #Vite #JavaScript"
                        /> */}
                </article>
            </aside>
        </main>
    )
}

export default Proyectos