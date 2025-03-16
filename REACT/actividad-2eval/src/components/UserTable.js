import React from 'react';
import { deleteUser } from '../api';

const UserTable = ({ users, onUserUpdated }) => {
  const handleDelete = async (username) => {
    await deleteUser(username);
    onUserUpdated();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>
              <button onClick={() => handleDelete(user.username)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
