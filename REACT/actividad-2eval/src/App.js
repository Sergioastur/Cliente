import React, { useEffect, useState } from 'react';
import { getUsers } from './api';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { ValidationProvider } from './context';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ValidationProvider>
      <h1>Gestión de Usuarios</h1>
      <UserForm onUserUpdated={fetchUsers} />
      <UserTable users={users} onUserUpdated={fetchUsers} />
    </ValidationProvider>
  );
};

export default App;
