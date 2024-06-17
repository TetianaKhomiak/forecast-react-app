import React, { useContext, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";
import { CityContext } from "../context/CityProvider.jsx";
import { ErrorContext } from "../context/ErrorProvider.jsx";
import { ResponseContext } from "../context/ResponseProvider.jsx";
import useFetchWeather from "./useFetchWeather.jsx";

const Form = () => {
  const { city, setCity } = useContext(CityContext);
  const { setData } = useContext(ResponseContext);
  const { setError } = useContext(ErrorContext);

  const { fetchWeatherByCity, fetchWeatherByLocation } = useFetchWeather(
    setData,
    setError,
    setCity
  );

  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetchWeatherByCity(city);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    fetchWeatherByLocation();
  };

  useEffect(() => {
    fetchWeatherByCity(city);
  }, []);

  useEffect(() => {
    fetchWeatherByLocation();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Form;
