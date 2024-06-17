import React, { useContext } from "react";
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

  if (error) {
    document.body.style.backgroundImage = "url(images/globe.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  } else if (
    data &&
    data.list &&
    data.list[0] &&
    data.list[0].weather[0].icon
  ) {
    const iconUrl = background(data.list[0].weather[0].icon);
    document.body.style.backgroundImage = `url(${iconUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }

  return (
    <div className="weather__wrapper">
      <Form />
      <WeatherInfo />
      <ForecastInfo />
    </div>
  );
}

export default App;
