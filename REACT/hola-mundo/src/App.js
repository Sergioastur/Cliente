/* import logo from './logo.svg'; */
import './App.css';
import FormControlado from './components/FormControlado';
/* import AcercaDe from './components/Acercade';
import Variables2 from './components/Variables2';
import Saludar from './components/Saludar';
import SaludarBtn from './components/SaludarBtn';
import EjemploEstado from './components/EjemploEstado';
import EjemploEstado2 from './components/EjemploEstado2';
import EjemploEstado3 from './components/EjemploEstado3';
import Visor from './components/Visor';
import Galeria from "./components/Galeria";
import { ColFotos } from "./colFotos"; */
/* import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pagina1 from "./pages/Pagina1";
import Producto from "./pages/Producto"; */
/* import RerenderizadorSinCambioProps from "./components/RerenderizadorSinCambioProps";
import NoRenderizadorConCambioProps from "./components/NoRenderizadorConCambioProps";
import MiComponente from './components/MiComponente'; */
/* import AlternaMensaje from './components/AlternaMensaje'; */
/* import MaterialUI from './components/MaterialUI';
import { AppContext, valoresDefecto } from './AppContext';
import Encabezado from './components/Encabezado';
import Pie from './components/Pie';
import Saludo from './components/Saludo'; */




function App() {
  /* const nombre = 'Sergio'; */
  /* const usuario = {
    nombre: "Juan Diego",
    edad: 54,
    color: "Verde"
  }
  const saludarFn = () => { alert('Hola, mundo') } */
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Variables2 />
        <Saludar userInfo={usuario} />
        <SaludarBtn userInfo={usuario} saludarFn={saludarFn} />
        <EjemploEstado />
        <EjemploEstado2 />
        <EjemploEstado3 />
        <Visor imagenes={["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"]} />
      </header>
      
      <AcercaDe /> */}
      {/* <div className="App">
        <Galeria fotos={ColFotos} />
      </div> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/producto/:id" element={<Producto />} />
      </Routes> */}
      {/* <main>
        <h4>Re-renderizado sin cambiar propiedades</h4>
        <RerenderizadorSinCambioProps />
        <h4>No re-renderiza con cambio de propiedades</h4>
        <NoRenderizadorConCambioProps />
        <MiComponente />
         <AlternaMensaje /> 
        <MaterialUI />
        <AppContext.Provider value={valoresDefecto}>
          <Encabezado />
          <div>Esto simplemente es contenido.</div>
          <Pie />
        </AppContext.Provider>
        <Saludo nombre="Sergio" />
        
      </main> */}
      <FormControlado />
    </div>
  );
}

export default App;
