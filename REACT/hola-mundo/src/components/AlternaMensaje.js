import React, { useState } from "react";
import estilos from "./AlternaMensaje.module.css";
function AlternaMensaje() {
    const [esVisible, setEsVisible] = useState(true);
    const alternaVisibilidad = () => {
        setEsVisible(!esVisible);
    };
    return (
        <div>
            <h2>Alterna Mensaje</h2>
            <button onClick={alternaVisibilidad}>
                {esVisible ? "Esconde mensaje" : "Muestra mensaje"}
            </button>
            <p className={esVisible ? estilos.mensaje : estilos.oculto}>
                Este es un mensaje oculto
            </p>
        </div>
    );
}
export default AlternaMensaje;