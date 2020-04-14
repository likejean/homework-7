import React from 'react';
import {Temperature, Humidity, Clouds} from "./icons/WeatherIcons";
import LogoCard from "./LogoCard";

///////////////////////////USE WEBPACK///////////////////////////////////////
const importData = async () => require.context("../assets/logos", false, /.*\.jpg$/)
    .keys()
    .map(item => item.substring(1));

importData()
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err));

export default props => {
    return (

        <div className='data-display-wrapper'>
            <div className='data-display-row'>
                <div className='row'>
                    <h2 className='col-10 city-name'>{props.city}</h2>
                    <LogoCard logo={props.logo} city={props.city}/>
                </div>
                <p><Temperature/><span
                    className='data-row'>Temperature: {props.tempF}&#176;F / {props.tempC}&#176;C</span></p>
                <p><Humidity/><span className='data-row'>Relative Humidity: {props.humidity}%</span></p>
                <p><Clouds/><span className='data-row'>Wind Speed: {props.windSpeed} mi/hr</span></p>
            </div>
        </div>
    );
}
