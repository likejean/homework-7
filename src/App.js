import React, { useState } from 'react';
import CountrySelection from "./componentns/CountrySelection";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

function App() {


    const [ selectCity, setSelectCity ] = useState('');
    const [ weatherData, setWeatherData ] = useState({});
    const cities = ['seattle', 'new york', 'chicago', 'las Vegas', 'oklahoma', 'kansas city'];

    const getData = async city => {

        const apiKey = 'HIyat66xz5Uue87sjXrNN';
        const secret =  '7XWB2MGrpconeIvx34PzubV2NkSHRHrBk7Wy4cLV';
        const response = await fetch(
            `http://api.aerisapi.com/observations/${city},wa?client_id=${apiKey}&client_secret=${secret}`);
            const { response: {ob}} = await response.json();
            console.log(ob);
            await setWeatherData({
                city: city,
                tempF: ob.tempF,
                humidity: ob.humidity,
                windSpeed: ob.windSpeedMPH,
                weather: ob.weather
            });

    }

    const handleSubmit = e => {
        e.preventDefault();
        if(selectCity) getData(selectCity);
    }

    const handleChange = e => {
        console.log('e', e.target.value);
        setSelectCity(e.target.value);
    }

    return (
        <div className="app">
            <div><p>{selectCity}{weatherData.weather}</p></div>
            <CountrySelection
                getData={getData}
                cities={cities}
                city={selectCity}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    );
}

export default App;
