import './Proyecto.css'

const Proyecto = (props) => {
    return (
            <article className='proyecto'>
                <div className='proyecto--Detalle'>
                    <div><img alt='error al cargar la imagen del proyecto' src={props.img} /></div>
                    <p><strong>{props.title}</strong><br />{props.description}<br /><br />{props.text}</p>
                </div>
                <div className='proyectos--Button'>
                    <button><a target='_blank' rel="noreferrer" href={props.site}>Ir al sitio</a></button>
                    <button><a target='_blank' rel="noreferrer" href={props.code}>Ver código</a></button>
                </div>
            </article>
    );
}

export default Proyecto;