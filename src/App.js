import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {Paper,AppBar,Typography,Toolbar} from '@material-ui/core';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const cities = [
  'Quetzaltenango,gt',
  'San Marcos,gt',
  'Guatemala City,gt'
];


class App extends Component {
  constructor(){
    super();
    this.state = {city: null}
  }

  handleSelectionLocation = city => {
    this.setState({city});
    console.log(`handleSelectionLocation ${city}`);
    this.props.setCity(city);
  }
  render() {
    const {city} = this.state;
    return (
      <Grid fluid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          {/* <WheatherLocation city="San Marcos,gt"></WheatherLocation> */}
          <LocationList cities={cities} 
          onSelectedLocation={this.handleSelectionLocation }></LocationList>
        </Col>
        <Col xs={12} md={6}>
        <Paper elevation={10}>
          <div className="details">
          {!city
          ?null
          :<ForecastExtended city={this.state.city}></ForecastExtended>
          }
          </div>
        </Paper>
        </Col>
      </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

// const mapStateToProps = (state) => ({
//   sample: state.sample
// });
const AppConnected = connect(null,mapDispatchToPropsActions)(App);

export default AppConnected;