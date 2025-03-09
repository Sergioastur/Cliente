const ListadoCanciones = ({ canciones }) => {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Duración (s)</th>
          </tr>
        </thead>
        <tbody>
          {canciones.map((cancion) => (
            <tr key={cancion.track_id}>
              <td>{cancion.track_id}</td>
              <td>{cancion.track_name}</td>
              <td>{cancion.track_artist}</td>
              <td>{cancion.track_album_name}</td>
              <td>{Math.floor(cancion.duration_ms / 1000)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default ListadoCanciones;