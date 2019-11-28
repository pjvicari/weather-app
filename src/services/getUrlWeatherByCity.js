import {url_base_weather, api_key} from './api_url';
const getUrlWeatherByCity = city => {
    console.log(city);
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;