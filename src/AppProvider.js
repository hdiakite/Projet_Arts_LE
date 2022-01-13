import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext({
  // demandeur / technicien / responsable / administrateur
  role: null,
  user: undefined,
  isConnected: false,
});

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ role: 'administrateur' });

  return (
    <AppContext.Provider
      value={{
        role: user?.role || null,
        user,
        isConnected: Boolean(user),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
