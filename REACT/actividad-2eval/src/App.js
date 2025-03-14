import React, { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import Stats from './components/Stats';
import { ValidationProvider } from './context/ValidationContext';

function App() {
  return (
    <ValidationProvider>
      <div>
        <h1>Gestión de Insulina</h1>
        <UserForm />
        <UserTable />
        <Stats />
      </div>
    </ValidationProvider>
  );
}

export default App;