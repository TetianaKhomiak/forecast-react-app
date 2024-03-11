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
      icon = "public/images/01d.svg";
      break;
    case "01n":
      icon = "public/images/01n.svg";
      break;
    case "02d":
      icon = "public/images/02d.svg";
      break;
    case "02n":
      icon = "public/images/02n.svg";
      break;
    case "03d":
      icon = "public/images/03d.svg";
      break;
    case "03n":
      icon = "public/images/03n.svg";
      break;
    case "04d":
      icon = "public/images/04d.svg";
      break;
    case "04n":
      icon = "public/images/04n.svg";
      break;
    case "09d":
      icon = "public/images/09d.svg";
      break;
    case "09n":
      icon = "public/images/09n.svg";
      break;
    case "10d":
      icon = "public/images/10d.svg";
      break;
    case "10n":
      icon = "public/images/10n.svg";
      break;
    case "11d":
      icon = "public/images/11d.svg";
      break;
    case "11n":
      icon = "public/images/11n.svg";
      break;
    case "13d":
      icon = "public/images/13d.svg";
      break;
    case "13n":
      icon = "public/images/13n.svg";
      break;
    case "50d":
      icon = "public/images/50d.svg";
      break;
    case "50n":
      icon = "public/images/50n.svg";
      break;
    default:
      icon = "public/images/01d.svg";
  }
  return icon;
};

export const capitalizeFirstLetter = (inputString) => {
  return inputString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
