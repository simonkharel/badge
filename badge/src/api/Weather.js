import axios from "axios";

// API layer for weather API
const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const WeatherAPI = {
  getWeather: function (zip, unit) {
    return axiosInstance.request({
      method: "GET",
      url: "/weather",
      params: {
        zip: zip,
        appid: "aae1b06a3452b84a24b6db99b922ffb7",
        units: unit,
      },
    });
  },
};
