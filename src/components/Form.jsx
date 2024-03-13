import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../context/CityProvider.jsx";
import ForecastInfo from "./ForecastInfo.jsx";
import WeatherInfo from "./WeatherInfo.jsx";
import { ResponseContext } from "../context/ResponseProvider.jsx";

const Form = () => {
  const { city, setCity } = useContext(CityContext);
  const { data, setData } = useContext(ResponseContext);
  // const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const handleSubmitForm = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b1a7614cbc5071710a1d8075fbd15ec0&units=metric`
      );
      const { data } = response;

      if (data.cod >= 400) {
        throw new Error("Failed to load resource");
      }

      console.log(data);
      setError(false);
      setData(data);
      setCity("");
    } catch (e) {
      console.log(e.message);
      setError(true);
      setCity("");
      document.body.style.backgroundImage = "none";
    }
  };

  useEffect(() => {
    handleSubmitForm();
  }, []);

  return (
    <div className="weather__wrapper">
      <form className="weather__form" onSubmit={handleSubmitForm}>
        <input
          className="weather__input"
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="weather__button" type="submit">
          search
        </button>
      </form>
      <WeatherInfo data={data} error={error} />
      <ForecastInfo data={data} error={error} />
    </div>
  );
};

export default Form;
