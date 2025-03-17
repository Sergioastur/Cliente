import React, { createContext, useContext } from 'react';

export const ValidationContext = createContext();

export const ValidationProvider = ({ children }) => {
  const validateUser = (data) => {
    // Aquí van las validaciones
    return true; // Cambiar según la lógica de validación
  };

  return (
    <ValidationContext.Provider value={{ validateUser }}>
      {children}
    </ValidationContext.Provider>
  );
};
