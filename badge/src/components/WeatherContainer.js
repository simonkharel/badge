import { WeatherAPI } from "../api/Weather";
import WeatherCard from "./WeatherCard";
import classes from "./WeatherContainer.module.css";
import PictureCard from "./PictureCard";
import Simon from "../assets/Simon.jpg";
import { useState, useEffect } from "react";

function WeatherContainer() {
  const [weatherObject, setWeatherObject] = useState([]); // Initialize weather object

  useEffect(() => {
    return getWeather(75006, "imperial"); // Get weather data on render
  }, []);

  function getWeather(zip, unit) {
    WeatherAPI.getWeather(zip, unit) // Calling weather api and setting weather object to the fields below
      .then(function (response) {
        let update = {};
        update = [
          {
            id: response.data.weather[0].id,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            temp: response.data.main.temp,
            feels_like: response.data.main.feels_like,
            imageSrc: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          },
        ];

        setWeatherObject(update);
      })
      .catch(function (error) {
        if (error.response) {
          alert("Request fell out of 200 range");
        } else if (error.request) {
          alert("No response was received");
        } else {
          alert("Error");
        }
      });
  }
  return (
    <div className={classes.center}>
      <div>
        <PictureCard
          iconImage={Simon}
          text="Welcom to my React App!"
        ></PictureCard>
      </div>
      <div className={classes.left}></div>

      {weatherObject.map((weatherItem, index) => {
        return (
          <div>
            <WeatherCard
              key={index}
              iconImage={weatherItem.imageSrc}
              city="Dallas"
              des={weatherItem.description}
              feels={weatherItem.feels_like}
              temperature={weatherItem.temp}
            ></WeatherCard>
          </div>
        );
      })}
    </div>
  );
}

export default WeatherContainer;
