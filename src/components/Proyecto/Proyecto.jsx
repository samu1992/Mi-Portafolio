import React from "react";
const Proyecto = (props) => {
    const handleClick = () => {
        window.open(props.site, '_blank');
    };
    return (
        <article className='proyecto'>
            <div onClick={handleClick} className='proyecto--Detalle'>
                <div><img alt='error al cargar la imagen del proyecto' src={props.img} /></div>
                <section>
                <p><strong>{props.title}</strong></p>
                <p>{props.description}</p>
                </section>
            </div>
            <div className='proyectos--Button'>
                <button><a className="a" target='_blank' rel="noreferrer" href={props.code}><i className=" fab fa-github"></i>       GitHup</a></button>
                <p>{props.tech}</p>
            </div>
        </article>
    );
}

export default Proyecto;