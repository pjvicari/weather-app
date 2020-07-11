import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';


const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const strComponents = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                key={city.key} 
                city={city.name}
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                data={city.data}
                />))
    );
    return (
        <div className='locationList'>
            {strComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;