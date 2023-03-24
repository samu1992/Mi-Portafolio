import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import About from './components/About/About.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Portfolio = () => {
  return (
    <main className="container-App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default Portfolio