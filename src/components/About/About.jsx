import foto from '../../imagenes/foto-1.jpg';
const About = () => {
  return (
    <main className='container--About' id='sobre-mi'>
      <section className='parrafo'>
        <p>Nací en julio de 1992 en Trujillo, Venezuela. Al momento de iniciar la secundaria, opté por estudiar Informática
          y creo que fue una de las mejores decisiones que he tomado. En ese entonces, me enseñaban a programar en Visual Basic.</p>
        <p>El trabajo final de grado debía ser un proyecto real. Dicho programa lo implementé en una universidad que
          hasta el día de hoy lo sigue usando. La finalidad de dicho programa es imprimir un reporte de notas y el
          promedio de cada materia, enlazado con una base de datos en Excel.</p>
        <p>Por un motivo familiar, al terminar la secundaria, me alisté en las fuerzas armadas de la República.
          Por ende, nunca supe más nada de la programación, hasta hace dos años, cuando decidí retomar
          ese mundo maravilloso. Si bien nada es igual a aquel entonces, mi pasión por programar y aprender volvió a mi vida.</p>
      </section>
      <section className='container--foto'>
        <img alt='error al cargar mi foto' src={foto} />
      </section>
    </main>
  )
}

export default About

