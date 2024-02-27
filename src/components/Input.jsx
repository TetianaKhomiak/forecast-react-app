import React, { useEffect, useState } from "react";
import axios from "axios";

const Input = (props) => {
  const { city, setCity } = props;
  const [weather, setWeather] = useState({});

  const handleSubmitForm = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b1a7614cbc5071710a1d8075fbd15ec0&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      //const data = response.data;
      const { data } = response;
      setWeather(data);
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    handleSubmitForm();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
      <div></div>
    </div>
  );
};

export default Input;
