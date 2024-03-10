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
            <div className="weather-info__data weather-info__data_center">
              <p className="weather-info__city">{data.city.name}</p>
              <p className="weather-info__text">{date}</p>
              <p className="weather-info__descr">
                {capitalizeFirstLetter(data.list[0].weather[0].description)}
              </p>
            </div>
            <div className="weather-info__icon">
              <img
                className="weather-info__icon"
                src={icons(data.list[0].weather[0].icon)}
                alt={data.list[0].weather[0].description}
              />
            </div>
            <div className="weather-info__data">
              <p className="weather-info__text">
                <span className="weather-info__name">Temperature:</span>
                <span className="weather-info__text_bold">
                  {Math.round(data.list[0].main.temp)}°C
                </span>
              </p>
              <p className="weather-info__text">
                <span className="weather-info__name"> Wind:</span>
                <span className="weather-info__text_bold">
                  {Math.round(data.list[0].wind.speed)} km/h
                </span>
              </p>
              <p className="weather-info__text">
                <span className="weather-info__name"> Humidity:</span>
                <span className="weather-info__text_bold">
                  {data.list[0].main.humidity}%
                </span>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherInfo;
