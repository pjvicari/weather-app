import Convert from 'convert-units';
import {
    SUN,
    CLOUDY,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constants/weathers';


const getWeatherState = weather => {
    const {id} = weather;
        if (id < 300){
            return THUNDER;
        }else if(id < 400){
            return DRIZZLE;
        }else if(id < 600){
            return RAIN;
        }else if(id < 700){
            return SNOW;
        }else if(id <= 800){
            return SUN;
        }else if(id < 900)
            return CLOUDY;
    
    
}

const transformWeather = weather_data => {
    const {humidity,temp} = weather_data.main;
    const {speed} = weather_data.wind;
    // const {name} = weather_data;
    // const {main} = weather_data.weather;
    const weatherState = getWeatherState(weather_data.weather[0]);

    const data = {
        humidity,
        temperature: Convert(temp).from("K").to("C").toFixed(0),
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;