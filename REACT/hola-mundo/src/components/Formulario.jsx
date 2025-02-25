import { useState } from "react";
const Formulario = ({initialState = "", onInputChange}) => {
    const [nombre, setNombre] = useState(initialState);
    const cambioEntrada = (event) => {
        const valor = event.target.value;
        setNombre(valor);
        if (onInputChange) {
            onInputChange(valor);
        }
    };
    const envioForm = (event) => {
        event.preventDefault();
        alert(`Se ha enviado el formulario con el nombre: ${nombre}`);
    };
    return (
        <form onSubmit={envioForm}>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={cambioEntrada} />
            </label>
            <button type="submit">Enviar datos</button>
        </form>
    );
};
export default Formulario;