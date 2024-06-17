import axios from "axios";

const useFetchWeather = (setData, setError, setCity) => {
  const apiBaseUrl = "https://api.openweathermap.org/data/2.5/forecast";
  const apiKey = "b1a7614cbc5071710a1d8075fbd15ec0";
  const units = "metric";

  const fetchWeather = async (url) => {
    try {
      const response = await axios.get(url);
      const { data } = response;

      if (data.cod >= 400) {
        throw new Error("Failed to load resource");
      }

      setData(data);
      setCity("");
      setError(false);
    } catch (e) {
      console.error(e.message);
      setError(true);
      setCity("");
      document.body.style.backgroundImage = "none";
    }
  };

  const fetchWeatherByCity = (city) => {
    if (city) {
      const url = `${apiBaseUrl}?q=${city}&appid=${apiKey}&units=${units}`;
      fetchWeather(url);
    } else {
      setError(true);
    }
  };

  const fetchWeatherByLocation = async () => {
    try {
      const position = await getCurrentPosition();
      if (position) {
        const { latitude, longitude } = position.coords;
        const url = `${apiBaseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
        fetchWeather(url);
      }
    } catch (e) {
      console.error(e.message);
      setError(true);
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

  return { fetchWeatherByCity, fetchWeatherByLocation };
};

export default useFetchWeather;
