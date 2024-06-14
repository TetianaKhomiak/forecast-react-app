import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../context/CityProvider.jsx";
import ForecastInfo from "./ForecastInfo.jsx";
import WeatherInfo from "./WeatherInfo.jsx";
import { ResponseContext } from "../context/ResponseProvider.jsx";
import { BiSearch } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";

const Form = () => {
  const { city, setCity } = useContext(CityContext);
  const { data, setData } = useContext(ResponseContext);
  const [error, setError] = useState(false);

  const handleSubmitForm = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;
      if (city) {
        apiUrl += `?q=${city}&appid=b1a7614cbc5071710a1d8075fbd15ec0&units=metric`;
      } else {
        const position = await getCurrentPosition();
        if (position) {
          const { latitude, longitude } = position.coords;
          apiUrl += `?lat=${latitude}&lon=${longitude}&appid=b1a7614cbc5071710a1d8075fbd15ec0&units=metric`;
        } else {
          throw new Error("Failed to get current location");
        }
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

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  };

  useEffect(() => {
    handleSubmitForm();
  }, []);

  return (
    <div className="weather__wrapper">
      <form className="weather__form" onSubmit={handleSubmitForm}>
        <input
          className="weather__input"
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="weather__buttons">
          <button type="submit">
            <BiSearch className="weather__search" />
          </button>
          <button type="submit">
            <TbCurrentLocation className="weather__loaction" />
          </button>
        </div>
      </form>
      <WeatherInfo data={data} error={error} />
      <ForecastInfo data={data} error={error} />
    </div>
  );
};

export default Form;

// //https://www.youtube.com/watch?v=SAE_TN2mD3Q
