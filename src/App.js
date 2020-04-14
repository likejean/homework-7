import React, {useState} from 'react';
import CountrySelection from "./componentns/CountrySelection";
import WeatherData from "./componentns/WeatherData";
import EmptyObject from "./helpers/EmptyObject";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

function App() {


    const [selectCity, setSelectCity] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const cities = [
        {city: 'Seattle', logo: '/homework-7/static/media/seattle_logo.f1cb8c16.jpg'},
        {city: 'New York', logo: '../src/assets/logos/new_york_logo.jpg'},
        {city: 'Chicago', logo: '/homework-7/static/media/chicago_logo.c88eb01a.jpg'},
        {city: 'Dallas', logo: '/homework-7/static/media/dallas_logo.f2665349.jpg'},
        {city: 'Miami', logo: '/homework-7/static/media/miami_logo.69c3f098.jpg'},
        {city: 'Phoenix', logo: '/homework-7/static/media/phoenix_logo.b9cd68bb.jpg'},
        {city: 'Oklahoma', logo: '/homework-7/static/media/oklahoma_logo.c7b3e852.jpg'},
        {city: 'Portland', logo: '/homework-7/static/media/portland_logo.d9c61fce.jpg'}
    ];

    const getData = async (city, logo) => {

        const apiKey = 'HIyat66xz5Uue87sjXrNN';
        const secret = '7XWB2MGrpconeIvx34PzubV2NkSHRHrBk7Wy4cLV';
        const response = await fetch(
            `https://api.aerisapi.com/observations/${city},wa?client_id=${apiKey}&client_secret=${secret}`);
        const {response: {ob}} = await response.json();
        await setWeatherData({
            city: city,
            logo: logo,
            tempF: ob.tempF,
            tempC: ob.tempC,
            humidity: ob.humidity,
            windSpeed: ob.windSpeedMPH,
            weather: ob.weather
        });

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (selectCity) getData(selectCity, cities.find(item => item.city === selectCity).logo);
    }

    const handleChange = e => setSelectCity(e.target.value);

    return (
        <div className="app">
            <CountrySelection
                getData={getData}
                cities={cities}
                city={selectCity}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            {!EmptyObject(weatherData) && <WeatherData {...weatherData}/>}
        </div>
    );
}

export default App;
