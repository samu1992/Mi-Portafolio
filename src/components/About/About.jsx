import foto from '../../imagenes/foto-1.jpg';
const About = () => {
  return (
    <main className='container--About' id='sobre-mi'>
      <section className='parrafo'>
        <p>Soy un apasionado desarrollador web que disfruta crear soluciones digitales que marquen la diferencia. Mi objetivo es combinar funcionalidad y diseño para ofrecer experiencias web excepcionales.</p>
        <p>Me encanta sumergirme en el mundo del desarrollo web, explorando nuevas tecnologías y tendencias. Mi enfoque se basa en aprovechar al máximo el potencial de las herramientas modernas y los lenguajes de programación para construir sitios web rápidos, seguros y altamente interactivos.</p>
        <p>A través de mi constante búsqueda de conocimiento, me mantengo actualizado en los últimos avances en el campo del desarrollo web. Mi enfoque es aprender continuamente, mejorar mis habilidades y aplicar las mejores prácticas en cada proyecto en el que participo.</p>
        <p>Además del desarrollo web, también tengo experiencia en la optimización de sitios web para mejorar su rendimiento y posicionamiento en los motores de búsqueda. Creo en la importancia de construir sitios web accesibles, intuitivos y atractivos que brinden una experiencia excepcional a los usuarios.</p>
      </section>
      <section className='container--foto'>
      <img alt='error al cargar mi foto'src={foto}/>
      </section>
    </main>
  )
}

export default About

