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

export const Icons = (icon) => {
  switch (icon) {
    case "01d":
      icon = "/public/icons/01d.svg";
      break;
    case "01n":
      icon = "icons/01n.svg";
      break;
    case "02d":
      icon = "/public/icons/02d.svg";
      break;
    case "02n":
      icon = "/public/icons/02n.svg";
      break;
    case "03d":
      icon = "/public/icons/03d.svg";
      break;
    case "03n":
      icon = "/public/icons/03n.svg";
      break;
    case "04d":
      icon = "/public/icons/04d.svg";
      break;
    case "04n":
      icon = "/public/icons/04n.svg";
      break;
    case "09d":
      icon = "/public/icons/09d.svg";
      break;
    case "09n":
      icon = "/public/icons/09n.svg";
      break;
    case "10d":
      icon = "/public/icons/10d.svg";
      break;
    case "10n":
      icon = "/public/icons/10n.svg";
      break;
    case "11d":
      icon = "/public/icons/11d.svg";
      break;
    case "11n":
      icon = "/public/icons/11n.svg";
      break;
    case "13d":
      icon = "/public/icons/13d.svg";
      break;
    case "13n":
      icon = "/public/icons/13n.svg";
      break;
    case "50d":
      icon = "/public/icons/50d.svg";
      break;
    case "50n":
      icon = "/public/icons/50n.svg";
      break;
    default:
      icon = "/public/icons/01d.svg";
  }
  return icon;
};
