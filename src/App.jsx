import React, { useContext, useEffect } from "react";
import "./App.css";
import ForecastInfo from "./components/ForecastInfo.jsx";
import Form from "./components/Form.jsx";
import WeatherInfo from "./components/WeatherInfo.jsx";
import { ErrorContext } from "./context/ErrorProvider.jsx";
import { ResponseContext } from "./context/ResponseProvider.jsx";
import { background } from "./utils.jsx";

function App() {
  const { error } = useContext(ErrorContext);
  const { data } = useContext(ResponseContext);

  const loadBackgroundImage = (url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${url})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
    };
  };

  useEffect(() => {
    if (error) {
      loadBackgroundImage("images/globe.jpg");
    } else if (
      data &&
      data.list &&
      data.list[0] &&
      data.list[0].weather[0].icon
    ) {
      const iconUrl = background(data.list[0].weather[0].icon);
      loadBackgroundImage(iconUrl);
    }
  }, [data, error]);

  return (
    <div className="weather__wrapper">
      <Form />
      <WeatherInfo />
      <ForecastInfo />
    </div>
  );
}

export default App;
