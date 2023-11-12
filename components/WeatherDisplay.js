import React from 'react';

function WeatherDisplay({ weatherData}) {
    if (!weatherData) {
        return (<div> NO Weather data Available</div>);
    }

    const {main, weather, name} = weatherData;


        return(
            <div>
                {weatherData && (
                    <div>
                    <h2>Weather in {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}</p>
                    <p> Humidity {weatherData.main.humidity}</p>
                    <p> Condition {weatherData.weather[0].description}</p>
                </div>
                )}
            </div>
        )
}
export default WeatherDisplay;