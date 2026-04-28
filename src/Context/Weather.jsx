import { createContext, useState, useContext } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    console.log("API Response:", response);
    setData(response);
  };

const fetchCurrentUserLocationData = () => {
  console.log("Location function called");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);

      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => {
        console.log("Location API Response:", data);
        setData(data);
      });
    },
    (error) => {
      console.log("Location error:", error);
    }
  );
};
  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};