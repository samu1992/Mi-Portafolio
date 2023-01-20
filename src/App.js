import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import About from './components/About/About';
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="container-App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
