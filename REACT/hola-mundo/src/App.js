import logo from './logo.svg';
import './App.css';
import AcercaDe from './components/Acercade';

function App() {
  const nombre = 'Sergio';
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
        <h1>Hola, {nombre}</h1>
      </header>
      <AcercaDe />
    </div>
  );
}

export default App;
