import { useState, useEffect } from "react";

const FormUsuario = ({ usuario, onSave, onCancel }) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [usuarioNombre, setUsuarioNombre] = useState('');
    const [contraseña, setContraseña] = useState('');

    const envioEvt = (e) => {
        e.preventDefault();
        const usuarioGuardar = {
            ...(usuario || {}),
            nombre,
            apellidos,
            fecha_nacimiento: fechaNacimiento,
            usuario: usuarioNombre,
            contra: contraseña
        };
        onSave(usuarioGuardar);
    };

    const cancelarEvt = () => {
        if (onCancel) onCancel();
    };

    useEffect(() => {
        if (usuario) {
            setNombre(usuario.nombre);
            setApellidos(usuario.apellidos);
            setFechaNacimiento(usuario.fecha_nacimiento);
            setUsuarioNombre(usuario.usuario);
            setContraseña(usuario.contra);
        }
    }, [usuario]);

    return (
        <form onSubmit={envioEvt}>
            <h2>{usuario ? "Actualizar Usuario" : "Añadir Usuario"}</h2>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </label>
            <label>
                Apellidos:
                <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
            </label>
            <label>
                Fecha de Nacimiento:
                <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
            </label>
            <label>
                Nombre de Usuario:
                <input 
                    type="text" 
                    value={usuarioNombre} 
                    onChange={(e) => setUsuarioNombre(e.target.value)} 
                    required={usuario ? false : true} 
                    readOnly={usuario ? true : false} 
                />
            </label>
            <label>
                Contraseña:
                <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
            </label>
            <button type="submit">{usuario ? "Guardar" : "Añadir"}</button>
            <button type="button" onClick={cancelarEvt}>
                Cancelar
            </button>
        </form>
    );
};

export default FormUsuario;
