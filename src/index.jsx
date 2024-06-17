import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CityProvider from "./context/CityProvider.jsx";
import ResponseProvider from "./context/ResponseProvider.jsx";
import IsCelsiusProvider from "./context/IsCelsiusProvider.jsx";
import ErrorProvider from "./context/ErrorProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorProvider>
      <IsCelsiusProvider>
        <CityProvider>
          <ResponseProvider>
            <App />
          </ResponseProvider>
        </CityProvider>
      </IsCelsiusProvider>
    </ErrorProvider>
  </React.StrictMode>
);
