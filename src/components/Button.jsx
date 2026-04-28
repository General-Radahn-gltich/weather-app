import React from "react";
import { useWeather } from "../Context/Weather";

const Button = ({ value }) => {
  const weather = useWeather();

  const handleClick = () => {
    console.log("Clicked:", value);

    if (value === "Refresh") {
      console.log("Refresh button clicked");
      weather.fetchCurrentUserLocationData();
    } else {
      weather.fetchData();
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;