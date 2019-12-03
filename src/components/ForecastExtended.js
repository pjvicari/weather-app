import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import './styles.css';
import transformForecast from './../services/transformForecast';


const api_key = "98d46a7fad1ff0dac34e054de77215f2";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = {forecastData: null}
    }
    componentDidMount() {
        //fetch or axios
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }
    updateCity = city =>{
        const url_forecast =`${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
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