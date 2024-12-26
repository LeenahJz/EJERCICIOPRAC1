import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  
  return (
    <AppContext.Provider value={{ user, setUser, appointments, setAppointments }}>
      {children}
    </AppContext.Provider>
  );
};