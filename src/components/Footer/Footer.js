import { Link } from "react-router-dom"

const Footer = () => {
return (
    <footer>
        <section className='container--Footer'>
            <div className='container--Footer--Redes'>
                <div><a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/samuel-carrizo-844980176/"><i className=" fab fa-linkedin"></i></a></div>
                <div><a target="_blank" rel='noreferrer' href="."><i className=" fab fa-instagram"></i></a></div>
                <div><a target="_blank" rel='noreferrer' href="https://github.com/samu1992"><i className=" fab fa-github"></i></a></div>
            </div>
            <div className='container--Footer--Email'><a href="mailto:samueldev@samuelcarrizo.link">samueldev@samuelcarrizo.link ↗</a></div>
            <div className='container--Footer--Logo'><Link to='/'><h2>SC</h2></Link></div>
        </section>
    </footer>
)
}

export default Footer