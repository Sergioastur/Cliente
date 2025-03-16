import React, { useState, useContext } from 'react';
import { ValidationContext } from '../context';
import { addUser, updateUser } from '../api';

const UserForm = ({ user, onUserUpdated }) => {
  const [formData, setFormData] = useState(user || { username: '', password: '', name: '', surname: '', birthdate: '' });
  const regex = useContext(ValidationContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (regex.username.test(formData.username) && regex.password.test(formData.password)) {
      if (user) {
        await updateUser(formData);
      } else {
        await addUser(formData);
      }
      onUserUpdated();
    } else {
      alert("Validación fallida");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Nombre de usuario" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" required />
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Apellidos" required />
      <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
      <button type="submit">{user ? 'Actualizar' : 'Añadir'}</button>
    </form>
  );
};

export default UserForm;
