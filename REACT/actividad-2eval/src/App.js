import React from 'react';
import ListadoUsuarios from './components/ListadoUsuarios';
import { ValidacionesProvider } from "./components/FormUsuario"; 
import Estadisticas from './components/estadisticas';



function App() {
  return (
    <ValidacionesProvider>
    <div className="App">
      <h1>Diabetes</h1>
      <ListadoUsuarios />
      <Estadisticas />
    </div>
    </ValidacionesProvider>

  );
}

export default App;
