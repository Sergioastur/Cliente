const API_URL = 'http://localhost/api'; // Cambia esto a la URL de tu API

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('Error al obtener los usuarios');
  }
  return await response.json();
};

export const addUser = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Error al añadir el usuario');
  }
  return await response.json();
};

export const updateUser = async (user) => {
  const response = await fetch(`${API_URL}/users/${user.username}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar el usuario');
  }
  return await response.json();
};

export const deleteUser = async (username) => {
  const response = await fetch(`${API_URL}/users/${username}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el usuario');
  }
  return await response.json();
};
