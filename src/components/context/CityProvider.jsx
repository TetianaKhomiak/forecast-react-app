import React from "react";
import { createContext, useState } from "react";

export const CityContext = createContext(null);

const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");

  const contextValue = {
    city,
    setCity,
  };

  return (
    <CityContext.Provider value={contextValue}>{children}</CityContext.Provider>
  );
};

export default CityProvider;
