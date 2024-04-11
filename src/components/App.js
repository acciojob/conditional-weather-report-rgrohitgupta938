import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const DEFAULT_LOCATION = "Rewa";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
