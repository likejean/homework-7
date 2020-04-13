import React from 'react';
import { Temperature, Humidity, Clouds } from "./icons/WeatherIcons";

export default props => {
    return (
        <div className='data-display-wrapper'>
            <div className='data-display-row'>
                <h2 className='city-name'>{props.city}</h2>
                <p><Temperature/><span className='data-row'>Temperature: {props.tempF}&#176;F / {props.tempC}&#176;C</span></p>
                <p><Humidity/><span className='data-row'>Relative Humidity: {props.humidity}%</span></p>
                <p><Clouds/><span className='data-row'>Wind Speed: {props.windSpeed} mi/hr</span></p>
            </div>
        </div>
    );
}
