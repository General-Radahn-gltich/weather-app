import React from "react";
import { useWeather } from "../Context/Weather";

const Card = () => {
  const weather = useWeather();

  const current = weather?.data?.current;
  const location = weather?.data?.location;

  return (
    <div className="card">
      {current?.condition?.icon && (
        <img
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
        />
      )}

      <h2>{current ? `${current.temp_c}°C` : "-- °C"}</h2>

      <h5>
        {location
          ? `${location.name}, ${location.region}, ${location.country}`
          : "Search for a city"}
      </h5>
    </div>
  );
};

export default Card;