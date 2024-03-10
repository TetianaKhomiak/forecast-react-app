import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../context/CityProvider";
import WeatherInfo from "./WeatherInfo";

const Form = () => {
  const { city, setCity } = useContext(CityContext);
  const [weather, setWeather] = useState({});

  const handleSubmitForm = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b1a7614cbc5071710a1d8075fbd15ec0&units=metric`
      );

      //const data = response.data;
      const { data } = response;
      setWeather(data);
      setCity("");

      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    handleSubmitForm();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default Form;
