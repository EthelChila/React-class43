import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [ids, setIds] = useState([]);

  const addNewId = (newId) => {
    setIds([...ids, newId]);
  };

  return (
    <FavoriteContext.Provider value={{ ids, addNewId }}>
      {children}
    </FavoriteContext.Provider>
  );
};
