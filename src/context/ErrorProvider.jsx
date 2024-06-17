import React from "react";
import { createContext, useState } from "react";

export const ErrorContext = createContext(null);

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const contextValue = {
    error,
    setError,
  };
  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
