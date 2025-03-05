const url = "http://localhost:8000/notas.php";
export const getAllnotas = async () => {
    const mensajeError = "Error al obtener todas las notas";
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error(mensajeError);
        return await respuesta.json();
    } catch (error) {
        console.error(mensajeError, error);
        return [];
    }
};

export const getNotaById = async (idNota) => {
    let mensajeError = `Error al obtener una nota la nota con id ${idNota}`;
    try {
        const respuesta = await fetch(`${url}?id=${id}`);
        if (!respuesta.ok) throw new mensajeError();
        return await respuesta.json();
    } catch (error) {
        console.error(mensajeError, error);
        return null;
    }
};

export const addNota = async (nuevaNota) => {
    const initObject = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(nuevaNota),
    };
    const mensajeError = "Error al añadir la nota";
    try {
        const respuesta = await fetch(url, initObject);
        console.log(JSON.stringify(nuevaNota));
        if (!respuesta.ok) throw new Error(mensajeError);
        return await respuesta.json();
    } catch (error) {
        console.error(mensajeError, error);
        return null;
    }
};