import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import About from './components/About/About.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentacion from './components/Presentacion/Presentacion.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import { ContactUs } from './components/Formulario/Formulario.jsx';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';


i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es:{
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})
const Portfolio = () => {
  return (
    <main className="container-App" style={{ fontFamily: 'DM Sans' }}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <NavBar />
          <Presentacion />
          <Habilidades />
          <About />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/About' element={<About />} />
          </Routes>
          <ContactUs />
          <Footer />
        </BrowserRouter>
      </I18nextProvider>
    </main>
  )
}

export default Portfolio