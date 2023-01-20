import './About.css';
import yo from '../../imagenes/PerfilSamuel.png';
import resumen from '../../imagenes/SamuelCarrizo.pdf';

const About = () => {
  return (
    <div className='container_about'>
      <div className='about--parrafo'>
        <p>Soy un desarrollador web apasionado por aprender y enfrentar desafíos desconocidos. Durante los últimos 8 meses,
          me he especializado en React js y tengo una mentalidad de crecimiento constante.<br /><br /> Disfruto analizar las cosas
          desde diferentes puntos de vista y participar en debates, esto me permite
          ampliar mi perspectiva y aprender cosas nuevas. Mi pasión por la vida, me hacen ser
          una persona positiva y optimista, estoy ansioso de continuar mi viaje en este mundo de desarrollo web y ver
          lo que el futuro me depara.<br /><br />En mi tiempo libre suelo andar
          en moto los fines de semana, salir de la ciudad y buscar aire fresco o visitar algun cafe.<br /><br /><strong><a target='_blank' rel='noreferrer' href={resumen}>Ver Resumen Curricular ↗</a></strong></p>
        <img alt='me' src={yo} />
      </div>
    </div>
  )
}

export default About

