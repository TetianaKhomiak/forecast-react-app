export const formattedWeatherDate = (date) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[date.getDay()];

  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day} ${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
};

export const formattedForecastDate = (date) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = daysOfWeek[new Date(date * 1000).getDay()];

  return `${day}`;
};

export const icons = (icon) => {
  switch (icon) {
    case "01d":
      icon = "/images/01d.svg";
      break;
    case "01n":
      icon = "/images/01n.svg";
      break;
    case "02d":
      icon = "/images/02d.svg";
      break;
    case "02n":
      icon = "/images/02n.svg";
      break;
    case "03d":
      icon = "/images/03d.svg";
      break;
    case "03n":
      icon = "/images/03n.svg";
      break;
    case "04d":
      icon = "/images/04d.svg";
      break;
    case "04n":
      icon = "/images/04n.svg";
      break;
    case "09d":
      icon = "/images/09d.svg";
      break;
    case "09n":
      icon = "/images/09n.svg";
      break;
    case "10d":
      icon = "/images/10d.svg";
      break;
    case "10n":
      icon = "/images/10n.svg";
      break;
    case "11d":
      icon = "/images/11d.svg";
      break;
    case "11n":
      icon = "/images/11n.svg";
      break;
    case "13d":
      icon = "/images/13d.svg";
      break;
    case "13n":
      icon = "/images/13n.svg";
      break;
    case "50d":
      icon = "/images/50d.svg";
      break;
    case "50n":
      icon = "/images/50n.svg";
      break;
    default:
      icon = "/images/01d.svg";
  }
  return icon;
};

export const capitalizeFirstLetter = (inputString) => {
  return inputString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
