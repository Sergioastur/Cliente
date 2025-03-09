import React, { useState, useEffect } from "react";
import FiltradoCanciones from "./FiltradoCanciones";
import ListadoCanciones from "./ListadoCanciones";
import MasPopular from "./MasPopular";

const SpotiMain = () => {
    const [canciones, setCanciones] = useState([]);
  
    // Función asíncrona para obtener las canciones
    useEffect(() => {
      const fetchCanciones = async () => {
        try {
          const response = await fetch("/json/Spotify.json");
          const data = await response.json();
          setCanciones(data);
        } catch (error) {
          console.error("Error al cargar las canciones", error);
        }
      };
      fetchCanciones();
    }, []);
  
    return (
      <div>
        <h1>SpotifEx</h1>
        <FiltradoCanciones canciones={canciones} />
        <ListadoCanciones canciones={canciones} />
        <MasPopular canciones={canciones} />
      </div>
    );
  };
  export default SpotiMain;