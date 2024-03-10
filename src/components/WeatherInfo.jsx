import React from "react";
import { formatedWeatherDate } from "../utils";
import { Icons } from "../utils";

const WeatherInfo = ({ weather, icon }) => {
  const date = formatedWeatherDate(new Date());

  return (
    <div>
      {weather.city && (
        <div>
          <p>{weather.city.name}</p>
          <p>{date}</p>
        </div>
      )}
      {weather.list && weather.list[0] && (
        <>
          <p>Temperature: {Math.round(weather.list[0].main.temp)} °C</p>
          <p>Humidity: {weather.list[0].main.humidity}%</p>
          <p>{weather.list[0].weather[0].description}</p>
          {weather.list[0].weather[0].icon && (
            // <img
            //   src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.list[0].weather[0].icon}.svg`}
            //   alt={weather.list[0].weather[0].description}
            // />
            <img
              className="weather__icon"
              src={Icons(weather.list[0].weather[0].icon)}
              alt={weather.list[0].weather[0].description}
            />
          )}
        </>
      )}
    </div>
  );
};

export default WeatherInfo;
