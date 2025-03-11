const MasPopular = ({ canciones }) => {
    if (canciones.length === 0) return <p>No hay canciones disponibles</p>;
  
    const cancionMasPopular = canciones.reduce((max, cancion) =>
      cancion.track_popularity > max.track_popularity ? cancion : max
    );
  
    return (
      <div>
        <h2>Canción más popular</h2>
        <p>{cancionMasPopular.track_name} - {cancionMasPopular.track_artist}</p>
      </div>
    );
  };
    export default MasPopular;