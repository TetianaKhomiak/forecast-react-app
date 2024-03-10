import React from "react";
import { capitalizeFirstLetter, formattedWeatherDate, icons } from "../utils";

const WeatherInfo = ({ data, error }) => {
  const date = formattedWeatherDate(new Date());

  return (
    <div className="weather-info">
      {error ? (
        <p className="weather-info__error">City not found</p>
      ) : (
        data &&
        data.list &&
        data.list.length > 0 && (
          <div className="weather-info__wrapper">
            <div className="weather-info__data">
              <p className="weather-info__city">{data.city.name}</p>
              <p className="weather-info__text">{date}</p>
              <p className="weather-info__text weather-info__text_teal">
                {capitalizeFirstLetter(data.list[0].weather[0].description)}
              </p>
            </div>
            <div>
              <img
                className="weather-info__icon"
                src={icons(data.list[0].weather[0].icon)}
                alt={data.list[0].weather[0].description}
              />
            </div>
            <div className="weather-info__data">
              <p className="weather-info__text">
                <span className="weather-info__text_teal">Temperature:</span>
                {Math.round(data.list[0].main.temp)} °C
              </p>
              <p className="weather-info__text">
                <span className="weather-info__text_teal">Wind:</span>
                {Math.round(data.list[0].wind.speed)} km/h
              </p>
              <p className="weather-info__text">
                <span className="weather-info__text_teal">Humidity:</span>
                {data.list[0].main.humidity}%
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherInfo;
