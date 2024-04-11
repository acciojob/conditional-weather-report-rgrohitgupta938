import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { temperature, conditions } = weatherData;

  return (
    <div>
      <p>
        Temperature:{" "}
        <span style={{ color: temperature > 20 ? "red" : "blue" }}>
          {temperature}
        </span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
