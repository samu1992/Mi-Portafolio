import './Footer.css';

const Footer = () => {
return (
    <footer>
        <div className='container_footer'>
            <div className='container_footer--email'><a href='.'>samuelcarrizot@gmail.com ↗</a></div>
            <div className='container_footer--redes'>
                <div><a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/samuel-carrizo-844980176/"><i className=" fab fa-linkedin"></i></a></div>
                <div><a target="_blank" rel='noreferrer' href="."><i className=" fab fa-instagram"></i></a></div>
                <div><a target="_blank" rel='noreferrer' href="https://github.com/samu1992"><i className=" fab fa-github"></i></a></div>
            </div>
            <div className='container_footer-logo'><h1>SC</h1></div>
        </div>
    </footer>
)
}

export default Footer