import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Provider component
export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserDataProvider