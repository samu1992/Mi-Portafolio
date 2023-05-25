import foto from '../../imagenes/foto-1.jpg';
const About = () => {
  return (
    <main className='container--About' id='sobre-mi'>
      <section className='parrafo'>
        <p>Soy un apasionado desarrollador web que crea soluciones digitales únicas, combinando funcionalidad y diseño para ofrecer experiencias excepcionales. Me encanta explorar nuevas tecnologías y tendencias, aprovechando al máximo herramientas modernas y lenguajes de programación para construir sitios web rápidos, seguros e interactivos.</p>
        <p>Me mantengo actualizado en los avances del desarrollo web, aprendiendo continuamente, mejorando mis habilidades y aplicando mejores prácticas en cada proyecto. También tengo experiencia en optimización web para mejorar el rendimiento y posicionamiento en buscadores, enfocándome en la construcción de sitios accesibles, intuitivos y atractivos que brinden experiencias excepcionales a los usuarios.</p>
      </section>
      <section className='container--foto'>
      <img alt='error al cargar mi foto'src={foto}/>
      </section>
    </main>
  )
}

export default About

