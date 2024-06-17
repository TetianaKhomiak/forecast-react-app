import React, { useContext, useEffect, useState } from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { ErrorContext } from "../context/ErrorProvider.jsx";
import { IsCelsiusContext } from "../context/IsCelsiusProvider.jsx";
import { ResponseContext } from "../context/ResponseProvider.jsx";
import {
  capitalizeFirstLetter,
  formatDate,
  formatUnixTimestamp,
  icons,
} from "../utils.jsx";

const WeatherInfo = () => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const { data } = useContext(ResponseContext);
  const { error } = useContext(ErrorContext);

  useEffect(() => {
    if (data && data.list && data.list.length > 0) {
      const temp = Math.round(data.list[0].main.temp);
      setCelsius(temp);
      setFahrenheit(Math.round((9 / 5) * temp + 32));
    }
  }, [data]);

  if (error) {
    document.body.style.backgroundColor = "#EFF5FE";
    document.body.style.backgroundSize = "cover";
  }
  if (!data || !data.city || !data.list || data.list.length === 0) {
    return null;
  }

  const { formattedDate, formattedTime } = formatDate(data.city.timezone);

  const handleFahrenheit = () => {
    setIsCelsius(false);
    setFahrenheit(Math.round((9 / 5) * data.list[0].main.temp + 32));
  };

  const handleCelsius = () => {
    setIsCelsius(true);
    setCelsius(Math.round(data.list[0].main.temp));
  };

  return (
    <div className="weather-info">
      {error ? (
        <div>
          <p className="weather-info__error">City not found</p>
        </div>
      ) : (
        data &&
        data.list &&
        data.list.length > 0 && (
          <>
            <div className="weather-info__suntime">
              <p className="weather-info__sunrise">
                <FiSunrise className="weather__sunrise" />
                {formatUnixTimestamp(data.city.sunrise, data.city.timezone)}
              </p>
              <p className="weather-info__sunset">
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
                    {isCelsius ? celsius : fahrenheit}
                    <button onClick={handleCelsius} className="btn__celsius">
                      °C
                    </button>
                    |
                    <button
                      onClick={handleFahrenheit}
                      className="btn__fahrenheit">
                      °F
                    </button>
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
