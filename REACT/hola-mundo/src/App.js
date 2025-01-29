import logo from './logo.svg';
import './App.css';
import AcercaDe from './components/Acercade';
import Variables2 from './components/Variables2';
import Saludar from './components/Saludar';
import SaludarBtn from './components/SaludarBtn';

function App() {
  /* const nombre = 'Sergio'; */
  const usuario = {
    nombre: "Juan Diego",
    edad: 54,
    color: "Verde"
    }
    const saludarFn = () => {alert('Hola, mundo')}
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      
      <AcercaDe />
    </div>
  );
}

export default App;
