import { createContext, useContext, useState } from "react";

// Crear contexto
const UserContext = createContext();

// Hook personalizado
export const useUser = () => useContext(UserContext);

// Provider
export const UserProvider = ({ children }) => {
  // Token simulado
  const [token, setToken] = useState(true);

  // Logout
  const logout = () => {
    setToken(false);
  };

  // Login
  const login = () => {
    setToken(true);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};