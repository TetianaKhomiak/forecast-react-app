import React from "react";
import { createContext, useState } from "react";

export const ResponseContext = createContext(null);

const ResponseProvider = ({ children }) => {
  const [data, setData] = useState({});

  const contextValue = {
    data,
    setData,
  };

  return (
    <ResponseContext.Provider value={contextValue}>
      {children}
    </ResponseContext.Provider>
  );
};

export default ResponseProvider;
