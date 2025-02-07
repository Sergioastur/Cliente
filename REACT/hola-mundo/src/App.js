import logo from './logo.svg';
import './App.css';
import AcercaDe from './components/Acercade';
import Variables2 from './components/Variables2';
import Saludar from './components/Saludar';
import SaludarBtn from './components/SaludarBtn';
import EjemploEstado from './components/EjemploEstado';
import EjemploEstado2 from './components/EjemploEstado2';
import EjemploEstado3 from './components/EjemploEstado3';
import Visor from './components/Visor';
import Galeria from "./components/Galeria";
import { ColFotos } from "./colFotos";
function App() {
  /* const nombre = 'Sergio'; */
  const usuario = {
    nombre: "Juan Diego",
    edad: 54,
    color: "Verde"
  }
  const saludarFn = () => { alert('Hola, mundo') }
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
      <div className="App">
        <Galeria fotos={ColFotos} />
      </div>
    </div>
  );
}

export default App;
