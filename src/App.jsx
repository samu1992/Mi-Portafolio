import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import About from './components/About/About.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentacion from './components/Presentacion/Presentacion.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import { ContactUs } from './components/Formulario/Formulario.jsx';

const Portfolio = () => {
  return (
    <main className="container-App">
      <BrowserRouter>
        <NavBar />
        <Presentacion/>
        <Habilidades/>
        <About/>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <ContactUs/>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default Portfolio