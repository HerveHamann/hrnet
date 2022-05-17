import { createContext } from "react";
import { useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  return <DataContext.Provider value={{ User, setUser }}>{children}</DataContext.Provider>;
};
