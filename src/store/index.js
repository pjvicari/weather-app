import {createStore} from 'redux';
import {city} from './../Reducers/city'


export const store = createStore(city, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());