const contadorReducer = (estado, accion) => {
    switch (accion.tipo) {
    case 'INCREMENTO':
    return {contador: estado.contador + 1};
    case 'DECREMENTO':
    return {contador: estado.contador -1};
    case 'REINICIO':
    return { contador: 0 };
    default:
    return estado;
    }
    };
    export default contadorReducer;