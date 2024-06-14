import React, { createContext, useState } from "react";

export const IsCelsiusContext = createContext(null);

const IsCelsiusProvider = ({ children }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const contextValue = {
    isCelsius,
    setIsCelsius,
  };

  return (
    <IsCelsiusContext.Provider value={contextValue}>
      {children}
    </IsCelsiusContext.Provider>
  );
};

export default IsCelsiusProvider;
