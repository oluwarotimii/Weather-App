

  // weatherApi.js
export async function fetchWeatherData(location) {
    try {
      const apiKey = 'f738f4f71aebad731e49a4220203338f'; // Replace with your OpenWeatherMap API key
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      return await response.json();
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
  
  