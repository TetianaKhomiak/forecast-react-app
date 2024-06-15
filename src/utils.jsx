export const formatDate = (timezoneOffset) => {
  const offsetMilliseconds = timezoneOffset * 1000;

  const currentDate = new Date(Date.now() + offsetMilliseconds);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const month = monthsOfYear[currentDate.getUTCMonth()];
  const date = currentDate.getUTCDate();
  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  const hours12 = hours % 12 === 0 ? 12 : hours % 12;
  const formattedTime = `${hours12}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${period}`;

  const formattedDate = `${dayOfWeek}, ${month} ${date}`;

  return { formattedDate, formattedTime };
};

export const formattedForecastDate = (date) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = daysOfWeek[new Date(date * 1000).getDay()];

  return `${day}`;
};

export const formatUnixTimestamp = (unixTimestamp, timezoneOffset) => {
  const date = new Date((unixTimestamp + timezoneOffset) * 1000);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutesStr + " " + ampm;
};

export const background = (background) => {
  switch (background) {
    case "01d":
      background = "/images/backgr-01d.jpg";
      break;
    case "01n":
      background = "/images/backgr-01n.jpg";
      break;
    case "02d":
      //background = "/images/backgr-02d.jpg";
      background = "/images/backgr-13n.jpg";
      break;
    case "02n":
      background = "/images/backgr-02n.jpg";
      break;
    case "03d":
      background = "/images/backgr-02d.jpg";
      break;
    case "03n":
      background = "/images/backgr-02n.jpg";
      break;
    case "04d":
      background = "/images/backgr-02d.jpg";
      break;
    case "04n":
      background = "/images/backgr-02n.jpg";
      break;
    case "09d":
      background = "/images/backgr-10d.jpg";
      break;
    case "09n":
      background = "/images/backgr-10d.jpg";
      break;
    case "10d":
      background = "/images/backgr-10d.jpg";
      break;
    case "10n":
      background = "/images/backgr-10d.jpg";
      break;
    case "11d":
      background = "/images/backgr-11d.jpg";
      break;
    case "11n":
      background = "/images/backgr-11d.jpg";
      break;
    case "13d":
      background = "/images/backgr-13d.jpg";
      break;
    case "13n":
      background = "/images/backgr-13n.jpg";
      break;
    case "50d":
      background = "/images/backgr-50d.jpg";
      break;
    case "50n":
      background = "/images/backgr-50d.jpg";
      break;
    default:
      background = "/images/globe.jpg";
  }
  return background;
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
