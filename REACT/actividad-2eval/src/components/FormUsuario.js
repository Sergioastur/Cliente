import { useState, useEffect, createContext, useContext } from "react";


const ValidacionesContext = createContext();

export const ValidacionesProvider = ({ children }) => {
    const validaciones = {
        usuarioRegex: /^[a-z][a-z0-9]{5,}$/,
        passwordRegex: /^(?=.*[A-Z])(?=.*\d).{8,}$/
    };
    return (
        <ValidacionesContext.Provider value={validaciones}>
            {children}
        </ValidacionesContext.Provider>
    );
};

const FormUsuario = ({ usuario, onSave, onCancel }) => {
    const { usuarioRegex, passwordRegex } = useContext(ValidacionesContext);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [usuarioNombre, setUsuarioNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errores, setErrores] = useState({});

    useEffect(() => {
        if (usuario) {
            setNombre(usuario.nombre);
            setApellidos(usuario.apellidos);
            setFechaNacimiento(usuario.fecha_nacimiento);
            setUsuarioNombre(usuario.usuario);
            setContraseña(usuario.contra);
        }
    }, [usuario]);

    const validarFormulario = () => {
        let erroresTemp = {};
        const hoy = new Date();
        const fechaNacimientoDate = new Date(fechaNacimiento);
        
        // Calcular edad
        let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        const mesActual = hoy.getMonth();
        const diaActual = hoy.getDate();
        const mesNacimiento = fechaNacimientoDate.getMonth();
        const diaNacimiento = fechaNacimientoDate.getDate();

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }

        if (!nombre.trim()) erroresTemp.nombre = "El nombre es obligatorio.";
        if (!apellidos.trim()) erroresTemp.apellidos = "Los apellidos son obligatorios.";
        if (!usuarioRegex.test(usuarioNombre)) erroresTemp.usuarioNombre = "El nombre de usuario debe comenzar con una letra y contener al menos 6 caracteres alfanuméricos.";
        if (!passwordRegex.test(contraseña)) erroresTemp.contraseña = "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.";
        if (edad < 18) {
            erroresTemp.fechaNacimiento = "Debes ser mayor de 18 años.";
        }
        
        setErrores(erroresTemp);
        return Object.keys(erroresTemp).length === 0;
    };

    const envioEvt = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            const usuarioGuardar = {
                ...(usuario || {}),
                nombre,
                apellidos,
                fecha_nacimiento: fechaNacimiento,
                usuario: usuarioNombre,
                contra: contraseña
            };
            onSave(usuarioGuardar);
        }
    };

    return (
        <form onSubmit={envioEvt}>
            <h2>{usuario ? "Actualizar Usuario" : "Añadir Usuario"}</h2>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                {errores.nombre && <span>{errores.nombre}</span>}
            </label>
            <label>
                Apellidos:
                <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
                {errores.apellidos && <span>{errores.apellidos}</span>}
            </label>
            <label>
                Fecha de Nacimiento:
                <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                {errores.fechaNacimiento && <span>{errores.fechaNacimiento}</span>}
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
                {errores.usuarioNombre && <span>{errores.usuarioNombre}</span>}
            </label>
            <label>
                Contraseña:
                <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
                {errores.contraseña && <span>{errores.contraseña}</span>}
            </label>
            <button type="submit">{usuario ? "Guardar" : "Añadir"}</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default FormUsuario;
