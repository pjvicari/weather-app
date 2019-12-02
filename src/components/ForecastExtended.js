import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import './styles.css';
import transformForecast from './../services/transformForecast';
import WeatherData from './WeatherLocation/WeatherData';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoes',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo',
// ]
// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal',
// }

const api_key = "98d46a7fad1ff0dac34e054de77215f2";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = {forecastData: null}
    }
    componentDidMount() {
        //fetch or axios
        const url_forecast =`${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData})
            }
        )
    }
    renderForecastItemDays() {
        return this.state.forecastData.map(forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>));
    }
    renderProgress() {
        return <h3>Cargando pronostico extendido</h3>;
    }
    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronostico extendido para {city}</h2>
                {forecastData 
                ?this.renderForecastItemDays()
                :this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;