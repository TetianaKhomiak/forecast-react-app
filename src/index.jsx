import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CityProvider from "./context/CityProvider.jsx";
import ResponseProvider from "./context/ResponseProvider.jsx";
import IsCelsiusProvider from "./context/IsCelsiusProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsCelsiusProvider>
      <CityProvider>
        <ResponseProvider>
          <App />
        </ResponseProvider>
      </CityProvider>
    </IsCelsiusProvider>
  </React.StrictMode>
);
