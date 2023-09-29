
import { useTranslation } from 'react-i18next';


const Presentacion = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <aside className='container--Presentacion'>
            <section className='presentacion--Parrafo'>
                <p>
                    {t("presentacion.entrada.part1")}
                    <strong>
                        {t("presentacion.entrada.part2")}
                    </strong>
                    {t("presentacion.entrada.part3")}
                </p>
            </section>
        </aside>
    );
}

export default Presentacion