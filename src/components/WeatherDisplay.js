import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { temperature, conditions } = weatherData;

  return (
    <div>
      <h2>
        Current Temperature:{" "}
        <span style={{ color: temperature > 20 ? "red" : "blue" }}>
          {temperature}°C
        </span>
      </h2>
      <h3>Conditions: {conditions}</h3>
    </div>
  );
};

export default WeatherDisplay;
