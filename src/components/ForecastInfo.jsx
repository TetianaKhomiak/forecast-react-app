import React, { useState, useEffect } from "react";
import { formattedForecastDate, icons } from "../utils";

const ForecastInfo = ({ data }) => {
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
          temp: item.main.temp,
          tempMin: minTemps[date],
          tempMax: item.main.temp_max,
        };
      });

      const filteredDates = dates.filter((item, index) => index % 8 === 0);
      setForecastDates(filteredDates);
    }
  }, [data]);

  return (
    <div className="forecast__wrapper">
      {forecastDates.map((date) => (
        <div key={date.date}>
          <p>{formattedForecastDate(date.date)}</p>
          <p>
            <img className="forecast__icon" src={icons(date.icon)} alt="" />{" "}
          </p>
          <div className="forecast__temp">
            <p>{date.tempMin}</p>
            <p>{date.tempMax}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastInfo;
