"use client"
import React, { useState } from 'react';
import WeatherForm from '../components/weatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import { fetchWeatherData } from './pages/api/weather'; // Adjust the import path

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationSubmit = async (location) => {
    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
    } catch (error) {
      // Handle errors if necessary
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <h5>Check the Weather Conditions of your desired location</h5>
      <WeatherForm onLocationSubmit={handleLocationSubmit} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default WeatherApp;
