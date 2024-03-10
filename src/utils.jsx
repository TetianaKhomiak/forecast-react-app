export const formatedWeatherDate = (date) => {
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

export const icons = (icon) => {
  switch (icon) {
    case "01d":
      icon = "/icons/01d.svg";
      break;
    case "01n":
      icon = "icons/01n.svg";
      break;
    case "02d":
      icon = "/icons/02d.svg";
      break;
    case "02n":
      icon = "/icons/02n.svg";
      break;
    case "03d":
      icon = "/icons/03d.svg";
      break;
    case "03n":
      icon = "/icons/03n.svg";
      break;
    case "04d":
      icon = "/icons/04d.svg";
      break;
    case "04n":
      icon = "/icons/04n.svg";
      break;
    case "09d":
      icon = "/icons/09d.svg";
      break;
    case "09n":
      icon = "/icons/09n.svg";
      break;
    case "10d":
      icon = "/icons/10d.svg";
      break;
    case "10n":
      icon = "/icons/10n.svg";
      break;
    case "11d":
      icon = "/icons/11d.svg";
      break;
    case "11n":
      icon = "/icons/11n.svg";
      break;
    case "13d":
      icon = "/icons/13d.svg";
      break;
    case "13n":
      icon = "/icons/13n.svg";
      break;
    case "50d":
      icon = "/icons/50d.svg";
      break;
    case "50n":
      icon = "/icons/50n.svg";
      break;
    default:
      icon = "/icons/01d.svg";
  }
  return icon;
};

export const capitalizeFirstLetter = (inputString) => {
  return inputString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
