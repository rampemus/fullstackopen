import React, { useState, useEffect } from 'react'
import axios from 'axios'

//source: https://www.jacklmoore.com/notes/rounding-in-javascript/
const round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

const Weather = (props) => {

    const [weather, setWeather] = useState()

    useEffect(() => {
        axios
            .get('http://api.apixu.com/v1/current.json?key=b9405c4881184af4829113200192706&q=' + props.location)
            .then(response => {
                // console.log(response.data)
                setWeather(response.data)
            })
    },[props.location])

    if ( weather === undefined) {
        return <div><h3>Weather is loading</h3></div>
    }

    return <div>
        <h3>Weather in {weather.location.name}</h3>
        <p><strong>temperature</strong> {weather.current.temp_c}&#8451;</p>
        <img src={weather.current.condition.icon} alt='weather icon'></img>
        <p><strong>wind</strong> {round(weather.current.wind_kph/3.6,1)} m/s from {weather.current.wind_dir}</p>
    </div>
}

export default Weather
