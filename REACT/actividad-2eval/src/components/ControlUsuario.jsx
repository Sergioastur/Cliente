import React, { useState, createContext, useContext } from 'react';

const ValidationContext = createContext();

const ControlUsuario = () => {
    const [formData, setFormData] = useState({ username: "", password: "", name: "", birthdate: "" });
    const { usernameRegex, passwordRegex } = useContext(ValidationContext);

    const mostrar = () => {
        return (
            <div className="control-usuario">
                <button onClick={alta}>Alta Usuario</button>
                {/* <button onClick={baja}>Baja Usuario</button>
            <button onClick={modificar}>Modificar Usuario</button> */}
            </div>
        )
    }

    const alta = () => {
        return (
            <div className="alta-usuario">
                <input name="username" placeholder="Usuario" onChange={cambioEvt} />
                <input type="password" name="password" placeholder="Contraseña" onChange={cambioEvt} />
                <input name="name" placeholder="Nombre y Apellidos" onChange={cambioEvt} />
                <input type="date" name="birthdate" onChange={cambioEvt} />
                <button onClick={addUserEvt}>Añadir Usuario</button>

            </div>
        )
    }

    const cambioEvt = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
    };

    return (
        <div className="control-usuario">

            <button onClick={mostrar}>Control de usuarios</button>

        </div>

    )
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
    )
}
export default UsuarioValidado;