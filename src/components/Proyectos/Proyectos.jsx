import { dataProject } from '../../assets/constants/constants';
import Proyecto from '../Proyecto/Proyecto';
import { useTranslation } from 'react-i18next';

const Proyectos = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <main id='proyectos' className='container--Proyectos'>
            <aside className='proyectos--Lista'>
                <section className='proyectos--Titulo'>
                    <h2>TRABAJOS</h2>
                    <p>A quien pueda interesar parte de mis trabajos<br /> realizados hasta el momento  <i className="fa-solid fa-arrow-down"></i></p>
                    <h3><a target='_blank' rel="noreferrer" href='https://github.com/samu1992'>Ver mas Proyectos ↗</a></h3>
                </section>
                <article>
                    {dataProject.map(({title, description, img, site, code, tech}, index)=>{
                        
                        return(
                            <Proyecto
                            key={index}
                            title={title}
                            description={description}
                            img={img}
                            site={site}
                            code={code}
                            tech={tech}/>
                        )
                    })}
                </article>
            </aside>
        </main>
    )
}

export default Proyectos