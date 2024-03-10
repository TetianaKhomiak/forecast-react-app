import React from "react";
import { capitalizeFirstLetter, formatedWeatherDate, icons } from "../utils";

const WeatherInfo = ({ weather, error }) => {
  const date = formatedWeatherDate(new Date());

  return (
    <div className="weather-info">
      {error ? (
        <p className="weather-info__error">City not found</p>
      ) : (
        weather &&
        weather.list &&
        weather.list.length > 0 && (
          <div className="weather-info__wrapper">
            <div className="weather-info__data">
              <p className="weather-info__city">{weather.city.name}</p>
              <p className="weather-info__text">{date}</p>
              <p className="weather-info__text weather-info__text_teal">
                {capitalizeFirstLetter(weather.list[0].weather[0].description)}
              </p>
            </div>
            <div>
              <img
                className="weather-info__icon"
                src={icons(weather.list[0].weather[0].icon)}
                alt={weather.list[0].weather[0].description}
              />
            </div>
            <div className="weather-info__data">
              <p className="weather-info__text">
                <span className="weather-info__text_teal">Temperature:</span>
                {Math.round(weather.list[0].main.temp)} °C
              </p>
              <p className="weather-info__text">
                <span className="weather-info__text_teal">Wind:</span>
                {weather.list[0].wind.speed} km/h
              </p>
              <p className="weather-info__text">
                <span className="weather-info__text_teal">Humidity:</span>
                {weather.list[0].main.humidity}%
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherInfo;
