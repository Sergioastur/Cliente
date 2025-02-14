import React, { useReducer } from 'react';
import contadorReducer from '../contadorReducer';
const estadoInicial = { contador: 0 };
const Contador = () => {
const [estado, dispatch] = useReducer(contadorReducer, estadoInicial);
return (
<div>
<h1>Contador: {estado.contador}</h1>
<button onClick={() => dispatch({ tipo: 'INCREMENTO' })}>Incrementar</button>
<button onClick={() => dispatch({ tipo: 'DECREMENTO' })}>Decrementar</button>
<button onClick={() => dispatch({ tipo: 'REINICIO' })}>Resetear</button>
</div>
);
};
export default Contador;