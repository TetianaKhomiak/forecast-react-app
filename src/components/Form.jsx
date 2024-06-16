import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";
import { CityContext } from "../context/CityProvider.jsx";
import { ResponseContext } from "../context/ResponseProvider.jsx";
import ForecastInfo from "./ForecastInfo.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

const Form = () => {
  const { city, setCity } = useContext(CityContext);
  const { data, setData } = useContext(ResponseContext);
  const [error, setError] = useState(false);

  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;

  if (error) {
    document.body.style.backgroundImage = "url(images/globe.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }

  const handleSubmitForm = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      if (city) {
        setError(false);
        apiUrl += `?q=${city}&appid=b1a7614cbc5071710a1d8075fbd15ec0&units=metric`;
      } else {
        setError(true);
        throw new Error("Failed to get current location");
      }

      const response = await axios.get(apiUrl);
      const { data } = response;

      if (data.cod >= 400) {
        throw new Error("Failed to load resource");
      }

      console.log(data);
      setError(false);
      setData(data);
      setCity("");
    } catch (e) {
      console.log("Error data", e.response.data);
      setError(true);
      setCity("");
      document.body.style.backgroundImage = "none";
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  };

  const handleLocationSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const position = await getCurrentPosition();
      if (position) {
        const { latitude, longitude } = position.coords;
        apiUrl += `?lat=${latitude}&lon=${longitude}&appid=b1a7614cbc5071710a1d8075fbd15ec0&units=metric`;
      }
      const response = await axios.get(apiUrl);
      const { data } = response;

      if (data.cod >= 400) {
        throw new Error("Failed to load resource");
      }

      console.log(data);
      setError(false);
      setData(data);
      setCity("");
    } catch (e) {
      console.log(e.message);
      setError(true);
      setCity("");
      document.body.style.backgroundImage = "none";
    }
  };

  useEffect(() => {
    handleSubmitForm();
  }, []);

  useEffect(() => {
    handleLocationSubmit();
  }, []);

  return (
    <div className="weather__wrapper">
      <div className="weather__wrapper_flex">
        <form className="weather__form" onSubmit={handleSubmitForm}>
          <input
            className="weather__input"
            type="text"
            placeholder="Enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="weather__button">
            <BiSearch className="weather__search" />
          </button>
        </form>
        <div className="button__container">
          <button
            onClick={handleLocationSubmit}
            type="button"
            className="weather__button">
            <TbCurrentLocation className="weather__loaction" />
          </button>
        </div>
      </div>

      <WeatherInfo data={data} error={error} />
      <ForecastInfo data={data} error={error} />
    </div>
  );
};

export default Form;
