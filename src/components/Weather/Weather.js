import React, {useEffect, useState} from 'react';
import axios from "axios";
import Container from '../common/Container';
import Splash from '../common/Splash';


const Weather = () => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getWeather = async () => {
            try {
                const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip=02780,us&appid=11b6f4570321083e0d6d4f0cff727418");
                console.log(res.data);
                setLoading(false);
                setWeather(res.data);
            } catch (err) {
             console.error(err.message);
            }
        };
        getWeather();

    }, []);

    const displayWeather = () => {
        return (
            <div>{weather.main.temp.imperial}</div>
        )
    }

    return (
        <div style={{ width: "100%", justifyContent: "center" }}>
          {loading ? <p>Loading...</p> : displayWeather()}
        </div>
    );
}

export default Weather