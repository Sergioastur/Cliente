const url = "http://localhost:8000/diabetes.php";

export const getAllUsuarios = async () => {
    const mensajeError = "Error al obtener todos los usuarios";
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error(mensajeError);
        return await respuesta.json();
    } catch (error) {
        console.error(mensajeError, error);
        return [];
    }
};

export const getUsuarioById = async (idUsuario) => {
    let mensajeError = `Error al obtener un usuario con id ${idUsuario}`;
    try {
        const respuesta = await fetch(`${url}?id=${idUsuario}`);
        if (!respuesta.ok) throw new mensajeError();
        return await respuesta.json();
    } catch (error) {
        console.error(mensajeError, error);
        return null;
    }
};

export const addUsuario = async (nuevoUsuario) => {
    const initObject = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(nuevoUsuario),
    };
    const mensajeError = "Error al añadir el usuario";
    try {
        const respuesta = await fetch(url, initObject);
        if (!respuesta.ok) throw new Error(mensajeError);
        return await respuesta.json();
    } catch (error) {
        console.error(mensajeError, error);
        return null;
    }
};

// Actualizar un usuario existente
export const updateUsuario = async (actUsuario) => {
    const initObject = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(actUsuario),
    };
    const mensajeError = "Error al actualizar el usuario";
    try {
        const respuesta = await fetch(url, initObject);
        if (!respuesta.ok) throw new Error(mensajeError);
        return await respuesta.json();
    } catch (error) {
        console.error(mensajeError, error);
        return null;
    }
};

export const deleteUsuario = async (idUsuario) => {
    const initObject = {
        method: "DELETE",
        mode: "cors",
    };
    const mensajeError = `Error al borrar el usuario con id ${idUsuario}`;
    try {
        const respuesta = await fetch(`${url}?id=${idUsuario}`, initObject);
        if (!respuesta.ok) throw new Error(mensajeError);
        return true;
    } catch (error) {
        console.error(mensajeError, error);
        return false;
    }
};