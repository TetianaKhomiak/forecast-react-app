import React from "react";
import { capitalizeFirstLetter, formatDate, icons } from "../utils.jsx";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { formatUnixTimestamp } from "../utils.jsx";

const WeatherInfo = ({ data, error }) => {
  if (error) {
    document.body.style.backgroundColor = "#EFF5FE";
  }
  if (!data || !data.city || !data.list || data.list.length === 0) {
    return null; // Or you can render a loading state or error message
  }

  const { formattedDate, formattedTime } = formatDate(data.city.timezone);

  return (
    <div className="weather-info">
      {error ? (
        <div>
          <p className="weather-info__error">City not found</p>
          <div className="error-icon__wrapper">
            <img
              className="weather-info__error-icon"
              src={"/images/globe.jpg"}
              alt="globe"
            />
          </div>
        </div>
      ) : (
        data &&
        data.list &&
        data.list.length > 0 && (
          <>
            <div className="weather-info__suntime">
              <p className="weather-info__suntime weather-info__suntime_flex">
                <FiSunrise className="weather__sunrise" />
                {formatUnixTimestamp(data.city.sunrise, data.city.timezone)}
              </p>
              <p className="weather-info__suntime weather-info__suntime_flex">
                <FiSunset className="weather__sunset" />
                {formatUnixTimestamp(data.city.sunset, data.city.timezone)}
              </p>
            </div>
            <div className="weather-info__wrapper">
              <div className="weather-info__data weather-info__data_center">
                <p className="weather-info__city">{data.city.name}</p>
                <p className="weather-info__text">{formattedDate}</p>
                <p className="weather-info__text">{formattedTime}</p>
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
                    {Math.round(data.list[0].main.temp)}°C | °F
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
          </>
        )
      )}
    </div>
  );
};

export default WeatherInfo;
