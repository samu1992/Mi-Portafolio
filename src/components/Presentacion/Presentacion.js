
import miFoto from '../../imagenes/miFoto.jpg'


const Presentacion = () => {
    
return (
    <aside className='container--Presentacion'>
        <section className='presentacion--Parrafo'>
            <p className='tracking-in-expand'>Hola, mi nombre es <strong>Samuel Carrizo,</strong> desarrollador web front-end creativo, apasionado por crear experiencias únicas.
            </p>
        </section>
        <div className='mi--Foto'><img alt='error al cargar mi foto' src={miFoto}/></div>
    </aside>
)
}

export default Presentacion