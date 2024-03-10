import React, { useEffect, useState } from "react";
import { formattedForecastDate, icons } from "../utils";

const ForecastInfo = ({ data, error }) => {
  const [forecastDates, setForecastDates] = useState([]);

  useEffect(() => {
    if (data && data.list) {
      const minTemps = {};
      const dates = data.list.map((item) => {
        const date = item.dt_txt.split(" ")[2];
        const temp = item.main.temp;

        if (!(date in minTemps) || temp < minTemps[date]) {
          minTemps[date] = temp;
        }

        return {
          date: item.dt,
          icon: item.weather[0].icon,
          tempMin: minTemps[date],
          tempMax: item.main.temp_max,
          descr: item.weather[0].description,
        };
      });

      const filteredDates = dates.filter((item, index) => index % 8 === 0);
      setForecastDates(filteredDates);
    }
  }, [data]);

  return (
    <div className="forecast__wrapper">
      {!error &&
        forecastDates.map((date) => (
          <div className="forecast__item" key={date.date}>
            <p className="forecast__date">{formattedForecastDate(date.date)}</p>
            <p>
              <img
                className="forecast__icon"
                src={icons(date.icon)}
                alt={date.descr}
              />
            </p>
            <div className="forecast__temp">
              <p>{parseInt(date.tempMin)}°C</p>
              <p>{parseInt(date.tempMax)}°C</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ForecastInfo;
