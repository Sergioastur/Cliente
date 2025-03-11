import React, { useState } from "react";

const FiltradoCanciones = ({ canciones }) => {
    const [filtro, setFiltro] = useState("");
    console.log(canciones);
    const cancionesFiltradas = canciones.filter((cancion) =>
      cancion.track_artist.toLowerCase().includes(filtro.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Buscar por artista"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <ul>
          {cancionesFiltradas.map((cancion) => (
            <li key={cancion.track_id}>{cancion.track_name}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default FiltradoCanciones;