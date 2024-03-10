import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CityContext } from "./context/CityProvider";

const Form = () => {
  const { city, setCity } = useContext(CityContext);
  const [weather, setWeather] = useState({});
  //https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
      <div>
        {weather.city && <p>{weather.city.name}</p>}
        {weather.list && weather.list[0] && (
          <>
            <p>{weather.list[0].main.temp}</p>
            <p>{new Date().getTime()}</p>
            <p>{weather.list[0].main.humidity}</p>
            <p>{weather.list[0].weather[0].description}</p>
            {weather.list[0].weather[0].icon && (
              <img
                src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.list[0].weather[0].icon}.svg`}
                alt={weather.list[0].weather[0].description}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
