import React, { useState, createContext, useContext } from 'react';
import { getAllUsuarios, deleteUsuario, updateUsuario, addUsuario } from '../diabetesServer';
const ValidationContext = createContext();

const ControlUsuario = () => {
    const [formData, setFormData] = useState({ username: "", password: "", name: "", surname: "", birthdate: "" });
    const { usernameRegex, passwordRegex } = useContext(ValidationContext);
    const [view, setView] = useState(null);

    const cambioEvt = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const esMayorDeEdad = (birthdate) => {
        const hoy = new Date();
        const fechaNacimiento = new Date(birthdate);
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesDiferencia = hoy.getMonth() - fechaNacimiento.getMonth();

        if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            return edad - 1;
        }
        return edad;
    };

    const addUserEvt = () => {
        if (!usernameRegex.test(formData.username)) {
            alert("Nombre de usuario inválido");
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            alert("Contraseña inválida");
            return;
        }

        if (esMayorDeEdad(formData.birthdate) < 18) {
            alert("Debes tener al menos 18 años para registrarte");
            return;
        }

        alert("Usuario agregado correctamente");
    };

    const deleteUserEvt = () => {
        alert("Usuario eliminado");
    };

    const updateUserEvt = () => {
        alert("Usuario modificado");
    };

    return (
        <div className="control-usuario">
            <button onClick={() => setView("menu")}>Control de usuarios</button>
            {view === "menu" && (
                <div>
                    <button onClick={() => setView("alta")}>Alta Usuario</button>
                    <button onClick={() => setView("baja")}>Baja Usuario</button>
                    <button onClick={() => setView("modificar")}>Modificar Usuario</button>
                </div>
            )}

            {view === "alta" && (
                <form onSubmit={addUserEvt} className="alta-usuario">
                    <input name="username" placeholder="Usuario" onChange={cambioEvt} />
                    <input type="password" name="password" placeholder="Contraseña" onChange={cambioEvt} />
                    <input name="name" placeholder="Nombre" onChange={cambioEvt} />
                    <input name="surname" placeholder="Apellidos" onChange={cambioEvt} />
                    <input type="date" name="birthdate" onChange={cambioEvt} />
                    <button type="submit">Añadir Usuario</button>
                    <button onClick={() => setView("menu")}>Volver</button>
                </form>
            )}

            {view === "baja" && (
                <form onSubmit={deleteUserEvt} className="baja-usuario">
                    <input name="username" placeholder="Usuario" onChange={cambioEvt} />
                    <button type="submit">Eliminar Usuario</button>
                    <button onClick={() => setView("menu")}>Volver</button>
                </form>
            )}

            {view === "modificar" && (
                <form onSubmit={updateUserEvt} className="modificar-usuario">
                    <input name="username" placeholder="Usuario" onChange={cambioEvt} />
                    <input type="password" name="password" placeholder="Contraseña" onChange={cambioEvt} />
                    <input name="name" placeholder="Nombre" onChange={cambioEvt} />
                    <input name="surname" placeholder="Apellidos" onChange={cambioEvt} />
                    <input type="date" name="birthdate" onChange={cambioEvt} />
                    <button type="submit">Modificar Usuario</button>
                    <button onClick={() => setView("menu")}>Volver</button>
                </form>
            )}
        </div>
    );
};

const UsuarioValidado = () => {
    return (
        <ValidationContext.Provider
            value={{
                usernameRegex: /^[a-z][a-z0-9]{5,}$/,
                passwordRegex: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
            }}
        >
            <ControlUsuario />
        </ValidationContext.Provider>
    );
};

export default UsuarioValidado;
