/* import "./ListadoUsuarios.css";  */// Asegúrate de tener un CSS adecuado para usuarios
import { useState, useEffect } from "react";
import { getAllUsuarios, deleteUsuario, updateUsuario, addUsuario } from "../usuariosServer"; // Asegúrate de que estas funciones existan
import FormUsuario from "./FormUsuario"; // Cambia a FormUsuario

const ListadoUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioActual, setUsuarioActual] = useState(null);
    const [formVisible, setFormVisible] = useState(false);

    const loadUsuarios = async () => {
        try {
            const usuariosServer = await getAllUsuarios();
            setUsuarios(usuariosServer);
        } catch (error) {
            console.error("Error al cargar los usuarios:", error);
        }
    };

    const showForm = (usuario) => {
        setUsuarioActual(usuario);
        setFormVisible(true);
    };

    const updateUsuarioEvt = (usuario) => showForm(usuario);

    const deleteUsuarioEvt = async (idUsuario) => {
        let mensajeError = `Se ha producido un error al borrar el usuario con identificador ${idUsuario}`;
        try {
            const exito = await deleteUsuario(idUsuario);
            if (!exito) alert(mensajeError);
            else {
                alert(`El usuario con identificador ${idUsuario} se ha borrado correctamente`);
                loadUsuarios();
            }
        } catch (error) {
            alert(mensajeError, error);
        }
    };

    const saveUsuarioEvt = async (usuario) => {
        try {
            // Si el usuario tiene id, se trata de una actualización, si no, es nuevo
            if (usuario.id_usu) {
                await updateUsuario(usuario);
                alert(`Se ha modificado el usuario con identificador ${usuario.id_usu} correctamente`);
            } else {
                const nuevoUsuario = await addUsuario(usuario);
                alert(`El usuario se ha añadido correctamente con id ${nuevoUsuario.id_usu}`);
            }
            // Se recargan los usuarios y se oculta el form
            loadUsuarios();
            setFormVisible(false);
        } catch (error) {
            alert("Se ha producido un error al guardar el usuario: ", error);
        }
    };

    useEffect(() => {
        loadUsuarios();
    }, []);

    return (
        <>
            <button onClick={() => showForm()}>
                Añadir Usuario
            </button>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Nombre de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios?.map((usuario) => (
                        <tr key={usuario.id_usu} className="fila">
                            <td className="celda-id">{usuario.id_usu}</td>
                            <td className="celda-nombre">{usuario.nombre}</td>
                            <td className="celda-apellidos">{usuario.apellidos}</td>
                            <td className="celda-fecha-nacimiento">{usuario.fecha_nacimiento}</td>
                            <td className="celda-usuario">{usuario.usuario}</td>
                            <td>
                                <button onClick={() => updateUsuarioEvt(usuario)}>Actualizar</button>
                                <button onClick={() => deleteUsuarioEvt(usuario.id_usu)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {formVisible && (
                <FormUsuario
                    usuario={usuarioActual}
                    onSave={saveUsuarioEvt}
                    onCancel={() => setFormVisible(false)}
                />
            )}
        </>
    );
};

export default ListadoUsuarios;
